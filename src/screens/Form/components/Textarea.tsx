import { ComponentProps, forwardRef } from "react"

const Textarea = forwardRef<HTMLTextAreaElement, ComponentProps<'textarea'>>((props, ref) => (
    <textarea {...props} ref={ref} className='h-40 w-full rounded bg-slate-50 hover:bg-slate-100 border border-slate-300 outline-none text-slate-500 p-2'/>
))

export default Textarea