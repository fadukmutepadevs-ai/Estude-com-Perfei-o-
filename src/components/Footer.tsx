import React from 'react';
import { GraduationCap, MessageCircle, Send, Globe, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-slate-900 text-white border-t border-slate-800 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white">EstudaJá</span>
              <span className="text-xs text-slate-400 font-medium">| Estude Com Perfeição</span>
            </div>
            
            {/* Prompt Requested exact phrase */}
            <p className="text-sm text-slate-300 italic font-medium">
              “Informação para estudar. Oportunidades para crescer.”
            </p>
          </div>

          {/* Social Icons (clean & subtle) */}
          <div className="flex items-center gap-3">
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              title="Grupo de Estudos WhatsApp"
              aria-label="Grupo de Estudos WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              title="Canal Telegram"
              aria-label="Canal Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="mailto:contacto@estudaja.mz"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              title="Contacto por Email"
              aria-label="Contacto por Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#inicio"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              title="Portal Principal"
              aria-label="Portal Principal"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p>
            EstudaJá © 2026. Todos os direitos reservados.
          </p>
          <p className="flex items-center justify-center gap-1">
            Feito para os estudantes de Moçambique
          </p>
        </div>

      </div>
    </footer>
  );
};
