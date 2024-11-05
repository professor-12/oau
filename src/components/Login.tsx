import React from 'react'
import CustomInput from './CustomInput'

export enum Type {
      MBA,
      UNDERGRADUATE,
      STAFF,
      BURSARY
}


const constant = {
      0: { url: "https://eportal.oauife.edu.ng/mbalogin1.php", label: "Username", placeholder: "John" },
      1: { url: "https://eportal.oauife.edu.ng/login1.php", label: "Student matric Number", placeholder: "Matric Number/Utme No" },
      2: { url: "https://eportal.oauife.edu.ng/login1.php", label: "Staff", placeholder: "" },
      3: { url: "https://eportal.oauife.edu.ng/login1.php", label: "Staff", placeholder: "" }
}

const Login = ({ type }: { type: Type }) => {

      return (
            <form name="frmStudent" action={constant[type]?.url ?? "https://eportal.oauife.edu.ng/login1.php"} method='POST' className='text-black w-[80%] space-y-7'>
                  <h1 className='text-3xl font-semibold'>Login</h1>
                  <div className='space-y-5 font-normal'>
                        <CustomInput name='user_id' label={constant[type]?.label ?? "Student Matric number"} placeholder={constant[type].placeholder} labelClassName='text-sm' />
                        <CustomInput name='pswd' label={"Password"} labelClassName='text-sm' type='password' placeholder='*****' />
                        <div className='md:flex gap-3 items-center'>
                              <div className='space-y-2'>
                                    <label htmlFor="">Session</label>
                                    <select name="SessionF" className='w-full p-2 border border-slate-400/60 rounded-md outline-none'>
                                          <option value="">Select Session</option>
                                          <option value="2023">2023/2024</option>
                                          <option value="2022">2022/2023</option>
                                          <option value="2022">2022/2023</option>
                                          <option value="2021">2021/2022</option>
                                          <option value="2021">2021/2022</option>
                                          <option value="2019">2019/2020</option>
                                          <option value="2019">2019/2020</option>
                                          <option value="2018">2018/2019</option>
                                          <option value="2018">2018/2019</option>
                                          <option value="2017">2017/2018</option>
                                          <option value="2017">2017/2018</option>
                                          <option value="2016">2016/2017</option>
                                          <option value="2016">2016/2017</option>
                                          <option value="2015">2015/2016</option>
                                          <option value="2015">2015/2016</option>
                                          <option value="2014">2014/2015</option>
                                          <option value="2014">2014/2015</option>
                                          <option value="2013">2013/2014</option>
                                          <option value="2013">2013/2014</option>
                                          <option value="2012">2012/2013</option>
                                          <option value="2012">2012/2013</option>
                                          <option value="2011">2011/2012</option>
                                          <option value="2011">2011/2012</option>
                                          <option value="2010">2010/2011</option>
                                          <option value="2010">2010/2011</option>
                                          <option value="2009">2009/2010</option>
                                          <option value="2009">2009/2010</option>
                                          <option value="2008">2008/2009</option>
                                          <option value="2008">2008/2009</option>
                                          <option value="2007">2007/2008</option>
                                          <option value="2007">2007/2008</option>
                                          <option value="2006">2006/2007</option>
                                          <option value="2006">2006/2007</option>
                                    </select>
                              </div>
                              <div className='space-y-2'>
                                    <label htmlFor="">Semester *</label>
                                    <select name="SemesterF" className='w-full p-2 border border-slate-400/60 rounded-md outline-none'>
                                          <option value="">Select Session</option>
                                          <option value="2">Rain</option>
                                          <option value="1">Harmatan</option>
                                    </select>
                              </div>
                        </div>
                        <button className={'bg-blue-400 disabled:bg-opacity-65 disabled:cursor-not-allowed p-3 w-full text-center rounded-md text-white text-lg'}>Login</button>
                  </div>
            </form>
      )
}

export default Login