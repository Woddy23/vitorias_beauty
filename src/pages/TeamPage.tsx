import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Users, Scissors, Sparkles, HandHeart, Palette } from 'lucide-react';
import { useEffect } from 'react';
import { SEO } from '../components/SEO';

export function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const teamCategories = [
    {
      title: 'Receção',
      icon: Users,
      color: 'pink',
      members: [
        {
          name: 'Carla Cardoso',
          role: 'Recepcionista',
          image: 'https://images.unsplash.com/photo-1758193017781-e3aee6c3e359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWNlcHRpb25pc3R8ZW58MXx8fHwxNzYxNDMwNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Lina Hassanali',
          role: 'Recepcionista',
          image: 'https://images.unsplash.com/photo-1758193017781-e3aee6c3e359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWNlcHRpb25pc3R8ZW58MXx8fHwxNzYxNDMwNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Patrícia Canilho',
          role: 'Recepcionista',
          image: 'https://images.unsplash.com/photo-1758193017781-e3aee6c3e359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWNlcHRpb25pc3R8ZW58MXx8fHwxNzYxNDMwNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        }
      ]
    },
    {
      title: 'Cabeleireiro',
      icon: Scissors,
      color: 'cyan',
      members: [
        {
          name: 'Andreia Paiva',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Catarina Videira',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Antónia Costa',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Neuza Almeida',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Carla Silva',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Sandra Dias',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Daniel Galvão',
          role: 'Cabeleireiro',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Maria José',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Cleuber Duarte',
          role: 'Cabeleireiro',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Eurico Santos',
          role: 'Cabeleireiro',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Jhony Santos',
          role: 'Cabeleireiro',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Elisangela Mendes',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Paula Solda',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Rosa Trindade',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Anne',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Ana Rodrigues',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Diego Vale',
          role: 'Cabeleireiro',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Ana Calvinho',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Marina Froés',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Emerson',
          role: 'Cabeleireiro',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Gabriel',
          role: 'Cabeleireiro',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Leila',
          role: 'Cabeleireira',
          image: 'https://images.unsplash.com/photo-1624981015149-e01395f1d774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEzNDM0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        }
      ]
    },
    {
      title: 'Estética',
      icon: Sparkles,
      color: 'pink',
      members: [
        {
          name: 'Vera Monteiro',
          role: 'Esteticista',
          image: 'https://images.unsplash.com/photo-1703449481095-bb99a6928f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0aGVyYXBpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxNDMwNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Ana Monteiro',
          role: 'Esteticista',
          image: 'https://images.unsplash.com/photo-1703449481095-bb99a6928f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0aGVyYXBpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxNDMwNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Claudia Teixeira',
          role: 'Esteticista',
          image: 'https://images.unsplash.com/photo-1703449481095-bb99a6928f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0aGVyYXBpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxNDMwNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Maria Oliveira',
          role: 'Esteticista',
          image: 'https://images.unsplash.com/photo-1703449481095-bb99a6928f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0aGVyYXBpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxNDMwNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Catarina Rebelo',
          role: 'Esteticista',
          image: 'https://images.unsplash.com/photo-1703449481095-bb99a6928f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0aGVyYXBpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxNDMwNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        }
      ]
    },
    {
      title: 'Manicure & Pedicure',
      icon: HandHeart,
      color: 'cyan',
      members: [
        {
          name: 'Ana Morais',
          role: 'Técnica de Unhas',
          image: 'https://images.unsplash.com/photo-1731644139982-b75487df663e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwdGVjaG5pY2lhbiUyMG1hbmljdXJpc3R8ZW58MXx8fHwxNzYxNDMwNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Marieta',
          role: 'Técnica de Unhas',
          image: 'https://images.unsplash.com/photo-1731644139982-b75487df663e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwdGVjaG5pY2lhbiUyMG1hbmljdXJpc3R8ZW58MXx8fHwxNzYxNDMwNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          name: 'Yolanda Martins',
          role: 'Técnica de Unhas',
          image: 'https://images.unsplash.com/photo-1731644139982-b75487df663e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwdGVjaG5pY2lhbiUyMG1hbmljdXJpc3R8ZW58MXx8fHwxNzYxNDMwNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        }
      ]
    },
    {
      title: 'Makeup Artist',
      icon: Palette,
      color: 'pink',
      members: [
        {
          name: 'Claudia Morais',
          role: 'Make-up Artist',
          image: 'https://images.unsplash.com/photo-1600637070413-0798fafbb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxMzU5Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <SEO 
        title="Nossa Equipa - Vitorias Beauty | Profissionais Qualificados"
        description="Conheça a equipa do Vitorias Beauty. Profissionais qualificados em cabeleireiro, estética, manicure e maquilhagem. Formação contínua para melhor servir."
        keywords="equipa Vitorias Beauty, profissionais salão beleza Lisboa, cabeleireiros Lisboa, esteticistas Lisboa"
        url="https://vitoriasbeauty.pt/#/equipa"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="relative h-[450px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1711504039975-47a6f424d8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHRlYW18ZW58MXx8fHwxNzYxMzY2MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Nossa Equipa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/75"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pt-20">
            <div className="inline-block mb-6 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
              <span className="text-white">
                Nossa Equipa
              </span>
            </div>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-center">
              Conheça a nossa equipa de profissionais qualificados que combinam criatividade e experiência para oferecer um serviço excepcional a cada cliente
            </p>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl space-y-20">
          {teamCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isPink = category.color === 'pink';
            
            return (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full ${
                    isPink 
                      ? 'bg-pink-500/10 border border-pink-500/30' 
                      : 'bg-cyan-500/10 border border-cyan-500/30'
                  }`}>
                    <Icon className={`w-6 h-6 ${isPink ? 'text-pink-400' : 'text-cyan-400'}`} />
                    <h2 className="text-white">{category.title}</h2>
                  </div>
                </div>

                {/* Team Members Grid */}
                <div className={`grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-8 ${
                  category.title === 'Cabeleireiro' || category.title === 'Estética' 
                    ? 'lg:grid-cols-5' 
                    : 'lg:grid-cols-5'
                }`}>
                  {category.members.map((member, memberIndex) => (
                    <div 
                      key={memberIndex}
                      className={`group bg-gray-800/40 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border transition-all duration-300 hover:bg-gray-800/60 hover:shadow-2xl ${
                        isPink 
                          ? 'border-gray-700/50 hover:border-pink-500/50 hover:shadow-pink-500/10' 
                          : 'border-gray-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
                      }`}
                    >
                      <div className="relative h-36 md:h-64 overflow-hidden">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                        
                        {/* Member Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 md:p-6">
                          <h3 className="text-white mb-0.5 md:mb-1 text-xs md:text-base">{member.name}</h3>
                          <p className={`text-xs md:text-base ${isPink ? 'text-pink-300' : 'text-cyan-300'}`}>
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2">
                <Users className="w-5 h-5 text-pink-400" />
                <span className="text-pink-300">Estamos a Recrutar</span>
              </div>
            </div>
            
            <h3 className="text-white mb-4">Junte-se à Nossa Equipa</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Procuramos profissionais apaixonados pela beleza e bem-estar. Se tem talento, dedicação e vontade de crescer num ambiente criativo, queremos conhecê-lo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:geral@vitoriasbeauty.pt?subject=Candidatura Espontânea"
                className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-all hover:scale-105 shadow-lg"
              >
                Enviar Candidatura
              </a>
              <a 
                href="https://you.zappysoftware.com/vitoriasbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-700 text-white px-8 py-4 rounded-full hover:bg-gray-600 transition-all hover:scale-105 border border-gray-600"
              >
                Agendar Visita
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
