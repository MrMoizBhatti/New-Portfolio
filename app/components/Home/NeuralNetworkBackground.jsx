"use client";
import React, { useEffect, useRef } from 'react';

const NeuralNetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Variable to track animation frame for cleanup
        let animationFrameId;
        
        // Handle device pixel ratio for crisp rendering on high-DPI screens
        const dpr = window.devicePixelRatio || 1;
        
        const resizeCanvas = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            // Set display size (css pixels)
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            
            // Set actual size in memory (scaled for device pixel ratio)
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            
            // Scale context to match device pixel ratio
            ctx.scale(dpr, dpr);
            
            // Reinitialize nodes when resizing
            initializeNodes();
        };

        class Node {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                
                // Adjust velocity based on screen size
                const velocityFactor = Math.min(1, Math.max(0.2, window.innerWidth / 1920));
                this.vx = (Math.random() - 0.5) * 0.5 * velocityFactor;
                this.vy = (Math.random() - 0.5) * 0.5 * velocityFactor;
                
                // Smaller radius on mobile
                const radiusFactor = window.innerWidth < 768 ? 0.7 : 1;
                this.radius = (Math.random() * 2 + 1) * radiusFactor;
                this.color = 'rgba(37, 99, 235, 0.5)';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off the edges
                if (this.x < 0 || this.x > window.innerWidth) this.vx = -this.vx;
                if (this.y < 0 || this.y > window.innerHeight) this.vy = -this.vy;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const nodes = [];
        
        // Dynamically adjust node count based on device performance and screen size
        const initializeNodes = () => {
            nodes.length = 0; // Clear existing nodes
            
            // Fewer nodes for mobile devices
            const isMobile = window.innerWidth < 768;
            const baseNodeCount = isMobile ? 30 : 100;
            
            // Scale node count with screen size, but cap it
            const nodeCount = Math.min(
                baseNodeCount,
                Math.floor(window.innerWidth * window.innerHeight / (isMobile ? 20000 : 10000))
            );
            
            for (let i = 0; i < nodeCount; i++) {
                nodes.push(new Node(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight
                ));
            }
        };

        // Connection distance scaled by screen size
        const getMaxDistance = () => {
            return Math.min(150, window.innerWidth * 0.15);
        };

        const animate = () => {
            if (!ctx) return;
            
            // Clear with device width/height (not canvas dimensions which are scaled)
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            // Create a semi-transparent gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(240, 249, 255, 0.8)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

            // Update and draw nodes
            nodes.forEach(node => {
                node.update();
                node.draw();
            });

            // Draw connections with performance optimization
            ctx.strokeStyle = 'rgba(37, 99, 235, 0.2)';
            ctx.lineWidth = 0.5;
            
            const maxDistance = getMaxDistance();
            const maxDistanceSquared = maxDistance * maxDistance;

            // Skip connection rendering on low-end devices if too many nodes
            const shouldRenderConnections = nodes.length < 50 || window.innerWidth >= 768;
            
            if (shouldRenderConnections) {
                for (let i = 0; i < nodes.length; i++) {
                    for (let j = i + 1; j < nodes.length; j++) {
                        const dx = nodes[i].x - nodes[j].x;
                        const dy = nodes[i].y - nodes[j].y;
                        
                        // Faster distance calculation (avoid sqrt when possible)
                        const distanceSquared = dx * dx + dy * dy;

                        if (distanceSquared < maxDistanceSquared) {
                            const distance = Math.sqrt(distanceSquared);
                            ctx.globalAlpha = 1 - (distance / maxDistance);
                            ctx.beginPath();
                            ctx.moveTo(nodes[i].x, nodes[i].y);
                            ctx.lineTo(nodes[j].x, nodes[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
            ctx.globalAlpha = 1;

            // Request next frame and store ID for cleanup
            animationFrameId = requestAnimationFrame(animate);
        };

        // Initialize and start the animation
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        animate();

        // Performance optimization: reduce animation framerate when tab is not visible
        const handleVisibilityChange = () => {
            if (document.hidden) {
                cancelAnimationFrame(animationFrameId);
            } else {
                animate();
            }
        };
        
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ 
                pointerEvents: 'none',
                zIndex: 0 
            }}
            aria-hidden="true"
        />
    );
};

export default NeuralNetworkBackground;