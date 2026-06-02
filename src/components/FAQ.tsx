import { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header headings */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-blue-700 uppercase tracking-widest text-xs font-bold font-mono">
            Respuestas Claras
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Es normal tener dudas al renovar los sistemas corporativos e integrar contabilidad con ingeniería de software. Aquí aclaramos los aspectos metodológicos y operacionales más importantes.
          </p>
        </div>

        {/* Collapsible Accordion items list */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-300"
                id={`faq-item-${idx}`}
              >
                {/* Accordion header button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100/50 transition-colors cursor-pointer focus:outline-none"
                  id={`btn-faq-toggle-${idx}`}
                >
                  <div className="flex items-start space-x-3.5 pr-4">
                    <HelpCircle size={18} className="text-blue-500 shrink-0 mt-1" />
                    <span className="font-serif text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-500 shrink-0" />
                  )}
                </button>

                {/* Collapsible content pane */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-left border-t border-slate-200/40" id={`faq-answer-panel-${idx}`}>
                    <p className="text-slate-650 text-xs sm:text-sm leading-relaxed pl-8 font-medium">
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Action Link below */}
        <div className="text-center mt-12 p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3 max-w-xl mx-auto">
          <p className="text-xs text-slate-400">¿Tiene otra inquietun muy particular sobre su software o auditoría fiscal?</p>
          <a
            href="#contacto"
            className="inline-block text-xs font-bold text-blue-400 hover:text-blue-300 uppercase tracking-widest hover:underline"
          >
            Preguntar directamente a un socio especialista →
          </a>
        </div>

      </div>
    </section>
  );
}
