
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
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="grid md:grid-cols-2 gap-6 items-center py-[6px]">
          <div>
            <div className="opacity-0 animate-element">
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-100 text-primary-700 mb-3">
                Sobre Nós
              </span>
              <h2 className="heading-lg mb-3">
                Serviços contábeis <span className="text-primary-700">simplificados</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Fundado em 2017, o Comando Contabilidade nasceu da paixão por números e da vontade de ajudar empresários a alcançarem seus objetivos. Desde o início, nosso compromisso foi oferecer serviços contábeis de excelência, combinando conhecimento técnico com um atendimento próximo e humanizado.
              </p>
              <p className="text-gray-600 mb-4">
                Com o crescimento do nosso escritório, expandimos nossa equipe e aprimoramos nossos serviços, sempre acompanhando as mudanças no cenário econômico e as necessidades dos nossos clientes. Ao longo dos anos, construímos relacionamentos duradouros, pautados na confiança e na transparência, tornando-nos um parceiro estratégico para empresas de diversos setores.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start opacity-0 animate-element">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="ml-3 text-gray-700">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-element order-first md:order-last">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary-200 rounded-lg opacity-50"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary-100 rounded-lg opacity-30"></div>
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Equipe de contabilidade" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
