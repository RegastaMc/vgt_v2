'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Image,
  Package,
  Tags,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/admin/id/dashboard', icon: LayoutDashboard },
  { name: 'Sliders', href: '/admin/id/sliders', icon: Image },
  { name: 'Products', href: '/admin/id/products', icon: Package },
  { name: 'Brands', href: '/admin/id/brands', icon: Package },
  { name: 'Categories', href: '/admin/id/categories', icon: Tags },
  { name: 'Orders', href: '/admin/id/orders', icon: ShoppingCart },
  { name: 'Customers', href: '/admin/id/customers', icon: Users },
  { name: 'Analytics', href: '/admin/id/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/id/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname().toLowerCase()

  return (
    <aside className='fixed inset-y-0 left-0 z-40 hidden w-64 bg-white border-r lg:flex lg:flex-col'>
      {/* Logo / Admin Header */}
      <div className='flex h-16 items-center gap-3 px-6 border-b'>
        <div className='h-9 w-9 rounded-lg bg-black text-white flex items-center justify-center font-bold'>
          A
        </div>
        <span className='font-semibold text-lg'>Admin Panel</span>
      </div>

      {/* Navigation */}
      <nav className='flex-1 px-4 py-6 space-y-1'>
        {navItems.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition
                ${
                  active
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              <Icon className='h-4 w-4' />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Footer / Logout */}
      <div className='px-4 py-4 border-t'>
        <button className='flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition'>
          <LogOut className='h-4 w-4' />
          Logout
        </button>
      </div>
    </aside>
  )
}
