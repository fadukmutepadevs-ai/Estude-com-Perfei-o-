import React from 'react';
import { Info, ShieldCheck, Heart, Users, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs text-center">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4">
            <Info className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Sobre o EstudaJá
          </h2>

          {/* Requested Exact Core Text */}
          <blockquote className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto mb-8 italic">
            “O EstudaJá é uma plataforma independente criada para facilitar o acesso dos estudantes a informações sobre exames de admissão, bolsas, cursos, universidades e oportunidades acadêmicas.”
          </blockquote>

          {/* Core Values / Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Gratuito</span>
              </div>
              <p className="text-xs text-slate-600">
                Todo o conteúdo, gabaritos e informações são livres e de acesso aberto a qualquer estudante moçambicano.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                <Target className="w-4 h-4" />
                <span>Foco em Resultados</span>
              </div>
              <p className="text-xs text-slate-600">
                Material prático e direto ao ponto para aumentar as tuas chances de admissão no ensino superior.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-1">
                <Users className="w-4 h-4" />
                <span>Independente</span>
              </div>
              <p className="text-xs text-slate-600">
                Criado por jovens e educadores dedicados a democratizar o acesso à educação em todas as províncias.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
