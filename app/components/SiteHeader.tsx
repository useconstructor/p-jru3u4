import Link from 'next/link'
import { ChevronDown, Menu } from 'lucide-react'

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="relative mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-4">
        <Link href="/" className="flex h-8 items-center" aria-label="Supervisor home">
          <img
            src="https://trysupervisor.com/supervisor-logo.svg?dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
            alt="Supervise and Run your business with Artificial Intelligence | Supervisor"
            className="h-8 w-auto"
            width={148}
            height={32}
          />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex" aria-label="Main navigation">
          <ul className="flex list-none items-center gap-8">
            <li>
              <Link
                href="/"
                className="inline-flex h-11 items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/use-cases"
                className="inline-flex h-11 items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                Use Cases
              </Link>
            </li>

            <li>
              <Link
                href="/for"
                className="inline-flex h-11 items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                Industries
              </Link>
            </li>

            <li>
              <Link
                href="/pricing"
                className="inline-flex h-11 items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                Pricing
              </Link>
            </li>

            <li className="relative">
              <button
                type="button"
                className="group inline-flex h-11 items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                Product
                <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>
            </li>

            <li className="relative">
              <button
                type="button"
                className="group inline-flex h-11 items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                Resources
                <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>
            </li>
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/book-a-call"
            className="rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            Book a Call
          </Link>
          <Link
            href="/app"
            className="rounded-sm bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-900 hover:bg-gray-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}