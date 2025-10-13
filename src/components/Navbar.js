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
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900/80 to-slate-900/20 backdrop-blur-sm text-white p-4 shadow-md">
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
          <Link href={Home} className="text-2xl ">
            Darwin Garcia
          </Link>
        </div>

        {/* Menú para escritorio (visible en pantallas grandes) */}
        <div className="hidden md:flex space-x-6">
          <Link href={About} className="hover:text-gray-300">About</Link>
          {/* <Link href={Services} className="hover:text-gray-300">Services</Link>*/}
          <Link href={Projects} className="hover:text-gray-300">Projects</Link>
          {/* <Link href={Experience} className="hover:text-gray-300">Experience</Link>*/}
          <Link href={Education} className="hover:text-gray-300">Education</Link>
          <Link href={Contact} className="hover:text-gray-300">Contact</Link>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link href={About} className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={() => setIsOpen(false)}>About</Link>
          {/* <Link href={Services} className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={() => setIsOpen(false)}>Services</Link>*/}
          <Link href={Projects} className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={() => setIsOpen(false)}>Projects</Link>
          {/* <Link href={Experience} className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={() => setIsOpen(false)}>Experience</Link>*/}
          <Link href={Education} className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={() => setIsOpen(false)}>Education</Link>
          <Link href={Contact} className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;