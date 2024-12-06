import { motion } from 'framer-motion';
import React from 'react';
import LinkIcon from '../assets/link-icon.png';
import { consultancyData } from '../utils//consultancyData';
import variants from '../utils/variants.js';

const Consultancy = () => {
    return (
        <section className="pt-24 pb-16 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Headline and Description */}
                <div
                    className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="md:w-1/2 mx-auto text-center">
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Consultancy Services</h2>
                        <p className='text-neutralGrey'>Drive success with our expert consultancy in business analysis, software quality assurance, security strategies, and IT planning, ensuring your systems are efficient, secure, and aligned with your business goals.</p>
                    </div>
                </div>


                {/* Services card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        consultancyData.map((service, index) => (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants('bottom', 0.2)}
                                key={index} className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191A23] cursor-pointer ${service.backgroundColor} ${service.textColor}`}>
                                <div className="md:w-1/2 flex flex-col h-full justify-between">
                                    <button className={`text-xl py-1.5 font-extrabold mb-2 rounded-lg sm:w-60 ${service.foregroundColor}`}>{service.title}</button>
                                    <p className="md:w-3/2">{service.description}</p>
                                    <a href="#" className={`flex items-center gap-4 py-2 rounded-md text-black hover:bg-opacity-80 hover:text-black/30`}>
                                        <img src={LinkIcon} alt="" className="size-6 rounded-full" />
                                        <span className="text-lg font-medium">Learn More</span>
                                    </a>
                                </div>
                                {/* Service Image */}
                                <div className="md:w-1/2 order-first md:order-last">
                                    <img src={service.image} alt="" className="w-full object-cover rounded-md mb-4" />
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
                {/* Brand Logos */}
                {/* <div className="mt-20 md:w-1/2 mx-auto text-center">
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Our Clients</h2>
                    <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>
                </div>
                <LogoCarousel /> */}
            </div>
        </section>
    )
}

export default Consultancy;