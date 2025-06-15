// import { useEffect } from "react"

export default function MobileMEnu({menuOpen,setMenuOpen}){

    
    return (
        <div className={`fixed w-screen bg-gray-500  top-18 left-0 w-95 bg-[rgba(10 , 10,10,0.8)] 
             flex flex justify-evenly  items-center  z-40 transition-all duration-300 
            ease-in-out ${
                menuOpen 
                 ? 'h-15 opacity-100 pointer-events-auto' 
                 : "h-0 opacity-0 pointer-events-none"
            }`}
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
                className={`text-2xl font-semibold text-white my-4 transform trandition-tramsform duration-300
                    ${
                       menuOpen 
                       ? "opacity-100 translate-y-0"
                       : "opacity-0 translate-y-5" 
                    }`}
                >
                    Home
            </a>

             <a 
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform trandition-tramsform duration-300
                    ${
                       menuOpen 
                       ? "opacity-100 translate-y-0"
                       : "opacity-0 translate-y-5" 
                    }`}
                >
                    About
            </a>

             <a 
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform trandition-tramsform duration-300
                    ${
                       menuOpen 
                       ? "opacity-100 translate-y-0"
                       : "opacity-0 translate-y-5" 
                    }`}
                >
                    Projects
            </a>

             <a 
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform trandition-tramsform duration-300
                    ${
                       menuOpen 
                       ? "opacity-100 translate-y-0"
                       : "opacity-0 translate-y-5" 
                    }`}
                >
                    Contact
            </a>
            
        </div>
    )
}