import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 500 empresarios han transformado sus negocios con MonSeoWeb
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="group relative overflow-hidden rounded-3xl border-2 border-border hover:border-red-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white">
                    <Quote className="w-6 h-6" />
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-red-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.business}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <Badge variant="outline" className="px-6 py-3 text-lg font-semibold">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              4.9/5 puntuación promedio
            </Badge>
            <Badge variant="outline" className="px-6 py-3 text-lg font-semibold">
              <Quote className="w-5 h-5 mr-2 text-blue-400" />
              98% recomiendan MonSeoWeb
            </Badge>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-muted-foreground font-semibold">Clientes felices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                300%
              </div>
              <div className="text-muted-foreground font-semibold">Aumento ventas promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                24h
              </div>
              <div className="text-muted-foreground font-semibold">Tiempo respuesta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-muted-foreground font-semibold">Tiempo actividad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;