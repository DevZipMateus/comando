
import { Button } from '@/components/ui/button';

const EgestorERP = () => {
  // Link for both the title and button
  const egestorLink = "https://www.egestor.com.br/afl/16546";

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="fullhd-container">
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-16 2xl:gap-20 mb-12 xl:mb-16">
          {/* Left column - Header Text */}
          <div className="xl:w-1/2 text-center xl:text-left mb-12 xl:mb-0 animate-fade-in">
            <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
              <h2 className="heading-lg mb-6 xl:mb-8 leading-tight">Sistema de gestão empresarial</h2>
            </a>
            <p className="text-xl xl:text-2xl 2xl:text-3xl text-gray-600 font-normal leading-relaxed">
              Dobre seus lucros otimizando sua gestão
            </p>
          </div>
          
          {/* Right column - Video Container */}
          <div className="xl:w-1/2 rounded-xl overflow-hidden shadow-xl animate-fade-in">
            <video className="w-full aspect-video object-cover" autoPlay muted loop playsInline poster="/lovable-uploads/6e74d94e-9f38-4653-8c48-8f45541ea022.png">
              <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
        
        {/* CTA Button - Centered below both columns */}
        <div className="flex justify-center animate-fade-in">
          <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-md xl:max-w-lg">
            <button className="w-full py-4 xl:py-6 text-xl xl:text-2xl bg-[#7CFFA0] hover:bg-[#6DF090] text-black font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
              Teste grátis
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
