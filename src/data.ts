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
  // Informática Administrativa
  {
    id: 'auditoria-sistemas-admin',
    category: 'informatics',
    title: 'Auditoría e Informática Administrativa',
    description: 'Evaluación de sus flujos informáticos contables y sistemas de gestión.',
    longDescription: 'Analizamos cómo fluyen sus datos desde la facturación hasta el asiento contable diario. Detectamos cuellos de botella en su software actual (Saint, Profit, SAP, etc.) y reestructuramos los flujos de información contable.',
    iconName: 'Cpu',
    features: [
      'Diagnóstico de integridad de base de datos administrativas',
      'Conciliación automatizada de inventarios y cuentas por cobrar',
      'Optimización de planes de cuentas integrados a sistemas administrativos',
      'Consultoría para migración exitosa entre sistemas ERP'
    ]
  },
  // Desarrollo de Software Administrativo
  {
    id: 'software-medida-erp',
    category: 'software',
    title: 'Sistemas ERP y Software Administrativo a Medida',
    description: 'Diseño e implementación de sistemas adaptados al 100% a sus procesos.',
    longDescription: 'Evite pagar licencias genéricas costosas que no se adaptan a su realidad operativa. Desarrollamos plataformas web de facturación, almacén, cuentas por pagar y reportes contables que se integran de forma nativa a sus libros de contabilidad.',
    iconName: 'FileCode',
    features: [
      'Plataformas web multiusuario e instalables localmente',
      'Módulos inteligentes de facturación con retención de IVA e ISLR automatizada',
      'Gestión de inventarios multidepósito con alertas críticas',
      'Soporte técnico directo y mantenimiento continuo del código'
    ]
  },
  {
    id: 'dashboard-bi',
    category: 'software',
    title: 'Dashboards de Analítica y Business Intelligence',
    description: 'Visualización interactiva en tiempo real sobre la salud de su empresa.',
    longDescription: 'Transformamos datos fríos de sus sistemas contables o bases de datos en gráficos interactivos que le permiten monitorear márgenes de ganancia, rotación de inventarios y flujo de caja neto en tiempo real desde cualquier dispositivo.',
    iconName: 'TrendingUp',
    features: [
      'Conexión segura a sus bases de datos SQL o archivos de hojas de datos',
      'Indicadores de rendimiento clave (KPIs) financieros automáticos',
      'Reportes gerenciales exportables a PDF con un solo clic',
      'Tableros amigables diseñados para directores y gerentes'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'gerly-ortegano',
    name: 'Lcdo. Gerly Ortegano',
    role: 'Socio Fundador - Área Tecnológico-Contable',
    credentials: [
      'Contador Público Colegiado',
      'Desarrollador de Software y Automatización',
      'Especialista en Sistemas e Infraestructura Linux'
    ],
    bio: 'Profesional de la contaduría pública especializado en la automatización de procesos fiscales, gestión de datos y desarrollo de soluciones tecnológicas aplicadas a los negocios. Líder en la modernización de flujos de trabajo e implementación de herramientas digitales orientadas al cumplimiento tributario y corporativo.',
    experienceYears: 18,
    education: [
      'Universidad Nacional Abierta - Licenciado en Contaduría Pública (UNELLEZ)',
      'Colegio de Contadores Públicos del Estado Portuguesa - Miembro Activo',
      'Tecnologías y Lenguajes de Programación - (Especialización Autónoma)'
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
    bio: 'Profesional del derecho, especializado en resolución de conflictos, Gestión, Derecho civil y mercantil.',
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
    content: 'Ortegano & Asociados revolucionó nuestra empresa. El Lcdo. Gerly automatizó nuestros procesos fiscales de forma impecable, y luego el Ing. Gabriel potenció nuestro sistema de inventarios y facturación a medida. Pasamos de cuadrar inventarios manualmente a tener un flujo administrativo 100% integrado.',
    rating: 5,
    serviceCategory: 'Desarrollo de Software / Legal'
  },
  {
    id: 'test-2',
    clientName: 'Lic. Patricia Benítez',
    company: 'Consorcio Manufacturero Industrial Metalúrgico',
    role: 'Gerente General de Finanzas',
    content: 'Su labor de auditoría financiera fue impecable, pero lo que realmente destaca es su conocimiento en Informática de Sistemas. Corrigieron inconsistencias trágicas en las bases de datos de nuestro antiguo ERP y automatizaron las retenciones de IVA, ahorrando dos semanas de trabajo manual al mes.',
    rating: 5,
    serviceCategory: 'Informática Administrativa / Contaduría'
  }
];

export const FAQS = [
  {
    question: '¿Por qué contratar un escritorio que une leyes, contabilidad y tecnología?',
    answer: 'Generalmente las empresas deben contratar tres proveedores distintos que no se comunican entre sí: un abogado tributarista, un contador y un programador de software. En Ortegano & Asociados eliminamos esa brecha. Entendemos las leyes mercantiles, estructuramos la contabilidad y desarrollamos las herramientas informáticas exactas para operar eficientemente.'
  },
  {
    question: '¿Cómo funciona el desarrollo de software administrativo a medida?',
    answer: 'Primero hacemos una consultoría de informática administrativa sin costo inicial para evaluar sus procesos actuales. Luego diseñamos el flujo óptimo, codificamos el software, migramos los datos contables antiguos y capacitamos a su personal. Todo el software cumple automáticamente con las regulaciones de facturación y retenciones del país.'
  },
  {
    question: '¿Ofrecen asesoramiento y auditoría remoto o presencial?',
    answer: 'Ambos. Brindamos soporte digital mediante plataformas en la nube de alta seguridad para toda América Latina y España, coordinando citas presenciales en nuestras oficinas principales para revisiones de libros físicos, firmas de asambleas de socios y despachos de defensa legal fiscal.'
  },
  {
    question: '¿De qué tecnologías hacen uso para el desarrollo de software?',
    answer: 'Desarrollamos soluciones web modernas de alto rendimiento usando React, Node.js y bases de datos SQL locales o nube que garantizan cero cuellos de botella informáticos. Son sistemas diseñados para ejecutarse sin fallar y con interfaces sumamente intuitivas para secretarias, analistas y gerentes.'
  }
];
