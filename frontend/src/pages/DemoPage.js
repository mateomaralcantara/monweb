import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, ExternalLink, Eye } from 'lucide-react';
import { templates } from '../data/mock';

const DemoPage = () => {
  const { category } = useParams();
  
  const template = templates.find(t => t.demoUrl === `/demo/${category}`) || templates[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold">Demo: {template.name}</h1>
                <p className="text-white/80">Vista previa interactiva</p>
              </div>
            </div>
            <Link to="/create-web">
              <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                Usar esta plantilla
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Demo */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-1 text-sm text-gray-600 dark:text-gray-400">
                      www.{template.name.toLowerCase().replace(/ /g, '')}.com
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-white">
                  <img 
                    src={template.image} 
                    alt={`Demo de ${template.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Demo Actions */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white">
                <Eye className="w-4 h-4 mr-2" />
                Vista completa
              </Button>
              <Button variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                Abrir en nueva ventana
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Template Info */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${template.color} flex items-center justify-center text-white font-bold text-xl`}>
                    {template.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{template.name}</h3>
                    <Badge variant="secondary" className="mt-1">
                      {template.category}
                    </Badge>
                  </div>
                </div>
                
                <h4 className="font-semibold mb-2">Características incluidas:</h4>
                <ul className="space-y-2">
                  {template.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Action Card */}
            <Card className="rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">¿Te gusta esta plantilla?</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Personalízala con tu contenido y tenla online en 3 días
                </p>
                <Link to="/create-web">
                  <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold">
                    ¡Crear mi web ahora!
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Similar Templates */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Plantillas similares</h3>
                <div className="space-y-3">
                  {templates.filter(t => t.category === template.category && t.id !== template.id).slice(0, 3).map((similar) => (
                    <Link key={similar.id} to={similar.demoUrl} className="block">
                      <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <img 
                          src={similar.image} 
                          alt={similar.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-medium text-sm">{similar.name}</div>
                          <div className="text-xs text-muted-foreground">{similar.category}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;