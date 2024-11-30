import Header from '@/components/Header'
import { Metadata } from 'next'
import React, { PropsWithChildren } from 'react'

export const metadata: Metadata = {
      title: "Home",
      openGraph: {
            type: "website",
      }, twitter: {
            card: "summary_large_image",
            description: "Obafemi Awolowo University E-portal",
      }
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