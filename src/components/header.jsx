import React from 'react';

function MainHeader(){
    return(
        <div className='w-3/4 flex  mx-auto py-7'> 
            <h1 className='font-light text-2xl tracking-[.03em]'>tomas<span className='font-bold text-2xl tracking-[.03em] text-blue-500 '>.Code</span></h1>
            <div className='flex items-center ml-auto'>
                <a href="#about" className='text-[#fff] text-base font-normal'>About</a>
                <a href="#projects" className='text-[#fff] text-base font-normal ml-10'>Projects</a>
                <a href="#contact" className='text-[#fff] text-base font-normal ml-10'>Contact</a>
            </div>
        </div>
    )
}

export default MainHeader;