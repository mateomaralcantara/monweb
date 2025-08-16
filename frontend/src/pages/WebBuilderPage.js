import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { 
  ArrowLeft, ArrowRight, Check, Palette, Type, Settings, Rocket, Star, Zap 
} from 'lucide-react';
import { templates, webBuilderSteps } from '../data/mock';

const WebBuilderPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [projectData, setProjectData] = useState({
    businessName: '',
    businessType: '',
    description: '',
    colors: { primary: '#DC2626', secondary: '#EA580C' },
    features: []
  });

  // --- NUEVO: Estado de envío ---
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const progress = ((currentStep + 1) / webBuilderSteps.length) * 100;

  const handleNext = () => {
    if (currentStep < webBuilderSteps.length - 1) setCurrentStep(currentStep + 1);
  };
  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData(prev => ({ ...prev, [name]: value }));
  };
  const handleTemplateSelect = (template) => setSelectedTemplate(template);
  const handleFeatureToggle = (feature) => {
    setProjectData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  // --- FUNCIONALIDAD PRINCIPAL: Enviar datos al backend ---
  const handleFinish = async () => {
    setLoading(true);
    setDone(false);
    setError(null);

    // --- Armar payload ---
    const payload = {
      templateId: selectedTemplate?.id,
      templateName: selectedTemplate?.name,
      ...projectData,
      timestamp: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/webprojects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('No se pudo guardar el proyecto');
      setDone(true);
    } catch (err) {
      setError('Ocurrió un error al crear el proyecto: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // --- Render dinámico de pasos ---
  const renderStepContent = () => { /* ...DEJA IGUAL TODO TU SWITCH CASE... */ };

  // --- UI ---
  return (
    <div className="min-h-screen bg-background">
      {/* Header y Progreso igual... */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {done ? (
          <div className="text-center py-24">
            <Check className="w-16 h-16 mx-auto text-green-600 mb-6" />
            <h2 className="text-3xl font-bold mb-2">¡Proyecto enviado!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nuestro equipo te contactará en breve.<br />
              <Link to="/" className="underline text-red-600 hover:text-orange-600">Volver al inicio</Link>
            </p>
          </div>
        ) : (
          <>
            {renderStepContent()}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0 || loading}
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
                  disabled={loading}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white flex items-center space-x-2"
                >
                  {loading && <span className="animate-spin mr-2">⏳</span>}
                  <Rocket className="w-4 h-4" />
                  <span>¡Crear mi web!</span>
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={
                    loading ||
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
            {error && (
              <div className="mt-6 text-center text-red-600 font-bold">{error}</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WebBuilderPage;
