/**
 * Abre uma URL externa de forma segura
 * Previne vulnerabilidade de tabnabbing
 */
export function openExternalUrl(url: string) {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) {
    newWindow.opener = null;
  }
}

