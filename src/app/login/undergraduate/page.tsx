import { Type } from '@/app/types/enum'
import Login from '@/components/Login'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
      title: "Undergraduate",
      twitter: { card: 'summary_large_image' },
      keywords: ["oau login", "oau eportal", 'obafemi awolowo eportal', "oau undergraduate"]
}

const UndergraduatePage = () => {
      return (
            <Login type={Type.UNDERGRADUATE} />
      )
}

export default UndergraduatePage
