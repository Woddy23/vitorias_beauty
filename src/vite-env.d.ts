/// <reference types="vite/client" />

// Declaração para assets do Figma
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

