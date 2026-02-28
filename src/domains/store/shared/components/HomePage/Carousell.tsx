'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const slides = [
  {
    title: 'Discover Top Stores',
    description:
      'Browse and shop from the best stores in one place. Enjoy exclusive deals and curated collections.',
    image: '/carousel/store.jpg',
  },
  {
    title: 'Trending Products',
    description:
      'Find the latest and most popular products across all categories, updated daily.',
    image: '/carousel/products.jpg',
  },
  {
    title: 'Shop by Category',
    description:
      'Explore a wide range of categories to find exactly what you need, from fashion to electronics.',
    image: '/carousel/categories.jpg',
  },
  {
    title: 'Smart Filters',
    description:
      'Use advanced filters to quickly find your perfect product and enjoy a seamless shopping experience.',
    image: '/carousel/filters.jpg',
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  return (
    <div className='w-full py-4 '>
      <div className='relative flex items-center flex-col md:flex-row rounded-xl shadow-lg overflow-hidden bg-white dark:bg-blue-900'>
        <section className='absolute md:flex text-center  px-4 flex-1 w-2/3 left-20'>
          <h1 className='text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent'>
            Discover, Shop, and Sell{' '}
            <span className='text-blue-500'>Anything</span>
          </h1>
          <p className='text-xl md:text-3xl md:mb-12 max-w-3xl mx-auto font-bold text-gray-500 dark:text-gray-300'>
            The ultimate marketplace.Find everything you need, from the latest
            fashion trends to cutting-edge electronics, all in one place. Join
            us
          </p>
          <button className='bg-gradient-to-r mb-3 from-blue-500 to-sky-400 hover:from-blue-700 hover:to-sky-600 text-white font-bold px-10 py-2 md:py-4  rounded-lg text-lg md:text-2xl shadow-lg transition-all'>
            Start Shopping
          </button>
        </section>
        <Image
          src={'/ecom.jfif'}
          alt={'item.title'}
          className='object-cover'
          width={400}
          height={200}
        />
      </div>
    </div>
  )
}
