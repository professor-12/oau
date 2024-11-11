"use client"
import { motion } from "framer-motion"
import React, { PropsWithChildren, useContext, useEffect, useState } from 'react'
import { createContext } from "react"


interface FAQ { question: string, answer: string }

interface IDropDow extends FAQ {
      index: number
}

const DropDown: React.FC<IDropDow> = ({ index, ...props }) => {

      return (
            <DropDownTrigger {...props} index={index} />

      )
}

export default DropDown


const DropDownContext = createContext<{ active: null | number, setActive: React.Dispatch<React.SetStateAction<null | number>> }>({ active: null, setActive: () => { } })
export const useDropDownContext = () => {
      const context = useContext(DropDownContext)
      if (!context) throw new Error("You need to use this within the DropDownContext Provider!")
      return context
}

export const DropDownProvider: React.FC<PropsWithChildren> = ({ children }) => {
      const [active, setActive] = useState<null | number>(null)
      return <DropDownContext.Provider value={{ active, setActive }}>{children}</DropDownContext.Provider>
}

const DropDownTrigger = ({ index, question, answer }: { index: number, question: string, answer: string }) => {
      const { active, setActive } = useDropDownContext()


      return <motion.div className='mx-auto w-[80%] border-t-2 border-black/400 px-12 overflow-hidden transition-all duration-700'>
            <div onClick={() => setActive(prev => { return prev == index ? null : index })} className='cursor-pointer gap-4 flex items-center justify-between py-5 md:py-8'>
                  <h1 className='md:text-xl'>{question}</h1>
                  <div className="h-12">
                        <svg
                              className={`${active === index ? "" : "rotate-180"} duration-200 transition-all text-3xl`}
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 256 256"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                        >
                              <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
                        </svg>
                  </div>

            </div>
            <motion.div
                  animate={{ height: active === index ? "auto" : 0 }}
                  transition={{ duration: .3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }} ><p className="text-lg py-4  text-slate-700">{answer}</p>
            </motion.div>
      </motion.div>
}