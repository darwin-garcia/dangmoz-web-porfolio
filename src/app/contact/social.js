"use client";
// 1. Importa el componente principal
import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
// 2. Importa los íconos que necesitas
import {FaFacebookSquare, FaGithub, FaInstagram, FaTiktok, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp} from 'react-icons/fa'
const userImg = "/user.png"

export default function SocialCard() {
  return (
    <section className="flex flex-col items-center text-center py-8 relative overflow-hidden">
         
      <div className=''>
                      <h4 className='text-3xl font-semibold hover:text-[lavender] transition duration-200 mt-3 drop-shadow-lg shadow-black'>Social Links</h4>
                  </div>

                  <div className='flex justify-between space-x-2 pt-3 text-4xl '>
                    <a className=' dark:text-white hover:text-[dodgerblue] transition duration-200 ' href="https://www.facebook.com/imdarwingarcia"><FaFacebookSquare/></a>
                    <a className=' dark:text-white hover:text-[deepskyblue] transition duration-200 ' href="https://twitter.com/_DarwinGarcia_"><FaTwitter/></a>
                    <a className=' dark:text-white hover:text-[orangered] transition duration-200 ' href="https://www.instagram.com/itsdarwingarcia"><FaInstagram/></a>
                    <a className=' dark:text-white hover:text-[red] transition duration-200 ' href="https://www.youtube.com/channel/UCrdkb-dc4Szpz2s6W2OZx-Q"><FaYoutube/></a>
                    <a className=' dark:text-white hover:text-[indigo] transition duration-200 ' href="https://github.com/darwin-garcia"><FaGithub/></a>
                    <a className=' dark:text-white hover:text-[steelblue] transition duration-200 ' href="https://www.linkedin.com/in/darwingarc%C3%ADa/"><FaLinkedin/></a>
                </div>
    </section>
  );
}