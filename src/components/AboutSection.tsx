
import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const advantages = [
  "Mais de 5 anos de experiência", 
  "Equipe altamente qualificada", 
  "Atendimento personalizado", 
  "Tecnologia de ponta", 
  "Segurança garantida", 
  "Consultoria estratégica"
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll('.animate-element');
        elements.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('animate-fadeIn');
          }, i * 200);
        });
      }
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="section-padding bg-white" id="about">
      <div className="fullhd-container" ref={sectionRef}>
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 2xl:gap-20 items-center fullhd-py">
          <div className="fullhd-spacing">
            <div className="opacity-0 animate-element">
              <span className="inline-block py-2 px-4 xl:py-3 xl:px-6 rounded-full text-base xl:text-lg font-medium bg-primary-100 text-primary-700 mb-4 xl:mb-6">
                Sobre Nós
              </span>
              <h2 className="heading-lg mb-6 xl:mb-8 text-left">
                Serviços contábeis <span className="text-primary-700">simplificados</span>
              </h2>
              <p className="fullhd-text text-gray-600 mb-6 xl:mb-8 text-left leading-relaxed">
                Fundado em 2017, o Comando Contabilidade nasceu da paixão por números e da vontade de ajudar empresários a alcançarem seus objetivos. Desde o início, nosso compromisso foi oferecer serviços contábeis de excelência, combinando conhecimento técnico com um atendimento próximo e humanizado.
              </p>
              <p className="fullhd-text text-gray-600 mb-8 xl:mb-10 text-left leading-relaxed">
                Com o crescimento do nosso escritório, expandimos nossa equipe e aprimoramos nossos serviços, sempre acompanhando as mudanças no cenário econômico e as necessidades dos nossos clientes. Ao longo dos anos, construímos relacionamentos duradouros, pautados na confiança e na transparência, tornando-nos um parceiro estratégico para empresas de diversos setores.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 xl:gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start opacity-0 animate-element">
                  <CheckCircle className="w-6 h-6 xl:w-7 xl:h-7 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="ml-4 xl:ml-5 fullhd-text text-gray-700 text-left">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-element order-first xl:order-last">
            <div className="relative">
              <div className="absolute -left-6 -top-6 xl:-left-8 xl:-top-8 w-32 h-32 xl:w-40 xl:h-40 bg-primary-200 rounded-lg opacity-50"></div>
              <div className="absolute -right-6 -bottom-6 xl:-right-8 xl:-bottom-8 w-40 h-40 xl:w-48 xl:h-48 bg-primary-100 rounded-lg opacity-30"></div>
              <div className="relative overflow-hidden rounded-xl shadow-lg flex items-center justify-center p-8 xl:p-12">
                <img 
                  src="/lovable-uploads/3acf21ec-7ac5-428c-860f-7af3dbba060b.png" 
                  alt="Comando Contabilidade" 
                  className="w-full max-w-lg xl:max-w-xl h-auto object-contain" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
