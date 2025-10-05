"use client"; // 👈 ¡Esta es la directiva mágica!
import React from 'react'
import Image from 'next/image'

// 👇 1. Importa los iconos desde tu nuevo componente cliente
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaReact, SiArchlinux, SiApple, SiGit, SiMysql, SiPycharm, SiScilab, SiSpringboot, SiTailwindcss, SiTableau, SiScipy, SiDjango, SiFlask, SiPostgresql,  SiPandas, SiNumpy, SiJupyter, SiPlotly, SiPython, SiPytest, SiTensorflow, SiGeopandas,  SiPytorch } from '@/components/Icon';

const ProjectImg1 = '/images/projects/brand.jpg'
export default function ProjectItem1() {
  return (
    <article className="bg-white flex flex-col max-w-lg mx-auto rounded-lg shadow-xl dark:bg-gray-700 mb-5 align-middle hover:scale-110 transition duration-300 ease-in-out ">
            {/* 2. El contenedor ahora es 'relative' y tiene 'aspect-square' para la relación 1:1 */}
            <div className="relative w-full aspect-square opacity-50 cursor-pointer filter grayscale hover:grayscale-0 blur-sm hover:blur-none hover:opacity-100 transition duration-300 ease-in-out">
                <a href="/">
                    {/* 3. Reemplazamos <img> por <Image> con las propiedades correctas */}
                    <Image
                        src={ProjectImg1}
                        alt="Snapshot Project"
                        layout="fill"
                        objectFit="cover"
                    />
                </a>
            </div>

            <div className="bg-gray-900 opacity-60 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 className="text-white text-lg font-semibold">Linux</h3>
            </div>

            <div className="px-6 py-4 flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white text-center">Arch Linux + Hyprland</h1>
                <p className="text-gray-500 dark:text-gray-300">
                    Custom desktop environment based on Window Management.
                </p>

                <div className="py-1 justify-center flex items-center mt-4 text-gray-700 text-3xl dark:text-white">                        
                    {/* Iconos que puedes colocar con las tecnologias trabajadas en el proyecto*/}
                        <SiArchlinux className='hover:text-blue-400 transition duration-200'/><div className='px-0.8'/> 
                        <SiGit className='hover:text-orange-400 transition duration-200'/><div className='px-0.8'/> 
                </div>                        

                <div className='text-center'>
                    <p className="uppercase text-gray-600 text-sm dark:text-gray-400">Ago 1/2025</p>
                </div>
            </div>
    </article>
  );
}