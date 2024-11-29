"use client"
import React, { useEffect } from 'react'
import CountUp, { useCountUp } from 'react-countup';


const stats = [
      { title: "COLLEGES", number: +2 },
      { title: "FACULTIES", number: +13 },
      { title: "DEPARTMENTS", number: +118 },
      { title: "RESEARCH CENTERS", number: +19 },
      { title: "STUDENTS", number: parseInt("32480") },

]
const Stats = () => {
      return (
            <section className='py-12 bg-black/90 flex text-white justify-between'>
                  <div className='max-width flex max-md:flex-col flex-wrap lg:gap-24 gap-12 justify-center'>
                        {
                              stats.map(({ title, number }) => {
                                    return <div key={title} className='text-center space-y-3'>
                                          <div className='text-4xl lg:text-7xl text-white/90 font-semibold'>

                                                <CompleteHook number={number} />

                                          </div>
                                          <p className='lg:text-xl text-center font-poppins'>{title}</p>
                                    </div>
                              })
                        }
                  </div>
            </section>
      )
}

export default Stats


const CompleteHook = ({ number }: { number: number }) => {

      return (
            <div className='w-full'>
                  <span id="countup">{number}</span>
            </div>
      );
};
