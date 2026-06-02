import { Scale, Code, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import logoOAW from '../assets/images/logo_OA_W.png';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900" id="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main upper layout split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-900 pb-12">
          
          {/* 1. Brand statement and logo (Left column: 5 grid span) */}
          <div className="md:col-span-5 space-y-6 text-left" id="footer-brand">
            <div className="flex items-center">
              <img 
                src={logoOAW} 
                alt="Logo Ortegano & Asociados" 
                className="w-64 h-64 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Escritorio Jurídico-Contable especializado en brindar soluciones integrales de auditoría, gestión financiera y defensa tributaria para el sector empresarial.
            </p>

            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:text-white hover:border-slate-700 transition-all"
                aria-label="GitHub de la Empresa"
              >
                <Github size={16} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:text-white hover:border-slate-700 transition-all"
                aria-label="LinkedIn de la Empresa"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* 2. Direct Navigation links (Center column: 3 grid span) */}
          <div className="md:col-span-3 text-left space-y-4" id="footer-links-col">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-widest font-mono">
              Navegación
            </p>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Portada / Inicio', id: 'inicio' },
                { label: 'Servicios de Escritorio', id: 'servicios' },
                { label: 'Perfil de los Socios', id: 'perfil' },
                { label: 'Preguntas Frecuentes', id: 'faq' },
                { label: 'Contacto Directo', id: 'contacto' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-white flex items-center space-x-1 hover:translate-x-1 cursor-pointer transition-all focus:outline-none"
                    id={`footer-btn-${link.id}`}
                  >
                    <span className="text-blue-500 mr-1">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Operational Coordinates (Right column: 4 grid span) */}
          <div className="md:col-span-4 text-left space-y-4" id="footer-coordinates-col">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-widest font-mono">
              Contacto y Oficinas
            </p>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-blue-500 shrink-0 mt-0.5" />
                <span>Sector Los Próceres. Guanare, Estado Portuguesa, Venezuela. Atendiendo de forma presencial y virtual.</span>
              </li>
              <li className="space-y-1.5 text-left">
                <div className="flex items-center space-x-2.5">
                  <Phone size={16} className="text-blue-500 shrink-0" />
                  <a href="tel:+582572539969" className="hover:text-white font-mono hover:underline font-bold">
                    +58 (257) 253-9969
                  </a>
                </div>
                <div className="flex items-center space-x-2.5 pl-[26px]">
                  <a href="tel:+584124955404" className="hover:text-white font-mono hover:underline font-bold">
                    +58 (412) 495-5404
                  </a>
                </div>
                <div className="flex items-center space-x-2.5 pl-[26px]">
                  <a href="tel:+584122058036" className="hover:text-white font-mono hover:underline font-bold">
                    +58 (412) 205-8036
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail size={16} className="text-blue-500 shrink-0" />
                <a href="mailto:orteganoasociados@gmail.com" className="hover:text-white hover:underline break-all">
                  orteganoasociados@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower row: Copyright and legal statements */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] text-slate-500 gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p>© {currentYear} Ortegano & Asociados. Todos los derechos reservados.</p>
            <p className="text-[10px] text-slate-600">
              Servicios Contables Visados conforme a CPC / Servicios Legales conformes al Colegio de Abogados de Venezuela.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-[10px]">
            <span className="bg-slate-900 border border-slate-850 px-2.5 py-1 rounded text-blue-500 font-mono">
              Optimizado para GitHub Pages
            </span>
            <span className="bg-slate-900 border border-slate-850 px-2.5 py-1 rounded text-blue-500 font-mono">
              Static App v1.3
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
