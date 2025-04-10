
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isMobile = useMobile();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Check which section is currently visible
      const sections = ['hero', 'services', 'about', 'team', 'plans', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= 300 && rect.bottom >= 300;
          if (isInViewport) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Map sections to their corresponding navigation links
  const sectionToNavMap = {
    'hero': '/',
    'services': '/services',
    'about': '/about',
    'contact': '/contact'
  };
  
  // Function to determine link color based on active section and current route
  const getLinkColor = (path) => {
    // On routes other than homepage, use simple active/inactive colors
    if (location.pathname !== '/') {
      return location.pathname === path ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500';
    }
    
    // On homepage, color based on active section
    const currentSection = Object.entries(sectionToNavMap).find(([_, navPath]) => navPath === path)?.[0];
    
    if (currentSection === activeSection) {
      return 'text-primary-500';
    }
    
    return 'text-gray-700 hover:text-primary-500';
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-3'}`}>
      {/* Top bar with contact info and social media links */}
      <div className="text-white py-2 hidden md:block bg-primary-600">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:contato.comandoempreendimentos@gmail.com" className="flex items-center text-sm hover:text-primary-100 transition-colors">
              <Mail className="w-4 h-4 mr-1" />
              contato.comandoempreendimentos@gmail.com
            </a>
            <a href="tel:+5581988544215" className="flex items-center text-sm hover:text-primary-100 transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              (81) 98854-4215
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://www.instagram.com/comandoempreendimentos" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center rounded-full bg-primary-500 hover:bg-primary-400 transition-colors">
              <Instagram className="w-3 h-3" />
            </a>
            <a href="https://maps.app.goo.gl/suCGduezkypWQc8a8" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center rounded-full bg-primary-500 hover:bg-primary-400 transition-colors">
              <MapPin className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className={`container mx-auto px-4 ${isScrolled ? 'bg-white' : ''}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3acf21ec-7ac5-428c-860f-7af3dbba060b.png" 
              alt="Comando Contabilidade" 
              className="h-10 md:h-12"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className={`text-sm font-medium ${getLinkColor('/')} transition-colors duration-300`}>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-sm font-medium ${getLinkColor('/about')} transition-colors duration-300`}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/services" className={`text-sm font-medium ${getLinkColor('/services')} transition-colors duration-300`}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-sm font-medium ${getLinkColor('/contact')} transition-colors duration-300`}>
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="block md:hidden text-gray-700" onClick={toggleMenu} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 bg-white z-50 pt-16">
          <div className="container mx-auto px-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link to="/" className={`text-lg font-medium ${getLinkColor('/')} block py-2`}>
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={`text-lg font-medium ${getLinkColor('/about')} block py-2`}>
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={`text-lg font-medium ${getLinkColor('/services')} block py-2`}>
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={`text-lg font-medium ${getLinkColor('/contact')} block py-2`}>
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="mt-6 border-t border-gray-100 pt-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-3">Contato</h3>
              <div className="flex flex-col space-y-3">
                <a href="mailto:contato.comandoempreendimentos@gmail.com" className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-2 text-primary-500" />
                  contato.comandoempreendimentos@gmail.com
                </a>
                <a href="tel:+5581988544215" className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 mr-2 text-primary-500" />
                  (81) 98854-4215
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-3">Siga-nos</h3>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/comandoempreendimentos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-500">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://maps.app.goo.gl/suCGduezkypWQc8a8" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-500">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Close button for mobile menu */}
            <button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 p-2 rounded-full bg-primary-100 text-primary-500 hover:bg-primary-200 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
