'use client'; // Directiva necesaria para usar hooks de React como useState
import React from 'react'
import Image from 'next/image'
import {FaUser, FaCode, FaTools} from '@/components/Icon'
const DevelopImg = "/develop.png"
const PCImg = "/computer.png"

export default function AboutBio() {
  return (
    <div>
        <h3 className='pt-2 pb-2 text-2xl text-black dark:text-white'> Biography</h3>
        <p>My name is Darwin Garcia, Data Scientist, Mentor and Fitness Trainer. </p>
        <p>I was born in Colombia. I currently live in the United States. </p>
        <p>My hobbies are technology, creating new things, and creating amazing experiences through my work.</p>
        <p>I assembled my first PC when I was 15 years old, thanks to my parents. With this great leap, I was introduced to the world of computing, working from a young age as a support technician in companies with highly scalable technology infrastructure, which allowed me to acquire new skills, business knowledge and learn new support tools, which were my great contributions, until the change in my career, after 7 years as an independent, working as a computer repair technician, consultant and technology salesman.</p>
        <p>Today I am a data scientist, an expert in collecting, analysing and interpreting large data sets, developing new predictive models and performing data management tasks. And I am happy to have achieved one of my goals in the technology industry. I focus on creating reports and visualizatios for data-forward companies.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit justify-center">

            <div className="flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4">                
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white"><FaUser className='inline-flex items-center mx-0.5'/>Facts about me.</h2>
                <ul className="justify-center max-w-md px-0 mx-0 list-none text-gray-600 dark:text-gray-300 min-w-full">
                    <li>🎂 March 15 / 1991 </li>
                    <li>📌 Bogotá D.C. </li>
                    <li>🥇 English B2 </li>
                    <li>🌎 Español Nativo </li>
                </ul>
            </div>

            <div className="flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4"> 
                <div className='mx-auto w-24 h-24 relative md:h-16 md:w-16 '>
                    <Image src={DevelopImg} 
                    layout='fill' 
                    alt="Foto de perfil"
                    objectFit='contain'/>
                </div>   
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white"><FaCode className='inline-flex items-center mx-0.5'/>Data Scientist</h2>
                <p>From 2025 to the present, I do projects related to information and data.</p>
            </div>

            <div className="flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4">
                <div className='mx-auto w-24 h-24 relative md:h-16 md:w-16 '>
                    <Image src={PCImg} 
                    layout='fill' 
                    alt="Foto de perfil"
                    objectFit='contain'/>
                </div>    
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white"><FaTools className='inline-flex items-center mx-0.5'/>PC Builder</h2>
                <p>PC and Laptop Technical Support and technology salesman. 7 years as a freelancer</p>
            </div>
        </div>

    </div>
  );
}