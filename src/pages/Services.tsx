
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import ServicesSection from "@/components/ServicesSection";
import PlansSection from "@/components/PlansSection";
import { CheckCircle, ArrowRight, FileText, Calculator, Briefcase, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet";

const serviceDetails = [
  {
    id: 1,
    title: "Abertura de Empresa",
    description: "Simplificamos o processo de abertura da sua empresa, cuidando de toda a burocracia e orientando sobre a melhor estrutura para seu negócio.",
    icon: Briefcase,
    features: [
      "Elaboração de contrato social",
      "Registro na Junta Comercial",
      "Obtenção de CNPJ",
      "Inscrições municipais e estaduais",
      "Alvarás e licenças de funcionamento",
      "Cadastros em órgãos reguladores",
      "Orientação sobre regime tributário",
      "Planejamento societário"
    ]
  },
  {
    id: 2,
    title: "Imposto de Renda",
    description: "Nossa equipe especializada cuida da declaração do seu imposto de renda, garantindo conformidade fiscal e maximizando as oportunidades de restituição.",
    icon: FileText,
    features: [
      "Declaração de Imposto de Renda Pessoa Física",
      "Declaração de Imposto de Renda Pessoa Jurídica",
      "Análise detalhada de deduções",
      "Planejamento tributário",
      "Acompanhamento de restituições",
      "Retificação de declarações",
      "Orientação em fiscalizações",
      "Resolução de pendências junto à Receita Federal"
    ]
  },
  {
    id: 3,
    title: "BPO Financeiro",
    description: "Terceirizamos a gestão financeira da sua empresa, proporcionando maior controle, organização e eficiência para seu negócio.",
    icon: Calculator,
    features: [
      "Gestão de contas a pagar e receber",
      "Conciliação bancária",
      "Fluxo de caixa",
      "Projeções financeiras",
      "Relatórios gerenciais",
      "Indicadores de desempenho",
      "Controle de custos e despesas",
      "Análise de investimentos"
    ]
  },
  {
    id: 4,
    title: "Folha de Pagamento",
    description: "Nossa equipe cuida de todos os processos relacionados aos seus colaboradores, garantindo conformidade trabalhista e previdenciária.",
    icon: Users,
    features: [
      "Cálculo de folha de pagamento",
      "Admissões e demissões",
      "Férias e 13º salário",
      "Obrigações acessórias (eSocial, CAGED, RAIS)",
      "Gestão de benefícios",
      "Cálculo de encargos sociais",
      "Homologações",
      "Consultoria em legislação trabalhista"
    ]
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate service cards sequentially
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleCards(prev => {
          if (prev.length >= serviceDetails.length) {
            clearInterval(interval);
            return prev;
          }
          return [...prev, prev.length];
        });
      }, 150);
      
      return () => clearInterval(interval);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Serviços | Comando Contabilidade</title>
        <meta name="description" content="Conheça os serviços de contabilidade oferecidos pela Comando Contabilidade: abertura de empresa, imposto de renda, BPO financeiro e folha de pagamento." />
      </Helmet>
      
      <Header />
      <main>
        <section className="pt-20 pb-8 md:pt-28 md:pb-12 bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={cn(
                "inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-100 text-primary-700 mb-4 opacity-0",
                isVisible && "animate-fadeIn"
              )}>
                Nossos Serviços
              </span>
              <h1 className={cn(
                "heading-xl mb-4 opacity-0",
                isVisible && "animate-slideDown"
              )}>
                Soluções contábeis <span className="text-gradient">inteligentes</span> para cada necessidade
              </h1>
              <p className={cn(
                "subtitle mx-auto mb-6 opacity-0",
                isVisible && "animate-slideDown delay-200"
              )}>
                Oferecemos serviços contábeis completos, personalizados para atender às necessidades 
                específicas do seu negócio.
              </p>
              <div className={cn("opacity-0", isVisible && "animate-slideDown delay-400")}>
                <Link to="/contact">
                  <Button variant="default" size="lg" className="rounded-full">
                    Solicitar orçamento
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="heading-lg text-center mb-8">Conheça nossos serviços em detalhes</h2>
            
            <div className="grid lg:grid-cols-2 gap-6 mb-10">
              {serviceDetails.map((service, index) => (
                <div 
                  key={service.id} 
                  className={cn(
                    "bg-gradient-to-br from-white to-primary-50 rounded-xl p-4 md:p-6 shadow-sm border border-primary-100",
                    "hover:shadow-md transition-all duration-300 hover:-translate-y-1",
                    "opacity-0 transform translate-y-4",
                    visibleCards.includes(index) && "opacity-100 translate-y-0 transition-all duration-500"
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-start mb-4 md:mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-3 md:mb-0 md:mr-4 mx-auto md:mx-0">
                      <service.icon className="w-6 h-6 text-primary-700" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center md:text-left">O que incluímos:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="ml-2 text-gray-700 text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/contact">
                <Button variant="default" size="lg" className="rounded-full">
                  Solicitar orçamento
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <div className="py-2 bg-gradient-to-b from-white to-primary-50">
          <PlansSection />
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Services;
