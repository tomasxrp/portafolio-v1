import Hero from './components/Hero'
import Header from './components/header'
import './App.css'
import Tecnologias from './components/Tecnologias'
import ProyectosSeccion from './components/ProyectosSeccion'
import ContactoSeccion from './components/ContactoSeccion'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <main className='bg-gray-950 text-white'>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow">
          <Hero />
        </div>
      </div>

      <section className=''>
        <Tecnologias />
        <ProyectosSeccion />
        <ContactoSeccion />
      </section>
      <ToastContainer />
    </main>
  )
}

export default App
