import TecnologiaCard from "./TecnologiaCard";
import { FaPython, FaJava, FaHtml5, FaCss3,FaReact  } from "react-icons/fa";


function Tecnologias(){
    return(
        <div className="w-full h-100 flex gap-4 items-center justify-center">
            <TecnologiaCard tecnologia={{icon:<FaPython className="text-6xl text-blue-500"/>, nome: "Python"}} />
            <TecnologiaCard tecnologia={{icon:<FaJava className="text-6xl text-orange-500"/>, nome: "Java"}} />
            <TecnologiaCard tecnologia={{icon:<FaHtml5 className="text-6xl text-red-500"/>, nome: "HTML5"}} />
            <TecnologiaCard tecnologia={{icon:<FaCss3 className="text-6xl text-blue-500"/>, nome: "CSS3"}} />
            <TecnologiaCard tecnologia={{icon:<FaReact className="text-6xl text-blue-400"/>, nome: "React"}} />

        </div>
    );
}

export default Tecnologias;