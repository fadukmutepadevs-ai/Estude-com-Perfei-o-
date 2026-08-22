import React, { useState } from 'react';
import { AdmissionExam, UniversityCode, SubjectName } from '../types';
import { FileText, CheckCircle2, Bookmark, BookmarkCheck, Sparkles, Filter, ChevronRight } from 'lucide-react';

interface ExamsSectionProps {
  exams: AdmissionExam[];
  onSelectExam: (exam: AdmissionExam) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  selectedUniversityFilter?: UniversityCode | 'Todas';
  onUniversityFilterChange?: (u: UniversityCode | 'Todas') => void;
}

export const ExamsSection: React.FC<ExamsSectionProps> = ({
  exams,
  onSelectExam,
  savedIds,
  onToggleSave,
  selectedUniversityFilter = 'Todas',
  onUniversityFilterChange,
}) => {
  const [selectedUniv, setSelectedUniv] = useState<UniversityCode | 'Todas'>(selectedUniversityFilter);
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'Todas'>('Todas');
  const [selectedYear, setSelectedYear] = useState<string>('Todos');

  const universities: { code: UniversityCode | 'Todas'; label: string }[] = [
    { code: 'Todas', label: 'Todas as Instituições' },
    { code: 'UEM', label: 'UEM (Eduardo Mondlane)' },
    { code: 'UniLicungo', label: 'UniLicungo (Licungo)' },
    { code: 'UP', label: 'UP (Pedagógica)' },
    { code: 'UniZambeze', label: 'UniZambeze' },
    { code: 'UniRovuma', label: 'UniRovuma' },
  ];

  const subjects: (SubjectName | 'Todas')[] = [
    'Todas',
    'Matemática',
    'Português',
    'Física',
    'Química',
    'Biologia',
    'História',
  ];

  const years = ['Todos', '2025', '2024', '2023'];

  const handleUnivChange = (code: UniversityCode | 'Todas') => {
    setSelectedUniv(code);
    if (onUniversityFilterChange) {
      onUniversityFilterChange(code);
    }
  };

  const filteredExams = exams.filter((exam) => {
    const matchesUniv = selectedUniv === 'Todas' || exam.university === selectedUniv;
    const matchesSubject = selectedSubject === 'Todas' || exam.subject === selectedSubject;
    const matchesYear = selectedYear === 'Todos' || exam.year.toString() === selectedYear;
    return matchesUniv && matchesSubject && matchesYear;
  });

  const getUnivBadgeColor = (univ: UniversityCode) => {
    switch (univ) {
      case 'UEM':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'UniLicungo':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'UP':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'UniZambeze':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'UniRovuma':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <section id="exames" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-blue-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            <FileText className="w-4 h-4" />
            <span>Banco de Provas & Resoluções</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Exames de Admissão
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Consulte e estude com as provas oficiais da UEM, UniLicungo, UP e outras instituições moçambicanas com gabarito e resolução explicada.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm mb-8">
          <div className="flex flex-col gap-4">
            
            {/* University Pills */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Filtrar por Universidade
              </label>
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
                {universities.map((u) => (
                  <button
                    key={u.code}
                    id={`filter-univ-${u.code.toLowerCase()}`}
                    onClick={() => handleUnivChange(u.code)}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedUniv === u.code
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Subject and Year Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
              {/* Disciplina */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">
                  Disciplina
                </label>
                <select
                  id="filter-exam-subject"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value as SubjectName | 'Todas')}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {subjects.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub === 'Todas' ? 'Todas as Disciplinas' : sub}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ano */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">
                  Ano do Exame
                </label>
                <select
                  id="filter-exam-year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y === 'Todos' ? 'Todos os Anos' : `Ano ${y}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results count & reset */}
              <div className="flex items-end justify-between sm:justify-end gap-3 pt-1">
                <span className="text-xs text-slate-500 font-medium self-center">
                  Mostrando <strong>{filteredExams.length}</strong> exames
                </span>
                {(selectedUniv !== 'Todas' || selectedSubject !== 'Todas' || selectedYear !== 'Todos') && (
                  <button
                    onClick={() => {
                      handleUnivChange('Todas');
                      setSelectedSubject('Todas');
                      setSelectedYear('Todos');
                    }}
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline self-center"
                  >
                    Limpar filtros
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Exams List Grid */}
        {filteredExams.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
            <p className="text-slate-600 font-medium text-sm">Nenhum exame encontrado com os filtros selecionados.</p>
            <button
              onClick={() => {
                handleUnivChange('Todas');
                setSelectedSubject('Todas');
                setSelectedYear('Todos');
              }}
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
            >
              Ver todos os exames disponíveis
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredExams.map((exam) => {
              const isSaved = savedIds.includes(exam.id);

              return (
                <div
                  key={exam.id}
                  id={`card-exam-${exam.id}`}
                  className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: University badge & Subject tag + Save */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${getUnivBadgeColor(exam.university)}`}>
                        {exam.university}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                          {exam.year}
                        </span>
                        <button
                          onClick={() => onToggleSave(exam.id)}
                          className={`p-1.5 rounded-md transition-colors ${
                            isSaved
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-slate-400 hover:text-blue-600 hover:bg-slate-100'
                          }`}
                          title={isSaved ? 'Remover dos salvos' : 'Salvar exame'}
                          aria-label="Salvar exame"
                        >
                          {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Exam Name: Example "Exame de Matemática UEM 2025" */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-1.5">
                      Exame de {exam.subject} {exam.university} {exam.year}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mb-3">
                      {exam.universityFullName}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {exam.description}
                    </p>

                    {/* Features list (Resolution, Total Questions, Time) */}
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="flex items-center gap-1 text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Com Gabarito/Resolução
                      </span>
                      <span>•</span>
                      <span>{exam.totalQuestions} Questões</span>
                      <span>•</span>
                      <span>{exam.durationMinutes} min</span>
                    </div>
                  </div>

                  {/* Card Action Button: "Ver exame" */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      PDF & Questões
                    </span>
                    <button
                      id={`btn-view-exam-${exam.id}`}
                      onClick={() => onSelectExam(exam)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <span>Ver exame</span>
                      <ChevronRight className="w-3.5 h-3.5" />
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
