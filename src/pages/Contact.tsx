
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

  return (
    <div className="min-h-screen bg-white">
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
              <p className={`text-sm md:text-lg text-gray-600 mx-auto mb-2 md:mb-3 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
                Estamos prontos para atender suas necessidades contábeis. Entre em contato por telefone, 
                e-mail ou WhatsApp para uma consultoria personalizada.
              </p>
            </div>
          </div>
        </section>
        
        <div className="bg-white">
          <ContactForm />
        </div>
        
        <section className="py-6 md:py-8 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight text-center mb-4 md:mb-6">Como chegar</h2>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="w-full h-48 md:h-72">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.6033724691754!2d-34.93434038852565!3d-8.04266389195805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1be266a4995f%3A0x73cb7572c82f91d6!2sR.%20Dr.%20Tel%C3%A9sforo%20Fragoso%2C%20791%20-%20San%20Martin%2C%20Recife%20-%20PE%2C%2050761-030!5e0!3m2!1spt-BR!2sbr!4v1649260596532!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Mapa do escritório"
                    aria-label="Localização da Comando Contabilidade em Recife-PE"
                  ></iframe>
                </div>
                <div className="p-3 md:p-5 flex flex-col md:flex-row md:items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-3 md:mb-0 md:mr-4 mx-auto md:mx-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Nosso Escritório</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Rua Doutor Telesphoro Fragoso, 791<br />
                      San Martin, Recife-PE<br />
                      CEP: 50.761-030
                    </p>
                    <p className="text-sm md:text-base text-gray-600 mt-3">
                      <strong>Horário de Atendimento:</strong><br />
                      Segunda a Sexta: 08:00 às 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Contact;
