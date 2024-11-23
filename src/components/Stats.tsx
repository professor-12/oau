import React from 'react'



const stats = [
      { title: "COLLEGES", number: 2 },
      { title: "FACULTIES", number: 13 },
      { title: "DEPARTMENTS", number: 118 },
      { title: "RESEARCH CENTERS", number: 19 },
      { title: "Students", number: 32480 },

]
const Stats = () => {
      return (
            <section className='py-12 bg-black/80 flex text-white justify-between'>
                  <div className='max-width flex justify-between'>
                        <div className=''>
                              <div className='text-7xl text-blue-400 font-semibold'>12</div>
                              <p className='text-lg'>Faculties</p>
                        </div>
                        <div className=''>
                              <div className='text-7xl font-semibold'>12</div>
                              <p className='text-lg'>Faculties</p>
                        </div>
                        <div className=''>
                              <div className='text-7xl font-semibold'>12</div>
                              <p className='text-lg'>Faculties</p>
                        </div>
                        <div className=''>
                              <div className='text-7xl font-semibold'>12</div>
                              <p className='text-lg'>Faculties</p>
                        </div>
                        <div className=''>
                              <div className='text-7xl font-semibold'>12</div>
                              <p className='text-lg'>Faculties</p>
                        </div>
                  </div>
            </section>
      )
}

export default Stats

// COLLEGES
// 13
// FACULTIES
// 
// 
// 
// 
// 32, 480
// STUDENTS