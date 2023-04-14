import axios from 'axios'
import React, { ReactEventHandler, useState } from 'react'
import { toast } from 'react-toastify'
import router from 'next/router';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useCookies } from 'react-cookie';
const Index = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [, setCookie] = useCookies(['token'])
  console.log('pass', password)
  console.log('mail', email)
  const toastify = toast.success('login success')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post('https://lapakumkm.mindd.site/auth/login', {
        email: email,
        password: password
      })
      const { data } = res.data
      console.log('data', data)
      if (res.data)
        setCookie('token', res.data.token, { path: '/' })
      toastify
      router.push('/')
    } catch (error) {
    }
  }

  return (
    <>
      <Layout>
        <Navbar />
        <motion.div
          className='relative flex flex-col justify-center min-h-screen overflow-hidden '>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='lg:my-16 2xl:my-8 p-4 md:p-6 lg:p-5 2xl:p-10 m-auto bg-white rounded-md shadow-xl ring-2 ring-accent w-9/12 md:w-5/12 lg:w-3/12 2xl:max-w-xl mx-auto'>
            <motion.div className="flex justify-center w-full">
              <motion.h1 className='bg-red font-bold text-3xl mb-20'> LOGIN FORM</motion.h1>
            </motion.div>
            <form action="" onSubmit={handleLogin}>
              <motion.div className='flex flex-col gap-5 w-full'>
                <label htmlFor="">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='input border input-accent' type="text" name="" id="" />
                <label htmlFor="">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='input border input-accent' type="password" name="" id="" />
              </motion.div>
              <button className='flex mx-auto mt-10 btn btn-wide bg-lime-500 border-none hover:bg-lime-500 hover:scale-110 text-lg font-bold text-black'>
                Login
              </button>
            </form>
          </motion.div>
        </motion.div>
      </Layout>
    </>
  )
}

export default Index