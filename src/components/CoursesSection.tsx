import React, { useState } from 'react';
import { CourseInfo } from '../types';
import { BookOpen, Laptop, Wrench, HeartPulse, TrendingUp, GraduationCap, Scale, Building2, Check, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface CoursesSectionProps {
  courses: CourseInfo[];
  onSelectCourseCategory?: (category: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ courses }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const categories = [
    'Todos',
    'Informática',
    'Engenharia',
    'Saúde',
    'Economia',
    'Direito & Sociais',
    'Educação',
  ];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Informática':
        return <Laptop className="w-5 h-5 text-blue-600" />;
      case 'Engenharia':
        return <Wrench className="w-5 h-5 text-amber-600" />;
      case 'Saúde':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'Economia':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'Direito & Sociais':
        return <Scale className="w-5 h-5 text-purple-600" />;
      case 'Educação':
      default:
        return <GraduationCap className="w-5 h-5 text-indigo-600" />;
    }
  };

  const filteredCourses = courses.filter((c) => {
    if (selectedCategory === 'Todos') return true;
    return c.category === selectedCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  return (
    <section id="cursos" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-blue-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4" />
            <span>Guia Académico</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Cursos e Universidades
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Conheça as principais áreas do saber em Moçambique, exames exigidos na admissão e instituições de referência.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat === 'Todos' ? 'Todos os Cursos' : `Cursos de ${cat}`}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                id={`course-card-${course.id}`}
                className="bg-slate-50 rounded-xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:border-blue-300 hover:bg-white transition-all shadow-xs"
              >
                <div>
                  {/* Category icon and degree pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                      {getCategoryIcon(course.category)}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {course.degree} ({course.durationYears} anos)
                    </span>
                  </div>

                  {/* Course Name */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {course.name}
                  </h3>

                  {/* Overview */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {course.overview}
                  </p>

                  {/* Admission Required Exams */}
                  <div className="mb-4 bg-white p-3 rounded-lg border border-slate-200/80">
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Exames Obrigatórios de Admissão:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.requiredExams.map((ex) => (
                        <span
                          key={ex}
                          className="inline-flex items-center gap-1 text-xs font-medium bg-slate-100 text-slate-800 px-2 py-0.5 rounded"
                        >
                          <Check className="w-3 h-3 text-blue-600" />
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Main Institutions */}
                  <div className="mb-4">
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Onde Estudar em Moçambique:
                    </span>
                    <ul className="text-xs text-slate-700 space-y-1">
                      {course.mainInstitutions.map((inst, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span className="truncate">{inst}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expanded Career Paths */}
                  {isExpanded && (
                    <div className="pt-3 mt-3 border-t border-slate-200 animate-fade-in">
                      <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Saídas Profissionais:
                      </span>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {course.careerPaths.map((cp, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{cp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer Expand Action */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Procura: <strong>{course.averageDemand}</strong>
                  </span>
                  <button
                    onClick={() => toggleExpand(course.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    <span>{isExpanded ? 'Menos detalhes' : 'Mais detalhes'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
