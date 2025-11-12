'use client'; // Directiva necesaria para usar hooks de React como useState

import Link from 'next/link';
import { useState } from 'react';
// 1. Importa el componente y los íconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Home = '/'
const About = '/about'
const Blog = '/blog'
const Projects = '/projects'
const Services = '/services'
const Education = '/education'
const Experience = '/experience'
const Contact = '/contact'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Estilos del Navbar (Modo Claro/Oscuro y Blur reducido)
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-sm text-slate-800 p-4 shadow-md
                    dark:bg-slate-900/80 dark:text-white">
      <div className="container mx-auto flex justify-between items-center py-1 px-1">
        {/* Contenedor del menú hamburguesa y el nombre */}
        <div className="flex items-center space-x-4">
          {/* Botón de Menú Hamburguesa (visible en móviles y tablets) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {/* 2. Reemplaza el SVG con esta lógica */}
              {!isOpen ? (
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              ) : (
                <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* Nombre/Logo del Portafolio */}
          <Link href={Home} className="text-2xl hover:text-blue-600 dark:hover:text-blue-400">
            Darwin Garcia
          </Link>
        </div>

        {/* Menú para escritorio (visible en pantallas grandes) */}
        <div className="hidden md:flex space-x-6">
          {/* Ajuste de Hover para escritorio */}
          <Link href={About} className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
          <Link href={Services} className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
          <Link href={Projects} className="hover:text-blue-600 dark:hover:text-blue-400">Projects</Link>
          <Link href={Experience} className="hover:text-blue-600 dark:hover:text-blue-400">Experience</Link>
          <Link href={Education} className="hover:text-blue-600 dark:hover:text-blue-400">Education</Link>
          <Link href={Contact} className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white dark:bg-slate-900/90 shadow-lg border-t border-gray-200 dark:border-slate-700">
          {/* Ajuste de Hover para móvil (fondo) */}
          <Link href={About} className="block py-2 px-4 text-sm text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>About</Link>
          <Link href={Services} className="block py-2 px-4 text-sm text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href={Projects} className="block py-2 px-4 text-sm text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href={Experience} className="block py-2 px-4 text-sm text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href={Education} className="block py-2 px-4 text-sm text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>Education</Link>
          <Link href={Contact} className="block py-2 px-4 text-sm text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
