import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { pricingPlans } from '../data/mock';

const PricingSection = () => {
  const getIcon = (planName) => {
    switch(planName) {
      case 'Starter':
        return <Zap className="w-6 h-6" />;
      case 'Pro':
        return <Star className="w-6 h-6" />;
      case 'Premium':
        return <Crown className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Planes que se adaptan a ti
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde $50 inicial + mensualidad. Sin sorpresas, sin letra pequeña. 
            <span className="font-bold text-green-600"> Dominio gratis el primer año.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id}
              className={`group relative overflow-hidden rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 ${
                plan.popular 
                  ? 'border-red-500 shadow-2xl shadow-red-500/25 bg-gradient-to-b from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20' 
                  : 'border-border hover:border-red-500 hover:shadow-2xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    <Star className="w-4 h-4 mr-1" />
                    MÁS POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center p-8">
                {/* Plan Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(plan.name)}
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-black text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-muted-foreground font-semibold">
                    {plan.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link to="/create-web">
                  <Button 
                    className={`w-full py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg'
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-red-600 hover:to-orange-600 text-white'
                    }`}
                  >
                    {plan.popular ? '¡Empezar ahora!' : 'Comenzar'}
                  </Button>
                </Link>
              </CardContent>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            🎁 <span className="font-bold text-green-600">Oferta especial:</span> Dominio .com gratis el primer año en todos los planes
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            * Precios en USD. Sin comisiones ocultas. Cancelación gratuita en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;