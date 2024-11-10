"use client"
import Login from '@/components/Login'
import React from 'react'
import { Type } from '../types/enum'
import CustomInput from '@/components/CustomInput'
import { motion } from "framer-motion"
import Link from 'next/link'

const HealthCenter = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
      const params = searchParams.type ?? ""
      return (
            <div className='mx-auto overflow-hidden  w-[78%] lg:w-[42%] '>
                  {
                        params == "staff" ? <FirstLogin /> : <SecondLogin />
                  }
            </div>
      )
}

export default HealthCenter




const FirstLogin = () => {
      return (
            <motion.div initial={{ x: 700 }} animate={{ x: 0 }}>
                  <form action="https://eportal.oauife.edu.ng/hrss_index.php" method='post' className='p-3 space-y-4'>
                        <h1 className='text-3xl'>Staff's Login</h1>
                        <CustomInput name='username' label='Username' />
                        <CustomInput name='pswd' label='Password' type='password' />
                        <button className={'bg-blue-400 disabled:bg-opacity-65  disabled:cursor-not-allowed p-3 w-full text-center rounded-md text-white text-lg'}>Login</button>
                        <Link href={"/health-center"} className='block  hover:text-blue-700 my-2 text-sm'>Click here for Health Center Registration</Link>
                  </form>
            </motion.div>
      )
}


const SecondLogin = () => {
      return (
            <motion.div initial={{ x: 700 }} animate={{ x: 0 }}>
                  <form method='post' action="https://eportal.oauife.edu.ng/hrss_staff_entry.php" className='p-3 space-y-4'>
                        <h1 className='text-3xl'>Staff Health Center Registration</h1>
                        <div className='space-y-2 flex-1'>
                              <label htmlFor="category">Patient Category</label>
                              <select className='w-full p-2 text-sm border border-slate-400/60 rounded-md outline-none' name="SemesterF" id="SemesterF">
                                    <option selected value="1">Principal Staff</option>
                              </select>
                        </div>
                        <CustomInput placeholder="E.g. AT/0000, AC/0000, JS/0000 " name='' label='Id Card Number' type='password' />
                        <button className={'bg-blue-400 disabled:bg-opacity-65 disabled:cursor-not-allowed p-3 w-full text-center rounded-md text-white text-lg'}>Login</button>
                        <Link href={"/health-center?type=staff"} className='block text-center hover:text-blue-700 my-2 text-sm'>Sign Out</Link>
                  </form >
            </motion.div>
      )
}