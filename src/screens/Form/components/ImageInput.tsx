import { ComponentProps, forwardRef } from "react";

interface ImageInputProps extends ComponentProps<"input"> {
  previewImage?: File;
}

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
  ({ previewImage, ...props }, ref) => (
    <label
      htmlFor="dropzone-file"
      className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center pb-6 pt-5">
        <div className={['flex flex-col items-center justify-center pb-6 pt-5 text-slate-500', previewImage && "absolute text-slate-100"].join(' ')}>
           <svg
              className="mb-4 h-8 w-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
          <p className={["mb-2 text-sm"].join(' ')}>
            <span className="font-semibold">Selecione o arquivo</span> ou
            arraste e solte
          </p>
          <p className="text-xs">JPG, JPEG ou PNG (MAX. 1MB)</p>
        </div>
      </div>
      <input
        id="dropzone-file"
        type="file"
        className="hidden"
        {...props}
        ref={ref}
      />
    </label>
  )
);

export default ImageInput;
