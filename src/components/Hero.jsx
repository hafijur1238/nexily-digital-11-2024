import { motion } from 'framer-motion';
import React from 'react';
import bannerImg from "../assets/banner.png";
import variants from '../utils/variants.js';
import LogoCarousel from './LogoCarousel';

const Hero = () => {
    return (
        <section className="bg-white pt-12" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Left Side */}
                    <div className="md:w-1/2">
                        <div className="md:w-2/3">
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants('bottom', 0.2)}
                                className="text-4xl font-bold text-secondary mb-4">Navigating the digital landscape for success</motion.h1>
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants('bottom', 0.5)}
                                className="text-gray-600 mb-6">NEXILY is a trusted IT service provider offering tailored solutions in software development, IT consulting, and digital transformation. We combine expertise with a client-focused approach to help businesses innovate, grow, and succeed in the digital age.</motion.p>
                            <motion.button
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants('bottom', 0.7)}
                                className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300">Book a Consultation</motion.button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="md:w-1/2 order-first md:order-last">
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={variants('bottom', 0.5)}
                            src={bannerImg} alt="" className="w-full h-auto rounded-md" />
                    </div>
                </div>
                {/* Brand Logos */}
                <LogoCarousel />
            </div>
        </section>
    )
}

export default Hero;