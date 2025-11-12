"use client"; // 👈 Directiva necesaria para usar hooks de React
import Link from "next/link";
import { useState } from 'react';
import Typewriter from "typewriter-effect"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook} from "@fortawesome/free-solid-svg-icons";
import ParticleCanvas from "./ParticleCanvas";

const ImgUser = '/images/profile/user.png'

export default function Hero() {
    const [theme, setTheme] = useState('dark');
    const [options, setOptions] = useState({
        numberOfParticles: 120,
        maxDistance: 180,
        fieldRadius: 160, // Añade la nueva opción al estado inicial
    });

    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
    };

    const handleOptionChange = (e) => {
        setOptions({
        ...options,
        [e.target.name]: Number(e.target.value),
        });
    };

  return (
    <div className='h-screen bg-cover bg-center bg-fixed grid justify-items-center items-center text-center relative'> 
        <ParticleCanvas options={options} theme={theme}/>
        <div className='mx-auto rounded-full w-40 h-40 relative overflow-hidden mt-20 max-md:20 md:h-52 md:w-52 object-cover ring-4 ring-gray-300 shadow-lg shadow-black hover:ring-blue-500 transition duration-500'>
            <Image fill src={ImgUser} alt="Photo-Profile" sizes="(max-width: 1024px) 100vw, (max-width: 1024px) 100vw" className="object-cover rounded-full" />            
        </div>
            
        <div className='relative overflow-hidden max-w-[650px] text-white flex flex-col gap-[40px] '>
            <div>                
                <h1 className='text-5xl text-gray-800 dark:text-white hover:text-[lightskyblue] transition duration-200 drop-shadow-lg shadow-black'>Darwin Garcia</h1>
                <h4 className='text-2xl text-gray-800 dark:text-white hover:text-[lavender] transition duration-200 mt-3 drop-shadow-lg shadow-black'>
                    <Typewriter options={{
                        strings:["Data Scientist","PC Builder", "Photographer"], changeDelay:5, changeDeleteSpeed:2, autoStart: true, loop:true
                    }} />
                </h4>
            </div>

            <div className='bg-[#000] dark:bg-[#fff] h-[2px] w-[auto] drop-shadow-lg shadow-black'></div>

            <div>
                <p className="text-gray-800 dark:text-white">¡Hello! Welcome to my website!</p>
            </div>

            <div>           
                <p className="text-gray-800 dark:text-white">👨‍💻 Here begins my story. </p>                
            </div>
            <div>
                <Link href="/cv" className="bg-blue-500 text-gray-100 dark:text-white font-bold py-2 px-4 rounded inline-flex items-center border border-blue-100 hover:bg-green-600 transition duration-200">
                    <FontAwesomeIcon icon = {faBook} className="text-xl" /> Read More.
                </Link>
            </div>   
        </div>
    </div>
  )
}