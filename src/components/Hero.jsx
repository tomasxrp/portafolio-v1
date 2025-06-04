import { motion } from "framer-motion";
import clsx from "clsx";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";

function Hero() {
    let workState = true;

    // Variantes de animación para el contenedor principal
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    // Variantes de animación para el texto
    const textVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center h-full flex-col gap-4"
        >
            <div className="flex gap-4 justify-center items-center font-bold">
                <motion.div 
                    className={clsx("w-[10px] h-[10px] rounded-full", workState ? "bg-green-500" : "bg-red-400")}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                ></motion.div>
                <motion.p 
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-white"
                >
                    Disponible para trabajar
                </motion.p>
            </div>
            <motion.div 
                className="flex"
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-9xl text-white">Tomas</h1>
                <TypeAnimation
                    sequence={[
                        '.Code',
                        5000,
                        '.Dev',
                        5000,
                        '.CL',
                        5000,
                    ]}
                    wrapper="h1"
                    speed={10}
                    style={{
                        background: 'linear-gradient(to right, #FF8C00, #FF4500)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                    className="text-9xl"
                    repeat={Infinity}
                />
            </motion.div>
            <motion.div>
                <button className=" flex items-center gap-3 border-[0.5px] border-gray-500 px-7 py-2 rounded-4xl hover:border-orange-500 hover:text-orange-500"><FiDownload/> Descargar CV</button>
            </motion.div>

        </motion.div>
    );
}

export default Hero;