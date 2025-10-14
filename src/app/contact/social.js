"use client"; // 👈 Directiva necesaria para usar hooks de React
import React from 'react';
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function SocialCard() {
  return (
    // 1. ANCHO AJUSTADO: `md:w-4/5` limita el ancho al 80% en pantallas medianas y grandes.
    //    `mx-auto` centra el contenedor.
    <section className="w-full md:w-4/5 mx-auto rounded-lg p-8 mt-16">
      <div className="flex flex-col items-center text-center">
         
          <div>
              <h4 className='text-3xl font-semibold hover:text-[lavender] transition duration-200 drop-shadow-lg shadow-black'>
                  Social Links
              </h4>
          </div>

          {/* 2. ESPACIO REDUCIDO: Se cambió `gap-x-5` por `gap-x-4` para reducir el espacio horizontal. */}
          <div className='w-full flex justify-center md:justify-evenly items-center flex-wrap pt-12 text-5xl md:text-6xl gap-y-6 gap-x-4'>
              <a className='dark:text-white hover:text-[dodgerblue] transition duration-200' href="https://www.facebook.com/imdarwingarcia" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
              <a className='dark:text-white hover:text-[deepskyblue] transition duration-200' href="https://twitter.com/_DarwinGarcia_" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
              <a className='dark:text-white hover:text-[orangered] transition duration-200' href="https://www.instagram.com/itsdarwingarcia" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
              <a className='dark:text-white hover:text-[red] transition duration-200' href="https://www.youtube.com/channel/UCrdkb-dc4Szpz2s6W2OZx-Q" target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
              <a className='dark:text-white hover:text-[indigo] transition duration-200' href="https://github.com/darwin-garcia" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
              <a className='dark:text-white hover:text-[steelblue] transition duration-200' href="https://www.linkedin.com/in/darwingarc%C3%ADa/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
          </div>
      </div>
    </section>
  );
}