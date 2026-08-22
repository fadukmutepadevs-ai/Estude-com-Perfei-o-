/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { OPPORTUNITIES, ADMISSION_EXAMS, COURSES_INFO } from './data/mockData';
import { Opportunity, AdmissionExam, UniversityCode } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { ExamsSection } from './components/ExamsSection';
import { CoursesSection } from './components/CoursesSection';
import { StudyTipsSection } from './components/StudyTipsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ExamModal } from './components/ExamModal';
import { OpportunityModal } from './components/OpportunityModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { ArrowUp, Search, FileText, Award, X } from 'lucide-react';

const SAVED_ITEMS_STORAGE_KEY = 'estudaja_saved_items_v1';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(SAVED_ITEMS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [selectedExam, setSelectedExam] = useState<AdmissionExam | null>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedUniversityFilter, setSelectedUniversityFilter] = useState<UniversityCode | 'Todas'>('Todas');

  // Sync saved items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SAVED_ITEMS_STORAGE_KEY, JSON.stringify(savedIds));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }, [savedIds]);

  // Scroll listener for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearAllFavorites = () => {
    setSavedIds([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectTag = (tag: string) => {
    setSearchQuery(tag);
    // If it's a university name, filter directly
    if (['UEM', 'UniLicungo', 'UP', 'UniZambeze', 'UniRovuma'].includes(tag)) {
      setSelectedUniversityFilter(tag as UniversityCode);
      scrollToSection('exames');
    } else if (tag === 'Bolsas') {
      scrollToSection('oportunidades');
    } else if (tag === 'Informática') {
      scrollToSection('cursos');
    } else {
      scrollToSection('exames');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Filtered lists based on search
  const query = searchQuery.trim().toLowerCase();

  const matchingOpportunities = useMemo(() => {
    if (!query) return OPPORTUNITIES;
    return OPPORTUNITIES.filter(
      (op) =>
        op.title.toLowerCase().includes(query) ||
        op.summary.toLowerCase().includes(query) ||
        (op.institution && op.institution.toLowerCase().includes(query)) ||
        op.categoryLabel.toLowerCase().includes(query)
    );
  }, [query]);

  const matchingExams = useMemo(() => {
    if (!query) return ADMISSION_EXAMS;
    return ADMISSION_EXAMS.filter(
      (exam) =>
        exam.subject.toLowerCase().includes(query) ||
        exam.university.toLowerCase().includes(query) ||
        exam.universityFullName.toLowerCase().includes(query) ||
        exam.year.toString().includes(query) ||
        exam.description.toLowerCase().includes(query)
    );
  }, [query]);

  const hasActiveSearch = query.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header
        savedCount={savedIds.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Destaque Principal (Hero) */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectTag={handleSelectTag}
          onExploreClick={() => scrollToSection('oportunidades')}
        />

        {/* Live Search Results Banner if search is active */}
        {hasActiveSearch && (
          <section className="bg-blue-50/90 border-b border-blue-200 py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-700 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-blue-950">
                    Resultados para &quot;{searchQuery}&quot;
                  </p>
                  <p className="text-xs text-blue-700">
                    {matchingExams.length} {matchingExams.length === 1 ? 'exame' : 'exames'} e {matchingOpportunities.length} {matchingOpportunities.length === 1 ? 'oportunidade' : 'oportunidades'} encontradas
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {matchingOpportunities.length > 0 && (
                  <button
                    onClick={() => scrollToSection('oportunidades')}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-blue-300 text-blue-900 hover:bg-blue-100"
                  >
                    <Award className="w-3.5 h-3.5 text-blue-600" />
                    <span>Ver Bolsas ({matchingOpportunities.length})</span>
                  </button>
                )}
                {matchingExams.length > 0 && (
                  <button
                    onClick={() => scrollToSection('exames')}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-blue-300 text-blue-900 hover:bg-blue-100"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>Ver Exames ({matchingExams.length})</span>
                  </button>
                )}
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 text-blue-700 hover:text-blue-900 rounded-lg hover:bg-blue-200/60"
                  title="Limpar pesquisa"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* 3. Últimas Oportunidades */}
        <OpportunitiesSection
          opportunities={matchingOpportunities}
          onSelectOpportunity={setSelectedOpportunity}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
        />

        {/* 4. Exames de Admissão */}
        <ExamsSection
          exams={matchingExams}
          onSelectExam={setSelectedExam}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          selectedUniversityFilter={selectedUniversityFilter}
          onUniversityFilterChange={setSelectedUniversityFilter}
        />

        {/* 5. Cursos e Universidades */}
        <CoursesSection courses={COURSES_INFO} />

        {/* 6. Guia do Estudante / Dicas de Preparação */}
        <StudyTipsSection />

        {/* 7. Sobre o EstudaJá */}
        <AboutSection />
      </main>

      {/* 8. Rodapé */}
      <Footer />

      {/* Modals & Drawers */}
      <ExamModal
        exam={selectedExam}
        onClose={() => setSelectedExam(null)}
        isSaved={selectedExam ? savedIds.includes(selectedExam.id) : false}
        onToggleSave={handleToggleSave}
      />

      <OpportunityModal
        opportunity={selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        isSaved={selectedOpportunity ? savedIds.includes(selectedOpportunity.id) : false}
        onToggleSave={handleToggleSave}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        savedIds={savedIds}
        allExams={ADMISSION_EXAMS}
        allOpportunities={OPPORTUNITIES}
        onSelectExam={(e) => {
          setSelectedExam(e);
        }}
        onSelectOpportunity={(o) => {
          setSelectedOpportunity(o);
        }}
        onRemoveFavorite={handleToggleSave}
        onClearAll={handleClearAllFavorites}
      />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          id="btn-back-to-top"
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-40 p-3 rounded-full bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-900/30 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 animate-fade-in"
          title="Voltar ao início"
          aria-label="Voltar ao início"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
