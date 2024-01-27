"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toogleMobileMenuOpen() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="px-4 py-4">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/">
          <h6 className="text-xl font-bold transition hover:opacity-50">SpyZr</h6>
        </Link>
        <button
          type="button"
          className="rounded hover:opacity-50"
          onClick={toogleMobileMenuOpen}
        >
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
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="py-2">
          <ul className="flex flex-col flex-wrap place-content-center gap-2 font-light text-sm">
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
      )}
    </nav>
  )
}
