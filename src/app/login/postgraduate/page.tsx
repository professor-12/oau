import { Type } from '@/app/types/enum'
import Login from '@/components/Login'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
      title: "Post graduate"
}
const PostGraduates = () => {
      return (
            <Login type={Type.UNDERGRADUATE} />
      )
}

export default PostGraduates