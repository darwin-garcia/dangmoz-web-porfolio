"use client"; // 👈 Directiva necesaria para usar hooks de React
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import Typewriter from "typewriter-effect"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faEnvelope, faDownload} from '@fortawesome/free-solid-svg-icons';
import {FaFacebookSquare, FaGithub, FaInstagram, FaTiktok, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp }from '@/components/Icon';

const ImgUser = "/images/profile/user.png"
const CVRoute = '/docs/CV.pdf'

export default function AboutCard() {
  return (
    <div className="text-center">
        {/* Photo Profile */}
        <div className='mx-auto rounded-full w-40 h-40 relative overflow-hidden mt-7 md:h-52 md:w-52 ring-4 ring-gray-300 shadow-lg shadow-black hover:ring-blue-500 transition duration-200'>
            <Image fill src={ImgUser} alt="Photo-Profile" sizes="(max-width: 1024px) 100vw, (max-width: 1024px) 100vw" className="object-cover rounded-full" />
        </div>

        <div className="pt-5 pb-2 mt-2 mb-2">
            <h3 className='pt-4 pb-2 text-2xl font-bold  text-blue-800 dark:text-white'>Darwin Garcia</h3>
            <div className=' text-gray-800 dark:text-gray-200'>
                <Typewriter options={{
                    strings:["Data Scientist","PC Builder", "Photographer"], changeDelay:5, changeDeleteSpeed:2, autoStart: true, loop:true
                }} />
            </div>
            {/* Recent Company in job */}
            <p className='text-gray-800 dark:text-gray-200'>💼 Adeodato</p>
        </div>        

        <div className='flex space-x-3 pt-5'>
            {/* Button "Contact Me" */}
            <a href="https://call.whatsapp.com/voice/eVjRmhsyYb3C4dlMVJJnFF" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 group-hover:text-white">
                    <FaWhatsapp className='inline-flex items-center'/> Contact Me
                </span>
            </a>

            {/* Button "Resume" */}
            <Link href={CVRoute} download className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 group-hover:text-white">
                    <FontAwesomeIcon icon={faDownload} className="h-6 w-6" /> Resume
                </span>
            </Link>
        </div>

        <div>
            <h4 className="pt-4 pb-2 text-md font-semibold  text-blue-800 dark:text-white">Follow Me on:</h4>
        </div>
        {/* Social Links */}
        <div className='flex justify-between space-x-3 pt-6 text-2xl '>
            <a className=' dark:text-white hover:text-[lightskyblue] transition duration-200' href="mailto:darwin_garcia@me.com"><FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" /></a>
            <a className=' dark:text-white hover:text-[dodgerblue] transition duration-200 ' href="https://www.facebook.com/idarwingarcia"><FaFacebookSquare/></a>
            <a className=' dark:text-white hover:text-[deepskyblue] transition duration-200 ' href="https://twitter.com/_DarwinGarcia_"><FaTwitter/></a>
            <a className=' dark:text-white hover:text-[orangered] transition duration-200 ' href="https://www.instagram.com/_darwingarcia_"><FaInstagram/></a>
            <a className=' dark:text-white hover:text-[red] transition duration-200 ' href="https://www.youtube.com/channel/UCrdkb-dc4Szpz2s6W2OZx-Q"><FaYoutube/></a>
            <a className=' dark:text-white hover:text-[indigo] transition duration-200 ' href="https://github.com/darwin-garcia"><FaGithub/></a>
            <a className=' dark:text-white hover:text-[steelblue] transition duration-200 ' href="https://www.linkedin.com/in/darwingarc%C3%ADa/"><FaLinkedin/></a>
        </div>

    </div>
  );
}