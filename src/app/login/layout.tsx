import Image from 'next/image'
import React, { PropsWithChildren } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
      return (
            <div className='lg:flex max-md:flex-col max-xl:justify-center max-lg:items-center  h-screen overflow-hidden'>
                  <div className='max-lg:hidden flex items-center justify-center  flex-[2] bg-blue-300/20'>
                  <Image  alt='Note img' src="/svg/login.svg" width={450} height={450}/> </div>
                  <div className='flex-1 justify-center h-full max-w-[600px] mx-auto bg-white flex flex-col items-center'>{children}</div>
            </div>
      )
}

export default AuthLayout
