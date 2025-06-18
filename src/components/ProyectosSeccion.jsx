import { ExternalLink, Github } from 'lucide-react';
import dokiImage from '../assets/DOKIAI.jpg'; 
import protoboardImage from '../assets/protoboard.png'; 
import rescueImage from '../assets/rescue.jpg';

const ProyectosSeccion = () => {
  const projects = [
    {
      title: 'DOKI AI',
      description: 'Proyecto hecho con un compañero, el cual consiste en un chatbot de IA con personalidad usando un LLM local',
      image: dokiImage,
      technologies: ['HTML', 'JavaScript', 'LLM'],
      github: 'https://github.com/tomasxrp/DokiAI',
      demo: '#'
    },
    {
      title: 'Protoboard Digital',
      description: 'Proyecto creado en la universidad, con el fin de simular el funcionamiento de un protoboard real, permitiendo a los usuarios crear circuitos electrónicos virtuales basicos',
      image: protoboardImage,
      technologies: ['Java'],
      github: 'https://github.com/tomasxrp/protoboard-app',
      demo: '#'
    },
    {
      title: 'Rescata al Chihuahua',
      description: 'Juego programado en python, donde el usuario debe rescatar un chihuahua con un arco, ingresando el angulo y velocidad de disparo.',
      image: rescueImage,
      technologies: ['Python'],
      github: 'https://github.com/tomasxrp/RescueTheChihuahua-Game',
      demo: '#'
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Proyectos actuales
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            En esta seccion prodras ver algunos de mis proyectos destacados, donde he aplicado mis habilidades en desarrollo web y escritorio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      className="p-2 bg-gray-900/80 rounded-full text-white hover:text-cyan-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectosSeccion;