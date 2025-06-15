import { useState } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import LoadingScreen from "./components/LoadingScreen";
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/projects';
import Contact  from './components/sections/Contacts';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isLoading,setIsLoading] = useState(false);
   const [menuOpen,setMenuOpen] = useState(false);

  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)}/>}
      {' '}
      <div className={`w-screen scroll-smooth min-h-screen transition-opacity duration-700 
          ${isLoading ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <Projects/>
        <About/>
        <Contact/>
        <Footer/>
      </div>

      
    </>
  )
}

export default App;
