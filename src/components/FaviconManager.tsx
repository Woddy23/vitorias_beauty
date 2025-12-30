import { useEffect } from 'react';

/**
 * Componente que garante que o favicon seja mantido no DOM
 * Resolve o problema do favicon desaparecer após alguns segundos
 * Funciona com HashRouter usando caminhos absolutos
 */
export function FaviconManager() {
  useEffect(() => {
    // Função para obter o caminho base correto (funciona com HashRouter)
    const getBasePath = () => {
      // Para HashRouter, o caminho base é sempre a raiz
      return window.location.origin;
    };

    const ensureFavicon = () => {
      const faviconPath = `${getBasePath()}/favicon.png`;
      
      // Verificar se o favicon existe
      let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      let shortcutIcon = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement;
      
      // Se não existe, criar
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        favicon.href = faviconPath;
        favicon.id = 'favicon';
        document.head.insertBefore(favicon, document.head.firstChild);
      } else {
        // Sempre atualizar o href para garantir que está correto
        const currentHref = favicon.href;
        const expectedHref = faviconPath;
        // Verificar se o href está correto (ignorar query strings)
        if (!currentHref.replace(/\?.*$/, '').endsWith('/favicon.png')) {
          // Forçar recarregamento com timestamp
          favicon.href = faviconPath + '?v=' + Date.now();
          setTimeout(() => {
            if (favicon) {
              favicon.href = faviconPath;
            }
          }, 100);
        }
      }
      
      // Garantir shortcut icon também existe
      if (!shortcutIcon) {
        shortcutIcon = document.createElement('link');
        shortcutIcon.rel = 'shortcut icon';
        shortcutIcon.type = 'image/png';
        shortcutIcon.href = faviconPath;
        document.head.insertBefore(shortcutIcon, document.head.firstChild);
      } else {
        const currentHref = shortcutIcon.href;
        if (!currentHref.replace(/\?.*$/, '').endsWith('/favicon.png')) {
          shortcutIcon.href = faviconPath;
        }
      }
    };

    // Executar imediatamente
    ensureFavicon();

    // Re-verificar periodicamente (a cada 1 segundo)
    const interval = setInterval(ensureFavicon, 1000);

    // Re-verificar após mudanças de hash (HashRouter)
    const handleHashChange = () => {
      setTimeout(ensureFavicon, 50);
    };
    window.addEventListener('hashchange', handleHashChange);

    // Re-verificar quando a página ganha foco
    const handleFocus = () => {
      ensureFavicon();
    };
    window.addEventListener('focus', handleFocus);

    // Observer para detectar mudanças no DOM (caso algo remova o favicon)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const removedNodes = Array.from(mutation.removedNodes);
          const faviconRemoved = removedNodes.some((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const el = node as HTMLElement;
              return el.tagName === 'LINK' && 
                     (el.getAttribute('rel') === 'icon' || el.getAttribute('rel') === 'shortcut icon');
            }
            return false;
          });
          
          if (faviconRemoved) {
            setTimeout(ensureFavicon, 100);
          }
        }
      });
    });

    observer.observe(document.head, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('focus', handleFocus);
      observer.disconnect();
    };
  }, []);

  return null;
}

