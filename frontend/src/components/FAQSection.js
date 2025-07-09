import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqs } from '../data/mock';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            PREGUNTAS FRECUENTES
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Las respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card 
              key={faq.id}
              className={`overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                openFAQ === faq.id 
                  ? 'border-red-500 shadow-lg shadow-red-500/25 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20' 
                  : 'border-border hover:border-red-500'
              }`}
              onClick={() => toggleFAQ(faq.id)}
            >
              <CardContent className="p-6">
                {/* Question */}
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-bold transition-colors duration-300 ${
                    openFAQ === faq.id ? 'text-red-600' : 'text-foreground'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFAQ === faq.id 
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  openFAQ === faq.id 
                    ? 'max-h-96 opacity-100 mt-4' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿No encuentras la respuesta que buscas?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/1555123456?text=Hola,%20tengo%20una%20pregunta%20sobre%20MonSeoWeb`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors duration-300"
            >
              💬 Chatea con nosotros
            </a>
            <a 
              href="mailto:info@monseoweb.com"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-full transition-colors duration-300"
            >
              📧 Envíanos un email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;