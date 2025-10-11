'use client';

import { useState, useEffect, useRef } from 'react';
import DOTS from 'vanta/dist/vanta.dots.min.js';
// MANTENEMOS ESTA LÍNEA para la animación de color.
import * as THREE from 'three';

const colorPalette = [
  0x5542ff, // Morado
  0xff427b, // Rosa
  0x42ff9e, // Verde menta
  0xffd700, // Dorado
  0x4299ff  // Azul claro
];

// ... (El resto del código de la parte superior no cambia)
let glowColorHex = '#5542ff';

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [colorIndex, setColorIndex] = useState(0);
  const animationFrameId = useRef();

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = DOTS({
        el: vantaRef.current,
        // ✨ **SOLUCIÓN: ELIMINAR ESTA LÍNEA** ✨
        // THREE: THREE, // <--- Esta línea causa el error en el efecto DOTS.
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: colorPalette[0],
        color2: 0x222222,
        backgroundColor: 0x0,
        size: 3.50,
        spacing: 35.00
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [vantaEffect]);

  // El resto del código para la animación de color y glow
  // no necesita ningún cambio y seguirá funcionando perfectamente.
  // ... (pegar el resto del componente sin cambios)
  
  // --- NINGÚN CAMBIO NECESARIO AQUÍ ---
  useEffect(() => {
    if (vantaEffect) {
      const transitionDuration = 5000;
      let startTime = null;
      const startColor = new THREE.Color(colorPalette[colorIndex]);
      const endColor = new THREE.Color(colorPalette[(colorIndex + 1) % colorPalette.length]);
      const animateColor = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        let progress = Math.min(elapsedTime / transitionDuration, 1);
        const currentColor = new THREE.Color().copy(startColor).lerp(endColor, progress);
        vantaEffect.setOptions({ color: currentColor.getHex() });
        glowColorHex = currentColor.getStyle();
        if (vantaRef.current) {
            vantaRef.current.style.filter = `drop-shadow(0 0 3px ${glowColorHex})`;
        }
        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(animateColor);
        } else {
          startTime = null;
          setColorIndex((prevIndex) => (prevIndex + 1) % colorPalette.length);
        }
      };
      animationFrameId.current = requestAnimationFrame(animateColor);
      return () => {
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      };
    }
  }, [vantaEffect, colorIndex]);

  return (
    <div 
        ref={vantaRef} 
        className="fixed top-0 left-0 w-full h-full -z-10 transition-all duration-500"
    >
      {children}
    </div>
  );

};

export default VantaBackground;