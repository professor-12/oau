"use client"
import React, { useState } from 'react'
import Modal from './Modal/modal'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from "framer-motion"
const ForgotPassword = () => {
      const [openModal, setOpenModal] = useState(false)
      const handleOpenModal = () => {
            setOpenModal(true)
      }
      const handleCloseModal = () => {
            setOpenModal(false)
      }
      return (
            <>
                  <span onClick={handleOpenModal} className='text-xs cursor-pointer text-blue-500 text-right block'>Forgot Password?</span>
                  <AnimatePresence>

                        {
                              openModal && <Modal onPress={handleCloseModal}>
                                    <ForgotPasswordModal />
                              </Modal>
                        }
                  </AnimatePresence>
            </>

      )
}

export default ForgotPassword




const ForgotPasswordModal = () => {
      const router = useRouter()
      const [value, setValue] = useState<null | string>(null)
      return (<motion.div initial={{ y: 200, opacity: 0 }} exit={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='bg-white flex flex-col divide-y-4 gap-5 p-3 w-[80%] mx-auto max-w-[700px] rounded-md'>
            <select onChange={(e) => { setValue(e.target.value) }} className='w-full p-2 text-sm border border-slate-400/60 rounded-md outline-none' name="SemesterF" id="SemesterF">
                  <option>Fresher or Returning Student</option>
                  <option value="fresher">Fresher</option>
                  <option value="returningStudent">Returning Student</option>
            </select>
            <button onClick={() => {
                  if (!value) return
                  router.push(`/login/forgot-password/?type=${value}`)

            }} className='bg-blue-500 py-3 text-white rounded text-center w-full' >Next</button>
      </motion.div >)
}