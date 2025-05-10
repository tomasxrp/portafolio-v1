import React from 'react';
import { FaJs, FaPython, FaJava} from 'react-icons/fa';

function CarouselProgramming() {
    const icons = [
        { icon : <FaJs className='text-yellow-400' />, name: 'JavaScript' },
        { icon: <FaPython className="text-blue-400" />, name: 'Python' },
        { icon: <FaJava className="text-red-500"/>, name: 'Java' },
    ];

    return (
        <div className="w-2/6 flex flex-row justify-center overflow-hidden py-3 mx-auto">
            <div
                className="flex space-x-33"
                
            >
                {icons.map((item, index) => (
                    <div
                        key={index}
                        className="text-white text-7xl flex items-center justify-center text-center"
                    >
                        {item.icon}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarouselProgramming;