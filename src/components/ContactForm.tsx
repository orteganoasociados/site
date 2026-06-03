import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { SITE_URL } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle2, Trash2, Shield, Radio, MessageSquare } from 'lucide-react';
import { ContactInquiry } from '../types';

interface ContactFormProps {
  preFilledDetails: {
    serviceCategory: string;
    message: string;
    estimatedBudget?: number;
  } | null;
  onClearPreFill: () => void;
}

export default function ContactForm({ preFilledDetails, onClearPreFill }: ContactFormProps) {
  const [formData, setFormData] = useState<Omit<ContactInquiry, 'id'>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    serviceCategory: 'accounting',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Real persistence of contact inquiries to demonstrate dynamic responsive static pages!
  const [savedInquiries, setSavedInquiries] = useState<ContactInquiry[]>([]);

  useEffect(() => {
    // Load previously simulated entries
    const saved = localStorage.getItem('ortegano_inquiries');
    if (saved) {
      try {
        setSavedInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing inquiries', e);
      }
    }
  }, []);

  // Listen to outer prefill actions (from calculator or service cards)
  useEffect(() => {
    if (preFilledDetails) {
      setFormData(prev => ({
        ...prev,
        serviceCategory: preFilledDetails.serviceCategory,
        message: preFilledDetails.message + (preFilledDetails.estimatedBudget ? `\n\nPresupuesto estimado: ~$${preFilledDetails.estimatedBudget} USD.` : '')
      }));
      
      // Scroll smoothly to contact section if prefilled
      const element = document.getElementById('contacto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preFilledDetails]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleClearPreFillLocal = () => {
    setFormData(prev => ({ ...prev, message: '', serviceCategory: 'accounting' }));
    onClearPreFill();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone || !formData.message) {
      alert('Por favor complete los campos obligatorios (*).');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API network latency of static page sending request
    setTimeout(() => {
      const newInquiry: ContactInquiry = { ...formData };
      const updatedList = [newInquiry, ...savedInquiries];
      
      localStorage.setItem('ortegano_inquiries', JSON.stringify(updatedList));
      setSavedInquiries(updatedList);
      setIsSubmitting(false);
      setShowSuccess(true);
      onClearPreFill(); // clean active outer state trigger
      
      // Reset form variables
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        businessName: '',
        serviceCategory: 'accounting',
        message: ''
      });
    }, 1200);
  };

  const deleteInquiry = (indexToDelete: number) => {
    const updated = savedInquiries.filter((_, idx) => idx !== indexToDelete);
    localStorage.setItem('ortegano_inquiries', JSON.stringify(updated));
    setSavedInquiries(updated);
  };

  // Generate whatsapp message API template
  const getWhatsAppLink = (phoneNum: string = '584124955404') => {
    const text = encodeURIComponent(`Hola Ortegano & Asociados, les escribo desde su sitio web (${SITE_URL}). Visita nuestra web y solicita una consulta inicial para mi negocio.`);
    return `https://wa.me/${phoneNum}?text=${text}`;
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-blue-705 uppercase tracking-widest text-xs font-bold font-mono">
            Canales de Enlace
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Inicie su Consulta Inicial Gratuita
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            No deje sus decisiones tributarias o legales al azar. Envíenos sus datos y un socio principal evaluará su caso para agendar una sesión de trabajo presencial o virtual.
          </p>
        </div>

        {/* Outer Split layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start" id="contact-split-container">
          
          {/* Contact Details / Left side */}
          <div className="lg:col-span-5 space-y-8 text-left" id="contact-coordinates">
            
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
              <h4 className="font-serif text-lg sm:text-xl font-bold tracking-tight border-b border-slate-800 pb-3">
                Oficinas y Coordenadas
              </h4>

              <div className="space-y-5">
                {/* Physical address */}
                <div className="flex items-start space-x-3.5 text-xs sm:text-sm">
                  <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-200">Sede Principal Física:</p>
                    <p className="text-slate-400 font-normal leading-relaxed">
                      Sector Los Próceres, Guanare, Estado Portuguesa, Venezuela.
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start space-x-3.5 text-xs sm:text-sm">
                  <Phone size={20} className="text-blue-500 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-left w-full">
                    <p className="font-semibold text-slate-200">Teléfonos de Contacto:</p>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-x-2">
                        <a href="tel:+582572539969" className="text-blue-400 font-mono font-bold hover:underline">
                          +58 (257) 253-9969
                        </a>
                        <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">(Sede Central)</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2">
                        <a href="tel:+584124955404" className="text-blue-400 font-mono font-bold hover:underline">
                          +58 (412) 495-5404
                        </a>
                        <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">(Móvil / WhatsApp)</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2">
                        <a href="tel:+584122058036" className="text-blue-400 font-mono font-bold hover:underline">
                          +58 (412) 205-8036
                        </a>
                        <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">(Móvil / WhatsApp)</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500">Lunes a Viernes de 8:00 AM a 5:00 PM (HLV)</p>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex items-start space-x-3.5 text-xs sm:text-sm">
                  <Mail size={20} className="text-blue-505 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-200">Correo Corporativo Oficial:</p>
                    <a href="mailto:orteganoasociados@gmail.com" className="text-blue-450 font-medium hover:underline block break-all">
                      orteganoasociados@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Instant Whatsapp box */}
              <div className="pt-4 border-t border-slate-850">
                <p className="text-[11px] text-slate-550 uppercase tracking-wider font-bold mb-3">¿Prefiere mensajería instantánea?</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <a
                    href={getWhatsAppLink('584124955404')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-605 hover:bg-emerald-700 hover:text-white px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 transition-all text-center border border-emerald-500"
                    id="btn-whatsapp-direct-1"
                  >
                    <MessageSquare size={13} />
                    <span>WhatsApp 1</span>
                  </a>
                  <a
                    href={getWhatsAppLink('584122058036')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 hover:text-white px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 transition-all text-center"
                    id="btn-whatsapp-direct-2"
                  >
                    <MessageSquare size={13} />
                    <span>WhatsApp 2</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Security Guarantee Badge panel */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left space-y-3.5">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-slate-100 text-blue-600 rounded-lg">
                  <Shield size={18} />
                </div>
                <h5 className="font-serif text-sm font-bold text-slate-900 uppercase tracking-tight">Política de Secreto Profesional</h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toda la información mercantil, balances contables preliminares y nombres de socios aquí compartidos están amparados estrictamente bajo el <strong>Secreto Profesional Contable y Abogadil</strong>. Ninguna base de datos se expone de forma pública de conformidad con las leyes vigentes.
              </p>
            </div>

          </div>

          {/* Contact Form panel / Right side */}
          <div className="lg:col-span-7" id="contact-form-panel">
            
            <form onSubmit={handleSubmit} className="bg-white border border-slate-250 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm text-left">
              
              {/* Pre-fill alert if active */}
              {preFilledDetails && (
                <div className="p-3.5 bg-blue-500/10 border border-blue-550/30 rounded-lg flex justify-between items-center text-xs text-blue-900 font-medium animate-pulse" id="prefill-applied-alert">
                  <span>✔ Datos de servicio cargados automáticamente de forma personalizada.</span>
                  <button 
                    type="button" 
                    onClick={handleClearPreFillLocal}
                    className="text-[10px] uppercase font-bold text-slate-705 hover:text-slate-950 border border-slate-350 bg-white px-2 py-0.5 rounded-md hover:shadow-inner"
                  >
                    Deshacer
                  </button>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* First Name */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-slate-700 block">Nombres <span className="text-blue-650">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Ej. Carlos Javier"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-slate-700 block">Apellidos <span className="text-blue-650">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Ej. Ortegano"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>

              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* Email */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-slate-700 block">Correo Electrónico <span className="text-blue-650">*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ejemplo@empresa.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-slate-700 block">Teléfono Móvil / Oficina <span className="text-blue-650">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Ej. +58 (412) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>

              </div>

              {/* Business name (optional) */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-slate-700 block">Nombre de su Comercio o Empresa <span className="text-slate-400">(Opcional)</span></label>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Ej. Distribuidora Ortegano, C.A."
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Service Category Selection */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-slate-700 block">Tipo de Requerimiento Principal <span className="text-blue-650">*</span></label>
                <select
                  name="serviceCategory"
                  value={formData.serviceCategory}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-250 rounded-lg p-3 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-0 transition-colors cursor-pointer"
                >
                  <option value="accounting">Contabilidad de Ley y Fiscalidad Mensual</option>
                  <option value="legal">Asistencia de Escritorio Jurídico (Defensa Fiscal / Contratos)</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-slate-700 block">Descripción Breve o Consulta <span className="text-blue-650">*</span></label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describa brevemente su requerimiento actual para preparar la agenda de trabajo..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs py-4 px-8 rounded-lg flex items-center justify-center space-x-2 cursor-pointer transition-all disabled:bg-slate-400"
                  id="btn-submit-contacto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      <span>Procesando Consulta...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Solicitud</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
                <span className="text-[10px] text-slate-500 text-center sm:text-left leading-tight">
                  Al enviar, un correo o mensaje institucional será preparado para su atención inmediata en menos de 24 horas hábiles.
                </span>
              </div>

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start space-x-3 mt-4"
                    id="success-message-banner"
                  >
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <div className="space-y-1 text-left">
                      <p className="font-semibold text-emerald-800 text-xs sm:text-sm">¡Consulta enviada con éxito!</p>
                      <p className="text-emerald-700 text-xs">
                        Su requerimiento se ha registrado en nuestra base local simulada. Puede ver el estado de su contacto abajo. Un analista le contactará.
                      </p>
                      <button
                        type="button"
                        onClick={() => setShowSuccess(false)}
                        className="text-[10px] text-emerald-800 underline block pt-1 hover:text-emerald-950"
                      >
                        Entendido / Cerrar aviso
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

        </div>

        {/* Dashboard entries persistent check (ONLY SHOWS IF ENTIRE INQUIRIES LIST IS NOT EMPTY) */}
        {savedInquiries.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-left space-y-6"
            id="simulated-dashboard-entries"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-4 gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="p-1 bg-blue-500/10 text-blue-600 rounded-md">
                    <Radio size={14} className="animate-pulse" />
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-slate-950">
                    Bandeja Interactiva de Consultas Registradas (Demo Local)
                  </h4>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Persiste de forma local en su navegador (localStorage). Útil para verificar que su mensaje se guardó correctamente.
                </p>
              </div>
              <button
                onClick={() => {
                  if (confirm('¿Desea limpiar toda la bandeja local de simulación?')) {
                    localStorage.removeItem('ortegano_inquiries');
                    setSavedInquiries([]);
                  }
                }}
                className="text-[10px] font-bold text-red-600 hover:text-red-800 flex items-center space-x-1 border border-red-100 bg-red-50 px-2.5 py-1.5 rounded-md self-end cursor-pointer"
                id="btn-delete-all-demo"
              >
                <Trash2 size={12} />
                <span>Vaciar demo</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-1" id="demo-inquiries-list">
              {savedInquiries.map((inq, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 relative flex flex-col justify-between"
                  id={`demo-inquiry-item-${index}`}
                >
                  <button 
                    onClick={() => deleteInquiry(index)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors p-1"
                    title="Eliminar consulta"
                    id={`btn-del-demo-${index}`}
                  >
                    <Trash2 size={14} />
                  </button>

                  <div className="space-y-3.5 pr-6">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-800 text-[9px] font-bold px-2 py-0.5 rounded uppercase font-mono">
                        {inq.serviceCategory === 'accounting' && 'Contabilidad'}
                        {inq.serviceCategory === 'legal' && 'Legal Mercantil'}
                      </span>
                      <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-[9px] font-mono font-bold px-2 py-0.5 rounded flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                        <span>Enviado</span>
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <p className="font-bold text-xs sm:text-sm text-slate-900 pr-4">
                        {inq.firstName} {inq.lastName}
                      </p>
                      {inq.businessName && (
                        <p className="text-[11px] text-slate-500 font-medium">
                          Empresa: {inq.businessName}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 bg-white p-2.5 rounded-lg border border-slate-150 leading-relaxed font-sans">
                      {inq.message}
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-3 mt-4 flex justify-between items-center text-[10px] text-slate-500">
                    <div>
                      <p>Tlf: {inq.phone}</p>
                      <p className="break-all">{inq.email}</p>
                    </div>
                    <span className="text-slate-400">ID #{index + 1001}</span>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
}
