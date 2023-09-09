import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormItem, ImageInput, Textarea } from './components';

interface FormProps {
  feedback: number,
  image: File;
  comment: string
}

const schema = yup
  .object()
  .shape({
    comment: yup
      .string()
      .required('O campo comentário é obrigatório'),
    image: yup
      .mixed()
      .required("O campo imagem é obrigatório")
      .test('is-valid-size', "O campo de imagem deve conter uma imagem com até 2MB", value => value[0]?.size <= 10000 * 2000),
    feedback: yup
      .number()
      .required('O campo Feedback é obrigatório'),
  })
  .required()

const App = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  })

  return (
    <form
      className='container bg-white mx-auto rounded-md py-8 px-10'
      onSubmit={handleSubmit((data) => console.log('Form sent with', data))}
    >
      <h1 className='text-slate-800 font-medium text-center text-3xl my-6'>O que você achou do produto?</h1>
      <div className='w-full flex flex-col gap-4'>
        <FormItem message={errors.feedback?.message}>
          <div className='w-48 mx-auto'>
            <div className='flex gap-2 items-center justify-center'>
              <Controller
                name='feedback'
                control={control}
                render={({ field }) => (
                  <>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        className={`w-10 h-10 ${index <= field.value ? 'fill-yellow-300 hover:fill-yellow-200' : 'fill-slate-300 hover:fill-slate-200'} mr-1 cursor-pointer transition`}
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20"
                        onClick={() => field.onChange(index)}
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </>
                )}
              />
            </div>
            <div className='flex justify-between'>
              <span className='text-slate-500 text-xs mt-1'>Ruim</span>
              <span className='text-slate-500 text-xs mt-1'>Excelente</span>
            </div>
          </div>
        </FormItem>
        <FormItem message={errors.image?.message} label='Imagem'>
          <ImageInput
            multiple={false}
            accept='image/png, image/jpeg'
            {...register('image')}
          />
        </FormItem>
        <FormItem message={errors.comment?.message} label='Comentário'>
          <Textarea id='comment' {...register('comment')} />
        </FormItem>
      </div>
      <div className='flex gap-6 mt-6 justify-end'>
        <button type='button' className='px-6 py-2 rounded-md border border-slate-500 font-medium text-slate-500 text-lg'>Cancelar</button>
        <button type='submit' className='px-6 py-2 rounded-md bg-yellow-500 font-medium text-white text-lg'>Enviar</button>
      </div>
    </form>
  )
}

export default App
