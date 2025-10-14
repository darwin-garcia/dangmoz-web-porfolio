'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Arreglo con las rutas de tus imágenes
const images = [
    '/images/bio/01.jpg',
    '/images/bio/02.jpg',
    '/images/bio/03.jpg',
    '/images/bio/04.jpg',
    '/images/bio/05.jpg',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función para ir a la siguiente imagen
    const nextImage = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    // Función para ir a la imagen anterior
    const prevImage = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

    // useEffect para el cambio automático de imágenes
    useEffect(() => {
        // Establece un intervalo que llama a nextImage cada 8 segundos
        const interval = setInterval(nextImage, 8000);
        // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
        return () => clearInterval(interval);
    }, []); // El array vacío asegura que el efecto solo se ejecute una vez (al montar el componente)

    return (
        // Contenedor principal del carrusel
        <div className="relative max-w-4xl mx-auto shadow-lg rounded-lg">
            
            {/* Contenedor que define el tamaño y la forma del carrusel */}
            <div className="w-full max-h-[600px] h-[60vh] overflow-hidden rounded-lg relative">
                
                {/* AQUÍ ESTÁ EL CAMBIO PRINCIPAL PARA LA TRANSICIÓN:
                  - Mapeamos el array de imágenes para renderizarlas todas.
                  - Se posicionan de forma absoluta para que estén una encima de otra.
                  - Usamos las clases de opacidad de Tailwind para mostrar solo la imagen actual.
                  - Agregamos clases de transición para que el cambio de opacidad sea suave.
                */}
                {images.map((src, index) => (
                    <Image
                        key={src} // Usamos la ruta como key, ya que es única
                        src={src}
                        alt={'Carousel image ${index + 1}'}
                        layout="fill"
                        quality={75}
                        // 👇 ¡AQUÍ ESTÁ LA MAGIA! 👇
                        className={`
                            absolute top-0 left-0 w-full h-full 
                            transition-opacity duration-1000 ease-in-out
                            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                            object-cover // Esta clase evita que la imagen se estire
                        `}
                    />
                ))}
            </div>

            {/* Contenedor para los botones de navegación */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-4">
                {/* Botón Anterior */}
                <button
                    onClick={prevImage}
                    className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-300 z-10"
                    aria-label="Previous image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                {/* Botón Siguiente */}
                <button
                    onClick={nextImage}
                    className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-300 z-10"
                    aria-label="Next image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;