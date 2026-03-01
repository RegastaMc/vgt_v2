/* eslint-disable @next/next/no-img-element */
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { CldUploadWidget } from 'next-cloudinary'
import { Trash2Icon } from 'lucide-react'
import toast from 'react-hot-toast'
import { useState } from 'react'

const sliderSchema = z.object({
  imgUrl: z.string().min(1),
  link: z.string().min(1),
  alt: z.string().min(1),
  title: z.string().min(1),
  buttonText: z.string().min(1),
})

type SliderFormValues = z.infer<typeof sliderSchema>

export default function SliderForm({
  defaultValues,
  onSubmit,
}: {
  defaultValues?: Partial<SliderFormValues>
  onSubmit: (data: SliderFormValues) => void
}) {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, setValue, watch } = useForm<SliderFormValues>(
    {
      resolver: zodResolver(sliderSchema),
      defaultValues,
    },
  )

  const imageValue = watch('imgUrl')

  const inputClass =
    'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ' +
    'placeholder:text-gray-400 ' +
    'focus:border-black focus:outline-none focus:ring-1 focus:ring-black ' +
    'disabled:cursor-not-allowed disabled:bg-gray-100'

  const handleImageDelete =
    (publicId: string) => async (e?: React.SyntheticEvent) => {
      e?.preventDefault()
      if (!publicId) return
      try {
        const res = await fetch('/api/delete-cld-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ publicId }),
        })
        const data = await res.json()
        if (res.ok) {
          toast.success('Image deleted')
          setValue('imgUrl', '')
        } else {
          toast.error(data?.error || 'Failed to delete image')
        }
      } catch (err) {
        console.error(err)
        toast.error('Failed to delete image')
      }
    }

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          setLoading(true)
          await onSubmit(data)
        } finally {
          setLoading(false)
        }
      })}
      className='space-y-6 bg-white p-6 rounded-xl shadow-sm'
    >
      {/* Image Upload */}
      <div>
        <label className='text-sm font-medium'>Slider Image</label>

        <div className='flex items-center gap-3 flex-wrap mt-2'>
          <CldUploadWidget
            signatureEndpoint='/api/sign-upload'
            options={{
              folder: 'sliders',
              maxFiles: 1,
              multiple: false,
              resourceType: 'image',
            }}
            onSuccess={(res) => {
              const info = (res as any)?.info
              if (info?.secure_url && info?.public_id) {
                setValue(
                  'imgUrl',
                  JSON.stringify({
                    url: info.secure_url,
                    publicId: info.public_id,
                  }),
                )
              }
            }}
          >
            {({ open }) => (
              <button
                type='button'
                onClick={() => open()}
                className='px-4 h-28  bg-gray-600  rounded-md text-sm text-white'
              >
                Upload Image
              </button>
            )}
          </CldUploadWidget>

          {imageValue && (
            <div className='relative w-28 h-28 rounded overflow-hidden border'>
              <button
                type='button'
                onClick={handleImageDelete(JSON.parse(imageValue).publicId)}
                className='absolute top-2 right-2 bg-white p-1 rounded-full shadow'
              >
                <Trash2Icon size={16} className='text-red-500' />
              </button>

              <img
                src={JSON.parse(imageValue).url}
                alt='slider'
                className='w-full h-full object-cover'
              />
            </div>
          )}
        </div>
      </div>

      <input
        {...register('link')}
        placeholder='Product URL'
        className={inputClass}
      />

      <input
        {...register('alt')}
        placeholder='Alt text'
        className={inputClass}
      />

      <input
        {...register('title')}
        placeholder='Title'
        className={inputClass}
      />

      <input
        {...register('buttonText')}
        placeholder='Button text'
        className={inputClass}
      />

      <button
        type='submit'
        className='bg-black bg-gray-7 cursor-pointer text-white px-6 py-2 rounded-md'
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Save Slider'}
      </button>
    </form>
  )
}
