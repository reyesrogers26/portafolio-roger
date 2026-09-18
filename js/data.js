/**
 * DATOS DEL PORTAFOLIO - ROGER JOEL RAMIREZ REYES
 * Centralización de información para fácil mantenimiento y personalización.
 */

const portfolioData = {
  profile: {
    name: "Roger Joel Ramirez Reyes",
    shortName: "Roger Ramirez",
    initials: "RR",
    headline: "Estratega Comercial & Creador de Negocios",
    tagline: "Especialista en estructuración de ventas de alto impacto, apertura de nuevos mercados y aceleración de emprendimientos rentables.",
    bio: "Profesional apasionado por el crecimiento empresarial, la psicología de ventas y la creación de nuevos negocios. Con una trayectoria sólida convirtiendo oportunidades en contratos rentables, liderando procesos de negociación de alto valor y construyendo sistemas comerciales escalables y sostenibles.",
    location: "Managua, Nicaragua / Remoto Global",
    phone: "+505 8888-8888",
    whatsapp: "50588888888",
    email: "roger.ramirez.reyes@email.com",
    linkedin: "https://www.linkedin.com",
    statusBadge: "Disponible para Nuevos Retos Comerciales & Asesorías",
    cvDownloadUrl: "#contacto"
  },

  metrics: [
    {
      id: "years",
      value: 8,
      prefix: "+",
      suffix: "",
      title: "Años de Trayectoria",
      description: "Generando resultados en ventas y proyectos empresariales"
    },
    {
      id: "deals",
      value: 150,
      prefix: "+",
      suffix: "k$",
      title: "En Negociaciones Cerradas",
      description: "Acuerdos comerciales y contratos de valor estratégico"
    },
    {
      id: "growth",
      value: 45,
      prefix: "+",
      suffix: "%",
      title: "Crecimiento Promedio",
      description: "Incremento en facturación en cuentas y proyectos gestionados"
    },
    {
      id: "ventures",
      value: 12,
      prefix: "",
      suffix: "+",
      title: "Modelos & Emprendimientos",
      description: "Negocios estructurados, validados y acelerados con éxito"
    }
  ],

  services: [
    {
      icon: "trending-up",
      title: "Ventas Consultivas & Cierres de Alto Impacto",
      description: "Especialista en ciclos de venta complejos, detección de necesidades profundas, manejo de objeciones críticas y negociación estratégica de acuerdos ganar-ganar.",
      highlights: ["Ventas B2B y B2C", "Negociación consultiva", "Cierres de alto ticket"]
    },
    {
      icon: "rocket",
      title: "Creación y Validación de Emprendimientos",
      description: "Acompañamiento y estructuración desde la idea hasta la monetización. Definición de propuesta de valor irresistible, análisis de mercado y validación ágil.",
      highlights: ["Modelos Canvas & Lean", "Validación de MVP", "Unit Economics rentables"]
    },
    {
      icon: "target",
      title: "Embudos Comerciales & Optimización de CRM",
      description: "Diseño e implementación de sistemas sistemáticos de prospección, nutrición de prospectos y conversión que no dependen de la suerte.",
      highlights: ["Pipeline estructurado", "Automatización de seguimiento", "Métricas de conversión"]
    },
    {
      icon: "users",
      title: "Liderazgo & Entrenamiento de Equipos",
      description: "Formación de fuerzas comerciales de alto rendimiento, cultura de metas claras, desarrollo de pitches persuasivos y clínicas de ventas prácticas.",
      highlights: ["Roleplays y guiones comerciales", "Planes de incentivos", "Coaching comercial"]
    },
    {
      icon: "compass",
      title: "Estrategia Go-To-Market & Expansión",
      description: "Planes de entrada y posicionamiento en nuevos nichos de mercado, alianzas comerciales estratégicas y tácticas de penetración rápida.",
      highlights: ["Penetración de mercado", "Alianzas corporativas", "Segmentación precisa"]
    },
    {
      icon: "award",
      title: "Auditoría & Rescate Comercial",
      description: "Diagnóstico profundo de fugas de ingresos en el proceso de ventas actual y entrega de un plan de acción correctivo de alto retorno inmediato.",
      highlights: ["Detección de cuellos de botella", "Reingeniería de pitch", "Estrategias de pricing"]
    }
  ],

  methodology: [
    {
      step: "01",
      title: "Diagnóstico & Auditoría de Oportunidad",
      description: "Análisis exhaustivo del cliente ideal (ICP), propuesta de valor, estructura de precios y detección de barreras de compra en el mercado meta."
    },
    {
      step: "02",
      title: "Ingeniería de la Oferta & Embudo",
      description: "Construcción de una propuesta irresistible, definición del proceso comercial por etapas y creación de herramientas de prospección de alto impacto."
    },
    {
      step: "03",
      title: "Ejecución, Negociación & Cierre",
      description: "Implementación en campo con prospección activa, calificación rigurosa de prospectos, resolución de objeciones y cierre sistemático de contratos."
    },
    {
      step: "04",
      title: "Escalabilidad & Fidelización (LTV)",
      description: "Estandarización de procesos, automatización de seguimiento, programas de referidos y venta cruzada para maximizar el valor de cada cliente en el tiempo."
    }
  ],

  categories: [
    { id: "todos", name: "Todos los Casos" },
    { id: "emprendimiento", name: "Emprendimiento & Negocios" },
    { id: "ventas-b2b", name: "Ventas B2B & Corporativas" },
    { id: "estrategia", name: "Estrategia Comercial & Funnels" }
  ],

  projects: [
    {
      id: "emp-01",
      category: "emprendimiento",
      title: "Lanzamiento y Escalamiento de Empresa Comercial",
      subtitle: "De la conceptualización a la rentabilidad en 6 meses",
      metric: "+250% ROI",
      metricLabel: "En los primeros 6 meses",
      summary: "Estructuración de modelo de negocio desde cero, captación sistemática de clientes corporativos y establecimiento de operaciones comerciales autosostenibles.",
      challenge: "Entrar en un mercado con alta rivalidad comercial y barreras de entrada por marcas ya posicionadas.",
      solution: "Rediseño completo de la propuesta de valor enfocada en garantías de entrega y prospección directa B2B multicanal altamente personalizada.",
      results: [
        "Captación de más de 35 clientes corporativos recurrentes",
        "Punto de equilibrio operativo alcanzado en el mes 3",
        "Retención de cuentas superior al 88% durante el primer año"
      ],
      tags: ["Emprendimiento", "Validación MVP", "Go-To-Market", "B2B"]
    },
    {
      id: "sales-01",
      category: "ventas-b2b",
      title: "Reestructuración y Cierre de Contratos Corporativos",
      subtitle: "Optimización de ciclo de venta y ticket promedio",
      metric: "+65%",
      metricLabel: "Tasa de Cierre de Negocios",
      summary: "Transformación radical del método comercial tradicional a un modelo de venta consultiva de alto ticket con matriz de cualificación rigurosa.",
      challenge: "Ciclos de venta extensos (más de 120 días) y alto desgaste de recursos sin garantía de cierre.",
      solution: "Implementación del método SPIN Selling, matrices BANT y presentación ejecutiva basada exclusivamente en el retorno de inversión del cliente.",
      results: [
        "Reducción del ciclo de negociación de 120 a 45 días",
        "Incremento del ticket promedio en un 40%",
        "Firma de 12 acuerdos comerciales plurianuales de alto valor"
      ],
      tags: ["Ventas B2B", "Negociación", "SPIN Selling", "Cierre Consultivo"]
    },
    {
      id: "growth-01",
      category: "estrategia",
      title: "Diseño de Embudo Comercial & Automatización de Prospección",
      subtitle: "Escalabilidad digital del pipeline de clientes potenciales",
      metric: "3.5x",
      metricLabel: "Incremento en Prospectos Calificados",
      summary: "Implementación de arquitectura comercial digital: integración de CRM, embudo de prospección automatizado y estandarización de seguimiento.",
      challenge: "Falta de visibilidad sobre el estado de las oportunidades de venta y dependencia exclusiva de recomendaciones informales.",
      solution: "Diseño e integración de pipeline en CRM, secuencias multicanal de seguimiento y métricas semanales de rendimiento por etapa.",
      results: [
        "Triplicación del volumen de prospectos calificados en 90 días",
        "Tasa de respuesta a seguimientos comerciales del 42%",
        "Control total de la tasa de conversión en cada etapa del embudo"
      ],
      tags: ["Estrategia Comercial", "CRM", "Funnels de Venta", "Automatización"]
    },
    {
      id: "emp-02",
      category: "emprendimiento",
      title: "Estrategia Omnicanal & Expansión de Canales de Venta",
      subtitle: "Apertura y consolidación de venta directa digital",
      metric: "+110%",
      metricLabel: "Aumento en Facturación Global",
      summary: "Transformación de un modelo de venta tradicional hacia un ecosistema ágil con venta asistida por WhatsApp y catálogos interactivos.",
      challenge: "Estancamiento en ventas en punto de contacto físico y desaprovechamiento de canales directos de comunicación.",
      solution: "Despliegue de un protocolo de atención y venta rápida por WhatsApp Business con respuestas estructuradas, promociones cruzadas y seguimiento post-venta.",
      results: [
        "Duplicación de la facturación en un periodo de 4 meses",
        "El canal directo pasó a representar el 55% de los ingresos totales",
        "Base de datos de más de 1,200 clientes fidelizados y recurrentes"
      ],
      tags: ["Emprendimiento", "Venta Digital", "WhatsApp Marketing", "Fidelización"]
    },
    {
      id: "sales-02",
      category: "ventas-b2b",
      title: "Programa de Alto Rendimiento para Equipo Comercial",
      subtitle: "Coaching y aceleración de habilidades de prospección y cierre",
      metric: "+48%",
      metricLabel: "Cumplimiento de Metas Comerciales",
      summary: "Entrenamiento intensivo en técnicas de negociación, superación de objeciones de precio y estructuración de planes de comisiones motivacionales.",
      challenge: "Bajo cumplimiento de cuotas de ventas (menos del 35% del equipo) y alta rotación de personal comercial.",
      solution: "Talleres prácticos basados en simulaciones reales, manual de respuestas a objeciones comunes y tablero de logros transparentes.",
      results: [
        "Más del 80% de los ejecutivos superaron su cuota mensual",
        "Reducción del 50% en concesión de descuentos innecesarios",
        "Mejora sustancial del clima y compromiso del equipo comercial"
      ],
      tags: ["Liderazgo Comercial", "Entrenamiento", "Coaching", "Manejo de Objeciones"]
    },
    {
      id: "estrategia-02",
      category: "estrategia",
      title: "Reestructuración de Precios & Estrategia de Margen",
      subtitle: "Protección de valor y salida de la guerra de precios",
      metric: "+32%",
      metricLabel: "Aumento en Margen Neto",
      summary: "Revisión integral del catálogo de soluciones, eliminando la comoditización y estructurando paquetes de alto valor percibido.",
      challenge: "Pérdida constante de márgenes por competir únicamente por precio frente a opciones de baja calidad.",
      solution: "Estructuración de ofertas en niveles (Good-Better-Best) con servicios de soporte y garantías diferenciales que justifican tarifas premium.",
      results: [
        "Incremento del 32% en margen de ganancia neta",
        "El 60% de los clientes optaron por planes de mayor valor",
        "Posicionamiento como referente de confianza y calidad en el sector"
      ],
      tags: ["Pricing", "Estrategia Comercial", "Propuesta de Valor", "Rentabilidad"]
    }
  ],

  testimonials: [
    {
      quote: "Roger tiene una habilidad excepcional para detectar oportunidades comerciales donde otros solo ven problemas. Su enfoque en resultados y disciplina comercial transformó por completo nuestra dinámica de ventas.",
      author: "Carlos Morales",
      role: "Director General & Socio Fundador",
      company: "Sector Servicios Corporativos",
      rating: 5
    },
    {
      quote: "Trabajar con Roger en la estructuración de nuestro modelo comercial fue la mejor inversión. Logramos cerrar acuerdos que llevaban meses estancados gracias a su metodología de negociación consultiva.",
      author: "Elena Duarte",
      role: "Gerente de Operaciones",
      company: "Empresa de Tecnología & Logística",
      rating: 5
    },
    {
      quote: "La claridad mental y visión estratégica que Roger aporta a los emprendimientos es invaluable. No solo enseña a vender, crea la estructura necesaria para que el negocio sea rentable y crezca con bases firmes.",
      author: "Manuel Mendoza",
      role: "Emprendedor & Inversionista",
      company: "Holding de Inversión y Retail",
      rating: 5
    }
  ]
};
