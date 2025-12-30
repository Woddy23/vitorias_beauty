import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export function SEO({
  title = "Vitorias Beauty – Salão de Beleza em Lisboa | Cabeleireiro e Estética",
  description = "Salão de beleza em Lisboa desde 2014. Serviços de cabeleireiro, estética, maquilhagem e manicure. Três localizações: Parque das Nações, Portela LRS e Saldanha.",
  keywords = "salão de beleza Lisboa, cabeleireiro Lisboa, estética Lisboa, maquilhagem Lisboa, manicure Lisboa, Vitorias Beauty",
  image = "https://vitoriasbeauty.pt/og-image.jpg",
  url = "https://vitoriasbeauty.pt",
  type = "website",
  noindex = false
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Helper function to update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Robots meta
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    
    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    
    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url, type, noindex]);

  return null;
}

