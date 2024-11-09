import { Type } from '@/app/types/enum'
import Login from '@/components/Login'
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'

const UndergraduatePage = () => {
      return (
            <Login type={Type.UNDERGRADUATE} />
      )
}

export default UndergraduatePage
