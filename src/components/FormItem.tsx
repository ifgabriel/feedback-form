import { ComponentProps, forwardRef } from "react"

interface FormItemProps extends ComponentProps<'div'> {
    label?: string,
    message?: string
}

const FormItem = forwardRef<HTMLDivElement, FormItemProps>(({ children, label, message, ...props }, ref) => (
    <div {...props} className='flex flex-col gap-2 w-full' ref={ref}>
        <label className='text-slate-500 font-lg text-lg'>{label}</label>
        {children}
        <span className='text-red-500 mt-2'>{message}</span>
    </div>
))

export default FormItem