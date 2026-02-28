'use client'
import React from 'react'
import Image from 'next/image'

export default function CarouselComponent() {
  return (
    <div className='flex-1 '>
      <div className=' relative flex-1  '>
        <Image
          src={'/Banner.webp'}
          alt={'item.title'}
          className='object-cover w-screen'
          width={1000}
          height={500}
        />
      </div>
    </div>
  )
}
