"use client"; // 👈 Directiva necesaria para usar hooks de React
import React from 'react'
import Image from 'next/image'

// 👇 1. Importa los iconos desde tu nuevo componente cliente
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaReact, SiArchlinux, SiApple, SiGit, SiMysql, SiPycharm, SiScilab, SiSpringboot, SiTailwindcss, SiTableau, SiScipy, SiDjango, SiFlask, SiPostgresql,  SiPandas, SiNumpy, SiJupyter, SiPlotly, SiPython, SiPytest, SiTensorflow, SiGeopandas,  SiPytorch } from '@/components/Icon';

const ProjectImg1 = '/images/projects/Item2.png'

export default function ProjectItem3() {
  return (
    <article className="bg-white flex flex-col max-w-lg mx-auto rounded-lg shadow-xl dark:bg-gray-700 mb-5 align-middle hover:scale-110 transition duration-300 ease-in-out ">
            {/* Contenido del proyecto (Square) */}
            <div className="relative w-full aspect-square opacity-50 cursor-pointer filter grayscale hover:grayscale-0 blur-sm hover:blur-none hover:opacity-100 transition duration-300 ease-in-out">
                <a href="https://github.com/darwin-garcia">
                    {/* Imagen del Proyecto */}
                    <Image
                        src={ProjectImg1}
                        alt="Snapshot Project"
                        layout="fill"
                        objectFit="cover"
                    />
                </a>
            </div>
            {/* Tipo de Proyecto */}
            <div className="bg-gray-900 opacity-60 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 className="text-white text-lg font-semibold">Data/Notebooks</h3>
            </div>
            {/* Descripcion y Titulo del Proyecto */}
            <div className="px-6 py-4 flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white text-center">Laptop Sales</h1>
                <p className="text-gray-500 dark:text-gray-300">
                    Prediction of laptops sold per year according to current market needs.
                </p>

                <div className="py-1 flex justify-center items-center gap-2 mt-4 text-gray-700 text-3xl dark:text-white">                        
                    {/* Iconos que puedes colocar con las tecnologias trabajadas en el proyecto*/}
                        <SiPython className='hover:text-green-400 transition duration-200'/><div className='px-0.8'/> 
                        <SiJupyter className='hover:text-orange-400 transition duration-200'/><div className='px-0.8'/> 
                        <SiPostgresql className='hover:text-blue-400 transition duration-200'/><div className='px-0.8'/> 
                </div>                        
                {/* Fecha de finalizacion */}
                <div className='text-center'>
                    <p className="uppercase text-gray-600 text-sm dark:text-gray-400">Nov 30/2025</p>
                </div>
            </div>
    </article>
  );
}