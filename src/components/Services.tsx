import { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceCategory: string) => void;
}

export default function Services({ onSelectServiceForQuote }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'accounting' | 'legal' | 'informatics' | 'software'>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Servicios', icon: 'Layers' },
    { id: 'accounting', label: 'Contaduría Pública', icon: 'BookOpen' },
    { id: 'legal', label: 'Escritorio Jurídico', icon: 'Scale' },
    { id: 'informatics', label: 'Informática Admin', icon: 'Cpu' },
    { id: 'software', label: 'Software a Medida', icon: 'FileCode' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  // Helper dynamic rendering of icons
  const renderIcon = (iconName: string, className: string = "w-6 h-6 text-blue-600") => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} size={22} />;
    }
    return <LucideIcons.HelpCircle className={className} size={22} />;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'accounting': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'legal': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'informatics': return 'bg-sky-50 text-sky-700 border-sky-100';
      case 'software': return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'accounting': return 'Contaduría Pública';
      case 'legal': return 'Legal / Tributario';
      case 'informatics': return 'Informática Administrativa';
      case 'software': return 'Software ERP Corporativo';
      default: return '';
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-blue-700 uppercase tracking-widest text-xs font-bold font-mono">
            Especialización Multisectorial
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Nuestros Servicios Profesionales
          </h3>
          <p className="text-slate-600 text-base sm:text-lg">
            Cubrimos todas las aristas de su negocio. Desde la contabilidad y el marco fiscal, hasta la auditoría de sistemas e ingeniería de software corporativo a medida.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="services-tabs-bar">
          {categories.map((cat) => {
            const Icon = (LucideIcons as any)[cat.icon] || LucideIcons.Layers;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  setExpandedService(null);
                }}
                className={`flex items-center space-x-2.5 px-5 py-3 rounded-full text-xs font-semibold tracking-wide border cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? 'bg-slate-950 text-white border-slate-950 shadow-md scale-[1.03]' 
                    : 'bg-white text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                }`}
                id={`services-tab-btn-${cat.id}`}
              >
                <Icon size={14} className={isActive ? 'text-blue-450' : 'text-slate-400'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid layout */}
        <div 
          className="grid md:grid-cols-2 gap-8"
          id="services-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const isExpanded = expandedService === service.id;
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  key={service.id}
                  className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  id={`service-card-${service.id}`}
                >
                  <div className="space-y-6">
                    
                    {/* Header Card Row */}
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-slate-900 text-blue-500 rounded-xl shadow-inner-sm">
                        {renderIcon(service.iconName, "text-blue-500")}
                      </div>
                      <span className={`text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded-md border ${getCategoryColor(service.category)}`}>
                        {getCategoryLabel(service.category)}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-2 text-left">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {service.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div className="border-t border-slate-100 pt-5 text-left">
                      <p className="text-slate-800 text-xs font-semibold uppercase tracking-widest mb-3">
                        ¿Qué incluye este servicio?
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-xs text-slate-600">
                            <span className="p-0.5 bg-blue-500/10 text-blue-750 rounded-md mr-2.5 mt-0.5 shrink-0">
                              <LucideIcons.Check size={11} className="stroke-[3]" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expanded view for longer corporate descriptions */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-slate-100 text-left overflow-hidden"
                          id={`service-expanded-${service.id}`}
                        >
                          <p className="text-xs text-slate-400 uppercase font-mono tracking-widest font-semibold mb-1">
                            Análisis Profundo / Valor Añadido
                          </p>
                          <p className="text-sm text-slate-600 leading-relaxed font-sans pr-2">
                            {service.longDescription}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                  {/* Footer Action buttons on card */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="flex-1 text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-semibold text-xs py-3 border border-slate-200 rounded-lg flex items-center justify-center space-x-1 cursor-pointer transition-colors"
                      id={`btn-service-detail-${service.id}`}
                    >
                      <span>{isExpanded ? 'Ocultar Detalle' : 'Ver Detalles'}</span>
                      <LucideIcons.ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <button
                      onClick={() => onSelectServiceForQuote(service.category)}
                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-blue-400 hover:text-blue-300 font-bold text-xs py-3 rounded-lg flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm transition-all"
                      id={`btn-service-quote-${service.id}`}
                    >
                      <LucideIcons.Send size={12} />
                      <span>Cotizar Servicio</span>
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
