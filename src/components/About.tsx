import { TEAM_MEMBERS } from '../data';
import { motion } from 'motion/react';
import { Award, GraduationCap, ShieldCheck, Bookmark, Scale, Code } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="perfil">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-blue-700 uppercase tracking-widest text-xs font-bold font-mono">
            Estructura Corporativa
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Perfil Profesional de los Socios Directores
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Nuestro escritorio está liderado por profesionales con credenciales académicas verificables y una amplia trayectoria defendiendo los intereses tributarios y modernizando la gestión de empresas comerciales, industriales y de servicios.
          </p>
        </div>

        {/* Corporate Credo Section */}
        <div className="grid md:grid-cols-3 gap-8 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/60 mb-16 items-center text-left" id="credo-panel">
          <div className="md:col-span-2 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-slate-200 text-slate-800 text-[10px] font-mono tracking-widest uppercase font-bold px-3 py-1 rounded-full">
              <ShieldCheck size={12} className="text-blue-600" />
              <span>Garantía de Compromiso Ético</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Honestidad, Rigor Técnico y Transparencia Operativa
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              En <strong className="text-slate-800 font-semibold">Ortegano & Asociados</strong>, entendemos que la contabilidad y el marco tributario de un negocio exigen la máxima pulcritud ética y un compromiso inquebrantable con la legalidad. Nuestro enfoque se centra en proporcionar seguridad financiera y respaldo jurídico sólido para que su empresa crezca sobre bases firmes y transparentes.
            </p>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8 space-y-4">
            <div className="flex items-start space-x-3 text-xs text-slate-600">
              <Scale size={18} className="text-blue-500 shrink-0 mt-0.5" />
              <span>Protección legal continua bajo derecho privado, civil y mercantil nacional.</span>
            </div>
            <div className="flex items-start space-x-3 text-xs text-slate-600">
              <ShieldCheck size={18} className="text-blue-500 shrink-0 mt-0.5" />
              <span>Independencia contable conforme a normas vigentes (VEN-NIF / CPC).</span>
            </div>
          </div>
        </div>

        {/* Partners Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-12" id="partners-experience-cards">
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              key={member.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row"
              id={`partner-card-${member.id}`}
            >
              
              {/* Partner Portrait image */}
              <div className="md:w-2/5 relative aspect-[4/5] md:aspect-auto md:min-h-[320px]">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Years badge */}
                <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-slate-700 font-mono text-xs text-white z-10 flex items-center space-x-1.5">
                  <Award size={13} className="text-blue-400" />
                  <span>{member.experienceYears} años experiencia</span>
                </div>
              </div>

              {/* Partner Info Details */}
              <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-between text-left">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 font-mono mt-1">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic border-l-2 border-slate-200 pl-3">
                    "{member.bio}"
                  </p>

                  {/* High Quality credentials lists */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-800 uppercase tracking-widest font-mono">
                      <GraduationCap size={14} className="text-blue-500" />
                      <span>Formación y Registro</span>
                    </div>
                    <ul className="space-y-1.5">
                      {member.credentials.map((cred, idx) => (
                        <li key={idx} className="flex items-start text-xs text-slate-600 font-medium font-sans">
                          <span className="text-blue-500 mr-2 shrink-0">•</span>
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Academic Studies */}
                  <div className="space-y-1 pt-1">
                    <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-800 uppercase tracking-widest font-mono">
                      <Bookmark size={13} className="text-blue-500" />
                      <span>Estudios Superiores</span>
                    </div>
                    <ul className="space-y-1">
                      {member.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start text-[11px] text-slate-500 font-sans">
                          <span className="text-emerald-500 mr-1.5 font-bold">✔</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
