'use client'; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    '/images/bio/1.jpg',
    '/images/bio/2.jpg',
    '/images/bio/3.jpg',
    '/images/bio/2.jpg',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative max-w-4xl mx-auto shadow-lg rounded-lg">
            <div className="w-full max-h-[600px] h-[60vh] overflow-hidden rounded-lg">
                <Image
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Carousel image ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                    // 👇 ¡AQUÍ ESTÁ EL CAMBIO! 👇
                    className="animate-fadeIn"
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-4">
                <button
                    onClick={prevImage}
                    className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-300"
                    aria-label="Previous image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextImage}
                    className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-300"
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