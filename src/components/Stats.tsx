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
            <section className='py-12 bg-black/80 flex text-white justify-between'>
                  <div className='max-width flex justify-between'>
                        {
                              stats.map(({ title, number }) => {
                                    return <div key={title} className='text-center space-y-3'>
                                          <div className='text-7xl text-blue-400 font-semibold'>
                                                {/* <CountUp duration={3}
                                                      decimal="," end={number as number} /> */}
                                                <CompleteHook number={number} />

                                          </div>
                                          <p className='text-xl text-center'>{title}</p>
                                    </div>
                              })
                        }
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



const CompleteHook = ({ number }: { number: number }) => {
      let inter: IntersectionObserver;
      const countUpRef = React.useRef(null) as any;
      const { pauseResume } = useCountUp({
            ref: countUpRef,
            start: 0,
            end: number,
            delay: 1000,
            duration: 1,
      });
      useEffect(() => {
            inter = new IntersectionObserver((e) => e.forEach((el) => { if (el.isIntersecting) { pauseResume() } }))
            inter.observe(countUpRef.current)
            return () => inter.unobserve(countUpRef.current)
      }, [])
      return (
            <div className='w-full'>
                  <span ref={countUpRef} />
                  {/* <button onClick={start}>Start</button> */}
                  {/* <button onClick={reset}>Reset</button> */}
                  {/* <button onClick={pauseResume}>Pause/Resume</button> */}
                  {/* <button onClick={() => update(2000)}>Update to 2000</button> */}
            </div>
      );
};
