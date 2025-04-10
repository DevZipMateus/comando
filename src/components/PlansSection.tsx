
import { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    title: "MEI",
    subtitle: "Ideal para Microempreendedores Individuais",
    priceMonthly: "180,00",
    priceYearly: "150,00",
    features: [
      "Emissão de notas fiscais",
      "Declaração Anual",
      "Acompanhamento básico de tributos",
      "Registro de 1 Funcionário",
      "Máquina de Cartão com taxas reduzidas",
      "Aplicativo para Gestão COMMEI",
      "Dashboard e Controle de Caixa",
      "Contas a Pagar e Receber",
      "Clientes e Fornecedores",
      "Produtos e Controle de Estoque"
    ],
    recommended: false,
    delay: 0
  },
  {
    title: "Para Microempresas",
    subtitle: "",
    priceMonthly: "400,00",
    priceYearly: "360,00",
    features: [
      "Apuração de impostos",
      "Consultoria fiscal mensal",
      "Emissão de guias fiscais",
      "Folha de pagamento (até 10 funcionários)",
      "Sistema PDV para emissão de NFC-e ilimitado",
      "Desconto em certificado digital 20%",
      "Máquina de Cartão com taxas reduzidas"
    ],
    recommended: true,
    delay: 200
  },
  {
    title: "Para Pequenas Empresas",
    subtitle: "",
    priceMonthly: "550,00",
    priceYearly: "450,00",
    features: [
      "Sistema PDV com gestão financeira completa",
      "Apuração de impostos",
      "Consultoria fiscal mensal",
      "Emissão de guias fiscais",
      "Folha de pagamento (até 10 funcionários)",
      "Sistema PDV para emissão de NFC-e ilimitado",
      "Desconto em certificado digital 20%",
      "Máquina de Cartão com taxas reduzidas"
    ],
    recommended: false,
    delay: 400
  }
];

const PlansSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

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
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white" id="plans">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-10 opacity-0 animate-fadeIn">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-100 text-primary-600 mb-3">
            Nossos Planos
          </span>
          <h2 className="heading-lg mb-4">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="subtitle">
            Oferecemos diferentes planos para atender às necessidades específicas de cada empresa,
            com preços acessíveis e serviços de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card p-6 border-2 ${plan.recommended ? 'border-primary-500' : 'border-gray-100'} relative opacity-0 ${isVisible ? 'animate-slideUp' : ''}`}
              style={{ animationDelay: `${plan.delay}ms` }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white py-1 px-4 rounded-full text-sm font-medium">
                  Recomendado
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.title}</h3>
              {plan.subtitle && (
                <p className="text-sm text-gray-600 mb-2">{plan.subtitle}</p>
              )}
              <div className="mb-1">
                <div className="flex items-baseline">
                  <span className="text-sm text-gray-500 mr-2">Contrato Mensal:</span>
                  <span className="text-lg font-semibold">R${plan.priceMonthly}</span>
                  <span className="text-gray-600 ml-1 text-sm">/mês</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-sm text-gray-500 mr-2">Contrato Anual:</span>
                  <span className="text-lg font-semibold text-primary-600">R${plan.priceYearly}</span>
                  <span className="text-gray-600 ml-1 text-sm">/mês</span>
                </div>
              </div>
              <div className="h-px bg-gray-100 my-4"></div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact" 
                className={`block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 w-full ${
                  plan.recommended 
                    ? 'bg-primary-500 text-white hover:bg-primary-600' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Escolher plano
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
