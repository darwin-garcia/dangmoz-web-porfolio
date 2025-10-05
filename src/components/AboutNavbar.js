import React from 'react';
import Link from 'next/link';
import { BsPersonBoundingBox, BsHeartFill } from 'react-icons/bs';
import { FaClipboardList, FaChartBar } from 'react-icons/fa';
// 1. Eliminamos las importaciones de los componentes que no se usan aquí.
import About from '@/app/about/page';
// 2. Definimos las rutas como cadenas de texto (strings).
const resumePath = './resume';
const bioPath = './bio';
const hobbiePath = './hobbie';
const skillPath = './skill';

const AboutNav = () => {
  return (
    <div className='container mx-auto flex justify-evenly items-center py-4 px-4'>
        {/* Vista para pantallas medianas (md) y grandes */}
        <div className='hidden md:flex gap-7'>
            {/* 3. Usamos las variables con las rutas de texto en los href */}
            <Link href={resumePath} className="dark:text-white hover:text-[#62d462] transition duration-200 drop-shadow-md no-underline">
                <BsPersonBoundingBox className='inline-flex items-center mr-2'/> Resume
            </Link>

            <Link href={bioPath} className="dark:text-white hover:text-[#4889eb] transition duration-200 drop-shadow-md no-underline">
                <FaClipboardList className='inline-flex items-center mr-2'/> Biography
            </Link>

            <Link href={hobbiePath} className="dark:text-white hover:text-[red] transition duration-200 drop-shadow-md no-underline">
                <BsHeartFill className='inline-flex items-center mr-2'/> Hobbies
            </Link>

            <Link href={skillPath} className="dark:text-white hover:text-[#b257be] transition duration-200 drop-shadow-md no-underline">
                <FaChartBar className='inline-flex items-center mr-2'/> Skills
            </Link>
        </div>

        {/* Vista para pantallas pequeñas (smartphones) */}
        <div className='md:hidden flex gap-7'>
            <Link href={resumePath} className="dark:text-white hover:text-[#62d462] transition duration-200 drop-shadow-md no-underline">
                <BsPersonBoundingBox size={24} />
            </Link>
            <Link href={bioPath} className="dark:text-white hover:text-[#4889eb] transition duration-200 drop-shadow-md no-underline">
                <FaClipboardList size={24} />
            </Link>
            <Link href={hobbiePath} className="dark:text-white hover:text-[red] transition duration-200 drop-shadow-md no-underline">
                <BsHeartFill size={24} />
            </Link>
            <Link href={skillPath} className="dark:text-white hover:text-[#b257be] transition duration-200 drop-shadow-md no-underline">
                <FaChartBar size={24} />
            </Link>
        </div>
    </div>
  );
};

export default AboutNav;