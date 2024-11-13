import { Type } from '@/app/types/enum'
import Login from '@/components/Login'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
      title: "Staf Login",
}
const StafLogin = () => {
      return (
            <Login type={Type.STAFF} />
      )
}

export default StafLogin