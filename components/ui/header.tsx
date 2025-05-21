import Link from 'next/link'
import Logo from '../logo/logo'
import LogoWhite from '../logo/logo-white'

export default function Header({ nav = true }: {
  nav?: boolean
}) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Cruip">
              <LogoWhite className="size-24 fill-white"/>
            </Link>
          </div>

          {/* Desktop navigation */}
          {nav &&
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="/signin">Sign in</Link>
                </li>
                <li className="ml-3">
                  <Link className="btn-sm text-white bg-linear-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" href="#0">
                    Get Started <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  )
}
