import React from 'react';
import { STUDY_TIPS } from '../data/mockData';
import { Lightbulb, FileCheck, Calendar, BookOpen, Clock, ArrowRight } from 'lucide-react';

export const StudyTipsSection: React.FC = () => {
  const getTipIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-blue-600" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-emerald-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 'Clock':
      default:
        return <Clock className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="guia-estudos" className="py-12 sm:py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Guia de Preparação</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Como se preparar para os exames de admissão
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Estratégias práticas e comprovadas para obter alta pontuação na UEM, UniLicungo, UP e outras universidades.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STUDY_TIPS.map((tip, index) => (
            <div
              key={tip.id}
              className="bg-slate-800/80 rounded-xl border border-slate-700/80 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-600 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center shrink-0">
                    {getTipIcon(tip.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                      Dica #{index + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {tip.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {tip.summary}
                </p>

                {/* Steps */}
                <div className="space-y-2 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  {tip.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="font-bold text-blue-400 shrink-0">•</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
