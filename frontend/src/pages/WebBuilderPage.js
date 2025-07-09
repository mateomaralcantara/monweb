import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Palette, 
  Type, 
  Settings, 
  Rocket,
  Star,
  Zap
} from 'lucide-react';
import { templates, webBuilderSteps } from '../data/mock';

const WebBuilderPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [projectData, setProjectData] = useState({
    businessName: '',
    businessType: '',
    description: '',
    colors: {
      primary: '#DC2626',
      secondary: '#EA580C'
    },
    features: []
  });

  const progress = ((currentStep + 1) / webBuilderSteps.length) * 100;

  const handleNext = () => {
    if (currentStep < webBuilderSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleFeatureToggle = (feature) => {
    setProjectData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleFinish = () => {
    alert('¡Proyecto creado! Te contactaremos pronto para comenzar el desarrollo.');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Palette className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h2 className="text-2xl font-bold mb-2">Elige tu plantilla</h2>
              <p className="text-muted-foreground">
                Selecciona el diseño que mejor se adapte a tu negocio
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.slice(0, 9).map((template) => (
                <Card 
                  key={template.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedTemplate?.id === template.id 
                      ? 'ring-2 ring-red-500 shadow-lg' 
                      : ''
                  }`}
                  onClick={() => handleTemplateSelect(template)}
                >
                  <CardContent className="p-4">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold mb-2">{template.name}</h3>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{template.category}</Badge>
                      {selectedTemplate?.id === template.id && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Type className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h2 className="text-2xl font-bold mb-2">Personaliza el contenido</h2>
              <p className="text-muted-foreground">
                Cuéntanos sobre tu negocio para personalizar tu web
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nombre de tu negocio *
                </label>
                <Input
                  type="text"
                  name="businessName"
                  value={projectData.businessName}
                  onChange={handleInputChange}
                  placeholder="Ej: Restaurante La Cocina"
                  className="rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Tipo de negocio *
                </label>
                <select
                  name="businessType"
                  value={projectData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Selecciona tu tipo de negocio</option>
                  <option value="restaurant">Restaurante</option>
                  <option value="shop">Tienda</option>
                  <option value="service">Servicios</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="blog">Blog</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Descripción del negocio *
                </label>
                <Textarea
                  name="description"
                  value={projectData.description}
                  onChange={handleInputChange}
                  placeholder="Describe brevemente tu negocio, productos o servicios..."
                  rows={4}
                  className="rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Color principal
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={projectData.colors.primary}
                      onChange={(e) => setProjectData(prev => ({
                        ...prev,
                        colors: { ...prev.colors, primary: e.target.value }
                      }))}
                      className="w-12 h-12 rounded-lg border border-border"
                    />
                    <span className="text-sm text-muted-foreground">
                      {projectData.colors.primary}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Color secundario
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={projectData.colors.secondary}
                      onChange={(e) => setProjectData(prev => ({
                        ...prev,
                        colors: { ...prev.colors, secondary: e.target.value }
                      }))}
                      className="w-12 h-12 rounded-lg border border-border"
                    />
                    <span className="text-sm text-muted-foreground">
                      {projectData.colors.secondary}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        const availableFeatures = [
          'Formulario de contacto',
          'Galería de imágenes',
          'Blog/Noticias',
          'Tienda online',
          'Reservas online',
          'Chat en vivo',
          'Mapa de ubicación',
          'Redes sociales',
          'Newsletter',
          'Testimonios',
          'Equipo/Staff',
          'Certificaciones SSL'
        ];

        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Settings className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h2 className="text-2xl font-bold mb-2">Configura funcionalidades</h2>
              <p className="text-muted-foreground">
                Selecciona las características que necesitas
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableFeatures.map((feature) => (
                  <Card 
                    key={feature}
                    className={`cursor-pointer transition-all duration-300 ${
                      projectData.features.includes(feature)
                        ? 'ring-2 ring-red-500 bg-red-50 dark:bg-red-950/20'
                        : 'hover:shadow-lg'
                    }`}
                    onClick={() => handleFeatureToggle(feature)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                        projectData.features.includes(feature)
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        {projectData.features.includes(feature) ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          <Zap className="w-6 h-6" />
                        )}
                      </div>
                      <h3 className="font-semibold text-sm">{feature}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Rocket className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h2 className="text-2xl font-bold mb-2">¡Tu web está lista!</h2>
              <p className="text-muted-foreground">
                Revisa tu configuración y confirma para comenzar el desarrollo
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              {/* Project Summary */}
              <Card className="rounded-2xl">
                <CardHeader>
                  <h3 className="text-xl font-bold">Resumen del proyecto</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Plantilla:</span>
                    <span>{selectedTemplate?.name || 'No seleccionada'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Negocio:</span>
                    <span>{projectData.businessName || 'No especificado'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tipo:</span>
                    <span>{projectData.businessType || 'No especificado'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Funcionalidades:</span>
                    <span>{projectData.features.length} seleccionadas</span>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Próximos pasos</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">Nuestro equipo revisará tu proyecto</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">Te contactaremos en 24 horas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">Tu web estará lista en 3-5 días</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
                <h1 className="text-3xl font-bold">Crea tu web</h1>
                <p className="text-white/80">Asistente paso a paso</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">Paso {currentStep + 1}</div>
              <div className="text-sm text-white/80">de {webBuilderSteps.length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-gray-900 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progreso</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderStepContent()}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </Button>

          <div className="flex space-x-2">
            {webBuilderSteps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentStep
                    ? 'bg-red-600'
                    : index < currentStep
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {currentStep === webBuilderSteps.length - 1 ? (
            <Button
              onClick={handleFinish}
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white flex items-center space-x-2"
            >
              <Rocket className="w-4 h-4" />
              <span>¡Crear mi web!</span>
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={
                (currentStep === 0 && !selectedTemplate) ||
                (currentStep === 1 && (!projectData.businessName || !projectData.businessType))
              }
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white flex items-center space-x-2"
            >
              <span>Siguiente</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebBuilderPage;