import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '../../ui/Button';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-20 md:pt-0"
        >
            <NeuralNetworkBackground />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1 mt-10 md:mt-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            <span className="block">Dr. Alex Johnson</span>
                            <span className="block text-blue-600 mt-1 md:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                                AI Researcher & Scientist
                            </span>
                        </h1>

                        <p className="mt-4 md:mt-6 text-lg sm:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                            Exploring the frontiers of machine learning, computer vision, and natural language processing.
                        </p>

                        <div className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                            {/* Link to Research Section */}
                            <Link href="/research">
                                <Button
                                    variant="primary"
                                    size="md"
                                    className="text-sm sm:text-base"
                                    icon={<ArrowRight size={18} />}
                                    iconPosition="right"
                                >
                                    View My Research
                                </Button>
                            </Link>

                            {/* Link to Contact Section */}
                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    size="md"
                                    className="text-sm sm:text-base"
                                >
                                    Contact Me
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            <img
                                src="https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Dr. Alex Johnson"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <a
                        href="#about"
                        className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors"
                    >
                        <span className="text-xs sm:text-sm mb-1">Scroll Down</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-chevron-down"
                        >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
