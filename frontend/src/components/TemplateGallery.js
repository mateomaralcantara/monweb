import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Eye, Zap } from 'lucide-react';
import { templates } from '../data/mock';

const TemplateGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTemplate, setHoveredTemplate] = useState(null);

  const categories = [
    { id: 'all', name: 'Todas', count: templates.length },
    { id: 'business', name: 'Negocios', count: templates.filter(t => t.category === 'business').length },
    { id: 'ecommerce', name: 'Tiendas', count: templates.filter(t => t.category === 'ecommerce').length },
    { id: 'restaurants', name: 'Restaurantes', count: templates.filter(t => t.category === 'restaurants').length },
    { id: 'portfolio', name: 'Portafolios', count: templates.filter(t => t.category === 'portfolio').length },
    { id: 'realestate', name: 'Inmobiliaria', count: templates.filter(t => t.category === 'realestate').length },
    { id: 'education', name: 'Educación', count: templates.filter(t => t.category === 'education').length }
  ];

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  return (
    <section id="templates" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Plantillas Poderosas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diseños ultra modernos y completamente autogestionables para cualquier tipo de negocio
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg' 
                  : 'hover:border-red-500 hover:text-red-600'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTemplates.map((template) => (
            <Card 
              key={template.id}
              className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                hoveredTemplate === template.id ? 'border-red-500' : 'border-border'
              }`}
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${template.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                    <div className="flex space-x-3">
                      <Link to={template.demoUrl}>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </Link>
                      <Link to="/create-web">
                        <Button 
                          size="sm"
                          className="bg-white text-black hover:bg-gray-100 transition-all duration-300"
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          Usar
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {template.name}
                  </h3>
                  <div className="space-y-2">
                    {template.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/create-web">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              ¡Crear mi web con estas plantillas!
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;