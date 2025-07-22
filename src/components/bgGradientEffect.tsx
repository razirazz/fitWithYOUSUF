'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine, Container } from 'tsparticles'

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    /* ready to go */
  }, []);

  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{ filter: 'blur(100px)' }}
        options={{
            fullScreen: { enable: true, zIndex: 0 },
            fpsLimit: 60,
            particles: {
                number: { value: 6, density: { enable: false, area: 800 } },
                color: { value: ["#4A8CFF", "#FF4DF3", "#8957FF", "#FAEB96", "#63D0FF"] },
                shape: { type: "triangle" },
                opacity: { value: {min: 0, max: 0.5} },
                size: { value: { min: 100, max: 150 } },
                links: {
                    enable: false,
                    distance: 150,
                    color: { value: "#4A8CFF" },
                    opacity: { value: {min: 0.25, max: 0.9} },
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: "inside",
                    outModes: "bounce",
                    straight: true,
                    // spin: { value: {min: 0, max: 10} },
                    // trail: 5,            
                },
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "push" },
                },
                modes: {
                    repulse: { distance: 200 },
                    push: { quantity: 4 },
                    bubble: { distance: 100, size: 40}
                },
            },
            detectRetina: true,
        }}
        />
    );
}
