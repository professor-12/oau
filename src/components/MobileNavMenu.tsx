"use client"
import React, { useEffect, useState } from 'react'
import Modal from './Modal/modal'
import { AnimatePresence, motion } from "framer-motion"
import Link from 'next/link'
import { navlinks } from '@/constants'
const MobileNavMenu = () => {
      const [active, setActive] = useState(!true)

      return (
            <div className='md:hidden'>
                  <svg onClick={_ => setActive(prev => !prev)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide cursor-pointer lucide-align-justify"><path d="M3 12h18" /><path d="M3 18h18" /><path d="M3 6h18" /></svg>
                  <AnimatePresence>
                        {
                              active && (
                                    <Modal type="sm" onPress={() => { setActive(false) }}>
                                          <MenuItems />
                                    </Modal>)
                        }
                  </AnimatePresence>
            </div>
      )
}

export default MobileNavMenu


const MenuItems = () => {
      return <motion.div transition={{ bounceStiffness: 0 }} animate={{ x: 0 }} initial={{ x: '-100%' }} exit={{ x: "-100%" }} className='h-screen overflow-y-auto pt-16  fixed top-0 bottom-0 left-0 w-[70%] bg-white'>
            <div className='w-full space-y-4 h-full p-6'>
                  {
                        navlinks.map(({ title, links }) => {
                              return (<ul key={title} className=''>
                                    <div className='font-medium'>
                                          <h1>{title}</h1>
                                    </div>
                                    <ul>
                                          {
                                                links.map(({ name, url }) => {
                                                      return (
                                                            <Link href={url}>
                                                                  <li className='text-sm hovrr:text-blue-600 p-2 text-slate-600'>{name}</li>
                                                            </Link>
                                                      )
                                                })
                                          }
                                    </ul>
                              </ul>)
                        })
                  }
            </div>
      </motion.div>
}