import Hero from './components/Hero'
import Header from './components/header'
import './App.css'
import { main } from 'framer-motion/client'
import AboutMe from './components/AboutMe'
import TecnologiaCard from './components/TecnologiaCard'
import Tecnologias from './components/Tecnologias'

function App() {

  return (
    <main>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow">
          <Hero />
        </div>
      </div>

      <section className=''>
        <AboutMe />

        <Tecnologias />
      </section>
    </main>
  )
}

export default App
