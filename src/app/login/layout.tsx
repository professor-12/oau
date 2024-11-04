import React, { PropsWithChildren } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
      return (
            <div className='flex max-md:flex-col  h-screen overflow-hidden'>
                  <div className='flex-[2] bg-violet-300/20'></div>
                  <div className='flex-1 bg-white'>{children}</div>
            </div>
      )
}

export default AuthLayout