import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/mock';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  {companyInfo.name}
                </span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-400">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Diseño Web</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">E-commerce</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">SEO</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Mantenimiento</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Hosting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-400">Empresa</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Sobre nosotros</Link></li>
              <li><Link to="/tutorials" className="text-gray-300 hover:text-white transition-colors duration-300">Tutoriales</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contacto</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Términos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-400">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-white transition-colors duration-300">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-white transition-colors duration-300">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">
                  {companyInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Hecho con <Heart className="w-4 h-4 text-red-500 mx-1" /> para impulsar tu negocio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;