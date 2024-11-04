import React from 'react'

const link = {
      "undergraduate": "https://eportal.oauife.edu.ng/login1.php",
      "staff": "https://eportal.oauife.edu.ng/login1.php"
}

const getRole = (role: string) => {
      switch (role) {
            case "undergraduate":
                  return
      }
}

const LoginPage = ({ searchParams }: { [value: string]: [key: any] }) => {

      console.log(searchParams)
      return (
            <div className='h-screen flex items-center justify-center space-y-8'>
                  <form className='bg-white w-full mx-auto max-w-[25rem] border rounded-xl shadow-sm p-6' action="https://eportal.oauife.edu.ng/login1.php">
                        <h1 className='text-3xl text-center font-semibold'>Login</h1>
                        <div className='*:bg-transparent *:outline *:focus:outline-blue-300 flex flex-col gap-4 *:rounded-lg p-2 *:p-2'>
                              <input type="text" />
                              <input type="text" />
                              <input type="text" />
                              <input type="text" />
                        </div>
                  </form></div>
      )
}

export default LoginPage


// user_id
// psw
//SemesterF
// SessionF