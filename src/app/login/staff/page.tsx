import { Type } from '@/app/types/enum'
import Login from '@/components/Login'
import React from 'react'

const StafLogin = () => {
      return (
            <Login type={Type.STAFF} />
      )
}

export default StafLogin