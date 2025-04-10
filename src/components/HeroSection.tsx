
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-20 pb-10 md:pt-24 md:pb-16 bg-gradient-to-b from-secondary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-100 text-primary-700 mb-4 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
            Contabilidade Digital para sua Empresa
          </span>
          <h1 className={`heading-xl mb-4 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
            Serviços contábeis <span className="text-gradient">simplificados</span> para seu negócio
          </h1>
          <p className={`subtitle mx-auto mb-6 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
            Desde nossa fundação, nos dedicamos a oferecer serviços contábeis de qualidade com simplicidade e transparência para empresas de todos os tamanhos.
          </p>
          <div className={`flex flex-col sm:flex-row justify-center gap-4 opacity-0 ${isVisible ? 'animate-slideDown delay-300' : ''}`}>
            <Link to="/contact" className="button-primary group">
              Solicitar Orçamento
              <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className="button-secondary">
              Nossos serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
