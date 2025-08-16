import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/mock';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('http://localhost:8000/api/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      });
  
      if (res.ok) {
        alert('¡Mensaje enviado! Te contactaremos pronto.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        const err = await res.text();
        alert('Error al enviar el mensaje: ' + err);
      }
    } catch (error) {
      alert('Error de red: ' + error.message);
    }
  };
  

  const services = [
    'Página web básica',
    'Tienda online',
    'Página corporativa',
    'Blog/Portfolio',
    'Aplicación web',
    'Consultoría SEO',
    'Mantenimiento web',
    'Otro'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Contacto</h1>
              <p className="text-white/80">Estamos aquí para ayudarte</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="rounded-2xl shadow-2xl">
              <CardHeader className="p-8">
                <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>
                <p className="text-muted-foreground">
                  Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad
                </p>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="istemsd@gmail.com"
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Teléfono
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 809) 252-7044"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Servicio de interés
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      rows={4}
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-3 rounded-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">
                        <a href={`mailto:${companyInfo.email}`} className="hover:text-red-600 transition-colors">
                          {companyInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Teléfono</h4>
                      <p className="text-muted-foreground">
                        <a href={`tel:${companyInfo.phone}`} className="hover:text-green-600 transition-colors">
                          {companyInfo.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ubicación</h4>
                      <p className="text-muted-foreground">
                        {companyInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Horario</h4>
                      <p className="text-muted-foreground">
                        Lunes - Viernes: 9:00 - 18:00<br />
                        Sábados: 10:00 - 15:00
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">¿Necesitas ayuda inmediata?</h3>
                <p className="text-muted-foreground mb-6">
                  Chatea con nosotros por WhatsApp y te responderemos al instante
                </p>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=Hola,%20necesito%20ayuda%20con%20mi%20proyecto%20web`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Abrir WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Preguntas frecuentes</h3>
                <div className="space-y-3">
                  <Link to="/#faq" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="font-medium">¿Cuánto tiempo toma crear mi web?</div>
                    <div className="text-sm text-muted-foreground">3-5 días hábiles</div>
                  </Link>
                  <Link to="/#faq" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="font-medium">¿Incluye dominio y hosting?</div>
                    <div className="text-sm text-muted-foreground">Sí, dominio gratis 1 año</div>
                  </Link>
                  <Link to="/#faq" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="font-medium">¿Puedo hacer cambios después?</div>
                    <div className="text-sm text-muted-foreground">Completamente autogestionable</div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;