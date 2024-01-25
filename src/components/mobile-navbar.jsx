"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="relative px-4 py-4">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/">
          <h6 className="text-xl font-bold transition hover:opacity-50">SpyZr</h6>
        </Link>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
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
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } fixed top-14 left-0 w-full bg-[#F5F8FA] border-b dark:bg-black dark:border-b-0`}
        >
          <div className="flex flex-col justify-center items-center w-full py-4">
            <ul className="flex flex-col gap-1 text-sm font-light">
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
          <div className="flex flex-wrap justify-center items-center pb-4">
              <ul className="flex flex-wrap items-center gap-4 font-light text-sm">
                <li>
                  <Button style="text-sm font-light bg-slate-400/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 hover:opacity-70">Get Chrome Extension</Button>
                </li>
                <li>
                  <Button style="text-sm font-light bg-slate-400/30 dark:bg-indigo-600/90 dark:text-white dark:hover:bg-indigo-700 hover:opacity-70">Sign In</Button>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}
