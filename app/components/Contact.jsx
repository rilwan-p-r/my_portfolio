import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { toast } from 'react-toastify'
import { motion } from "motion/react"

const Contact = ({ isDarkMode }) => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const toastId = toast.loading("Submitting...");

        const formData = new FormData(event.target);
        formData.append("access_key", process.env.NEXT_PUBLIC_AccessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.update(toastId, {
                    render: "Form Submitted Successfully",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                    closeOnClick: true,
                });
                event.target.reset();
            } else {
                toast.update(toastId, {
                    render: data.message || "Something went wrong",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                    closeOnClick: true,
                });
            }
        } catch (error) {
            toast.update(toastId, {
                render: "Submission failed. Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact' className='w-full px-[12%] py-10 scroll-mt-20 font-Outfit bg-[url("/footer-bg-color.png")]
     bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo'>
                Connect with me
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                Get in touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I'd love to hear from you! If you have any quastions, commens, or feedback,
                please use the form below.
            </motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        className='w-full p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/10 dark:border-white/90'
                        type='text'
                        placeholder='Enter your name'
                        name='name'
                        required
                    />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className='w-full p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/10 dark:border-white/90'
                        type='email'
                        placeholder='Enter your email'
                        name='email'
                        required
                    />
                </div>

                <motion.textarea
                initial={{y:100, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{delay: 1.3, duration: 0.6}}
                    rows='6'
                    placeholder='Enter your message'
                    name='message'
                    required
                    className='w-full p-3 outline-none border border-gray-400 rounded-md bg-white mb-6 resize-none dark:bg-darkHover/10 dark:border-white/90'
                ></motion.textarea>

                <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                    type='submit'
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
                    text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
                >
                    Submit now <Image src={assets.right_arrow_white} alt='right_arrow_white' className='w-4' />
                </motion.button>
            </motion.form>

        </motion.div>
    )
}

export default Contact
