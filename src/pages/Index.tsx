
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PlansSection from "@/components/PlansSection";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Helmet>
        <title>Comando Contabilidade - Serviços Contábeis Simplificados</title>
        <meta name="description" content="Serviços contábeis de qualidade com simplicidade e transparência para empresas de todos os tamanhos. Atuamos em Recife-PE desde 2017." />
      </Helmet>
      
      <Header />
      <main className="w-full">
        <div id="hero">
          <HeroSection />
        </div>
        <div className="bg-gradient-to-b from-white to-primary-50" id="services">
          <ServicesSection />
        </div>
        <div className="bg-primary-50" id="about">
          <AboutSection />
        </div>
        <div className="bg-gradient-to-b from-primary-50 to-white" id="plans">
          <PlansSection />
        </div>
        <div className="bg-primary-50" id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
