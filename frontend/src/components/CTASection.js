import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Zap, Star } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-purple-700 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-3"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-bold">Oferta especial por tiempo limitado</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            <span className="block mb-2">¡Tu web lista</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
              desde $50!
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            No esperes más para tener la web que tu negocio merece. 
            <span className="font-bold text-yellow-300"> Diseño profesional, entrega rápida y soporte 24/7.</span>
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 mb-8">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Entrega en 3 días</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-green-400" />
              <span>Dominio gratis 1 año</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRight className="w-5 h-5 text-blue-400" />
              <span>100% autogestionable</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/create-web">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                ¡Crear mi web ahora!
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-10 py-4 rounded-full text-lg backdrop-blur-sm transition-all duration-300"
              >
                Hablar con un experto
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white/70 pt-8">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b056d8e4?w=50&h=50&fit=crop&crop=face" alt="Cliente" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" alt="Cliente" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" alt="Cliente" />
              </div>
              <span className="text-sm font-medium">500+ clientes satisfechos</span>
            </div>
            <div className="text-sm">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 font-medium">4.9/5 valoración</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;