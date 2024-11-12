import CustomInput from '@/components/CustomInput'
import { redirect } from 'next/navigation'

import React from 'react'

const ForgotPasswordPage = ({ searchParams }: { searchParams: { type?: string } }) => {
      const type = searchParams?.type
      console.log(type)
      if (!type) {
            return redirect("/home")
      }
      return (
            <form name="form1" method='post' action={"https://eportal.oauife.edu.ng/passwordretrieval1.php"} className='w-[80%] space-y-5'>
                  <h1 className='my-2 text-xl'>Password Reset</h1>
                  {
                        (type === "fresher") ?
                              <input required type="text" value={0} name='DOB' className='hidden' />
                              :
                              <CustomInput name='DOB' label='Enter date of birth'
                                    type='text'
                                    placeholder='dd/mm/yyyy'
                              />
                  }
                  <CustomInput required name="jmeno" label='Registeration Number (For Postgraduate students use pg)'
                        type='text'
                        placeholder='Enter jamb Reg. number in uppercase'
                  />
                  <button name='Command1' type='submit' className='bg-blue-500 py-3 text-center w-full text-white rounded-md'>Rest Password</button>
                  <span className='text-xs mt-4 block'>Contact <a className='hover:text-blue-600 hover:underline' href="mailto:enquiry@oauife.edu.ng">enquiry@oauife.edu.ng</a> for more enquiry</span>
            </form>
      )
}

export default ForgotPasswordPage