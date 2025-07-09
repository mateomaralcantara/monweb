import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyInfo } from '../data/mock';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=Hola,%20me%20interesa%20crear%20una%20web%20con%20MonSeoWeb`;

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="mb-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm transform transition-all duration-300 animate-in slide-in-from-bottom-5">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-3">
                <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                  ¡Hola! 👋
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  ¿Listo para crear tu web desde $50? Estoy aquí para ayudarte.
                </p>
              </div>
              <div className="mt-3 space-y-2">
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors duration-300"
                >
                  💬 Empezar chat
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-gray-500 hover:text-gray-700 text-sm py-1 transition-colors duration-300"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
        )}
      </button>

      {/* Pulse Animation */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 bg-green-600 rounded-full animate-ping opacity-20"></div>
      )}
    </div>
  );
};

export default WhatsAppButton;