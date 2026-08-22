import React, { useState } from 'react';
import { AdmissionExam } from '../types';
import { X, Download, CheckCircle2, HelpCircle, Bookmark, BookmarkCheck, Share2, Lightbulb, Check } from 'lucide-react';

interface ExamModalProps {
  exam: AdmissionExam | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const ExamModal: React.FC<ExamModalProps> = ({
  exam,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({});
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!exam) return null;

  const handleSelectOption = (qNum: number, optIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qNum]: optIndex }));
    // Automatically reveal explanation once answered
    setShowExplanations((prev) => ({ ...prev, [qNum]: true }));
  };

  const handleDownload = () => {
    // Generate text content of the exam for offline study
    const content = `=========================================
${exam.universityFullName} (${exam.university})
EXAME DE ADMISSÃO DE ${exam.subject.toUpperCase()} - ANO ${exam.year}
Total de Questões: ${exam.totalQuestions} | Duração: ${exam.durationMinutes} minutos
Disponibilizado por: Estude Com Perfeição (EstudaJá)
=========================================

DESCRIÇÃO:
${exam.description}

DICAS PARA ESTE EXAME:
${exam.tips.map((t, i) => `${i + 1}. ${t}`).join('\n')}

QUESTÕES DE EXEMPLO E RESOLUÇÃO:
${exam.sampleQuestions
  .map(
    (q) => `
Questão ${q.number}: ${q.question}
${q.options.join('\n')}
Gabarito: Opção correta: ${q.options[q.correctOptionIndex]}
Explicação: ${q.explanation}
`
  )
  .join('\n-----------------------------------------')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = exam.downloadFileName.replace('.pdf', '.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handleShare = () => {
    const text = `Exame de ${exam.subject} ${exam.university} ${exam.year} resolvido no EstudaJá: ${window.location.origin}`;
    if (navigator.share) {
      navigator.share({
        title: `Exame ${exam.subject} ${exam.university}`,
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
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-slate-900 text-white p-4 sm:p-6 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
                {exam.university}
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Ano {exam.year}
              </span>
              <span className="text-xs text-slate-400">• {exam.durationMinutes} min</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">
              Exame de {exam.subject} {exam.university} {exam.year}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {exam.universityFullName}
            </p>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Partilhar"
              aria-label="Partilhar exame"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Share2 className="w-5 h-5" />}
            </button>
            <button
              onClick={() => onToggleSave(exam.id)}
              className={`p-2 rounded-lg transition-colors ${
                isSaved
                  ? 'text-blue-400 bg-blue-950/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              title={isSaved ? 'Remover dos salvos' : 'Salvar exame'}
              aria-label="Salvar exame"
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

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Download & Notice Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
            <div>
              <div className="text-xs font-bold text-blue-900">
                Arquivo Completo do Exame
              </div>
              <p className="text-xs text-blue-700">
                Baixe o exame com gabarito para praticar offline.
              </p>
            </div>
            <button
              id="btn-download-exam-modal"
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess ? 'Baixado com Sucesso!' : 'Baixar Guia & Gabarito'}</span>
            </button>
          </div>

          {/* Tips for this specific exam */}
          {exam.tips && exam.tips.length > 0 && (
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-2">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Dicas Essenciais para {exam.subject} na {exam.university}:</span>
              </div>
              <ul className="space-y-1.5 text-xs text-amber-800">
                {exam.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-bold text-amber-600">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interactive Exam Questions & Answers */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Resolução Interativa de Questões
              </h3>
              <span className="text-xs text-slate-500">
                Clique numa opção para verificar a resposta
              </span>
            </div>

            <div className="space-y-4">
              {exam.sampleQuestions.map((q) => {
                const userSelected = selectedAnswers[q.number];
                const isAnswered = userSelected !== undefined;
                const isCorrect = userSelected === q.correctOptionIndex;

                return (
                  <div
                    key={q.number}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {q.number}
                      </span>
                      <p className="text-sm font-semibold text-slate-900">
                        {q.question}
                      </p>
                    </div>

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pl-8">
                      {q.options.map((opt, optIndex) => {
                        const isChosen = userSelected === optIndex;
                        const isThisCorrect = optIndex === q.correctOptionIndex;
                        
                        let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-blue-50/40';
                        if (isAnswered) {
                          if (isThisCorrect) {
                            btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-medium';
                          } else if (isChosen && !isThisCorrect) {
                            btnStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                          }
                        }

                        return (
                          <button
                            key={optIndex}
                            onClick={() => handleSelectOption(q.number, optIndex)}
                            className={`text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isAnswered && isThisCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {isAnswered && (
                      <div className={`p-3 rounded-lg border text-xs leading-relaxed ml-8 ${
                        isCorrect ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' : 'bg-slate-100 border-slate-300 text-slate-800'
                      }`}>
                        <div className="font-bold mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{isCorrect ? 'Resposta Correta!' : 'Resolução Passo a Passo:'}</span>
                        </div>
                        <p>{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            EstudaJá • Material de Apoio Académico
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
