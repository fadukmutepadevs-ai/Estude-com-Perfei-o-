import React, { useState } from 'react';
import { Menu, X, GraduationCap, Bookmark, Sparkles } from 'lucide-react';

interface HeaderProps {
  savedCount: number;
  onOpenFavorites: () => void;
}

export const Header: React.FC<HeaderProps> = ({ savedCount, onOpenFavorites }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Oportunidades', href: '#oportunidades' },
    { label: 'Exames', href: '#exames' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Sobre', href: '#sobre' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo */}
          <a
            href="#inicio"
            id="brand-logo-link"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center shadow-md shadow-blue-500/20 text-white group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-blue-300 transition-colors">
                  Estude Com Perfeição
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 px-1.5 py-0.5 rounded">
                  EstudaJá
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Portal do Estudante Moçambicano
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                id={`nav-${item.label.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action / Bookmark and Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="header-favorites-btn"
              onClick={onOpenFavorites}
              className="relative flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Exames e Bolsas Salvas"
              aria-label="Ver itens salvos"
            >
              <Bookmark className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">Salvos</span>
              {savedCount > 0 && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-5 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              id={`mobile-nav-${item.label.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-4">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Versão leve e otimizada
            </span>
            <span className="text-slate-500">2026</span>
          </div>
        </div>
      )}
    </header>
  );
};
