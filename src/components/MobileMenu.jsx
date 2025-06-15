// import { useEffect } from "react"

export default function MobileMEnu({menuOpen,setMenuOpen}){

    if(!menuOpen) return null;
    
    return (
        <div className={` fixed left-0 right-0 bg-gray-500/70 backdrop-blur top-16 py-2
             flex  justify-evenly  items-center  z-30   animate-in slide-in-from-top duration-300
             `}
        >
            {/* <button 
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-ponter"
                onClick={()=> setMenuOpen(false)}
                aria-label="Close Menu"
                >
                    &times;
            </button> */}

            
            <a 
                href="#home"
                onClick={() => setMenuOpen(false)}
                className={`text-base font-semibold text-white  transform transition-transform duration-300
                    `}
                >
                Home
            </a>

             <a 
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`text-base font-semibold text-white  transform transition-transform duration-300
                    `}
                >
                About
            </a>

             <a 
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`text-base font-semibold text-white  transform transition-transform duration-300
                    }`}
                >
                Projects
            </a>

             <a 
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`text-base font-semibold text-white  transform transition-transform duration-300
                    `}
                >
                Contact
            </a>
            
        </div>
    )
}