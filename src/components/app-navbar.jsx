import Link from "next/link";
import Button from "./Button";
import MobileNavbar from "./mobile-navbar";

export default function AppNavbar() {
  return (
    <>
      <nav className="bg-[#F5F8FA] border-b dark:bg-black/40 dark:border-b-0">
        <div className="sm:hidden">
          <MobileNavbar />
        </div>
        <div className="hidden sm:block">
          <div className="flex flex-wrap justify-between items-center container mx-auto px-4 p-8">
            <div>
              <Link className="transition hover:opacity-50" href="/">
                <h1 className="text-3xl font-bold">SpyZr</h1>
              </Link>
            </div>
            <div>
              <ul className="flex flex-wrap items-center gap-8 font-light text-sm">
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
            <div>
              <ul className="flex flex-wrap items-center gap-4 font-light text-sm">
                <li>
                  <Button style="text-sm bg-slate-400/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 hover:opacity-70">Get Chrome Extension</Button>
                </li>
                <li>
                  <Button style="text-sm bg-slate-400/30 dark:bg-indigo-600/90 dark:text-white dark:hover:bg-indigo-700 hover:opacity-70">Sign In</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
