"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Ícono de sobre
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Íconos de marcas
import Typewriter from "typewriter-effect";

// Lista de países para el menú desplegable
const countries = [
  "Alemania", "Argentina", "Australia", "Austria", "Bélgica", "Belice", "Bolivia", "Brasil", "Canadá", "Chile", "Colombia", "Costa Rica", "Cuba", "Dinamarca", "Ecuador", "El Salvador", "España", "Estados Unidos", "Francia", 
  "Guatemala", "Honduras", "Italia", "Japón", "México", "Nicaragua", "Noruega", "Nueva Zelanda", "Países Bajos", "Panamá", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Dominicana", "Suecia", "Suiza", "Trinidad y Tobago", "Uruguay", "Venezuela",
];

const ContactForm = () => {
  // Estado para manejar la opción de contacto seleccionada
  const [contactMethod, setContactMethod] = useState('');

  const handleContactChange = (event) => {
    setContactMethod(event.target.value);
  };

  return (
    <article className="register flex flex-col min-h-screen rounded-lg md:p-8">
        <div className="p-8 mb-14">
                        
        </div>
        <div className="p-8">
                        
            <h1 className="text-6xl text-white font-medium mb-2">
                Contact Me.<span className="text-blue-300">.</span>
            </h1>
                        
            <div className="text-gray-500 font-medium">
                <Typewriter options={{
                    strings:["Do you have an idea in mind?","If you need a data solution, I can help you.","Leave me your details by filling out the form below."," I will respond as soon as possible.", "I'm always open to a conversation."], changeDelay:5, changeDeleteSpeed:2, autoStart: true, loop:true
                }} />
            </div>

            <div className='mb-4'></div>

            <form className="mt-8" action='/'>
                            
                <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <input type="text" autoComplete="off"
                     className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group" placeholder="First Name" />

                    <input type="text" autoComplete="off"
                     className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group" placeholder="Surname" />
                </div>

                {/* --- MENÚ DESPLEGABLE DE PAÍSES --- */}
                <div className="max-w-lg mb-4">
                    <select 
                     className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                     defaultValue="">
                        <option value="" disabled>Select your country.</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>
                </div>

                <div className="max-w-lg mb-4">
                    <input type="email" autoComplete="off"
                     className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group" placeholder="e-mail"/>
                </div>

                <div className="max-w-lg mb-4">
                    <textarea type="text" autoComplete="off"
                     className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group resize-none h-48" placeholder="Subject."/>
                </div>

                <div className="max-w-lg flex justify-center md:justify-center mb-6">
                    <p className="text-gray-500 font-medium">
                      How would you like to be contacted?
                    </p>                                
                </div>
                
                {/* --- RADIO BUTTONS PARA MÉTODO DE CONTACTO --- */}
                <div className="max-w-lg mb-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" 
                            name="contactOption" 
                            value="whatsapp" 
                            className="form-radio h-4 w-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500"
                            checked={contactMethod === 'whatsapp'}
                            onChange={handleContactChange}
                        />
                        Whatsapp
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" 
                            name="contactOption" 
                            value="telegram" 
                            className="form-radio h-4 w-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500"
                            checked={contactMethod === 'telegram'}
                            onChange={handleContactChange}
                        />
                        Telegram
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" 
                            name="contactOption" 
                            value="email" 
                            className="form-radio h-4 w-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500"
                            checked={contactMethod === 'email'}
                            onChange={handleContactChange}
                        />
                        e-mail
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" 
                            name="contactOption" 
                            value="llamada" 
                            className="form-radio h-4 w-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500"
                            checked={contactMethod === 'llamada'}
                            onChange={handleContactChange}
                        />
                        Llamada
                    </label>
                </div>

                <div className="max-w-lg mt-8">
                    <button className="bg-blue-500/50 shadow-lg shadow-blue-500/50 text-white w-full py-3 px-4 rounded-full border border-blue-300 hover:bg-blue-400 transition-colors">
                        <FontAwesomeIcon icon={faPaperPlane} className="h-6 w-6" /> Send
                    </button>
                </div>
            </form>
        </div>
    </article>
  )
}

export default ContactForm;