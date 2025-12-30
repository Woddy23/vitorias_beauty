import React from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-expect-error - Vite resolves this import via alias in vite.config.ts
import logoImage from 'figma:asset/51fd73e2d92324fded4f3834fe80e72d6131ba18.png';
import { cn } from './ui/utils';

interface LogoProps {
  /**
   * Tamanho do logotipo
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Se o logotipo deve ser clicável para navegar para home
   * @default true
   */
  clickable?: boolean;
  
  /**
   * Classes CSS adicionais
   */
  className?: string;
  
  /**
   * Se deve mostrar animação de hover
   * @default true
   */
  animated?: boolean;
  
  /**
   * Seção para scroll ao clicar (apenas se clickable for true)
   */
  scrollToSection?: string;
}

const sizeClasses = {
  sm: 'h-10 md:h-12',
  md: 'h-14 md:h-16',
  lg: 'h-20 md:h-24',
  xl: 'h-28 md:h-32',
};

export function Logo({ 
  size = 'md', 
  clickable = true, 
  className,
  animated = true,
  scrollToSection
}: LogoProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!clickable) return;
    
    if (scrollToSection) {
      // Se estamos na home, scroll para a seção
      if (window.location.pathname === '/') {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Se estamos em outra página, navegar para home e depois scroll
        navigate('/' + (scrollToSection ? `#${scrollToSection}` : ''));
        setTimeout(() => {
          const element = document.getElementById(scrollToSection);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Navegar para home
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <img
        src={logoImage}
        alt="Vitorias Beauty - Cabeleireiro e Estética"
        className={cn(
          'w-auto transition-all duration-300',
          sizeClasses[size],
          clickable && 'cursor-pointer',
          animated && clickable && 'hover:scale-105 hover:brightness-110',
          animated && 'hover:drop-shadow-lg'
        )}
        onClick={handleClick}
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}

