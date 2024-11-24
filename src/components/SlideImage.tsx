import Image from 'next/image'
import React from 'react'
import '../components/animations.css'


export const images = ['/graduates.jpg', '/oauimage.jpeg', '/oau-pic.jpg', '/oau-pics2.jpg']
export const images2 = ['/oauimage(2).png', '/image.png', '/oau-bg.jpg']
const SlideImage = () => {

      return (
            <div className='flex gap-5 overflow-clip'>

                  <div style={{}} className='flex animate-track gap-7 flex-col h-full'>
                        {

                              images.map((a) => {
                                    return (
                                          <div className='rounded-2xl  bg-slate-400 overflow-hidden relative w-[18rem] object-cover h-[20rem] shadow'>
                                                <Image src={a} className='absolute w-full h-full top-0 left-0 bottom-0' alt="slide images" width={500} height={500} />
                                          </div>
                                    )
                              })
                        }
                        {

                              images.map((a) => {
                                    return (
                                          <div className='rounded-2xl bg-slate-400 overflow-hidden relative w-[18rem] object-cover h-[20rem] shadow'>
                                                <Image src={a} className='absolute w-full h-full top-0 left-0 bottom-0' alt="slide images" width={500} height={500} />
                                          </div>
                                    )
                              })
                        }

                  </div>
                  <div style={{}} className='flex animate-track-down gap-6 flex-col h-full'>
                        {

                              images2.map((a) => {
                                    return (
                                          <div className='rounded-2xl bg-slate-400 overflow-hidden relative w-[18rem] object-cover h-[20rem] shadow'>
                                                <Image src={a} className='absolute w-full h-full top-0 left-0 bottom-0' alt="slide images" width={500} height={500} />
                                          </div>
                                    )
                              })
                        }
                        {

                              images2.map((a) => {
                                    return (
                                          <div className='rounded-2xl bg-slate-400 overflow-hidden relative w-[18rem] object-cover h-[20rem] shadow'>
                                                <Image src={a} className='absolute w-full h-full top-0 left-0 bottom-0' alt="slide images" width={500} height={500} />
                                          </div>
                                    )
                              })
                        }

                  </div>


            </div>
      )
}

export default SlideImage