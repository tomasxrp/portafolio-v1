import { useState } from 'react'
import MainHeader from './components/header'
import Hero from './components/Hero'
import CarouselProgramming from './components/CarouselProgramming'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="flex flex-col h-screen"> 
            <header className="flex-shrink-0">
                <MainHeader />
            </header>
            <main className="flex-grow">
                <Hero />
            </main>
        </div>
            
        <section className=" text-white py-10">
            <CarouselProgramming />
        </section>
      
    </>
  )
}

export default App
