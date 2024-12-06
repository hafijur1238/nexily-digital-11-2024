import React from 'react';
import CtaImg from '../assets/think-img.png';

const Cta = () => {
    return (
        <section className="relative py-12">
            <div className="max-w-7xl mx-auto bg-[#F3F3F3] rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-3xl font-bold text-secondary mb-4">
                        Let's Make Things Happen
                    </h1>
                    <p className="text-gray-600 mb-6 md:w-2/3">
                        At NEXILY, we empower businesses with customized digital solutions. From
                        ERP systems and software development to IT consulting and digital
                        transformation, we help streamline operations and drive growth. While
                        new, our success in e-commerce projects proves we deliver on time. Let’s
                        transform your business for the digital age.
                    </p>
                    <button className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300">
                        Get Your Free Proposal
                    </button>
                </div>

                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center items-center relative">
                    <img
                        src={CtaImg}
                        alt="Cta Image"
                        className="md:absolute md:-top-72 md:bottom-0"
                        style={{ transform: "scale(1.05)" }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Cta;