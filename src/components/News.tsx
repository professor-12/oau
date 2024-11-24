import Link from 'next/link'
import React from 'react'

const News = () => {
  return (
    <section className='text-xl py-24 my-8'>
      <h1 className='text-center mb-8 text-4xl font-medium'>
        News and Event
      </h1>
      <div className='max-width gap-12 animate-gradient flex  px-12 items-center h-[20rem] bg-left-top rounded-3xl bg-gradient-to-br bg-clip-padding from-blue-600  to-violet-400'>
        <div className='text-balance flex-[2] flex items-center flex-col'>
          <h1 className='text-white text-5xl font-semibold'>48th Convocation: Intention to Join the University Procession</h1>
          <p className='text-sm leading-5 mt-4 text-white'>48th Convocation: Intention to Join the University Procession The Ceremonials Committee invites members of staff interested in the processions for...</p>

        </div>
        <div className='flex-1 flex justify-end'>
          <Link href="">
            <button className='bg-white text-black p-3 px-5 rounded-xl'>Read More</button>
          </Link>
        </div>
      </div>

      <div className='max-width my-4 grid grid-cols-4 *-border-neutral-300 gap-4'>
        <div className=' p-12 h-[20rem] rounded-2xl border-neutral-300 border'></div>
        <div className=' p-12 h-[20rem] rounded-2xl border-neutral-300 border'></div>
        <div className=' p-12 h-[20rem] rounded-2xl border-neutral-300 border'></div>
        <div className=' p-12 h-[20rem] rounded-2xl border-neutral-300 border'></div>
        <div className=' col-span-2 p-12 h-[20rem] border-neutral-300 rounded-2xl border'></div>
        <div className=' col-span-2 p-12 h-[20rem] rounded-2xl border'></div>
      </div>
    </section >
  )
}

export default News