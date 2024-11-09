import Logo from '@/components/Logo'
import React, { PropsWithChildren } from 'react'

const HEalthCenterLayout = ({ children }: PropsWithChildren) => {
      return (
            <div className='bg-slate-100/20 h-screen flex items-center'>
                  <header className='fixed items-center gap-4 top-0 w-full bg-white p-6 flex  border-b'>
                        <Logo />
                        <h1 className='text-center text-xl'>Obafemi Awolowo University, Ile-Ife
                              Health Centre</h1>
                  </header>
                  {children}
            </div>
      )
}

export default HEalthCenterLayout






