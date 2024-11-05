import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'


interface ICustomInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
      labelClassName?: string, label: string, labelProp?: React.HTMLAttributes<HTMLLabelElement>
}

const CustomInput = ({ labelClassName, label, labelProp, ...props }: ICustomInput) => {


      return <div className='flex flex-col space-y-2'>
            <label htmlFor={labelProp?.id}>{label}</label>
            <input   {...props} className='border placeholder:font-normal p-2 w-full rounded-md bg-transparent border-gray-400/60 shadow-sm focus:bg-slate-100/40 focus:outline-none focus:border-blue-400' />
      </div>
}


export default CustomInput