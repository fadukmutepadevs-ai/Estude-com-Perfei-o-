import React, { useState } from 'react';
import { Opportunity } from '../types';
import { X, Calendar, MapPin, Building, Bookmark, BookmarkCheck, Share2, Check, ExternalLink, Award, CheckCircle } from 'lucide-react';

interface OpportunityModalProps {
  opportunity: Opportunity | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const OpportunityModal: React.FC<OpportunityModalProps> = ({
  opportunity,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  const [copied, setCopied] = useState(false);

  if (!opportunity) return null;

  const handleShare = () => {
    const text = `*${opportunity.title}*\n${opportunity.summary}\nPrazo: ${opportunity.deadline || 'Aberto'}\nMais informações no EstudaJá: ${window.location.origin}`;
    if (navigator.share) {
      navigator.share({
        title: opportunity.title,
        text: text,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between border-b border-slate-800 shrink-0">
          <div>
            <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-600/80 text-blue-100 mb-2">
              {opportunity.categoryLabel}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {opportunity.title}
            </h2>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-3">
            <button
              onClick={handleShare}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Partilhar"
              aria-label="Partilhar oportunidade"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Share2 className="w-5 h-5" />}
            </button>
            <button
              onClick={() => onToggleSave(opportunity.id)}
              className={`p-2 rounded-lg transition-colors ${
                isSaved
                  ? 'text-blue-400 bg-blue-950/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              title={isSaved ? 'Remover dos salvos' : 'Salvar oportunidade'}
              aria-label="Salvar oportunidade"
            >
              {isSaved ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          
          {/* Metadata chips (Institution, Location, Deadline) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            {opportunity.institution && (
              <div className="flex items-center gap-1.5 text-slate-700">
                <Building className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">{opportunity.institution}</span>
              </div>
            )}
            {opportunity.location && (
              <div className="flex items-center gap-1.5 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span className="truncate">{opportunity.location}</span>
              </div>
            )}
            {opportunity.deadline && (
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Prazo: {opportunity.deadline}</span>
              </div>
            )}
          </div>

          {/* Full content description */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Descrição & Enquadramento
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {opportunity.fullContent || opportunity.summary}
            </p>
          </div>

          {/* Benefits / Vantagens */}
          {opportunity.benefits && opportunity.benefits.length > 0 && (
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
              <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Benefícios & Cobertura:</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-emerald-900">
                {opportunity.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements / Requisitos */}
          {opportunity.requirements && opportunity.requirements.length > 0 && (
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200">
              <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
                Requisitos para Candidatura:
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {opportunity.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Practical Application Advice */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <span className="font-bold text-slate-800 block mb-1">Como Submeter a Candidatura:</span>
            Organize antecipadamente os seus documentos de identificação (BI ou Passaporte), certificado da 12ª classe com notas discriminadas e atestados requeridos. Submeta sempre com pelo menos 5 dias de antecedência do prazo final.
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Publicado em {opportunity.date}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold"
            >
              Fechar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
