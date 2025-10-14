'use client'; // 👈 Directiva necesaria para usar hooks de React

// 1. Importaciones
import Link from 'next/link';
import { useState } from 'react'; // Elementos requeridos en React
// 2. Importar iconos para el menu Navbar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

// 3. Variables de hipervínculo (sin cambios)
const Home = '/';
const About = '/about';
const Projects = '/projects';
const Education = '/education';
const Contact = '/contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Se eliminan 'hasMounted' y el 'useEffect'

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-[2px] text-slate-800 dark:text-white p-4 shadow-md shadow-slate-300/40 dark:shadow-slate-900/40">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-4">
          {/* Botón de Menú Hamburguesa (visible en móviles y tablets) */}
          <div className="md:hidden">
            {/* Se elimina la condición 'hasMounted' */}
            <button onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              ) : (
                <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* Nombre/Logo del Portafolio */}
          <Link href={Home} className="text-2xl hover:text-[#4a609c] transition duration-200 drop-shadow-lg">
            Darwin Garcia
          </Link>
        </div>

        {/* Menú para escritorio (sin cambios) */}
        <div className="hidden md:flex space-x-6">
          <Link href={About} className="hover:text-blue-500 dark:hover:text-gray-500 duration-200 drop-shadow-md">About</Link>
          <Link href={Projects} className="hover:text-blue-500 dark:hover:text-gray-500 duration-200 drop-shadow-md">Projects</Link>
          <Link href={Education} className="hover:text-blue-500 dark:hover:text-gray-500 duration-200 drop-shadow-md">Education</Link>
          <Link href={Contact} className="hover:text-blue-500 dark:hover:text-gray-500 duration-200 drop-shadow-md">Contact</Link>
        </div>
      </div>

      {/* Menú desplegable para móviles con transición */}
      {/* Se elimina la condición 'hasMounted' del contenedor principal */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mt-4">
          <Link href={About} className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsOpen(false)}>About</Link>
          <Link href={Projects} className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href={Education} className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsOpen(false)}>Education</Link>
          <Link href={Contact} className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;