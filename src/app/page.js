'use client'; // 👈 Directiva necesaria para usar hooks de React
import Head from 'next/head'; // 👈 PASO 1: Importa el componente Head
import { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simula un tiempo de carga de 2.5 segundos
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoaded={isLoaded}/>
      <main className="md:px-14 lg:px-25">
        <Hero />
      </main>
    </>    
  );
}
