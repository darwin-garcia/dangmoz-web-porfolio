'use client'; // Directiva necesaria para usar hooks de React como useState
import React from 'react'
import { BsGlobe2, BsGear, BsGeoAltFill, BsLayoutTextWindowReverse, BsTools, BsTerminalFill } from 'react-icons/bs';
import {DiMongodb, DiMysql} from 'react-icons/di';
import {FaGitAlt, FaDatabase, FaHtml5, FaGithubAlt, FaJava, FaServer, FaReact,  FaTrello,  FaLayerGroup} from 'react-icons/fa';
import {SiApple, SiAwslambda, SiArchlinux, SiAmazonaws, SiDocker, SiGooglecloud, SiLinux, SiMicrosoftexcel, SiPostman, SiPytorch, SiGraphql, SiNotion, SiIbm,  SiOracle, SiPostgresql, SiPython, SiReact, SiTrello, SiTableau, SiTensorflow, SiPandas, SiNumpy} from 'react-icons/si';


export default function AboutSkill() {
  return (
    <div>

        <h3 className='pt-2 pb-2 text-2xl text-black dark:text-white'>Hard Skills</h3>

        <p>These are my skills in the data science environment.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-fit ">

            <div className="flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4">
            
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white"><FaServer className='inline-flex items-center'/> Library</h2>
                <p>Desarrollo aplicaciones en el entorno corporativo </p>
                <ul className=" text-5xl flex flex-wrap justify-center max-w-md px-0 mx-0 list-none text-gray-600 dark:text-gray-300 min-w-full">
                    
                    <li>
                        <SiPython className='hover:text-green-500 transition duration-200'/>
                    </li>
                    <li>
                        <SiPytorch className='hover:text-orange-600/75  transition duration-200'/>
                    </li>                    
                    <li>
                        <SiTableau className='hover:text-emerald-600/65 transition duration-200'/>
                    </li>
                    <li>
                        <SiPandas className='hover:text-purple-700/75 transition duration-200'/>
                    </li>
                    <li>
                        <SiNumpy className='hover:text-blue-500/65 transition duration-200'/>
                    </li>
                </ul>
            </div>
            
            <div className=" flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4">
            
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white"><FaDatabase className='inline-flex items-center'/> Databases</h2>
                <p>Realizo Consulta y gestión de datos en servidores</p>
                <ul className=" text-5xl flex flex-wrap justify-center max-w-md px-0 mx-0 list-none text-gray-600 dark:text-gray-300 min-w-full">
                    <li>
                        {/* <SiIbmwatson className='hover:text-cyan-600/90 transition duration-200'/>*/}
                    </li>
                    <li>
                        <SiPostgresql className='hover:text-blue-400/75 transition duration-200'/>
                    </li>
                    <li>
                        {/* <SiMicrosoftsqlserver className='hover:text-purple-700/75 transition duration-200'/>*/}
                    </li>
                    <li>
                        {/*<SiPowerbi className='hover:text-green-600/75 transition duration-200'/>*/}
                    </li>
                </ul>
            </div>

            <div className=" flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4">
            
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white"><BsTools className='inline-flex items-center'/> Tools</h2>
                <p>Otras aplicaciones que utilizo en Desarrollo de Software</p>
                <ul className=" text-5xl flex flex-wrap justify-center max-w-md px-0 mx-0 list-none text-gray-600 dark:text-gray-300 min-w-full">
                    
                    <li>
                        <SiDocker className='hover:text-blue-500 transition duration-200'/>
                    </li>
                    <li>
                        <FaGitAlt className='hover:text-orange-600 transition duration-200'/>
                    </li>
                    <li>
                        <SiArchlinux className='hover:text-cyan-600/90 transition duration-200'/>
                    </li>
                    <li>
                        <BsTerminalFill className='hover:text-blue-400/90 transition duration-200'/>
                    </li>
                    <li>
                        <SiLinux className='hover:text-orange-600/75 transition duration-200'/>
                    </li>                    
                </ul>
            </div>           
        </div>
        <h3 className='pt-4 pb-2 text-2xl text-black dark:text-white'> Soft Skills</h3> 
        <ul>
            <li><a className='pt-2 pb-1 text-lg text-black dark:text-white no-underline'>Collaborative Working </a></li>
            <li><a className='pt-2 pb-1 text-lg text-black dark:text-white no-underline'>Planning Ability </a></li>
            <li><a className='pt-2 pb-1 text-lg text-black dark:text-white no-underline'>Problem Solving </a></li>
            <li><a className='pt-2 pb-1 text-lg text-black dark:text-white no-underline'>Critical Thinking </a></li>
            <li><a className='pt-2 pb-1 text-lg text-black dark:text-white no-underline'>Growth</a></li>
            <li><a className='pt-2 pb-1 text-lg text-black dark:text-white no-underline'>Creativity</a></li>
            <li><a className='pt-2 pb-1 text-lg text-black dark:text-white no-underline'>Perseverance </a></li>
        </ul> 
    </div>
  );
}