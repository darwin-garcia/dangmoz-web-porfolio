'use client'; // Directiva necesaria para usar hooks de React como useState
import React from 'react'
import {BsGlobe2, BsGear, BsGeoAltFill, BsTools, BsTerminalFill } from 'react-icons/bs';
import {DiMongodb, DiMysql} from 'react-icons/di';
import {FaGitAlt, FaDatabase,  FaGithubAlt, FaServer, FaLayerGroup} from 'react-icons/fa';
import {SiAwslambda, SiArchlinux, SiAmazonaws, SiDocker, SiGooglecloud, SiLinux, SiMicrosoftexcel, SiPostman, SiPytorch, SiGraphql, SiNotion, SiIbm,  SiOracle, SiPostgresql, SiPython, SiReact, SiTrello, SiTableau, SiTensorflow, SiPandas, SiNumpy} from 'react-icons/si';

export default function AboutSkill() {
  return (
    <div>
        <h3 className='pt-2 pb-2 text-2xl font-bold text-black dark:text-white'>Hard Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-fit ">

            <div className="flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4">
            
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white"><FaServer className='inline-flex items-center mr-2'/>Library</h2>
                <p className='pt-2'>Libraries I use in the business environment </p>
                <div className='min-h-32 flex items-center justify-center'>
                    <ul className=" text-5xl flex flex-wrap justify-center max-w-md gap-x-2 px-0 mx-0 list-none text-gray-600 dark:text-gray-300 min-w-full">                        
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
                        <li>
                            <SiPostgresql className='hover:text-blue-400/75 transition duration-200'/>
                        </li>
                    </ul>
                </div>                
            </div>

            <div className="flex flex-col max-w-lg mx-auto items-center justify-between px-4 py-4">
            
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white"><BsTools className='inline-flex items-center mr-2'/>Tools</h2>
                <p className='pt-4'>Other tools I use in Data Science</p>
                <div className='min-h-32 flex items-center justify-center'>
                    <ul className=" text-5xl flex flex-wrap justify-center max-w-md gap-x-2 px-0 mx-0 list-none text-gray-600 dark:text-gray-300 min-w-full">
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
        </div>
        <h3 className='pt-4 pb-2 text-2xl font-bold text-black dark:text-white'> Soft Skills</h3> 
        <ul className='list-none pt-4'>
            <li><a className='pt-3 pb-2 text-lg text-black dark:text-white'>Collaborative Working </a></li>
            <li><a className='pt-3 pb-2 text-lg text-black dark:text-white'>Planning Ability </a></li>
            <li><a className='pt-3 pb-2 text-lg text-black dark:text-white'>Problem Solving </a></li>
            <li><a className='pt-3 pb-2 text-lg text-black dark:text-white'>Critical Thinking </a></li>
            <li><a className='pt-3 pb-2 text-lg text-black dark:text-white'>Growth</a></li>
            <li><a className='pt-3 pb-2 text-lg text-black dark:text-white'>Creativity</a></li>
            <li><a className='pt-3 pb-2 text-lg text-black dark:text-white'>Perseverance </a></li>
        </ul> 
    </div>
  );
}