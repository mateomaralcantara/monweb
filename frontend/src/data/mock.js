// Mock data for MonSeoWeb

export const templates = [
  {
    id: 1,
    name: "Restaurante Gourmet",
    category: "restaurants",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop",
    demoUrl: "/demo/restaurant",
    features: ["Reservas online", "Menú digital", "Galería de platos"],
    color: "from-red-600 to-orange-600"
  },
  {
    id: 2,
    name: "Tienda Fashion",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
    demoUrl: "/demo/fashion",
    features: ["Catálogo productos", "Carrito de compras", "Pagos online"],
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 3,
    name: "Portafolio Creativo",
    category: "portfolio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    demoUrl: "/demo/portfolio",
    features: ["Galería de trabajos", "Blog integrado", "Contacto directo"],
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: 4,
    name: "Consultorio Médico",
    category: "business",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    demoUrl: "/demo/medical",
    features: ["Citas online", "Información servicios", "Equipo médico"],
    color: "from-green-600 to-teal-600"
  },
  {
    id: 5,
    name: "Iglesia Comunidad",
    category: "church",
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=500&h=300&fit=crop",
    demoUrl: "/demo/church",
    features: ["Eventos y actividades", "Donaciones", "Transmisiones en vivo"],
    color: "from-indigo-600 to-purple-600"
  },
  {
    id: 6,
    name: "Inmobiliaria Premium",
    category: "realestate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
    demoUrl: "/demo/realestate",
    features: ["Búsqueda avanzada", "Tours virtuales", "Calculadora hipoteca"],
    color: "from-yellow-600 to-orange-600"
  },
  {
    id: 7,
    name: "Academia Online",
    category: "education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
    demoUrl: "/demo/education",
    features: ["Cursos online", "Certificaciones", "Progreso estudiantes"],
    color: "from-pink-600 to-rose-600"
  },
  {
    id: 8,
    name: "App Mobile Landing",
    category: "app",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    demoUrl: "/demo/app",
    features: ["Descarga app", "Características", "Screenshots"],
    color: "from-cyan-600 to-blue-600"
  },
  {
    id: 9,
    name: "ONG Impacto Social",
    category: "ngo",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&h=300&fit=crop",
    demoUrl: "/demo/ngo",
    features: ["Campañas", "Voluntariado", "Donaciones"],
    color: "from-emerald-600 to-green-600"
  },
  {
    id: 10,
    name: "Blog Personal",
    category: "blog",
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=500&h=300&fit=crop",
    demoUrl: "/demo/blog",
    features: ["Artículos", "Comentarios", "Newsletter"],
    color: "from-violet-600 to-purple-600"
  },
  {
    id: 11,
    name: "Spa & Wellness",
    category: "business",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=300&fit=crop",
    demoUrl: "/demo/spa",
    features: ["Reservas tratamientos", "Catálogo servicios", "Membresías"],
    color: "from-teal-600 to-cyan-600"
  },
  {
    id: 12,
    name: "Gimnasio Fitness",
    category: "business",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop",
    demoUrl: "/demo/gym",
    features: ["Clases programadas", "Entrenadores", "Planes membresía"],
    color: "from-red-600 to-pink-600"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "María González",
    business: "Restaurante La Cocina",
    text: "MonSeoWeb transformó mi negocio. Las reservas online aumentaron 300% y el diseño es espectacular.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b056d8e4?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    business: "Tienda Fashion Style",
    text: "Increíble plataforma. Mis ventas online se dispararon y los clientes adoran la experiencia de compra.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    business: "Estudio Creativo",
    text: "Mi portafolio nunca se vió tan profesional. Conseguí 5 clientes nuevos la primera semana.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    price: "$50",
    period: "inicial + $20/mes",
    description: "Perfecto para empezar tu presencia online",
    features: [
      "Diseño responsive",
      "5 páginas incluidas",
      "Formulario de contacto",
      "SSL certificado",
      "Soporte básico",
      "Dominio gratis 1 año"
    ],
    popular: false,
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: 2,
    name: "Pro",
    price: "$120",
    period: "inicial + $40/mes",
    description: "Ideal para negocios en crecimiento",
    features: [
      "Todo lo del plan Starter",
      "15 páginas incluidas",
      "E-commerce básico",
      "Analytics avanzado",
      "Chat en vivo",
      "SEO optimizado",
      "Backup automático"
    ],
    popular: true,
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 3,
    name: "Premium",
    price: "$200",
    period: "inicial + $80/mes",
    description: "Para empresas que buscan lo mejor",
    features: [
      "Todo lo del plan Pro",
      "Páginas ilimitadas",
      "E-commerce avanzado",
      "Aplicación móvil",
      "Soporte 24/7",
      "Integraciones API",
      "Multi-idioma",
      "Certificaciones seguridad"
    ],
    popular: false,
    color: "from-red-600 to-orange-600"
  }
];

export const faqs = [
  {
    id: 1,
    question: "¿Qué incluye el precio inicial de $50?",
    answer: "El precio inicial incluye el diseño completo de tu web, configuración del hosting, dominio gratis por 1 año y puesta en marcha. Luego solo pagas la mensualidad correspondiente a tu plan."
  },
  {
    id: 2,
    question: "¿Puedo cambiar el diseño después de la entrega?",
    answer: "¡Absolutamente! Tu web es completamente autogestionable. Puedes cambiar textos, imágenes, colores y agregar contenido cuando quieras desde el panel de administración."
  },
  {
    id: 3,
    question: "¿Qué tan rápido estará lista mi web?",
    answer: "Una vez que tengas el contenido listo, tu web estará online en máximo 3-5 días hábiles. Si necesitas cambios, los implementamos inmediatamente."
  },
  {
    id: 4,
    question: "¿Incluye posicionamiento en Google?",
    answer: "Sí, todas nuestras webs están optimizadas para SEO básico. En los planes Pro y Premium incluimos SEO avanzado y te ayudamos a posicionar mejor en Google."
  },
  {
    id: 5,
    question: "¿Qué pasa si no me gusta el resultado?",
    answer: "Tienes 30 días para solicitar cambios sin costo adicional. Si definitivamente no estás satisfecho, te devolvemos el 100% de tu dinero."
  }
];

export const videoTutorials = [
  {
    id: 1,
    title: "Cómo editar el contenido de tu web",
    duration: "5:30",
    category: "Básico",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Configurar tu tienda online",
    duration: "8:15",
    category: "E-commerce",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "SEO básico para tu web",
    duration: "12:45",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=300&h=200&fit=crop"
  }
];

export const webBuilderSteps = [
  {
    id: 1,
    title: "Elige tu plantilla",
    description: "Selecciona el diseño que mejor se adapte a tu negocio",
    icon: "🎨",
    completed: false
  },
  {
    id: 2,
    title: "Personaliza el contenido",
    description: "Agrega tu información, imágenes y textos",
    icon: "✏️",
    completed: false
  },
  {
    id: 3,
    title: "Configura funcionalidades",
    description: "Activa las características que necesitas",
    icon: "⚙️",
    completed: false
  },
  {
    id: 4,
    title: "Publica tu web",
    description: "¡Tu web está lista para el mundo!",
    icon: "🚀",
    completed: false
  }
];

export const companyInfo = {
  name: "MonSeo Web",
  tagline: "Páginas Web desde $50 inicial",
  description: "Creamos páginas web profesionales y autogestionables que impulsan tu negocio online",
  phone: "+1 (809) 252-7044",
  whatsapp: "+15708614963",
  email: "istemsd@gmail.com",
  address: "123 North Wyoming Street, 18201, Hazleton PA"
};