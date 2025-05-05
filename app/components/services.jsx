import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20 font-Outfit'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo'>
                What I Offer
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                My Services
            </motion.h2 >

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I'm a full-stack developer with experience in building scalable web applications, backend APIs, and deploying end-to-end solutions.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
                {serviceData.map(({ icon, title, description, expandedDescription, link }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        className='border border-gray-400 rounded-lg px-8 py-12
      hover:shadow-lg hover:shadow-black cursor-pointer hover:bg-lightHover
      hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/30 dark:hover:shadow-white/40' >
                        <Image src={icon} alt={title} width={40} height={40} layout="intrinsic" />
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                            {expandedIndex === index
                                ? expandedDescription
                                : description}
                        </p>

                        <button
                            onClick={() => handleToggle(index)}
                            className='flex items-center gap-2 text-sm mt-5 text-gray-400 hover:text-gray-900'
                        >
                            {expandedIndex === index ? 'Show less' : 'Read more'}
                            <Image src={assets.right_arrow} alt='' className='w-4' />
                        </button>

                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services
