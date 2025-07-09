import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Search, 
  Headphones, 
  Globe, 
  CreditCard, 
  BarChart,
  Users,
  Clock
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Diseño Ultra Moderno",
      description: "Efectos glassmorphism, animaciones suaves y diseños que impactan desde el primer segundo",
      color: "from-yellow-500 to-orange-500",
      badge: "Premium"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "100% Responsive",
      description: "Tu web se ve perfecta en móviles, tablets y escritorio. Optimizada para todos los dispositivos",
      color: "from-blue-500 to-cyan-500",
      badge: "Garantizado"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimizado",
      description: "Posiciona en Google desde el día uno. Estructura y código optimizado para buscadores",
      color: "from-green-500 to-teal-500",
      badge: "Ranking"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad Garantizada",
      description: "SSL certificado, backups automáticos y protección contra malware incluida",
      color: "from-red-500 to-pink-500",
      badge: "Seguro"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Completamente Autogestionable",
      description: "Tú controlas todo: textos, imágenes, productos, blog. Sin dependencias técnicas",
      color: "from-purple-500 to-indigo-500",
      badge: "Autonomía"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entrega en 3 Días",
      description: "Tu web lista y online en máximo 3 días hábiles. Proceso súper rápido y eficiente",
      color: "from-orange-500 to-red-500",
      badge: "Rápido"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "E-commerce Integrado",
      description: "Vende online desde día uno. Pasarelas de pago, inventario y gestión de pedidos",
      color: "from-emerald-500 to-green-500",
      badge: "Ventas"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics Avanzado",
      description: "Conoce a tus visitantes, métricas de conversión y estadísticas detalladas",
      color: "from-violet-500 to-purple-500",
      badge: "Datos"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Soporte 24/7",
      description: "Equipo disponible siempre que lo necesites. WhatsApp, email y chat en vivo",
      color: "from-pink-500 to-rose-500",
      badge: "Siempre"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            ¿Por qué elegir MonSeoWeb?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No solo creamos webs, construimos experiencias digitales que convierten visitantes en clientes
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-red-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                {/* Icon and Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${feature.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-to-r from-red-100 to-orange-100 text-red-700 font-semibold"
                  >
                    {feature.badge}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-muted-foreground font-semibold">Webs Creadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-muted-foreground font-semibold">Satisfacción</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              3 días
            </div>
            <div className="text-muted-foreground font-semibold">Entrega</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-muted-foreground font-semibold">Soporte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;