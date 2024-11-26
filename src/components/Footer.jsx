import React from 'react';
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterLogo from '../assets/nexily-logo.png';
import FooterContact from './FooterContact';



const Footer = () => {
    return (
        <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-secondary rounded-t-2xl">
                {/* part one */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12">
                    <div>
                        <img src={FooterLogo} alt="" className="h-8" />
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
                        <a href="#about" className="text-white hover:text-gray-400">About</a>
                        <a href="#services" className="text-white hover:text-gray-400">Services</a>
                        <a href="#use-cases" className="text-white hover:text-gray-400">Contact</a>
                        <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
                    </div>

                    <div className="flex md:justify-end space-x-4">
                        <a href="#" className="p-1.5 text-black rounded-full bg-white">
                            <FaFacebookF className="hover:text-gray-400" />
                        </a>
                        <a href="#" className="p-1.5 text-black rounded-full bg-white">
                            <FaTwitter className=" hover:text-gray-400" />
                        </a>
                        <a href="#" className="p-1.5 text-black rounded-full bg-white">
                            <FaLinkedin className=" hover:text-gray-400" />
                        </a>
                    </div>
                </div>

                {/* part two */}
                <FooterContact />

                <hr className="my-4 border-white mx-4 sm:px-6 lg:px-8" />
                <div className="flex flex-wrap md:gap-8 text-white px-4 sm:px-6 lg:px-8 py-5">
                    <p>@ 2024 NEXILY. All Rights Reserved.</p>
                    <p className="underline underline-offset-4">Privacy Policy</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;