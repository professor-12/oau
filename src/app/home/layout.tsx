import Header from '@/components/Header'
import { Metadata } from 'next'
import React, { PropsWithChildren } from 'react'

export const metadata: Metadata = {
      title: "Home",

}

const layout = ({ children }: PropsWithChildren) => {
      return (
            <div>
                  <Header />
                  {children}
            </div>

      )
}

export default layout