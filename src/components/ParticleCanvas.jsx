'use client'; // Directiva para indicar que es un componente de cliente en Next.js

import React, { useRef, useEffect } from 'react';

const ParticleCanvas = () => {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray = [];
        let numberOfParticles;
        const maxDistance = 180;

        // MODIFICACIÓN 1: Añadimos una variable para el radio de influencia del mouse
        const mouseRadius = 240; // Puedes ajustar este valor para tener más o menos líneas

        // Variable para controlar el matiz del color
        let hue = 0;

        // --- Clase para crear cada partícula ---
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5;
                this.baseSize = this.size; 
                this.speedX = Math.random() * 2 - 0.8;
                this.speedY = Math.random() * 2 - 0.8;
                this.density = (Math.random() * 30) + 1; 
            }
            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.speedX = -this.speedX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.speedY = -this.speedY;
                }
                this.x += this.speedX;
                this.y += this.speedY;
            }
            draw() {
                ctx.fillStyle = `hsla(${hue}, 100%, 70%, 0.8)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        // --- Funciones principales de la animación ---

        const init = () => {
            // Lógica para definir la cantidad de partículas según el tamaño de la pantalla
            if (window.innerWidth < 768) {
                numberOfParticles = 100; // Menos puntos para móviles
            } else {
                numberOfParticles = 360; // Cantidad normal para escritorio
            }

            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        };

        const connect = () => {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = Math.sqrt(
                        (particlesArray[a].x - particlesArray[b].x) ** 2 +
                        (particlesArray[a].y - particlesArray[b].y) ** 2
                    );

                    if (distance < maxDistance) {
                        ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${1 - distance / maxDistance})`;
                        ctx.lineWidth = 0.2;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
                if (mouse.current.x && mouse.current.y) {
                    let distanceToMouse = Math.sqrt(
                        (particlesArray[a].x - mouse.current.x) ** 2 +
                        (particlesArray[a].y - mouse.current.y) ** 2
                    );

                    // MODIFICACIÓN 2: Usamos la nueva variable 'mouseRadius' para el área de efecto y la opacidad
                    if (distanceToMouse < mouseRadius) {
                        ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${1 - distanceToMouse / mouseRadius})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(mouse.current.x, mouse.current.y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            connect();
            hue++;
            animationFrameId = requestAnimationFrame(animate);
        };

        // --- Manejadores de eventos ---
        const handleMouseMove = (event) => {
            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;
        };
        const handleMouseOut = () => {
            mouse.current.x = null;
            mouse.current.y = null;
        };
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('resize', handleResize);

        init();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 bg-black" />;
};

export default ParticleCanvas;