
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import ContactForm from "@/components/ContactForm";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contato | Comando Contabilidade</title>
        <meta name="description" content="Entre em contato com a Comando Contabilidade. Estamos prontos para atender suas necessidades contábeis em Recife-PE." />
      </Helmet>
      
      <Header />
      <main>
        <section className="pt-16 pb-4 md:pt-28 md:pb-8 bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-100 text-primary-600 mb-2 md:mb-3 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                Contato
              </span>
              <h1 className={`text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2 md:mb-3 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
                Entre em <span className="text-gradient">contato</span> conosco
              </h1>
            </div>
          </div>
        </section>
        
        <div className="bg-white">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>;
};

export default Contact;
