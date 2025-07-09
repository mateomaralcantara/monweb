import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { 
  ArrowLeft, 
  Play, 
  Search, 
  Clock, 
  Filter,
  Star,
  BookOpen,
  Video,
  Download
} from 'lucide-react';
import { videoTutorials } from '../data/mock';

const VideoTutorialsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', count: videoTutorials.length },
    { id: 'Básico', name: 'Básico', count: videoTutorials.filter(v => v.category === 'Básico').length },
    { id: 'E-commerce', name: 'E-commerce', count: videoTutorials.filter(v => v.category === 'E-commerce').length },
    { id: 'Marketing', name: 'Marketing', count: videoTutorials.filter(v => v.category === 'Marketing').length },
    { id: 'Avanzado', name: 'Avanzado', count: videoTutorials.filter(v => v.category === 'Avanzado').length }
  ];

  const filteredVideos = videoTutorials.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleVideoPlay = (videoId) => {
    alert(`Reproduciendo video: ${videoTutorials.find(v => v.id === videoId)?.title}`);
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
                <h1 className="text-3xl font-bold">Video Tutoriales</h1>
                <p className="text-white/80">Aprende a gestionar tu web paso a paso</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{videoTutorials.length}+</div>
              <div className="text-sm text-white/80">Videos disponibles</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar tutoriales..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-lg"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                    : 'hover:border-red-500 hover:text-red-600'
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Tutorial */}
        <Card className="rounded-2xl mb-12 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                alt="Tutorial destacado"
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-16 h-16 p-0"
                  onClick={() => handleVideoPlay(1)}
                >
                  <Play className="w-8 h-8" />
                </Button>
              </div>
              <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                <Star className="w-4 h-4 mr-1" />
                Destacado
              </Badge>
            </div>
            <div className="p-8">
              <Badge variant="outline" className="mb-4">Básico</Badge>
              <h2 className="text-2xl font-bold mb-4">
                Cómo editar el contenido de tu web
              </h2>
              <p className="text-muted-foreground mb-6">
                Aprende a actualizar textos, imágenes y contenido de tu página web de manera fácil y rápida usando nuestro panel de administración.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">5:30 min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Video className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">HD</span>
                </div>
              </div>
              <Button 
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"
                onClick={() => handleVideoPlay(1)}
              >
                <Play className="w-4 h-4 mr-2" />
                Ver tutorial
              </Button>
            </div>
          </div>
        </Card>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <Card 
              key={video.id}
              className="group overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-12 h-12 p-0"
                      onClick={() => handleVideoPlay(video.id)}
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-black/60 text-white">
                      <Clock className="w-3 h-3 mr-1" />
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {video.category}
                  </Badge>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleVideoPlay(video.id)}
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Ver
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No se encontraron tutoriales</h3>
            <p className="text-muted-foreground mb-6">
              Intenta con otros términos de búsqueda o categorías
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        )}

        {/* Help Section */}
        <Card className="rounded-2xl mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
          <CardContent className="p-8 text-center">
            <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda personalizada?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Si no encuentras lo que buscas en nuestros tutoriales, nuestro equipo de soporte está disponible para ayudarte directamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white">
                  Contactar soporte
                </Button>
              </Link>
              <a
                href={`https://wa.me/1555123456?text=Hola,%20necesito%20ayuda%20con%20los%20tutoriales`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Chat por WhatsApp
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VideoTutorialsPage;