import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 fixed w-full z-50 top-0 left-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo y Nombre */}
          <div className="flex-shrink-0 flex items-center cursor-pointer space-x-3">
            <img src="/favicon.png" alt="Qrramba Labs Logo" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-extrabold text-white tracking-tight">
              QRRAMBA <span className="text-yellow-400">LABS</span>
            </span>
          </div>

          {/* Menú de Escritorio */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#nosotros" className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium">
              Nosotros
            </a>
            <a href="#servicios" className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium">
              Servicios
            </a>
            <a href="#equipo" className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium">
              Equipo
            </a>
            
            {/* Botón CTA */}
            <a href="https://wa.me/573159841145" target="_blank" rel="noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 font-semibold transition-transform transform hover:scale-105 shadow-md">
              Contáctanos
            </a>
          </div>

          {/* Menú de Hamburguesa (Móvil) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable (Móvil) */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 shadow-xl border-t border-slate-700">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#nosotros" className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-slate-700 hover:text-green-400">
              Nosotros
            </a>
            <a href="#servicios" className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-slate-700 hover:text-green-400">
              Servicios
            </a>
            <a href="#equipo" className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-slate-700 hover:text-green-400">
              Equipo
            </a>
            <a href="https://wa.me/573159841145" target="_blank" rel="noreferrer" className="block w-full text-center mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-3 font-bold">
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;