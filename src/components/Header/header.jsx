import React, { useEffect, useRef } from 'react';
import './header-style.css';
import {initializeHeader} from './header-nav.js'

export default function Header() {
    const canvasRef = useRef(null);

    useEffect(() => {
        // const font = new FontFace('Orbitron', 'url(https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap');
        initializeHeader();
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor(effect, x, y, color) {
                this.effect = effect;
                this.x = Math.random() * this.effect.canvasWidth;
                this.y = Math.random() * this.effect.canvasHeight;
                this.color = color;
                this.originX = x;
                this.originY = y;
                this.size = this.effect.gap;
                this.vx = 0;
                this.vy = 0;
                this.friction = 0.8;
                this.ease = 0.1;
            }

            draw() {
                this.effect.context.fillStyle = this.color;
                this.effect.context.fillRect(this.x, this.y, this.size, this.size);
            }

            update() {
                let dx = this.effect.mouse.x - this.x;
                let dy = this.effect.mouse.y - this.y;
                let distance = dx * dx + dy * dy;
                let force = -this.effect.mouse.radius / distance;

                if (distance < this.effect.mouse.radius) {
                    let angle = Math.atan2(dy, dx);
                    this.vx += force * Math.cos(angle);
                    this.vy += force * Math.sin(angle);
                }

                this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
                this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
            }
        }

        class Effect {
            constructor(context, canvasWidth, canvasHeight) {
                this.context = context;
                this.canvasWidth = canvasWidth;
                this.canvasHeight = canvasHeight;
                this.fontSize = 190;  // Increase the font size
                this.textInput1 = 'DEVELOPER';  
                this.textInput2 = 'IMPACT';  

                this.particles = [];
                this.gap = 2;
                this.mouse = { x: undefined, y: undefined, radius: 10000 };
                this.handleMouseMove = this.handleMouseMove.bind(this);
                window.addEventListener('mousemove', this.handleMouseMove);
                this.createText();
            }
        
            handleMouseMove(event) {
                let rect = canvas.getBoundingClientRect();
                this.mouse.x = event.clientX - rect.left;
                this.mouse.y = event.clientY - rect.top;
            }
        
            createText() {
                this.context.fillStyle = 'black';
                this.context.textAlign = 'center';
                this.context.font = `900 ${this.fontSize}px Orbitron, sans-serif`;
        
                // Adjusting X and Y positions for center alignment
                let textX = this.canvasWidth / 2;
                let textY1 = this.canvasHeight / 1.8 - this.fontSize / 2;  // First line Y-position
                let textY2 = this.canvasHeight / 1.7 + this.fontSize / 2;  // Second line Y-position
        
                // Draw the two lines of text
                this.context.fillText(this.textInput1, textX, textY1);
                this.context.fillText(this.textInput2, textX, textY2);

                let imageData = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight);
                this.extractParticles(imageData);
            }
        
            extractParticles(imageData) {
                this.particles = [];
                for (let y = 0; y < imageData.height; y += this.gap) {
                    for (let x = 0; x < imageData.width; x += this.gap) {
                        let index = (y * imageData.width + x) * 4;
                        let alpha = imageData.data[index + 3];
                        if (alpha > 128) {
                            let color = `rgb(${imageData.data[index]}, ${imageData.data[index + 1]}, ${imageData.data[index + 2]})`;
                            this.particles.push(new Particle(this, x, y, color));
                        }
                    }
                }
            }
        
            animate() {
                this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                this.particles.forEach((particle) => {
                    particle.update();
                    particle.draw();
                });
                requestAnimationFrame(() => this.animate());
            }
        
            destroy() {
                window.removeEventListener('mousemove', this.handleMouseMove);
            }
        }
        

        const effect = new Effect(ctx, canvas.width, canvas.height);
        effect.animate();

        return () => {
            effect.destroy();
        };
    }, []);

    return (
        <header id='intro' className="intro flex">
            <button className="mobile-nav-toggle" aria-controls="main-nav" aria-expanded="false"><span className="sr-only">Menu</span></button>

            <nav>
                <div className="logo"><a href='#intro'>MRontija.</a></div>

                <ul id="main-nav" className="main-nav flex" data-visible="false">
                    <li className="main-items"><a className="nav-link active" href="#intro">Intro</a></li>  
                    <li className="main-items"><a className="nav-link" href="#about">About</a></li>
                    <li className="main-items"><a className="nav-link" href="#work">Work</a></li>
                    <li className="main-items"><a className="nav-link" href="#collab">Collab</a></li>
                </ul>

                <div className="contact-nav contact-nav-toggle" aria-controls="main-nav" aria-expanded="false">
                    <a className="nav-link" href='#intro'>Contact</a>
                </div>
            </nav>

            <div className="contact-model" data-visible="false">
                <div className="contact-model-content">
                    <h1>Contact</h1>
                    <p>i.rantijamanoj@gmail.com</p>
                    <div className="social">
                        <div className="social-title">Socially akward</div>
                        <ul className="flex">
                            <li>Github</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div className="close"></div>
                </div>
            </div>

            <div className="masterhead">
                <div className="masterhead_content">
                    <div className="landing_quote">
                        <canvas ref={canvasRef} id="canvas1" />
                    </div>
                </div>
            </div>

            <svg className="svg">
                <defs>
                    <filter id="fancy-goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="name" />
                        <feColorMatrix in="name" mode="matrix" values="1 0 0 0 0
                                    0 1 0 0 0
                                    0 0 1 0 0
                                    0 0 0 80 -10" result="aab" />
                        <feBlend in="SurceGraphic" in2="aab" />
                    </filter>
                </defs>
            </svg>
        </header>
    );
}