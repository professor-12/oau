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
                  <div className='max-width flex flex-wrap lg:gap-24 gap-12 justify-center'>
                        {
                              stats.map(({ title, number }) => {
                                    return <div key={title} className='text-center space-y-3'>
                                          <div className='text-3xl lg:text-7xl text-white/70 font-semibold'>
                                                {/* <CountUp duration={3}
                                                      decimal="," end={number as number} /> */}
                                                <CompleteHook number={number} />

                                          </div>
                                          <p className='lg:text-xl text-center'>{title}</p>
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
            delay: 1500,
            duration: 1,
      });
      useEffect(() => {
            const coutupel = document.querySelector("#countup")
            if (!coutupel || coutupel == null) return;
            inter = new IntersectionObserver((e) => e.forEach((el) => { if (el.isIntersecting) { pauseResume() } }))
            inter.observe(coutupel as Element)
            return () => inter.unobserve(coutupel as Element)
      }, [])
      return (
            <div className='w-full'>
                  <span ref={countUpRef} id="countup" />
                  {/* <button onClick={start}>Start</button> */}
                  {/* <button onClick={reset}>Reset</button> */}
                  {/* <button onClick={pauseResume}>Pause/Resume</button> */}
                  {/* <button onClick={() => update(2000)}>Update to 2000</button> */}
            </div>
      );
};
