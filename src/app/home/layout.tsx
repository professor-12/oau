import Header from '@/components/Header'
import { Metadata } from 'next'
import React, { PropsWithChildren } from 'react'

export const metadata: Metadata = {
      title: "Home",

}

const layout = ({ children }: PropsWithChildren) => {
      return (
            <div className='bg-[#F9FAFB]'>
                  <Header />
                  {children}
            </div>

      )
}

export default layout