import React from 'react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useToast } from '../hooks/toast';

const ContactoSeccion = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por tu mensaje. ¡Me pondré en contacto contigo pronto!",
    });
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contáctame
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? Me encantaría saber de ti. 
            ¡Creemos algo increíble juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Conectemos</h3>
              <p className="text-gray-400 mb-8">
                Siempre estoy abierto a discutir nuevas oportunidades, proyectos interesantes, 
                o simplemente tener una conversación sobre tecnología y desarrollo.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400">joriveradev@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Teléfono</div>
                  <div className="text-gray-400">+569 99999999</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Ubicación</div>
                  <div className="text-gray-400">Teno, Chile</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-white font-medium mb-4">Sígueme</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/tomasxrp" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/tomasxrp" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-white font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="asunto" className="block text-white font-medium mb-2">Asunto</label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Consulta sobre proyecto"
                />
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-white font-medium mb-2">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto o simplemente salúdame!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactoSeccion;