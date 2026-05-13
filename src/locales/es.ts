const es = {
  common: {
    language: {
      en: 'EN',
      es: 'ES'
    }
  },
  hero: {
    imageAlt: 'Portada'
  },
  nav: {
    about: 'Sobre mi',
    services: 'Servicios',
    projects: 'Proyectos',
    contact: 'Contacto',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú de navegación',
    backToTop: 'Volver arriba',
    mobileEmail: 'behrendvaleria@gmail.com',
    mobileLocation: 'Buenos Aires - Alemania'
  },
  skillsStrip: {
    items: [
      'React',
      'TypeScript',
      'Capacitor',
      'Docker',
      'APIs REST',
      'Integración de IA',
      'Estrategia de Marca',
      'Automatización'
    ]
  },
  about: {
    backgroundWord: 'Perfil',
    headerLabel: '§ 01 - Perfil',
    headerTitle: 'Sobre mi',
    headerNote:
      'Un perfil híbrido que integra ingeniería, sistemas visuales, dirección de arte y estrategia digital.',
    locationTag: 'Buenos Aires x Berlín',
    introLine:
      'Diseño y desarrollo productos digitales con una mirada visual sólida y estratégica.',
    paragraph1:
      'Soy Valeria Behrend, Senior Software Developer, con formación en Dirección de Arte Publicitario y experiencia en marketing digital. Mi trabajo se desarrolla en la intersección entre tecnología, comunicación visual y estrategia.',
    paragraph2:
      'Antes de dedicarme por completo al desarrollo de software, estudié Dirección de Arte Publicitario en Argentina, donde construí una base fuerte en concepto, composición, branding, percepción de audiencias y narrativa visual. Más adelante, me formé en desarrollo web a través de programas en UTN, en Argentina, y Le Wagon, en Alemania.',
    quote:
      'Existe una diferencia real entre quien aprende diseño después y quien fue entrenada para pensar visualmente antes de escribir código.',
    paragraph3:
      'Durante cinco años en Alemania me desempeñé como Front-End Developer y Design Lead, combinando ejecución técnica con dirección de diseño, decisiones de UI, visión de producto y colaboración con equipos multidisciplinarios.',
    paragraph4:
      'También integro IA en los flujos de entrega para optimizar investigación, prototipado y producción. Trabajo con prácticas de prompt engineering y diseño de contexto para elevar la calidad de salida, reducir tiempos de iteración y mantener un equilibrio saludable entre latencia y costo en funcionalidades basadas en LLM.',
    paragraph5:
      'Hoy construyo productos digitales técnicamente robustos, visualmente intencionales y alineados estratégicamente con objetivos de negocio.',
    badgeLine1: 'Senior Web Developer',
    badgeLine2: '& Art Director',
    stats: {
      yearsExp: 'Años Exp.',
      germany: 'Alemania',
      argentina: 'Argentina',
      stack: 'Stack'
    },
    skills: ['UI/UX', 'Ingeniería', 'Dirección de Arte', 'Marketing', 'IA']
  },
  services: {
    backgroundWord: 'Servicios',
    headerLabel: '§ 02 - Qué Hago',
    headerTitle: 'Servicios',
    headerNote:
      'Diseño estratégico, interfaces escalables y dirección técnica para productos digitales con una voz visual clara.',
    serviceLabelPrefix: 'Servicio',
    items: [
      {
        id: 1,
        title: 'Desarrollo Web y Mobile',
        description:
          'Aplicaciones web full-stack y apps móviles híbridas construidas con React, TypeScript, Python y Capacitor. Soluciones listas para producción, con rendimiento y escalabilidad desde el día uno.',
        technologies: ['React', 'TypeScript', 'Python', 'Capacitor', 'Docker']
      },
      {
        id: 2,
        title: 'Chatbots con IA e Integraciones',
        description:
          'Flujos conversacionales con IA, automatización de procesos e integraciones con plataformas de terceros. Desde soporte al cliente hasta pipelines de datos inteligentes.',
        technologies: ['APIs de IA', 'Python', 'Automatización', 'n8n']
      },
      {
        id: 3,
        title: 'UI/UX con Criterio de Diseño y Marketing',
        description:
          'Interfaces guiadas por usabilidad, dirección visual, posicionamiento de marca y comportamiento de audiencias, construidas por alguien formada primero en dirección de arte.',
        technologies: ['Figma', 'User Research', 'Brand Strategy', 'MUI']
      },
      {
        id: 4,
        title: 'Mantenimiento y Evolución de Producto',
        description:
          'Mejora continua, refactors, nuevas funcionalidades y optimización de performance para productos existentes. Un partnership técnico de largo plazo, no solo ejecución puntual.',
        technologies: ['Optimization', 'Refactoring', 'Testing', 'CI/CD']
      },
      {
        id: 5,
        title: 'Extensión de Equipo Técnico',
        description:
          'Para proyectos complejos, urgentes o intensivos en datos, sumo una red confiable de developers senior. El mismo estándar de calidad, con mayor capacidad y coordinación centralizada.',
        technologies: ['Team Coordination', 'Project Management', 'Agile']
      }
    ]
  },
  projects: {
    headerLabel: '§ 03 - Trabajos Seleccionados',
    headerTitle: 'Proyectos',
    headerNote:
      'Productos digitales, interfaces y sistemas desarrollados desde la estrategia, el código y la dirección de arte.',
    codeWindow: {
      roleKey: 'rol',
      impactKey: 'impacto',
      impactValue: 'diseño + código'
    },
    items: [
      {
        id: 1,
        title: 'lupai.de',
        description:
          'Desarrollé una plataforma de chatbots personalizable para responder consultas a partir de información pública o de datos internos de organizaciones. Lupai es multilingüe, enfocada en privacidad y genera respuestas solo sobre fuentes seleccionadas.',
        role: 'Desarrollo Front-End',
        technologies: ['REACT', 'TYPESCRIPT', 'IA', 'CHATBOT', 'UX/UI'],
        category: 'Plataforma de Chatbots con IA'
      },
      {
        id: 2,
        title: 'aureka.ai',
        description:
          'Construí una aplicación web orientada a procesos de investigación e innovación. La plataforma integra transcripción automática, búsqueda con IA, gestión de accesos de usuarios y la posibilidad de incorporar funcionalidades a medida según cada proyecto.',
        role: 'Desarrollo Front-End',
        technologies: ['REACT', 'TYPESCRIPT', 'BUSQUEDA IA', 'TRANSCRIPCION', 'GESTION DE USUARIOS'],
        category: 'Asistente de Investigación con IA'
      },
      {
        id: 3,
        title: 'fit4klima.app',
        description:
          'Desarrollé una app móvil que permite visualizar y medir el ahorro de emisiones de carbono generado por acciones sostenibles y desafíos climáticos. Construida con React, Capacitor y Wavetale para convertir el impacto ambiental personal en datos accionables.',
        role: 'Desarrollo Mobile y Front-End',
        technologies: ['REACT', 'CAPACITOR', 'APP MOBILE', 'WAVETALE', 'SUSTENTABILIDAD'],
        category: 'App de Desafíos para Ahorro de Carbono'
      },
      {
        id: 4,
        title: 'SlideSync',
        description:
          'Trabajé en una plataforma enterprise de webcast para eventos livestream, online, híbridos y presenciales. SlideSync habilita producciones multicámara profesionales, transmisiones rápidas con webcam, interacción de audiencia, control de acceso y diseños adaptados a identidad corporativa.',
        role: 'Desarrollo Front-End',
        technologies: ['REACT', 'TYPESCRIPT', 'LIVESTREAMING', 'WEBCAST', 'PLATAFORMA ENTERPRISE'],
        category: 'Plataforma Enterprise de Webcast'
      },
      {
        id: 5,
        title: 'Oral-History.Digital',
        description:
          'Mantuve, rediseñé y extendí una plataforma de curaduría e investigación para entrevistas audiovisuales con testigos del pasado. El trabajo incluyó mejoras de UI/UX, mantenimiento continuo e implementación de nuevas funciones para optimizar acceso, exploración y usabilidad del contenido.',
        role: 'Desarrollo Front-End / Mantenimiento UI',
        technologies: ['REACT', 'UI/UX', 'ACCESIBILIDAD', 'ARCHIVO DIGITAL', 'PLATAFORMA DE INVESTIGACION'],
        category: 'Plataforma de Curaduría e Investigación'
      }
    ]
  },
  contact: {
    backgroundWord: 'Contacto',
    headerLabel: '§ 04 - Contacto',
    headerTitle: 'Trabajemos Juntos',
    headerNote:
      '¿Tenés un producto, una plataforma o un sistema visual que necesita dirección técnica y creativa?',
    statement: {
      line1: 'Hagamos',
      accent: 'Algo',
      line3: 'Grande.',
      supporting:
        '¿Tenés un proyecto en mente, un producto para mejorar o una idea que necesita dirección técnica y visual?'
    },
    labels: {
      email: 'Email',
      linkedInProfile: 'Perfil de LinkedIn'
    },
    form: {
      title: 'Enviar Mensaje',
      name: 'Nombre',
      email: 'Email',
      projectType: 'Tipo de Proyecto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      sent: '✓ Mensaje Enviado',
      success: 'Gracias. Te respondo a la brevedad.',
      projectTypes: [
        'Desarrollo Web',
        'Desarrollo Mobile',
        'Integración de IA',
        'Sistema de Diseño',
        'Evolución de Producto',
        'Consultoría',
        'Otro'
      ]
    },
    errors: {
      missingEmailConfig:
        'Faltan variables de EmailJS. Configura .env.local para enviar mensajes.',
      sendFailed:
        'No se pudo enviar el mensaje. Intenta nuevamente en unos minutos.'
    }
  },
  footer: {
    portfolioLabel: 'Portfolio - 2026',
    practiceLabel: 'Práctica',
    practiceText: 'Software Engineering x Art Direction x Strategy',
    locationLabel: 'Ubicación',
    locationText: 'Buenos Aires - Alemania - Worldwide',
    linkedinAria: 'Perfil de LinkedIn',
    rightsReserved: 'Todos los derechos reservados.',
    madeWith: 'Senior Web Developer & Art Director'
  }
};

export default es;
