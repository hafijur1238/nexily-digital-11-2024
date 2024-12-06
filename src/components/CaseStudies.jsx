import { motion } from 'framer-motion';
import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import caseStudies from '../utils/caseStudies';
import variants from '../utils/variants.js';


function CaseStudies() {
    return (
        <section className="pt-24 pb-16 bg-white mt-10" id="use-cases">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Headline and Description */}
                <div className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="md:w-1/2 mx-auto text-center">
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Case Studies</h2>
                        <p className='text-neutralGrey'>Optimize your business with custom ERP systems, smart automation, reliable software support, expert advice, and data insights to improve efficiency, boost productivity, and enhance decision-making.</p>
                    </div>
                </div>
                {/* CaseStudy Card */}
                <div className="bg-black text-white p-8 rounded-md">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        variants={variants('left', 0.2)}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {
                            caseStudies.map((study, index) => (
                                <div key={index} className="p-4 border border-gray-700 rounded-md">
                                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                                    <p className="mb-4">{study.description}</p>
                                    <a href="#" className="text-primary flex items-center hover:underline">
                                        Learn More <MdOutlineArrowOutward className="ml-2" />
                                    </a>
                                </div>
                            ))
                        }
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudies;