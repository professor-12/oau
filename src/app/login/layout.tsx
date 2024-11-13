import Logo from '@/components/Logo'
import { Metadata } from 'next'
import Image from 'next/image'
import React, { PropsWithChildren } from 'react'


export const metadata: Metadata = {
      title: {
            default: "Login - Obafemi Awolowo University",
            template: "%s - Obafemi Awolowo University"
      }
}

const AuthLayout = ({ children }: PropsWithChildren) => {
      return (
            <div className='lg:flex max-md:flex-col max-xl:justify-center max-lg:items-center  h-screen overflow-hidden'>
                  <div className='max-lg:hidden relative flex items-center justify-center  flex-[2] bg-blue-300/20'>
                        <div className='absolute top-6 left-12'>
                              <Logo />
                        </div>
                        <Image alt='Note img' src="/svg/login.svg" width={450} height={450} />
                  </div>
                  <div className='flex-1 justify-center h-full max-w-[600px] mx-auto bg-white flex flex-col items-center'>{children}</div>
            </div>
      )
}

export default AuthLayout
