
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <a 
              href="https://wa.me/5581988544215?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20contábeis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Contato via WhatsApp"
            >
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
                  <path d="M17.6 6.32C16.04 4.82 14 4 11.66 4C7.18 4 3.54 7.64 3.54 12.12C3.54 13.82 4.02 15.46 4.94 16.86L3.4 21L7.64 19.48C8.98 20.32 10.3 20.76 11.66 20.76C16.14 20.76 19.78 17.12 19.78 12.64C19.78 10.3 18.96 8.26 17.6 6.32ZM11.66 19.28C10.44 19.28 9.22 18.86 8.2 18.08L7.86 17.86L5.4 18.74L6.28 16.34L6.04 15.98C5.18 14.9 4.74 13.54 4.74 12.12C4.74 8.46 7.82 5.38 11.48 5.38C13.48 5.38 15.26 6.1 16.6 7.38C17.94 8.66 18.48 10.44 18.48 12.44C18.66 16.1 15.58 19.28 11.66 19.28ZM15.58 13.82C15.34 13.7 14.22 13.16 14.02 13.1C13.82 13 13.68 12.96 13.52 13.2C13.38 13.44 12.94 13.96 12.82 14.12C12.7 14.28 12.56 14.3 12.32 14.16C11.08 13.54 10.28 13.06 9.46 11.64C9.22 11.26 9.68 11.28 10.1 10.46C10.16 10.3 10.12 10.16 10.06 10.04C10 9.92 9.56 8.8 9.38 8.32C9.2 7.86 9 7.92 8.86 7.9C8.72 7.9 8.58 7.9 8.44 7.9C8.3 7.9 8.06 7.96 7.86 8.18C7.66 8.42 7.06 8.96 7.06 10.08C7.06 11.2 7.86 12.3 7.98 12.44C8.1 12.58 9.54 14.82 11.76 15.8C13.14 16.44 13.66 16.5 14.32 16.38C14.72 16.32 15.62 15.84 15.8 15.26C15.98 14.68 15.98 14.2 15.92 14.12C15.86 14.02 15.74 13.96 15.58 13.82Z" fill="currentColor"/>
                </svg>
              </span>
              WhatsApp
            </a>
            <Link 
              to="/contact" 
              className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center mr-2">
                <MessageCircle className="w-4 h-4 text-white" />
              </span>
              Enviar mensagem
            </Link>
            <a 
              href="https://taggo.one/comandoempreendimentos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Cartão de visita digital"
            >
              <span className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 15H11" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 15H17" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              Cartão Digital
            </a>
          </div>
        </div>
      )}
      
      <button
        onClick={toggleOpen}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all animate-pulse hover:animate-none ${
          isOpen ? 'bg-gray-700 rotate-45' : 'bg-green-500 hover:bg-green-600'
        }`}
        style={{
          boxShadow: isOpen ? 'none' : '0 0 0 rgba(34, 197, 94, 0.4)',
          animation: isOpen ? 'none' : 'pulse 2s infinite'
        }}
        aria-label={isOpen ? "Fechar menu de contato" : "Abrir menu de contato"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M17.6 6.32C16.04 4.82 14 4 11.66 4C7.18 4 3.54 7.64 3.54 12.12C3.54 13.82 4.02 15.46 4.94 16.86L3.4 21L7.64 19.48C8.98 20.32 10.3 20.76 11.66 20.76C16.14 20.76 19.78 17.12 19.78 12.64C19.78 10.3 18.96 8.26 17.6 6.32ZM11.66 19.28C10.44 19.28 9.22 18.86 8.2 18.08L7.86 17.86L5.4 18.74L6.28 16.34L6.04 15.98C5.18 14.9 4.74 13.54 4.74 12.12C4.74 8.46 7.82 5.38 11.48 5.38C13.48 5.38 15.26 6.1 16.6 7.38C17.94 8.66 18.48 10.44 18.48 12.44C18.66 16.1 15.58 19.28 11.66 19.28ZM15.58 13.82C15.34 13.7 14.22 13.16 14.02 13.1C13.82 13 13.68 12.96 13.52 13.2C13.38 13.44 12.94 13.96 12.82 14.12C12.7 14.28 12.56 14.3 12.32 14.16C11.08 13.54 10.28 13.06 9.46 11.64C9.22 11.26 9.68 11.28 10.1 10.46C10.16 10.3 10.12 10.16 10.06 10.04C10 9.92 9.56 8.8 9.38 8.32C9.2 7.86 9 7.92 8.86 7.9C8.72 7.9 8.58 7.9 8.44 7.9C8.3 7.9 8.06 7.96 7.86 8.18C7.66 8.42 7.06 8.96 7.06 10.08C7.06 11.2 7.86 12.3 7.98 12.44C8.1 12.58 9.54 14.82 11.76 15.8C13.14 16.44 13.66 16.5 14.32 16.38C14.72 16.32 15.62 15.84 15.8 15.26C15.98 14.68 15.98 14.2 15.92 14.12C15.86 14.02 15.74 13.96 15.58 13.82Z" fill="currentColor"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
