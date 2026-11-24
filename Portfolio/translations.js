// =========================================================================
// SANTIAGO BERMÚDEZ — BILINGUAL TRANSLATION SYSTEM (ES / EN)
// Editorial Baglietto Grid + Spotlight Carousel + Dark Terracotta/Emerald
// =========================================================================

const translations = {
  es: {
    metaTitle: "Santiago Bermúdez | Director Creativo & Estratega de Marca",
    metaDescription: "Portfolio y dirección creativa de Santiago Bermúdez. Dirección de Arte, Estrategia Interna, Liderazgo de Equipos y Optimización con IA.",
    skipLink: "Saltar al contenido principal",
    header: {
      navProfile: "perfil",
      navProjects: "proyectos",
      navProcess: "metodología",
      navBehance: "behance",
      navContact: "contacto",
      menuStatus: "Disponible para Dirección Creativa & Consultoría",
      menuLocation: "Buenos Aires, Argentina · Alcance Global"
    },
    hero: {
      discipline: "dirección creativa & estrategia de marca.",
      scroll: "scroll"
    },
    profile: {
      tag: "/ perfil",
      tagline: "Dirección de Arte, Estrategia Interna, Liderazgo de Equipos y Optimización con IA.",
      bio: "+15 años liderando equipos multifuncionales y creando campañas memorables para marcas líderes en Argentina y la región.",
      cta: "hablemos de tu proyecto →"
    },
    projects: {
      tag: "/ proyectos",
      headline: "proyectos destacados",
      toggleAll: "ver todos [08] →",
      toggleCarousel: "volver al carrusel →",
      hint: "arrastrar o click",
      viewStrategy: "ver estrategia ↗",
      thProject: "Proyecto / Campaña",
      thClient: "Cliente",
      thCategory: "Disciplina",
      thYear: "Año & Ficha ↗",
      items: {
        "case-adidas-euka": {
          client: "Adidas Running × Eukanuba",
          title: "Corriendo con tu Perro",
          year: "2026",
          category: "Co Branding & Experiencial",
          role: "Dirección Creativa & Estrategia de Marca",
          summary: "Desafiando el individualismo deportivo para legitimar la presencia de marca en el territorio pet parents con running canino.",
          challenge: "Penetrar el creciente segmento de pet parents desde Adidas Running, venciendo el sesgo del rendimiento individualista extremo para legitimar autoridad de marca en un territorio deportivo compartido.",
          solution: "Alianza táctica de co branding con Eukanuba bajo el insight de que el compañero que empuja el entrenamiento sin excusas es tu perro. Se creó una plataforma deportiva y comunitaria de alta fidelización.",
          pieces: [
            "Manifiesto audiovisual principal & Brand Anthem",
            "Arquitectura de co branding y sistema gráfico unificado",
            "Activaciones grupales de running canino (Dog Run Squads)",
            "Landing page de inscripción, tracking y contenido editorial"
          ]
        },
        "case-expert-voices": {
          client: "Colgate Palmolive",
          title: "Expert Voices (Stream Studio & Content)",
          year: "2026",
          category: "Content Strategy & Creadores",
          role: "Dirección Creativa & Estrategia de Contenidos",
          summary: "Transformando odontólogos en creadores de contenido para combatir la desinformación con un set de streaming profesional.",
          challenge: "Neutralizar la proliferación de desinformación odontológica en redes sociales, devolviendo la autoridad científica a profesionales reales frente a contenidos automatizados sin rigor médico.",
          solution: "Creación de un set de streaming profesional (Colgate Studio) y programa de capacitación donde odontólogos matriculados se transforman en creadores de contenido dinámicos con narrativa y microfonía profesional.",
          pieces: [
            "Diseño integral de set de streaming profesional Colgate Studio",
            "Programa pedagógico de masterclasses de iluminación y oratoria",
            "Kit técnico para odontólogos creadores (iluminación y framing)",
            "Banco de guiones y cápsulas de respuesta rápida a tendencias"
          ]
        },
        "case-fabuloso": {
          client: "Fabuloso / Colgate Palmolive",
          title: "El Valor Emocional de las Fragancias",
          year: "2026",
          category: "Consumo Masivo & Plataforma Web",
          role: "Estrategia de Comunicación & Dirección Creativa",
          summary: "Apalancándose en la memoria olfativa para reconectar emocionalmente mediante relatos familiares y experiencias digitales.",
          challenge: "Reconectar a las nuevas generaciones con un limpiador tradicional de alto volumen, superando la percepción funcional de higiene básica hacia una experiencia sensorial evocativa y hogareña.",
          solution: "Campaña omnicanal anclada en la memoria olfativa. Se articuló un micrositio web inmersivo accesible mediante códigos QR en góndola donde cada fragancia activa un paisaje sonoro y relatos de momentos familiares.",
          pieces: [
            "Plataforma web interactiva de memoria olfativa (Soundscapes + Historias)",
            "Packaging conector con códigos QR inteligentes para retail",
            "Campaña audiovisual para televisión y medios digitales",
            "Guía de contenido para creadores de estilo de vida y hogar"
          ]
        },
        "case-koleston-trailer": {
          client: "Koleston / Wella Company",
          title: "Reinicio Capilar Cósmico",
          year: "2026",
          category: "Activación Cultural & Evento Inmersivo",
          role: "Dirección Creativa & Ideación de Eventos",
          summary: "Conexión cósmica en el Planetario de Buenos Aires: sincronizando el calendario lunar con las fases de cuidado capilar.",
          challenge: "Revitalizar la coloración capilar en temporada baja desafiando la saturación de mensajes cosméticos tradicionales con una experiencia de asombro y comunidad.",
          solution: "Experiencia inmersiva en el Planetario Galileo Galilei de Buenos Aires, sincronizando las fases lunares con los ciclos de renovación capilar bajo el concepto de Reinicio Cósmico.",
          pieces: [
            "Trailer cinematográfico proyectado en domo 360° en el Planetario",
            "Espacio pop up de diagnóstico capilar personalizado con estilistas",
            "Calendario lunar editorial impreso y digital de cuidado del cabello",
            "Estrategia de amplificación PR con creadores de belleza y lifestyle"
          ]
        },
        "case-rc-verano": {
          client: "Royal Canin",
          title: "Verano en Movimiento (Tour Costero)",
          year: "2026",
          category: "Activación Federal & Tour Experiencial",
          role: "Dirección Creativa & Estrategia Experiencial",
          summary: "Estaciones móviles de hidratación, pesaje veterinario y estimulación cognitiva en playas pet friendly de la Costa Atlántica.",
          challenge: "Llevar la prescripción nutricional veterinaria a los centros turísticos veraniegos con calidez y cercanía junto a tutores de mascotas.",
          solution: "Tour costero con estaciones móviles de hidratación, pesaje guiado por veterinarios y juegos de estimulación cognitiva en playas pet friendly de la Costa Atlántica.",
          pieces: [
            "Módulos móviles de atención veterinaria",
            "Guía de hidratación estival",
            "Contenido geolocalizado en redes sociales"
          ]
        },
        "case-rimmel-previa": {
          client: "Rimmel London (Coty)",
          title: "La Previa (TikTok Studio & Clean Beauty)",
          year: "2026",
          category: "Gen Z & Activación Urbana",
          role: "Dirección de Arte & Estrategia de Contenidos",
          summary: "Pop up Beauty Bar en Palermo Soho con iluminación profesional y creadoras de TikTok liderando el ritual previo del fin de semana.",
          challenge: "Reconectar con la audiencia de 18 a 24 años en el momento cumbre de su fin de semana: el ritual de arreglo colectivo.",
          solution: "Pop up Beauty Bar en Palermo Soho con iluminación profesional y creadoras de TikTok liderando sesiones de maquillaje rápido y cruelty free.",
          pieces: [
            "Pop up Beauty Bar experiencial",
            "Filtros interactivos de Realidad Aumentada",
            "Challenges en TikTok con microinfluencers"
          ]
        },
        "case-extremas-burgers": {
          client: "Extremas Smash Burgers",
          title: "Reposicionamiento & Ambición Urbana",
          year: "2026",
          category: "Branding & Cultura Urbana",
          role: "Dirección Creativa & Estrategia de Marca",
          summary: "Identidad cruda, tipografía display brutalista y packaging inspirado en fanzines de skate para diferenciarse en el circuito porteño.",
          challenge: "Diferenciar a una cadena emergente en el mercado saturado de smash burgers porteñas.",
          solution: "Identidad cruda, tipografía display brutalista y packaging inspirado en fanzines de skate y cultura callejera.",
          pieces: [
            "Manual de identidad visual y tipográfica",
            "Packaging sustentable serigrafiado",
            "Estrategia de redes sociales"
          ]
        },
        "case-aromitalia-materia": {
          client: "Aromitalia",
          title: "Materia Prima 2026: Experiencia Sensorial B2B",
          year: "2026",
          category: "Evento B2B & Tasting Olfativo",
          role: "Dirección Creativa & Estrategia de Experiencia",
          summary: "Galería de aromas a ciegas donde maestros heladeros descubren el origen de vainillas, pistachos y avellanas antes de degustar.",
          challenge: "Presentar insumos de pastelería y heladería italiana premium a maestros heladeros de la región.",
          solution: "Galería de aromas a ciegas donde los asistentes descubren el origen de vainillas, pistachos y avellanas antes de degustar.",
          pieces: [
            "Campanas de cata olfativa",
            "Catálogo técnico editorial de materias primas",
            "Video corporativo de procedencia"
          ]
        }
      }
    },
    process: {
      tag: "/ metodología",
      headline: "3 etapas desde el diagnóstico hasta la realidad",
      cta: "iniciar conversación →",
      step1Num: "01",
      step1Title: "diagnóstico.",
      step1Desc: "Conocimiento de marca, oportunidades, objetivos.",
      step2Num: "02",
      step2Title: "conceptualización.",
      step2Desc: "Insights, conceptos, ideas, tono, diferenciación.",
      step3Num: "03",
      step3Title: "craft & realidad.",
      step3Desc: "Acompañamiento en producciones y creación de assets digitales."
    },
    repertoire: {
      tag: "/ archivo behance",
      headline: "exploración de identidad y diseño editorial",
      btnGrid: "cuadrícula [04]",
      btnTable: "directorio",
      thPiece: "Pieza / Proyecto",
      thDisc: "Disciplina",
      thCat: "Categoría",
      thLink: "Año & Link ↗",
      footerNote: "Archivo con más de 30 proyectos y exploraciones en Behance.",
      footerLink: "ver perfil completo en behance ↗",
      b1Disc: "Dirección de Arte",
      b1Desc: "Campaña conceptual y dirección visual",
      b2Disc: "Campaña Creativa",
      b2Desc: "Pieza creativa y storytelling publicitario",
      b3Disc: "Comunicación Agro",
      b3Desc: "Campaña de posicionamiento agro industrial",
      b4Disc: "Identidad & Craft",
      b4Desc: "Identidad de marca y fotografía de escala"
    },
    contact: {
      tag: "/ contacto",
      headline: "¿listo para el próximo desafío?",
      subhead: "Contame qué tenés en mente. Conversemos sobre los objetivos de tu marca y cómo abordarlos con criterio creativo.",
      primaryCta: "escribir a sabermudez@gmail.com ↗",
      emailLabel: "correo directo",
      linkedinLabel: "linkedin",
      behanceLabel: "behance",
      locationLabel: "base operativa",
      availabilityLabel: "estado actual",
      availability: "Disponible para Dirección Creativa & Consultoría",
      location: "Buenos Aires, Argentina (Alcance Global)",
      copyEmailBtn: "copiar correo",
      copiedFeedback: "Correo copiado: sabermudez@gmail.com",
      privacyLink: "privacidad",
      cookiesLink: "cookies",
      backToTop: "arriba ↑",
      copyright: "© 2026 santiago bermúdez · todos los derechos reservados"
    },
    drawer: {
      meta: "ANÁLISIS ESTRATÉGICO",
      closeBtn: "cerrar",
      challengeLabel: "01. Desafío Estratégico",
      solutionLabel: "02. Solución Conceptual & Creativa",
      piecesLabel: "03. Piezas & Entregables Clave",
      galleryLabel: "04. Galería Visual & Piezas",
      footerNote: "Archivo Directivo 2026",
      cta: "conversar sobre este desafío ↗"
    },
    lightbox: {
      closeBtn: "cerrar"
    }
  },
  en: {
    metaTitle: "Santiago Bermúdez | Creative Director & Brand Strategist",
    metaDescription: "Portfolio and creative direction of Santiago Bermúdez. Art Direction, Internal Strategy, Team Leadership, and AI Optimization.",
    skipLink: "Skip to main content",
    header: {
      navProfile: "profile",
      navProjects: "projects",
      navProcess: "methodology",
      navBehance: "behance",
      navContact: "contact",
      menuStatus: "Available for Creative Direction & Consulting",
      menuLocation: "Buenos Aires, Argentina · Global Reach"
    },
    hero: {
      discipline: "creative direction & brand strategy.",
      scroll: "scroll"
    },
    profile: {
      tag: "/ profile",
      tagline: "Art Direction, Internal Strategy, Team Leadership, and AI Optimization.",
      bio: "+15 years leading multidisciplinary teams and creating memorable campaigns for leading brands across Latin America and beyond.",
      cta: "let us talk about your project →"
    },
    projects: {
      tag: "/ projects",
      headline: "selected projects",
      toggleAll: "view all [08] →",
      toggleCarousel: "back to carousel →",
      hint: "drag or click",
      viewStrategy: "view strategy ↗",
      thProject: "Project / Campaign",
      thClient: "Client",
      thCategory: "Discipline",
      thYear: "Year & File ↗",
      items: {
        "case-adidas-euka": {
          client: "Adidas Running × Eukanuba",
          title: "Running with Your Dog",
          year: "2026",
          category: "Co Branding & Experiential",
          role: "Creative Direction & Brand Strategy",
          summary: "Challenging athletic individualism to legitimize brand presence in the pet parent territory through canine running.",
          challenge: "Enter the fast growing pet parent segment from Adidas Running, overcoming extreme individualistic performance bias to build genuine brand authority in a shared athletic territory.",
          solution: "Strategic co branding alliance with Eukanuba anchored in the insight that the training partner who never makes excuses is your dog, launching a high retention community platform.",
          pieces: [
            "Main audiovisual manifesto & Brand Anthem",
            "Unified co branding architecture and visual system",
            "Group canine running activations (Dog Run Squads)",
            "Registration landing page, tracking, and editorial hub"
          ]
        },
        "case-expert-voices": {
          client: "Colgate Palmolive",
          title: "Expert Voices (Stream Studio & Content)",
          year: "2026",
          category: "Content Strategy & Creators",
          role: "Creative Direction & Content Strategy",
          summary: "Transforming dental professionals into dynamic creators to combat misinformation with a dedicated professional streaming set.",
          challenge: "Counteract the spread of dental misinformation on social media by restoring scientific authority to real licensed professionals against automated content lacking medical rigor.",
          solution: "Creation of a dedicated streaming studio (Colgate Studio) and training program where licensed dentists evolve into dynamic creators with narrative craft and broadcast sound.",
          pieces: [
            "Full design of the professional Colgate Studio streaming set",
            "Masterclass training program covering lighting and delivery",
            "Creator starter kit for dentists (lighting and framing)",
            "Script bank and rapid response trend capsules"
          ]
        },
        "case-fabuloso": {
          client: "Fabuloso / Colgate Palmolive",
          title: "The Emotional Value of Fragrances",
          year: "2026",
          category: "Mass Consumer Goods & Web Platform",
          role: "Communication Strategy & Creative Direction",
          summary: "Leveraging olfactory memory to reconnect emotionally with audiences through family stories and interactive digital experiences.",
          challenge: "Reconnect younger generations with a high volume heritage cleaner, moving beyond functional hygiene toward an evocative sensory home experience.",
          solution: "Omnichannel campaign built around olfactory memory, featuring an immersive web experience unlocked via shelf QR codes where each fragrance triggers soundscapes and family stories.",
          pieces: [
            "Interactive olfactory memory web platform (Soundscapes + Stories)",
            "Smart QR packaging connector for retail shelves",
            "Television and digital audiovisual campaign",
            "Content playbook for home and lifestyle creators"
          ]
        },
        "case-koleston-trailer": {
          client: "Koleston / Wella Company",
          title: "Cosmic Hair Reset",
          year: "2026",
          category: "Cultural Activation & Immersive Event",
          role: "Creative Direction & Event Ideation",
          summary: "Cosmic connection at the Buenos Aires Planetarium: syncing the lunar calendar with hair care and coloring phases.",
          challenge: "Revitalize hair coloring during low season by breaking through traditional cosmetic noise with an experience built on wonder and community.",
          solution: "Immersive cultural activation at the Galileo Galilei Planetarium in Buenos Aires, aligning lunar phases with hair renewal cycles under the Cosmic Reset concept.",
          pieces: [
            "Cinematic trailer projected inside the 360° Planetarium dome",
            "Pop up personalized hair diagnosis lounge with stylists",
            "Printed and digital lunar hair care editorial calendar",
            "PR amplification strategy with beauty and lifestyle creators"
          ]
        },
        "case-rc-verano": {
          client: "Royal Canin",
          title: "Summer in Motion (Coastal Tour)",
          year: "2026",
          category: "National Activation & Experiential Tour",
          role: "Creative Direction & Experiential Strategy",
          summary: "Mobile hydration stations, veterinary checkups, and cognitive play across pet friendly beaches along the Atlantic Coast.",
          challenge: "Bring veterinary nutritional guidance to summer vacation hubs with warmth and everyday closeness to pet owners.",
          solution: "Coastal tour featuring mobile hydration stations, vet guided weigh ins, and cognitive stimulation games on pet friendly Atlantic beaches.",
          pieces: [
            "Mobile veterinary care modules",
            "Summer hydration field guide",
            "Geolocated social content series"
          ]
        },
        "case-rimmel-previa": {
          client: "Rimmel London (Coty)",
          title: "La Previa (TikTok Studio & Clean Beauty)",
          year: "2026",
          category: "Gen Z & Urban Activation",
          role: "Art Direction & Content Strategy",
          summary: "Palermo Soho pop up Beauty Bar with studio lighting and TikTok creators leading the weekend pre party ritual.",
          challenge: "Reconnect with 18 to 24 year old audiences during the peak social moment of their weekend: getting ready together.",
          solution: "Pop up Beauty Bar in Palermo Soho equipped with pro lighting and TikTok creators hosting express cruelty free makeup sessions.",
          pieces: [
            "Experiential pop up Beauty Bar",
            "Interactive Augmented Reality filters",
            "TikTok challenges with micro creators"
          ]
        },
        "case-extremas-burgers": {
          client: "Extremas Smash Burgers",
          title: "Repositioning & Urban Ambition",
          year: "2026",
          category: "Branding & Street Culture",
          role: "Creative Direction & Brand Strategy",
          summary: "Raw visual identity, brutalist display typography, and skate zine packaging engineered to stand out in Buenos Aires.",
          challenge: "Differentiate an emerging brand inside the crowded Buenos Aires smash burger scene.",
          solution: "Raw identity system with bold display typography and screen printed packaging inspired by skate zines and street culture.",
          pieces: [
            "Visual and typographic brand manual",
            "Screen printed sustainable packaging",
            "Social media content system"
          ]
        },
        "case-aromitalia-materia": {
          client: "Aromitalia",
          title: "Materia Prima 2026: B2B Sensory Experience",
          year: "2026",
          category: "B2B Event & Olfactory Tasting",
          role: "Creative Direction & Experience Strategy",
          summary: "Blind aroma gallery where master gelato makers discover the origin of vanillas, pistachios, and hazelnuts before tasting.",
          challenge: "Introduce premium Italian pastry and gelato ingredients to master gelato makers across the region.",
          solution: "Blind sensory aroma gallery inviting guests to trace the provenance of vanillas, pistachios, and hazelnuts prior to tasting.",
          pieces: [
            "Olfactory tasting glass domes",
            "Editorial technical catalog of raw ingredients",
            "Origin documentary brand film"
          ]
        }
      }
    },
    process: {
      tag: "/ methodology",
      headline: "3 stages from diagnosis to reality",
      cta: "start a conversation →",
      step1Num: "01",
      step1Title: "diagnosis.",
      step1Desc: "Brand knowledge, opportunities, objectives.",
      step2Num: "02",
      step2Title: "conceptualization.",
      step2Desc: "Insights, concepts, ideas, tone, differentiation.",
      step3Num: "03",
      step3Title: "craft & reality.",
      step3Desc: "Production guidance and creation of digital assets."
    },
    repertoire: {
      tag: "/ behance archive",
      headline: "identity exploration and editorial design",
      btnGrid: "grid [04]",
      btnTable: "directory",
      thPiece: "Piece / Project",
      thDisc: "Discipline",
      thCat: "Category",
      thLink: "Year & Link ↗",
      footerNote: "Archive with over 30 projects and explorations on Behance.",
      footerLink: "view full behance profile ↗",
      b1Disc: "Art Direction",
      b1Desc: "Conceptual campaign and visual direction",
      b2Disc: "Creative Campaign",
      b2Desc: "Creative piece and advertising storytelling",
      b3Disc: "Agri Communication",
      b3Desc: "Agro industrial positioning campaign",
      b4Disc: "Identity & Craft",
      b4Desc: "Brand identity and large scale photography"
    },
    contact: {
      tag: "/ contact",
      headline: "ready for the next challenge?",
      subhead: "Tell me what you have in mind. Let us talk through your brand goals and how to approach them with creative clarity.",
      primaryCta: "email sabermudez@gmail.com ↗",
      emailLabel: "direct email",
      linkedinLabel: "linkedin",
      behanceLabel: "behance",
      locationLabel: "base location",
      availabilityLabel: "current status",
      availability: "Available for Creative Direction & Consulting",
      location: "Buenos Aires, Argentina (Global Reach)",
      copyEmailBtn: "copy email",
      copiedFeedback: "Email copied: sabermudez@gmail.com",
      privacyLink: "privacy",
      cookiesLink: "cookies",
      backToTop: "top ↑",
      copyright: "© 2026 santiago bermúdez · all rights reserved"
    },
    drawer: {
      meta: "STRATEGIC ANALYSIS",
      closeBtn: "close",
      challengeLabel: "01. Strategic Challenge",
      solutionLabel: "02. Conceptual & Creative Solution",
      piecesLabel: "03. Key Deliverables & Artifacts",
      galleryLabel: "04. Visual Gallery & Assets",
      footerNote: "Executive Archive 2026",
      cta: "discuss this challenge ↗"
    },
    lightbox: {
      closeBtn: "close"
    }
  }
};

if (typeof window !== 'undefined') {
  window.portfolioTranslations = translations;
}
