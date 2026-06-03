import { Service, TeamMember, Testimonial } from './types';
import glyImage from './assets/images/gly.png';
import geraImage from './assets/images/gera.png';

export const SERVICES: Service[] = [
  // Contador Público
  {
    id: 'contabilidad-general',
    category: 'accounting',
    title: 'Contabilidad General y Fiscal',
    description: 'Gestión contable integral con cumplimiento estricto de las normativas vigentes.',
    longDescription: 'Mantenemos sus estados financieros al día sirviendo como el motor de toma de decisiones corporativas. Nos encargamos de registros continuos, balances de comprobación y la estructuración contable óptima para su negocio.',
    iconName: 'BookOpen',
    features: [
      'Declaración mensual y anual de impuestos (ISLR, IVA, Retenciones)',
      'Preparación de Estados Financieros bajo normas VEN-NIF / NIIF',
      'Libros de compra y venta legalizados',
      'Contabilidad de costos para empresas industriales y de servicio'
    ]
  },
  {
    id: 'auditoria-financiera',
    category: 'accounting',
    title: 'Auditoría Financiera y de Gestión',
    description: 'Evaluación y dictamen transparente de sus operaciones financieras.',
    longDescription: 'Evaluamos la razonabilidad de sus estados financieros y la eficiencia de sus controles internos. Entregamos informes de auditoría detallados y cartas de recomendaciones orientadas a mitigar riesgos de fraude u omisión.',
    iconName: 'CheckSquare',
    features: [
      'Auditorías financieras independientes',
      'Evaluación del sistema de control interno',
      'Dictámenes de estados financieros para entidades bancarias',
      'Revisiones limitadas e informes de aseguramiento'
    ]
  },
  // Asesoría Jurídica
  {
    id: 'defensa-fiscal',
    category: 'legal',
    title: 'Defensa y Asesoría Legal-Tributaria',
    description: 'Representación jurídica corporativa y defensa en procedimientos fiscales.',
    longDescription: 'Brindamos protección jurídica ante auditorías de entes fiscales nacionales o municipales. Diseñamos alternativas de planificación fiscal totalmente apegadas a la ley para estructurar su patrimonio corporativo.',
    iconName: 'Scale',
    features: [
      'Atención y descargos de actas de reparo fiscal',
      'Recursos jerárquicos y contenciosos tributarios',
      'Planificación fiscal preventiva para grupos empresariales',
      'Constitución, fusión y liquidación de sociedades mercantiles'
    ]
  },
  {
    id: 'derecho-laboral-corporativo',
    category: 'legal',
    title: 'Derecho Laboral y Contractual',
    description: 'Redacción de contratos comerciales y blindaje legal de relaciones laborales.',
    longDescription: 'Prevemos conflictos laborales mediante el correcto encuadre normativo. Redactamos y visamos contratos comerciales de alta complejidad para garantizar la seguridad legal de sus actividades y convenios mercantiles.',
    iconName: 'FileText',
    features: [
      'Cálculo de prestaciones sociales y convenios de liquidación',
      'Asesoría en inspecciones del trabajo y solvencias laborales',
      'Redacción de contratos de distribución y confidencialidad (NDA)',
      'Auditoría preventiva de cumplimiento de deberes formales patronales'
    ]
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'gerly-ortegano',
    name: 'Lcdo. Gerly Ortegano',
    role: 'Socio Fundador - Área Contable y Fiscal',
    credentials: [
      'Contador Público Colegiado',
      'Especialista en Fiscalidad y Cumplimiento Tributario',
      'Asesor Contable para Empresas Comerciales e Industriales'
    ],
    bio: 'Profesional de la contaduría pública con amplia trayectoria en la gestión contable integral, auditoría financiera y asesoría fiscal para empresas comerciales, industriales y de servicios. Comprometido con el rigor técnico, la honestidad profesional y el cumplimiento estricto de las normativas tributarias vigentes.',
    experienceYears: 18,
    education: [
      'Licenciado en Contaduría Pública (UNELLEZ)',
      'Colegio de Contadores Públicos del Estado Portuguesa - Miembro Activo'
    ],
    imageUrl: glyImage
  },
  {
    id: 'gerardo-ortegano',
    name: 'Abog. Gerardo Ortegano',
    role: 'Socio Fundador - Área Jurídica',
    credentials: [
      'Abogado en Libre Ejercicio',
      'Educador'
    ],
    bio: 'Profesional del derecho con amplia trayectoria en el libre ejercicio, especializado en la resolución de conflictos, gestión legal y asesoría integral en materia civil y mercantil. Se destaca por brindar una orientación estratégica en la estructuración de contratos y el cumplimiento normativo, garantizando seguridad jurídica a empresas y particulares mediante una defensa sólida de sus intereses patrimoniales.',
    experienceYears: 20,
    education: [
      'Derecho (UNELLEZ)',
      'Educación Integral (Colegio Universitario Fermín Toro)',
      'Colegio de Abogados del Estado Portuguesa - Miembro Activo'
    ],
    imageUrl: geraImage
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Ing. Alejandro Gómez',
    company: 'Distribuidora Alimentos del Mar, C.A.',
    role: 'Director de Operaciones',
    content: 'Ortegano & Asociados ha sido clave para el cumplimiento fiscal de nuestra empresa. El Lcdo. Gerly gestionó nuestros procesos contables con total pulcritud y el Abog. Gerardo nos orientó en la estructuración legal de nuestros contratos comerciales. Un escritorio de altísima confianza.',
    rating: 5,
    serviceCategory: 'Contabilidad / Legal'
  },
  {
    id: 'test-2',
    clientName: 'Lic. Patricia Benítez',
    company: 'Consorcio Manufacturero Industrial Metalúrgico',
    role: 'Gerente General de Finanzas',
    content: 'Su labor de auditoría financiera fue impecable. Detectaron inconsistencias contables críticas, regularizaron nuestros libros y nos defendieron ante una fiscalización del SENIAT con resultados favorables. Profesionales de primera categoría.',
    rating: 5,
    serviceCategory: 'Auditoría / Asesoría Fiscal'
  }
];

export const FAQS = [
  {
    question: '¿Por qué contratar un escritorio que une leyes y contabilidad?',
    answer: 'Generalmente las empresas deben contratar proveedores distintos que no se comunican entre sí: un abogado tributarista y un contador. En Ortegano & Asociados eliminamos esa brecha. Entendemos las leyes mercantiles y estructuramos la contabilidad de forma integral, ofreciendo una visión unificada para proteger y ordenar su patrimonio corporativo.'
  },
  {
    question: '¿Qué incluye el servicio de auditoría financiera?',
    answer: 'Nuestra auditoría cubre la evaluación de la razonabilidad de sus estados financieros, la revisión del sistema de control interno, la detección de inconsistencias contables y la emisión de informes con recomendaciones. Trabajamos bajo normas VEN-NIF y emitimos dictámenes válidos ante entidades bancarias y entes reguladores.'
  },
  {
    question: '¿Ofrecen asesoramiento y auditoría remoto o presencial?',
    answer: 'Ambos. Brindamos soporte y asesoría de forma virtual para clientes en toda Venezuela y en el exterior, coordinando citas presenciales en nuestras oficinas de Guanare para revisiones de libros físicos, firmas de asambleas de socios y despachos de defensa legal fiscal.'
  },
  {
    question: '¿Cómo funciona la defensa ante una auditoría o fiscalización del SENIAT?',
    answer: 'Nuestro equipo jurídico-contable evalúa el acta de reparo o notificación fiscal, prepara los descargos correspondientes, y representa a su empresa ante los entes competentes. Diseñamos estrategias de planificación fiscal preventiva para evitar contingencias futuras, siempre dentro del marco legal vigente.'
  }
];
