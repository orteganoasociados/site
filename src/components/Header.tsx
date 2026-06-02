import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, Scale, Code } from 'lucide-react';
import logoOAB from '../assets/images/logo_OA_B.png';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Perfil Profesional', id: 'perfil' },
    { label: 'Preguntas Frecuentes', id: 'faq' },
    { label: 'Contacto', id: 'contacto' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-slate-200/80 shadow-sm" id="header-main">
      {/* Top Banner / Contact bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 sm:px-6 md:px-8 hidden sm:flex justify-between items-center transition-all duration-300">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-slate-300">
            <Phone size={12} className="text-blue-500 animate-pulse" />
            <a href="tel:+582572539969" className="hover:text-blue-400 transition-colors font-mono font-medium">+58 (257) 253-9969</a>
            <span className="text-slate-700">|</span>
            <a href="tel:+584124955404" className="hover:text-blue-400 transition-colors font-mono font-medium">+58 (412) 495-5404</a>
            <span className="text-slate-700">|</span>
            <a href="tel:+584122058036" className="hover:text-blue-400 transition-colors font-mono font-medium">+58 (412) 205-8036</a>
          </div>
          <span className="text-slate-700">|</span>
          <a href="mailto:orteganoasociados@gmail.com" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
            <Mail size={12} className="text-blue-500" />
            <span>orteganoasociados@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-slate-300">
            <MapPin size={12} className="text-blue-500" />
            <span>Guanare, Edo. Portuguesa / Presencial & Virtual</span>
          </div>
          <span className="text-slate-500">|</span>
          <span className="text-blue-400 font-medium">Asesoría Integral Ley & Código</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-0 h-16 sm:h-20">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('inicio')}
          className="flex items-center focus:outline-none"
          id="btn-logo"
        >
          <img 
            src={logoOAB} 
            alt="Logo Ortegano & Asociados" 
            className="w-64 h-16 sm:h-20 object-contain"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-all duration-300 relative py-2 focus:outline-none cursor-pointer ${
                activeSection === item.id 
                  ? 'text-blue-700 font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              id={`nav-desktop-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contacto')}
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs px-5 py-2.5 rounded-md border border-slate-800 transition-all shadow-sm hover:shadow hover:scale-[1.02] cursor-pointer"
            id="btn-nav-consulta"
          >
            Consulta Inicial
          </button>
        </nav>

        {/* Mobile / Tablet Toggle */}
        <div className="flex items-center lg:hidden space-x-4">
          <a href="tel:+582572539969" className="sm:hidden p-2 text-slate-700 bg-slate-100 rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-colors" title="Llamar a Central">
            <Phone size={18} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 text-slate-700 hover:bg-slate-50 rounded-lg border border-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
            id="btn-nav-toggle"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (with slide & fade animations) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-slate-50 border-t border-slate-100 divide-y divide-slate-100 overflow-hidden"
            id="mobile-menu-container"
          >
            <div className="px-5 py-4 space-y-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-700 pl-3'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 pl-4'
                  }`}
                  id={`nav-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-2">
                <button
                  onClick={() => handleNavClick('contacto')}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-center py-3 rounded-lg block text-sm shadow-sm"
                  id="btn-mobile-nav-cta"
                >
                  Solicitar Consulta Gratuita
                </button>
              </div>
            </div>
            
            {/* Mobile Contact Quickinfo */}
            <div className="px-6 py-5 bg-slate-100 text-xs text-slate-600 space-y-3">
              <p className="font-semibold text-slate-800 uppercase tracking-widest text-[9px]">Contacto Rápido</p>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <Phone size={14} className="text-blue-500" />
                  <a href="tel:+582572539969" className="hover:text-blue-700 font-mono">+58 (257) 253-9969</a>
                </div>
                <div className="flex items-center space-x-2 pl-[22px]">
                  <a href="tel:+584124955404" className="hover:text-blue-700 font-mono">+58 (412) 495-5404</a>
                </div>
                <div className="flex items-center space-x-2 pl-[22px]">
                  <a href="tel:+584122058036" className="hover:text-blue-700 font-mono">+58 (412) 205-8036</a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-blue-500" />
                <span>orteganoasociados@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-blue-500" />
                <span>Guanare, Edo. Portuguesa / Presencial & Virtual</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
