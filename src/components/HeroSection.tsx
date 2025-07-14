
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 xl:pt-40 xl:pb-28 2xl:pt-48 2xl:pb-32 bg-gradient-to-b from-secondary-50 to-white">
      <div className="fullhd-container">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto text-center">
          <span className={`inline-block py-2 px-4 xl:py-3 xl:px-6 rounded-full text-base xl:text-lg font-medium bg-primary-100 text-primary-700 mb-6 xl:mb-8 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
            Contabilidade Digital para sua Empresa
          </span>
          <h1 className={`heading-xl mb-6 xl:mb-8 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
            Serviços contábeis <span className="text-gradient">simplificados</span> para seu negócio
          </h1>
          <p className={`subtitle mx-auto mb-10 xl:mb-12 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
            Desde nossa fundação, nos dedicamos a oferecer serviços contábeis de qualidade com simplicidade e transparência para empresas de todos os tamanhos.
          </p>
          <div className={`flex flex-col sm:flex-row justify-center gap-6 xl:gap-8 opacity-0 ${isVisible ? 'animate-slideDown delay-300' : ''}`}>
            <Link to="/contact" className="button-primary group">
              Solicitar Orçamento
              <ArrowRight className="inline-block ml-3 w-5 h-5 xl:w-6 xl:h-6 transition-transform group-hover:translate-x-1" />
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
