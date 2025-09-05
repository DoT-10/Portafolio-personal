"use client"

import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const CoverParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        init &&
        <div className="absolute inset-0 w-full h-full -z-100">
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "trail",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 3,
                            },
                            trail: {
                                delay: 0.1,
                                quantity: 3,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            enable: false, // Desactivamos los enlaces para el efecto de estrellas
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "bottom", // Dirección de caída de las estrellas
                            outModes: {
                                default: "out", // Las partículas salen de la pantalla
                            },
                            straight: true, // Movimiento en línea recta
                        },
                        number: {
                            density: {
                                enable: true,
                                width: 800,
                            },
                            value: 100, // Más partículas para un efecto más denso
                        },
                        opacity: {
                            value: { min: 0.1, max: 0.7 }, // Variación en la opacidad
                        },
                        shape: {
                            type: "circle", // Mantenemos círculos para simular estrellas
                        },
                        size: {
                            value: { min: 1, max: 3 }, // Tamaño ligeramente menor
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    )
};