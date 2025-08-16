import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Star, Zap, Globe } from 'lucide-react';
import { companyInfo } from '../data/mock';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-orange-600 to-purple-700">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-6"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Más de 1,500+ webs creadas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
            <span className="block mb-2">Páginas web</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
              desde $50 inicial
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Diseños ultra modernos y completamente autogestionables. 
            <span className="font-bold text-yellow-300"> Tu web lista en 5 días.</span>
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Diseño responsive</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-green-400" />
              <span>SEO optimizado</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-blue-400" />
              <span>Soporte 24/7</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link to="/create-web">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                ¡Crear mi web ahora!
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="#templates">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Ver plantillas
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/70">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1,500+</div>
              <div className="text-sm">Webs creadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99%</div>
              <div className="text-sm">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm">Soporte promedio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;