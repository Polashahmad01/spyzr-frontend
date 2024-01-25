import Link from "next/link";

export default function MobileNavbar() {

  return (
    <nav className="px-4 py-4">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/">
          <h6 className="text-xl font-bold transition hover:opacity-50">SpyZr</h6>
        </Link>
        <button type="button" className="rounded focus:outline-none hover:bg-gray-200 group">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <div className="absolute top-0 right-0 opacity-0 w-8/12 h-screen bg-[#F5F8FA] dark:bg-black transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
            <ul className="text-sm font-light">
              <li>
                <Link className="transition hover:opacity-50" href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link className="transition hover:opacity-50" href="/features">Features</Link>
              </li>
              <li>
                <Link className="transition hover:opacity-50" href="/testimonials">Testimonials</Link>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </nav>
  )
}
