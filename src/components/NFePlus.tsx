
const NFePlus = () => {
  // Link for both the title and button
  const nfePlusLink = "https://nfemais.com.br/?afl=16546";

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="fullhd-container">
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-16 2xl:gap-20 mb-12 xl:mb-16">
          {/* Left column - Header Text */}
          <div className="xl:w-1/2 text-center xl:text-left mb-12 xl:mb-0 animate-fade-in">
            <a href={nfePlusLink} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
              <h2 className="heading-lg mb-6 xl:mb-8 leading-tight">Emissor de Notas Fiscais</h2>
            </a>
            <p className="text-xl xl:text-2xl 2xl:text-3xl text-gray-600 font-normal leading-relaxed">
              Cadastre seus produtos, tributação e contatos para simplificar a emissão de notas fiscais eletrônicas.
            </p>
          </div>
          
          {/* Right column - Image Container */}
          <div className="xl:w-1/2 rounded-xl overflow-hidden shadow-xl animate-fade-in">
            <img 
              src="/lovable-uploads/541797c4-735d-4fea-92b7-ed4a6a08fd64.png" 
              alt="NFe+ Sistema de emissão de notas fiscais" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* CTA Button - Centered below both columns */}
        <div className="flex justify-center animate-fade-in">
          <a href={nfePlusLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-md xl:max-w-lg">
            <button className="w-full py-4 xl:py-6 text-xl xl:text-2xl bg-[#7CFFA0] hover:bg-[#6DF090] text-black font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
              Teste grátis
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NFePlus;
