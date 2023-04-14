import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
const Navbar = () => {
    return (
        <motion.div
            initial={{ y: -100 }}  
            animate={{ y: 0 }}     
            transition={{duration: 0.5, ease: 'easeInOut' }}
            className='flex justify-center bg-white h-20 items-center'>
            <motion.ul className='flex gap-5 '>
                <motion.li >
                    <Link href='/dashboard' className='text-2xl font-semibold'>Home</Link>
                </motion.li>
                <motion.li>
                    <Link href='/login' className='text-2xl font-semibold'>About me</Link>
                </motion.li>
            </motion.ul>
        </motion.div>
    )
}

export default Navbar