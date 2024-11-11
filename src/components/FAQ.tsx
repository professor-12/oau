import React from 'react'
import DropDown, { DropDownProvider } from './DropDown'
import { faq } from '@/constants'




const FAQ = () => {
      return (
            <section className='py-12' id='faq'>
                  <div className='w-80% lg:max-width'>
                        <h1 className='text-center mb-12 lg:text-4xl text-xl md:text-2xl font-medium'>Questions? and Answers.</h1>
                        <DropDownProvider>
                              {
                                    faq.map((props, index) => {
                                          return <DropDown key={index} {...props} index={index} />

                                    })
                              }
                        </DropDownProvider>
                  </div>
            </section>
      )
}

export default FAQ



