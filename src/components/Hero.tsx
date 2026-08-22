import React from 'react';
import { ArrowRight, Search, FileText, Award, BookOpen, School, Zap } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectTag: (tag: string) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onSelectTag,
  onExploreClick,
}) => {
  const quickTags = [
    { label: 'Exames UEM 2025', value: 'UEM' },
    { label: 'UniLicungo', value: 'UniLicungo' },
    { label: 'Bolsas IBE', value: 'Bolsas' },
    { label: 'Matemática', value: 'Matemática' },
    { label: 'Engenharia Informática', value: 'Informática' },
  ];

  return (
    <section id="inicio" className="relative bg-slate-900 text-white pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden border-b border-slate-800">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Quick Notice Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs sm:text-sm font-medium mb-6 animate-fade-in shadow-sm">
            <Zap className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
            <span>Exames de admissão & oportunidades 2025/2026</span>
          </div>

          {/* Main Title (Exact prompt requested message) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 sm:mb-6">
            O teu próximo passo começa com{' '}
            <button
              id="btn-reload-page"
              onClick={() => window.location.reload()}
              title="Clique para atualizar a página inteira"
              aria-label="Atualizar a página inteira"
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 hover:from-blue-300 hover:to-teal-200 cursor-pointer transition-all hover:scale-105 active:scale-95 underline decoration-blue-400/40 hover:decoration-blue-300 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded"
            >
              informação.
            </button>
          </h1>

          {/* Subtitle (Exact prompt requested subtitle) */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Encontre exames, bolsas, cursos e oportunidades acadêmicas em um só lugar.
          </p>

          {/* Instant Search Box */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative flex items-center shadow-lg rounded-xl bg-slate-800/90 border border-slate-700 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
              <Search className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
              <input
                id="hero-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Pesquisar por exames, universidade, bolsas ou cursos..."
                className="w-full bg-transparent px-3.5 py-3.5 text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none"
              />
              {searchQuery && (
                <button
                  id="hero-search-clear-btn"
                  onClick={() => onSearchChange('')}
                  className="mr-3 px-2 py-1 text-xs text-slate-400 hover:text-white bg-slate-700/60 rounded"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Quick Filter Tags */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3 text-xs text-slate-400">
              <span className="font-medium text-slate-400">Mais buscados:</span>
              {quickTags.map((tag) => (
                <button
                  key={tag.label}
                  onClick={() => onSelectTag(tag.value)}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/70 transition-colors"
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6">
            <button
              id="hero-opportunities-btn"
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-600/30 transition-all hover:shadow-lg hover:shadow-blue-600/40"
            >
              <span>Ver oportunidades</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#exames"
              id="hero-exams-link"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm sm:text-base border border-slate-700 transition-colors"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Consultar Exames</span>
            </a>
          </div>

          {/* Fast Metric Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-slate-800 text-center">
            <div className="p-2 sm:p-3 rounded-lg bg-slate-800/40 border border-slate-800">
              <div className="flex items-center justify-center gap-1.5 text-blue-400 mb-1">
                <FileText className="w-4 h-4" />
                <span className="font-bold text-lg sm:text-xl text-white">100%</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400">Acesso Gratuito</p>
            </div>
            <div className="p-2 sm:p-3 rounded-lg bg-slate-800/40 border border-slate-800">
              <div className="flex items-center justify-center gap-1.5 text-teal-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="font-bold text-lg sm:text-xl text-white">+50</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400">Exames Resolvidos</p>
            </div>
            <div className="p-2 sm:p-3 rounded-lg bg-slate-800/40 border border-slate-800">
              <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
                <School className="w-4 h-4" />
                <span className="font-bold text-lg sm:text-xl text-white">6+</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400">Universidades Nacionais</p>
            </div>
            <div className="p-2 sm:p-3 rounded-lg bg-slate-800/40 border border-slate-800">
              <div className="flex items-center justify-center gap-1.5 text-indigo-400 mb-1">
                <BookOpen className="w-4 h-4" />
                <span className="font-bold text-lg sm:text-xl text-white">Leve & Rápido</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400">Otimizado para Celular</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
