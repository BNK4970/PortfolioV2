import React from 'react'

interface InputProps{
    type: string;
    placeholder: string;
    children: string
    addClassName?: string;
}
export const Input: React.FC<InputProps> = ({type, placeholder, children, addClassName}) => {
  return (
    <div className={`flex flex-col gap-1 ${addClassName}`}>
        <label htmlFor="">{children}</label>
        <input type={type} placeholder={placeholder} className='rounded-md px-6 py-2 bg-[rgb(var(--background))] outline outline-2 outline-[rgb(var(--blur))] focus:outline-[rgb(var(--primary),0.5)] duration-200'/>
    </div>
)
}

export default Input