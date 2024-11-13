"use client"
import React, { PropsWithChildren, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { motion } from "framer-motion"
const Modal = ({ children, onPress, type }: { onPress(): void, children: React.ReactNode, type?: "sm" | "lg" }) => {
      return (
            <BackDrop type={type} onClick={onPress}>
                  <div className='w-full' onClick={(e) => e.stopPropagation()}>
                        {children}
                  </div>
            </BackDrop>
      )
}

export default Modal


interface IBackDrop extends PropsWithChildren {
      onClick(): void;
      type?: "sm" | "lg"
}

const BackDrop = ({ children, onClick, type }: IBackDrop) => {
      return createPortal(<motion.div exit={{ opacity: 0 }} onClick={onClick} className={`fixed z-50 cursor-pointer bg-black/40 flex items-center justify-center backdrop-blur-lg inset-0 ${type == "sm" ? "md:hidden" : type == "lg" ? "max-md:hidden" : ""}`}>{children}</motion.div> as ReactNode, document.getElementById("portal") as Element)
}