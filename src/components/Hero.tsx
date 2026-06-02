import { motion } from 'motion/react';
import { ShieldCheck, Scale, ChevronRight, BookOpen } from 'lucide-react';
import heroImage from '../assets/images/hero_law_and_finance.png';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden" id="inicio">
      {/* Decorative vector meshes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content / Left panel */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-blue-900/40 border border-blue-550/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase max-w-fit"
            >
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Escritorio de Vanguardia</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                La unión precisa de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 font-serif">Leyes y Finanzas</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl"
              >
                En <strong className="text-white font-semibold">Ortegano & Asociados</strong> respaldamos su contabilidad con el mayor rigor técnico y brindamos
                <span className="text-sky-300 font-semibold"> blindaje legal tributario</span> para proteger su patrimonio empresarial.
              </motion.p>
            </div>

            {/* Action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row space-y-3.5 sm:space-y-0 sm:space-x-4 pt-2"
            >
              <button
                onClick={() => onNavigate('servicios')}
                className="bg-blue-700 hover:bg-blue-600 active:scale-[0.98] text-white font-semibold text-sm px-7 py-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg transition-all cursor-pointer"
                id="btn-hero-servicios"
              >
                <span>Nuestros Servicios</span>
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => onNavigate('contacto')}
                className="bg-slate-800/80 hover:bg-slate-700 hover:text-white text-slate-200 active:scale-[0.98] font-semibold text-sm px-7 py-4 rounded-lg flex items-center justify-center space-x-2 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
                id="btn-hero-contacto-directo"
              >
                <Scale size={16} className="text-sky-400" />
                <span>Consulta Inicial Gratuita</span>
              </button>
            </motion.div>

            {/* Micro stats banner */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800 max-w-lg"
              id="hero-stats-grid"
            >
              <div className="space-y-1">
                <p className="font-mono text-2xl sm:text-3xl font-bold text-blue-400 tracking-tight">20+</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">Años Experiencia</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">100%</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">Cumplimiento Legal</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-2xl sm:text-3xl font-bold text-sky-400 tracking-tight">100%</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">Secreto Profesional</p>
              </div>
            </motion.div>

          </div>

          {/* Image presentation / Right panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
            id="hero-image-panel"
          >
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-750 bg-slate-800 p-2.5">
              <div className="absolute top-4 left-4 bg-slate-900/95 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700 flex items-center space-x-2 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono font-medium tracking-wide text-slate-300 uppercase">Consultas Abiertas 2026</span>
              </div>
              
              <img 
                src={heroImage} 
                alt="Ortegano & Asociados Corporativo" 
                className="w-full h-auto aspect-[16/10] lg:aspect-[4/3] object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />

              {/* Float badge bottom */}
              <div className="absolute bottom-6 right-6 left-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 flex items-center justify-between z-20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/10 text-blue-450 rounded-lg">
                    <BookOpen size={18} className="text-blue-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-white">Asesoría Jurídico-Contable</p>
                    <p className="text-[10px] text-slate-400">Protección legal y cumplimiento fiscal</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-slate-800 text-[10px] text-blue-300 font-mono py-1 px-2.5 rounded-md border border-slate-700">
                    Nivel 100% Conforme
                  </span>
                </div>
              </div>
            </div>
            
            {/* Subtle decorative lights */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
