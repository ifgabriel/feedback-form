import { ComponentProps, forwardRef } from "react"

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, ref) => (
    <input {...props} ref={ref} className='h-10 w-full rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-300 outline-none text-slate-500 p-2'/>
))

export default Input