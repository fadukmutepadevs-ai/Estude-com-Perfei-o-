import React, { useState } from 'react';
import { Opportunity, OpportunityCategory } from '../types';
import { Award, Megaphone, School, Calendar, ArrowRight, Bookmark, BookmarkCheck, Share2, Check } from 'lucide-react';

interface OpportunitiesSectionProps {
  opportunities: Opportunity[];
  onSelectOpportunity: (opportunity: Opportunity) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  opportunities,
  onSelectOpportunity,
  savedIds,
  onToggleSave,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<OpportunityCategory | 'todas'>('todas');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'todas', label: 'Todas as Oportunidades' },
    { id: 'bolsas', label: '🎓 Bolsas de Estudo' },
    { id: 'concursos', label: '📢 Concursos' },
    { id: 'universidades', label: '🏫 Universidades & Notícias' },
  ];

  const filteredOpportunities = opportunities.filter((op) => {
    if (selectedCategory === 'todas') return true;
    return op.category === selectedCategory;
  });

  const getCategoryIcon = (category: OpportunityCategory) => {
    switch (category) {
      case 'bolsas':
        return <Award className="w-4 h-4 text-emerald-600" />;
      case 'concursos':
        return <Megaphone className="w-4 h-4 text-amber-600" />;
      case 'universidades':
      default:
        return <School className="w-4 h-4 text-blue-600" />;
    }
  };

  const getCategoryBadgeClass = (category: OpportunityCategory) => {
    switch (category) {
      case 'bolsas':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'concursos':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'universidades':
      default:
        return 'bg-blue-50 text-blue-800 border-blue-200';
    }
  };

  const handleShare = (e: React.MouseEvent, op: Opportunity) => {
    e.stopPropagation();
    const shareText = `*${op.title}*\n${op.summary}\nConfira no Estude Com Perfeição (EstudaJá): ${window.location.origin}`;
    
    if (navigator.share) {
      navigator.share({
        title: op.title,
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      setCopiedId(op.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="oportunidades" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Bolsas, Concursos & Editais</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Últimas Oportunidades
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-xl">
              Fique informado sobre os editais de bolsas nacionais e internacionais, concursos acadêmicos e avisos das universidades.
            </p>
          </div>

          {/* Result Count Indicator */}
          <div className="text-xs sm:text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto">
            {filteredOpportunities.length} {filteredOpportunities.length === 1 ? 'oportunidade' : 'oportunidades'}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as OpportunityCategory | 'todas')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Opportunity Cards Grid */}
        {filteredOpportunities.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            <p className="text-slate-500 text-sm">Nenhuma oportunidade encontrada nesta categoria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredOpportunities.map((op) => {
              const isSaved = savedIds.includes(op.id);
              const isCopied = copiedId === op.id;

              return (
                <div
                  key={op.id}
                  id={`card-opportunity-${op.id}`}
                  className="group flex flex-col justify-between bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all p-5 sm:p-6 relative"
                >
                  <div>
                    {/* Card Top: Category and Save/Share actions */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md border ${getCategoryBadgeClass(op.category)}`}>
                        {getCategoryIcon(op.category)}
                        {op.categoryLabel}
                      </span>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => handleShare(e, op)}
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-md transition-colors"
                          title="Partilhar no WhatsApp / Copiar"
                          aria-label="Partilhar oportunidade"
                        >
                          {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleSave(op.id);
                          }}
                          className={`p-1.5 rounded-md transition-colors ${
                            isSaved
                              ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                              : 'text-slate-400 hover:text-blue-600 hover:bg-slate-100'
                          }`}
                          title={isSaved ? 'Remover dos salvos' : 'Salvar oportunidade'}
                          aria-label="Salvar oportunidade"
                        >
                          {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-2 line-clamp-2">
                      {op.title}
                    </h3>

                    {/* Card Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {op.summary}
                    </p>
                  </div>

                  {/* Card Bottom: Date & Ler Mais CTA */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{op.date}</span>
                    </div>

                    <button
                      id={`btn-read-more-${op.id}`}
                      onClick={() => onSelectOpportunity(op)}
                      className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-800 hover:underline focus:outline-none"
                    >
                      <span>Ler mais</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
