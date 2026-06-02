/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [preFilledDetails, setPreFilledDetails] = useState<{
    serviceCategory: string;
    message: string;
    estimatedBudget?: number;
  } | null>(null);

  // Smooth scroll to container with minor offset adjustment
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of our fixed sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Pre-fill fields from service cards or calculator simulation
  const handleSelectServiceForQuote = (category: string) => {
    let customMsg = '';
    if (category === 'accounting') {
      customMsg = 'Deseo cotizar sus servicios de Contabilidad General y Fiscalidad Mensual para mi empresa.';
    } else if (category === 'legal') {
      customMsg = 'Deseo solicitar asistencia de su Escritorio Jurídico para asesoría mercantil o defensa tributaria ante entes estatales.';
    }

    setPreFilledDetails({
      serviceCategory: category,
      message: customMsg
    });
  };

  const handleClearPreFill = () => {
    setPreFilledDetails(null);
  };

  // Scroll detection logic to adjust navigation accent bar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'perfil', 'faq', 'contacto'];
      const scrollPosition = window.scrollY + 180; // adjustment threshold

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900" id="applet-viewport">
      
      {/* Sticky top brand navigation */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      <main className="flex-grow">
        
        {/* Hero introductions area */}
        <Hero onNavigate={handleNavigate} />

        {/* Dynamic services showcase catalog */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Founders team bio profile details */}
        <About />

        {/* Interactive accordion FAQ pane */}
        <FAQ />

        {/* Fully operational persistent Contact client box */}
        <ContactForm 
          preFilledDetails={preFilledDetails} 
          onClearPreFill={handleClearPreFill} 
        />

      </main>

      {/* Structured corporate disclaimers and legal dispatches */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
