import React from 'react';
import { AdmissionExam, Opportunity } from '../types';
import { X, Trash2, FileText, Award, ChevronRight, Bookmark } from 'lucide-react';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  allExams: AdmissionExam[];
  allOpportunities: Opportunity[];
  onSelectExam: (exam: AdmissionExam) => void;
  onSelectOpportunity: (opportunity: Opportunity) => void;
  onRemoveFavorite: (id: string) => void;
  onClearAll: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  savedIds,
  allExams,
  allOpportunities,
  onSelectExam,
  onSelectOpportunity,
  onRemoveFavorite,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const savedExams = allExams.filter((e) => savedIds.includes(e.id));
  const savedOps = allOpportunities.filter((o) => savedIds.includes(o.id));
  const totalCount = savedExams.length + savedOps.length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div
        className="relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-blue-400" />
            <div>
              <h2 className="text-base font-bold text-white leading-none">
                Itens Salvos ({totalCount})
              </h2>
              <p className="text-[11px] text-slate-400 mt-1">
                Guardados localmente no seu dispositivo
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Fechar gaveta de favoritos"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 overflow-y-auto flex-1 space-y-5">
          {totalCount === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                <Bookmark className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-700">Nenhum item salvo ainda</p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Clique no ícone de marcador nos exames ou bolsas para guardar os seus favoritos aqui.
              </p>
            </div>
          ) : (
            <>
              {/* Saved Exams */}
              {savedExams.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>Exames Salvos ({savedExams.length})</span>
                  </h3>
                  <div className="space-y-2">
                    {savedExams.map((exam) => (
                      <div
                        key={exam.id}
                        className="p-3 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-300 transition-all flex items-center justify-between gap-3 group"
                      >
                        <button
                          onClick={() => {
                            onClose();
                            onSelectExam(exam);
                          }}
                          className="text-left flex-1"
                        >
                          <span className="text-xs font-bold text-slate-800 group-hover:text-blue-700 block truncate">
                            {exam.subject} ({exam.university} {exam.year})
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {exam.totalQuestions} questões • {exam.durationMinutes} min
                          </span>
                        </button>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => onRemoveFavorite(exam.id)}
                            className="p-1 text-slate-400 hover:text-rose-600 rounded"
                            title="Remover"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Saved Opportunities */}
              {savedOps.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Oportunidades & Bolsas ({savedOps.length})</span>
                  </h3>
                  <div className="space-y-2">
                    {savedOps.map((op) => (
                      <div
                        key={op.id}
                        className="p-3 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-300 transition-all flex items-center justify-between gap-3 group"
                      >
                        <button
                          onClick={() => {
                            onClose();
                            onSelectOpportunity(op);
                          }}
                          className="text-left flex-1"
                        >
                          <span className="text-xs font-bold text-slate-800 group-hover:text-blue-700 block truncate">
                            {op.title}
                          </span>
                          <span className="text-[11px] text-slate-500 block truncate">
                            {op.deadline ? `Prazo: ${op.deadline}` : op.institution}
                          </span>
                        </button>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => onRemoveFavorite(op.id)}
                            className="p-1 text-slate-400 hover:text-rose-600 rounded"
                            title="Remover"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Drawer Bottom Actions */}
        {totalCount > 0 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
            <button
              onClick={onClearAll}
              className="text-xs text-rose-600 hover:text-rose-800 font-semibold inline-flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpar tudo</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold"
            >
              Fechar
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
