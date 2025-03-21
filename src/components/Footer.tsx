
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-scarlet-950 text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 pb-12">
          <div>
            <Link to="/" className="text-2xl font-display font-bold text-white mb-6 block hover:text-scarlet-300 transition-colors">
              Conta<span className="text-scarlet-400">Connection</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soluções contábeis inteligentes para empresas de todos os portes. Oferecemos serviços de contabilidade digital eficiente e moderna.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, link: "#", label: "Facebook" },
                { Icon: Instagram, link: "#", label: "Instagram" },
                { Icon: Twitter, link: "#", label: "Twitter" },
                { Icon: Linkedin, link: "#", label: "LinkedIn" }
              ].map(({ Icon, link, label }) => (
                <a 
                  key={label} 
                  href={link} 
                  className="text-gray-400 hover:text-scarlet-300 transition-colors" 
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-scarlet-300">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { label: "Início", to: "/" },
                { label: "Sobre Nós", to: "/about" },
                { label: "Serviços", to: "/services" },
                { label: "Notícias", to: "/news" },
                { label: "Contato", to: "/contact" }
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link 
                    to={to} 
                    className="text-gray-300 hover:text-scarlet-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-scarlet-300">Links Úteis</h3>
            <ul className="space-y-3">
              {[
                { label: "Agenda Tributária", to: "/useful-links" },
                { label: "Tabelas Práticas", to: "/useful-links" },
                { label: "Formulários Diversos", to: "/useful-links" },
                { label: "Consulta CNPJ", to: "/useful-links" },
                { label: "Calculadoras", to: "/useful-links" }
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link 
                    to={to} 
                    className="text-gray-300 hover:text-scarlet-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-scarlet-300">Contato</h3>
            <ul className="space-y-4">
              {[
                { 
                  Icon: Phone, 
                  items: ["(11) 4002-8922", "(11) 98765-4321"],
                  className: "text-scarlet-400"
                },
                { 
                  Icon: Mail, 
                  items: ["contato@contaconnection.com.br", "atendimento@contaconnection.com.br"],
                  className: "text-scarlet-400"
                },
                { 
                  Icon: MapPin, 
                  items: [
                    "Avenida Paulista, 1000", 
                    "Bela Vista, São Paulo - SP", 
                    "CEP: 01310-100"
                  ],
                  className: "text-scarlet-400"
                }
              ].map(({ Icon, items, className }, index) => (
                <li key={index} className="flex items-start">
                  <Icon className={`w-5 h-5 ${className} mr-3 flex-shrink-0 mt-0.5`} />
                  <div>
                    {items.map((item, i) => (
                      <p key={i} className="text-gray-300">{item}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-scarlet-900 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ContaConnection. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToTop}
              className="bg-scarlet-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-scarlet-600 transition-colors focus:outline-none"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
