'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight } from 'lucide-react'
import clsx from 'clsx'

type Category = {
  id: string
  name: string
  slug: string
  image: string
  parentId: string | null
  products?: { id: string }[]
  children?: Category[]
}

export default function CategorySidebar({
  categories,
}: {
  categories: Category[]
}) {
  const pathname = usePathname()
  const [search, setSearch] = useState('')

  /**
   * openAtLevel = { 0: "id1", 1: "id4", 2: "id8" }
   * Meaning:
   * - level 0 category with id1 is open
   * - level 1 category with id4 is open
   * - level 2 category with id8 is open
   */
  const [openAtLevel, setOpenAtLevel] = useState<Record<number, string | null>>(
    {}
  )

  const toggleLevel = (level: number, id: string) => {
    setOpenAtLevel((prev) => ({
      ...prev,
      [level]: prev[level] === id ? null : id, // Toggle or close
    }))
  }

  const parents = categories.filter((c) => !c.parentId)

  // 🔍 Filter based on search
  const filtered = useMemo(() => {
    if (!search.trim()) return parents

    const match = (cat: Category): boolean => {
      if (cat.name.toLowerCase().includes(search.toLowerCase())) return true
      return cat.children?.some(match) ?? false
    }

    return parents.filter(match)
  }, [search, parents])

  // 🔁 Recursive renderer with LEVEL CONTROL
  const renderCategory = (cat: Category, level = 0) => {
    const isOpen = openAtLevel[level] === cat.id
    const isActive = pathname.startsWith(`/categories/${cat.slug}`)

    const hasChildren = cat.children && cat.children.length > 0

    return (
      <div key={cat.id} className='space-y-1'>
        {/* Category Row */}
        <div
          className={clsx(
            'flex items-center p-2 rounded-lg transition-all cursor-pointer',
            isActive
              ? 'bg-blue-100 text-blue-700 font-medium'
              : 'hover:bg-gray-100'
          )}
          onClick={() => toggleLevel(level, cat.id)}
        >
          <div className='flex items-center gap-3'>
            {/* Category Image */}
            {/* <Image
              src={cat.image}
              alt={cat.name}
              width={26}
              height={26}
              className="rounded-md object-cover"
            /> */}

            {/* Category Label */}
            <Link href={`/category/${cat.slug}`} className='text-sm'>
              {cat.name}
            </Link>
          </div>

          {/* Chevron */}
          {hasChildren && (
            <span className='transition-transform duration-300'>
              {isOpen ? (
                <ChevronDown className='w-4 h-4' />
              ) : (
                <ChevronRight className='w-4 h-4' />
              )}
            </span>
          )}

          {/* Product Count */}
          {cat.products && (
            <span className='ml-2 bg-gray-200 text-xs rounded-md px-2 py-0.5'>
              {cat.products.length}
            </span>
          )}
        </div>

        {/* Children */}
        {isOpen && hasChildren && (
          <div className='ml-8 border-l pl-4 space-y-1 animate-slideDown'>
            {cat.children!.map((child) => renderCategory(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <aside className=' bg-white rounded-xl shadow-md border p-4'>
      {/* Search Bar */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search categories...'
        className=' mb-4 px-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none'
      />

      {/* Category Tree */}
      <div className='space-y-3'>
        {filtered.map((cat) => renderCategory(cat))}
      </div>
    </aside>
  )
}
