'use client';

import { useState, useEffect } from 'react';

const LoadingScreen = ({ isLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // El cálculo del color sigue siendo el mismo
  const hue = progress * 2.4; // 0 a 240 (rojo a azul)
  const dynamicColor = `hsl(${hue}, 90%, 65%)`;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center bg-black
        transition-opacity duration-500 ease-out
        ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <div className="flex w-full max-w-xs flex-col items-center">
        {/* La estructura del contenedor de la barra se simplifica */}
        <div className="h-1.5 w-full rounded-full bg-neutral-800">
          {/* 👇 TODO EL CAMBIO ESTÁ AQUÍ, EN EL DIV DE RELLENO */}
          <div
            className="h-1.5 rounded-full transition-all duration-150 ease-linear"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, hsla(180, 90%, 65%, 1.00), ${dynamicColor})`,
              boxShadow: `0 0 10px 1px ${dynamicColor}`,
            }}
          ></div>
        </div>

        <span className="mt-4 text-sm font-medium text-neutral-400">
          Loading... {progress}%
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;