import TecnologiaCard from "./TecnologiaCard";
import { FaPython, FaJava, FaHtml5, FaCss3, FaReact, FaJs, FaNode, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

function Tecnologias() {
    const tecnologias = [
        { icon: <FaPython className="text-blue-500" />, nome: "Python" },
        { icon: <FaJava className="text-orange-500" />, nome: "Java" },
        { icon: <FaHtml5 className="text-red-500" />, nome: "HTML5" },
        { icon: <FaCss3 className="text-blue-400" />, nome: "CSS3" },
        { icon: <FaReact className="text-cyan-400" />, nome: "React" },
        { icon: <FaJs className="text-yellow-400" />, nome: "JavaScript" },
        { icon: <SiTypescript className="text-blue-600" />, nome: "TypeScript" },
        { icon: <SiTailwindcss className="text-cyan-400" />, nome: "Tailwind" },
        { icon: <FaGitAlt className="text-orange-600" />, nome: "Git" },
        { icon: <FaGithub className="text-white" />, nome: "GitHub" },
    ];

    return (
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="mt-4 text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Proyectos actuales
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    En esta seccion prodras ver algunos de mis proyectos destacados, donde he aplicado mis habilidades en desarrollo web y escritorio.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {tecnologias.map((tecnologia, index) => (
                    <TecnologiaCard 
                        key={index} 
                        tecnologia={tecnologia} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Tecnologias;