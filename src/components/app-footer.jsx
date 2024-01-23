import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="dark:bg-[#1E1E1E] rounded-t-2xl">
     <div className="container m-auto">
      <div className="p-8 sm:p-0">
        
        <div>
          <h6>SpyZr</h6>
          <p>
            Elevate your networking game with Spyzr! Seamlessly discover tested and verified business emails for professionals on LinkedIn.
            Effortlessly connect and power up your outreach strategy with confidence and precision.
            Which makes networking and outreach more efficient than ever.
          </p>
        </div>

        <div>
          <h6>Links</h6>
          <ul>
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
              <Link className="transition hover:opacity-50" href="#">FAQs</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h6>Legal</h6>
          <ul>
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
              <Link className="transition hover:opacity-50" href="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div>
          <h6>Company</h6>
          <ul>
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
      <p>&copy; {new Date().getFullYear()} SpyZr. All rights reserved</p>
     </div>
    </footer>
  )
}
