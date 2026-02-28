import React from 'react'

export default function Categories() {
  return (
    <div className='container bg-white  sm:w-1/6 min-h-screen'>
      <div className='w-full flex flex-nowrap items-center justify-center text-lg text-blue-500 font-bold underline'>
        <span className='text-sm'> SHOP BY CATEGORIES </span>
      </div>
      <div className='list-none px-4 pt-4 flex flex-col justify-center pl-10 space-y-2'>
        <li>Electricals</li>
        <li>Phones</li>
        <li>Groceries</li>
        <li>Computers</li>
        <li>Systems</li>
      </div>
    </div>
  )
}
