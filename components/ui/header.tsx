'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import image from '@/public/images/removeBackground.png'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img className='w-12 h-12' loading='lazy'
                src='https://firebasestorage.googleapis.com/v0/b/profile-b15d4.appspot.com/o/removeBackground.png?alt=media&token=26471ed1-a37c-4302-89b8-bac5cbc313f3' />
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className={`font-medium ${pathname === '/' ? 'text-gray-200' : 'text-purple-600'}  hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out `}
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className={`font-medium ${pathname === '/resume' ? 'text-gray-200' : 'text-purple-600'}  hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out `}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`font-medium ${pathname === '/projects' ? 'text-gray-200' : 'text-purple-600'}  hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out `}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
