import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-950"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Jose Rivera
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Programador en progreso
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Soy un apasionado del desarrollo web y de escritorio, siempre buscando aprender y mejorar mis habilidades. Me encanta crear soluciones innovadoras y eficientes que hagan la vida más fácil.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              Proyectos
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105">
              Descargar CV
            </button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.button 
          onClick={scrollToNext}
          className="absolute left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          <ArrowDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;