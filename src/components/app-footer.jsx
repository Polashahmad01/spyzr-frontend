import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function AppFooter() {
  return (
    <footer className="rounded-t-2xl border-t bg-[#F5F8FA] dark:border-t-0 dark:bg-[#1E1E1E]">
      <div className="px-4 py-4 sm:px-6 sm:py-6 sm:container sm:mx-auto">
        <div className="pb-4 flex flex-wrap flex-col gap-4 sm:pb-6 sm:flex-row sm:justify-between sm:items-end">
          <div className="sm:basis-4/12">
            <h6 className="text-xl font-bold mb-4 sm:mb-6 sm:text-2xl">SpyZr</h6>
            <p className="text-sm font-light">
              Elevate your networking game with Spyzr! Seamlessly discover tested and verified business emails for professionals on LinkedIn.
              Effortlessly connect and power up your outreach strategy with confidence and precision.
              Which makes networking and outreach more efficient than ever.
            </p>
          </div>
          <div>
            <h6 className="text-base font-medium mb-2 sm:mb-3">Links</h6>
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
              <li>
                <Link className="transition hover:opacity-50" href="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-base font-medium mb-2 sm:mb-3">Legal</h6>
            <ul className="flex flex-col gap-1 text-sm font-light">
              <li>
                <Link className="transition hover:opacity-50" href="/about">About Us</Link>
              </li>
              <li>
                <Link className="transition hover:opacity-50" href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link className="transition hover:opacity-50" href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link className="transition hover:opacity-50" href="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-base font-medium mb-2 sm:mb-3">Company</h6>
            <ul className="flex flex-col gap-1 text-sm font-light">
              <li>
                <Link className="transition hover:opacity-50" href="#">YouTube Channel</Link>
              </li>
              <li>
                <Link className="transition hover:opacity-50" href="#">Facebook Page</Link>
              </li>
              <li>
                <Link className="transition hover:opacity-50" href="#">Linkedin Page</Link>
              </li>
              <li>
                <Link className="transition hover:opacity-50" href="#">Email Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center border-t dark:border-teal-900 pt-4 sm:pt-6">
          <p className="text-xs font-light text-center sm:text-left">&copy; {new Date().getFullYear()} SpyZr. All rights reserved</p>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  )
}
