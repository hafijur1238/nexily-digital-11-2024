import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import processSteps from '../utils/processSteps';

const WorkingProcess = () => {

    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <section className="pt-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="md:w-1/2 mx-auto text-center">
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Our Working Process</h2>
                        <p className='text-neutralGrey'>At Nexily, we provide expert IT services including software development, consulting, cloud solutions, and cybersecurity. We begin by understanding your business needs, followed by designing tailored solutions. Our team ensures seamless execution, offering ongoing support to deliver innovative, secure, and scalable technology solutions for your business.</p>
                    </div>
                </div>
                {/* accordian Part */}
                <div>
                    {
                        processSteps.map((step, i) => (
                            <div key={i} className={`border rounded-md mb-4 overflow-hidden ${openIndex === i ? "border-primary" : "border-gray-300"}`}>
                                <button
                                    onClick={() => handleToggle(i)}
                                    className={`w-full text-left p-4 flex justify-between items-center ${openIndex === i ? 'bg-primary' : 'bg-tartiary'}`}>
                                    <div className="flex items-center">
                                        <span className="text-secondary font-extrabold text-2xl mr-4">{step.number}</span>
                                        <h3 className="text-lg font-semibold">{step.question}</h3>
                                    </div>
                                    <div className="bg-white text-black border p-1.5 rounded-full">
                                        {
                                            openIndex === i ? (<FaMinus />) : (<FaPlus />)
                                        }
                                    </div>
                                </button>
                                {
                                    openIndex === i && (
                                        <div className="p-4 bg-primary text-secondary">
                                            <hr className="mt-0 mb-5 border-black" />
                                            <p>{step.answer}</p>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkingProcess;