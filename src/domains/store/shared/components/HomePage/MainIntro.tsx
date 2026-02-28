'use client'
import { MapPin, Store, User2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function MainIntro() {
  return (
    <div className='flex justify-center items-center space-x-8  mt-2 absolute w-5/6    '>
      <div className=' p-1 bg-blue-300 rounded-xl h-full sm:w-2/3'>
        <div className='flex justify-between gap-3'>
          <div className=' w-1/4 border-gray-400 '>
            <Image
              src={'/'}
              width={96}
              height={96}
              alt='img'
              className='rounded-full ring-1 bg-white sm:w-24 sm:h-24'
            />
          </div>
          <div className=' border-l border-blue-400 shadow-sm space-y-2 flex-1 p-2'>
            <span className='text-lg font-bold'>Wiks Shops</span>

            <div className='text-xs uppercase'>
              Shop Like A Boss at Wiks Shops
            </div>
            <div className='flex space-x-2 items-center'>
              <User2 size={15} className='text-blue-700' />
              <span className='px-1'>100</span> Followers
            </div>

            <div className='flex space-x-3 items-center'>
              <Store size={15} className='text-blue-700' />
              <span className='text-sm'>Shop in 500+ Shops</span>
            </div>
            <div>
              <div className='flex space-x-3 items-center'>
                <MapPin size={20} className='text-blue-700' />
                <span className='text-sm'>Find Deals from your Home Town</span>
              </div>
            </div>

            <button className='px-4 p-1 bg-blue-400 rounded-lg'>Follow</button>
          </div>
        </div>
      </div>
    </div>
  )
}
