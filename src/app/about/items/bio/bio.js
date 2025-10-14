'use client'; // 👈 Directiva necesaria para usar hooks de React
import React from 'react'
import Image from 'next/image'
import {FaUser, FaCode, FaTools} from '@/components/Icon'
import Carousel from '@/components/Carousel';

const ProfileImg = "/images/profile/user.png"
const DevelopImg = "/images/about/develop.png"
const PCImg = "/images/about/computer.png"

export default function AboutBio() {
  return (
    <div>
        <Carousel/>
        <div className='pt-4 py-4 pb-4'>
            <h3 className='pt-2 pb-2 text-2xl text-black font-bold dark:text-white'> Biography</h3>
            <p className="mb-4">Hello! I am Darwin Arley Garcia Sanchez. (Bogotá D.C. Colombia, March 15, 1991) alias <i>dangmoz</i> in the digital world</p>
            <p className="mb-4">I was born in Bogotá. At early age, i became interested in electronics and computers. I started in the world of hardware at age 14 assembling my first Desktop PC. </p>
            <p className='mb-4'>My career in technology took off right after I graduated from high school, when I got my first role as a computer maintenance assitant. Althought I later explored the university route, I soon discovered that my true passion lay in direct experience and real-world problem solving. I then decided to focus all my energy on the technology sector, a choice that allowed me to accelerate my learning and build my career from a practical and solid foundation. </p>
            <p className='mb-4'>I studied Frontend Developer at Oracle Next Education in 2022 and later pursued a professionar carrer in Data Science at IBM in 2025.</p>
            <h3 className='pt-2 pb-2 text-2xl text-black font-bold dark:text-white'>Origins</h3>
            <p className='mb-4'>I started in the digital world on YouTube in 2014, after dropping out of college. I developed video editing skills and basic photography techniques. My content consisted of Halo and Call of Duty commented gameplays, as well as geek topics, which I finished in 2017 due to a lack of financial resources and free time to record.</p>
            <p className='mb-4'>I founded an independent company from home at age of 27. As a junior support technician, I acquired fundamental business skills such as customer service, sales of hardware products, remote support, advice and end-user support.</p>
            <h3 className='pt-2 pb-2 text-2xl text-black font-bold dark:text-white'>Facts</h3>
            <ul className='list-disc list-inside mb-6 mt-4'>
                <li>My alias came from a college friend, and since I was a big fan of the heavy-metal band Mago de Oz, i established it as my main identity in the digital world from the beginning on YouTube.</li>
                <li>My favorite sport as a teenager was skateboarding. Despite practicing this hobby with my right foot, Darwin is left-handed.</li>
                <li>My favorite instrument is the electric bass guitar. I used to play the keyboard and drums beore giving up this childhood hobby completely.</li>
                <li>I currently practic Calisthenics and running sometimes to stay in shape and enjoy good health in the long term.</li>
            </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit justify-center">
            <div className="flex flex-col min-h-64 max-w-lg mx-auto items-center justify-between px-4 py-4"> 
                <div className='mx-auto w-24 h-24 relative md:h-16 md:w-16 '>
                    <Image src={ProfileImg} 
                    layout='fill' 
                    alt="Developer-Image"
                    objectFit='contain'/>
                </div>               
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white"><FaUser className='inline-flex items-center mx-0.5'/> More Facts about me.</h2>
                <ul className="justify-center max-w-md pb-2 px-0 mx-0 list-none text-gray-600 dark:text-gray-300 min-w-full">
                    <li>🎂 March 15 / 1991 </li>
                    <li>📌 Bogotá D.C. </li>
                    <li>🥇 English B2 </li>
                    <li>🌎 Español Nativo </li>
                </ul>
            </div>

            <div className="flex flex-col min-h-64 max-w-lg mx-auto items-center justify-between px-4 py-4"> 
                <div className='mx-auto w-24 h-24 relative md:h-16 md:w-16 '>
                    <Image src={DevelopImg} 
                    layout='fill' 
                    alt="Developer-Image"
                    objectFit='contain'/>
                </div>   
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white"><FaCode className='inline-flex items-center mx-0.5'/> Data Scientist</h2>
                <p>From 2025 to the present, I do projects related to information and data.</p>
            </div>

            <div className="flex flex-col min-h-64 max-w-lg mx-auto items-center justify-between px-4 py-4">
                <div className='mx-auto w-24 h-24 relative md:h-16 md:w-16 '>
                    <Image src={PCImg} 
                    layout='fill' 
                    alt="PC-Image"
                    objectFit='contain'/>
                </div>    
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white"><FaTools className='inline-flex items-center mx-0.5'/> PC Builder</h2>
                <p>PC and Laptop Technical Support and technology salesman. 7 years as a freelancer</p>
            </div>
        </div>
    </div>
  );
}