"use client"
import React, { PropsWithChildren, ReactNode } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, onPress }: { onPress(): void, children: React.ReactNode }) => {
      return (

            <BackDrop onClick={onPress}>
                  <div className='w-full' onClick={(e) => e.stopPropagation()}>

                        {children}
                  </div>
            </BackDrop>
      )
}

export default Modal


interface IBackDrop extends PropsWithChildren {
      onClick(): void
}

const BackDrop = ({ children, onClick }: IBackDrop) => {
      return createPortal(<div onClick={onClick} className='fixed z-50 cursor-pointer bg-black/40 flex items-center justify-center backdrop-blur-lg inset-0'>{children}</div>, document.getElementById("portal") as Element)
}