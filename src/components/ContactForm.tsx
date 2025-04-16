
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  return <section className="py-6 md:py-10 bg-gradient-to-b from-primary-50 to-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <p className="text-sm md:text-lg text-gray-600">
            Estamos prontos para atender suas necessidades contábeis através dos nossos canais de comunicação.
            Entre em contato por telefone, e-mail ou WhatsApp e retornaremos o mais breve possível.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-xl p-4 md:p-6 animate-slideInRight">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Nossos Canais de Atendimento</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-5 md:space-y-6">
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-base md:text-lg text-gray-600">(81) 98854-4215</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-base md:text-lg text-gray-600 break-all md:break-normal">contato.comandoempreendimentos@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5 md:space-y-6">  
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-base text-gray-600">
                      Rua Doutor Telesphoro Fragoso, 791<br />
                      San Martin, Recife-PE<br />
                      CEP: 50.761-030
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                      <path d="M17.6 6.32C16.04 4.82 14 4 11.66 4C7.18 4 3.54 7.64 3.54 12.12C3.54 13.82 4.02 15.46 4.94 16.86L3.4 21L7.64 19.48C8.98 20.32 10.3 20.76 11.66 20.76C16.14 20.76 19.78 17.12 19.78 12.64C19.78 10.3 18.96 8.26 17.6 6.32ZM11.66 19.28C10.44 19.28 9.22 18.86 8.2 18.08L7.86 17.86L5.4 18.74L6.28 16.34L6.04 15.98C5.18 14.9 4.74 13.54 4.74 12.12C4.74 8.46 7.82 5.38 11.48 5.38C13.48 5.38 15.26 6.1 16.6 7.38C17.94 8.66 18.48 10.44 18.48 12.44C18.66 16.1 15.58 19.28 11.66 19.28ZM15.58 13.82C15.34 13.7 14.22 13.16 14.02 13.1C13.82 13 13.68 12.96 13.52 13.2C13.38 13.44 12.94 13.96 12.82 14.12C12.7 14.28 12.56 14.3 12.32 14.16C11.08 13.54 10.28 13.06 9.46 11.64C9.22 11.26 9.68 11.28 10.1 10.46C10.16 10.3 10.12 10.16 10.06 10.04C10 9.92 9.56 8.8 9.38 8.32C9.2 7.86 9 7.92 8.86 7.9C8.72 7.9 8.58 7.9 8.44 7.9C8.3 7.9 8.06 7.96 7.86 8.18C7.66 8.42 7.06 8.96 7.06 10.08C7.06 11.2 7.86 12.3 7.98 12.44C8.1 12.58 9.54 14.82 11.76 15.8C13.14 16.44 13.66 16.5 14.32 16.38C14.72 16.32 15.62 15.84 15.8 15.26C15.98 14.68 15.98 14.2 15.92 14.12C15.86 14.02 15.74 13.96 15.58 13.82Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <p className="text-base md:text-lg text-gray-600 mb-2">(81) 98854-4215</p>
                    <a href="https://wa.me/5581988544215?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20contábeis" target="_blank" rel="noopener noreferrer" className="button-primary inline-flex items-center justify-center w-full md:w-auto">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                        <path d="M17.6 6.32C16.04 4.82 14 4 11.66 4C7.18 4 3.54 7.64 3.54 12.12C3.54 13.82 4.02 15.46 4.94 16.86L3.4 21L7.64 19.48C8.98 20.32 10.3 20.76 11.66 20.76C16.14 20.76 19.78 17.12 19.78 12.64C19.78 10.3 18.96 8.26 17.6 6.32ZM11.66 19.28C10.44 19.28 9.22 18.86 8.2 18.08L7.86 17.86L5.4 18.74L6.28 16.34L6.04 15.98C5.18 14.9 4.74 13.54 4.74 12.12C4.74 8.46 7.82 5.38 11.48 5.38C13.48 5.38 15.26 6.1 16.6 7.38C17.94 8.66 18.48 10.44 18.48 12.44C18.66 16.1 15.58 19.28 11.66 19.28ZM15.58 13.82C15.34 13.7 14.22 13.16 14.02 13.1C13.82 13 13.68 12.96 13.52 13.2C13.38 13.44 12.94 13.96 12.82 14.12C12.7 14.28 12.56 14.3 12.32 14.16C11.08 13.54 10.28 13.06 9.46 11.64C9.22 11.26 9.68 11.28 10.1 10.46C10.16 10.3 10.12 10.16 10.06 10.04C10 9.92 9.56 8.8 9.38 8.32C9.2 7.86 9 7.92 8.86 7.9C8.72 7.9 8.58 7.9 8.44 7.9C8.3 7.9 8.06 7.96 7.86 8.18C7.66 8.42 7.06 8.96 7.06 10.08C7.06 11.2 7.86 12.3 7.98 12.44C8.1 12.58 9.54 14.82 11.76 15.8C13.14 16.44 13.66 16.5 14.32 16.38C14.72 16.32 15.62 15.84 15.8 15.26C15.98 14.68 15.98 14.2 15.92 14.12C15.86 14.02 15.74 13.96 15.58 13.82Z" fill="currentColor" />
                      </svg>
                      Fale conosco pelo WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-3 md:p-4 bg-primary-50 rounded-lg border border-primary-100">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 text-center">Horário de Atendimento</h4>
              <p className="text-sm md:text-base text-center text-gray-600">Segunda a Sexta: 08:00 às 18:00</p>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="w-full h-72 md:h-96">
                <iframe 
                  src="https://maps.app.goo.gl/nN7LEdFURogGd8zw6" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do escritório" 
                  aria-label="Mapa com a localização do escritório da Comando Contabilidade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactForm;
