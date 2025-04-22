
const NFePlus = () => {
  // Link for both the title and button
  const nfePlusLink = "https://nfemais.com.br/?afl=16546";

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12 mb-10">
          {/* Left column - Header Text */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-fade-in">
            <a href={nfePlusLink} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">Emissor de Notas Fiscais</h2>
            </a>
            <p className="text-lg md:text-xl text-gray-600 font-normal">
              Emita notas fiscais de forma rápida e segura
            </p>
          </div>
          
          {/* Right column - Image Container */}
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl animate-fade-in">
            <img 
              src="/lovable-uploads/541797c4-735d-4fea-92b7-ed4a6a08fd64.png" 
              alt="NFe+ Sistema de emissão de notas fiscais" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* CTA Button - Centered below both columns */}
        <div className="flex justify-center animate-fade-in">
          <a href={nfePlusLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-sm">
            <button className="w-full py-3 bg-[#7CFFA0] hover:bg-[#6DF090] text-black font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
              Teste grátis
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NFePlus;

