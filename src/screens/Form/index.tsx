import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { FormItem, ImageInput, Input, Textarea } from "./components";
import { useState } from "react";
import useCreateFeedback from "../../services/useCreateFeedback";

interface FormProps {
  feedback: number;
  image: File;
  productName: string;
  comment: string;
}

const schema = yup
  .object()
  .shape({
    comment: yup.string().required("O campo comentário é obrigatório"),
    productName: yup.string().required("O campo nome do produto é obrigatório"),
    image: yup
      .mixed()
      .required("O campo imagem é obrigatório")
      .test(
        "is-valid-size",
        "O campo de imagem deve conter uma imagem com até 1MB",
        (value) => (value as File)?.size <= 10000 * 1000
      ),
    feedback: yup.number().required("O campo Feedback é obrigatório"),
  })
  .required();

const Form = () => {
  const [previewImage, setPreviewImage] = useState<File>();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });
  const { mutate } = useCreateFeedback()
  return (
    <form
      className="container mx-auto rounded-md bg-white px-10 py-8"
      onSubmit={handleSubmit((data) => mutate({...data, image: "image"}))}
    >
      <h1 className="mt-6 mb-12 text-center text-3xl font-medium text-slate-800">
        O que você achou do produto?
      </h1>
      <div className="flex w-full flex-col gap-4">
        <FormItem message={errors.productName?.message} label="Nome do produto">
          <Input {...register("productName")} />
        </FormItem>
        <FormItem message={errors.feedback?.message} label='Avaliação'>
          <div className="mx-auto w-48">
            <div className="flex items-center justify-center gap-2">
              <Controller
                name="feedback"
                control={control}
                render={({ field }) => (
                  <>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        className={`h-10 w-10 ${
                          index <= field.value
                            ? "fill-yellow-300 hover:fill-yellow-200"
                            : "fill-slate-300 hover:fill-slate-200"
                        } mr-1 cursor-pointer transition`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                        onClick={() => field.onChange(index)}
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </>
                )}
              />
            </div>
            <div className="flex justify-between">
              <span className="mt-1 text-xs text-slate-500">Ruim</span>
              <span className="mt-1 text-xs text-slate-500">Excelente</span>
            </div>
          </div>
        </FormItem>
        <FormItem message={errors.image?.message} label="Imagem">
          <ImageInput
            multiple={false}
            accept="image/png, image/jpeg"
            {...register("image")}
            previewImage={previewImage}
            onChange={(event) => {
              const value = event.target.files

              if (value) {
                setPreviewImage(value[0]);
                setValue("image", value[0], { shouldValidate: true });
              }
            }}
          />
        </FormItem>
        <FormItem message={errors.comment?.message} label="Comentário">
          <Textarea id="comment" {...register("comment")} />
        </FormItem>
      </div>
      <div className="mt-6 flex justify-end gap-6">
        <button
          type="button"
          className="rounded-md border border-slate-500 px-6 py-2 text-lg font-medium text-slate-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-yellow-500 px-6 py-2 text-lg font-medium text-white"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
