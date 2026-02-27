import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <h3 className="font-serif text-3xl font-semibold">5stones</h3>
          <p className="mt-4 max-w-md text-sm text-cream/80">
            Dedicated personal assistants for Singapore&apos;s real estate professionals.
            We help you stay organised, visible, and focused on closing deals.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link href="#" className="hover:text-gold">Home</Link></li>
            <li><Link href="#services" className="hover:text-gold">Services</Link></li>
            <li><Link href="#why-5stones" className="hover:text-gold">About</Link></li>
            <li>
              <Link href="https://whitedoors.vercel.app" target="_blank" className="hover:text-gold">
                Whitedoors
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <a href="mailto:hello@5stonesgroup.com" className="hover:text-gold">hello@5stonesgroup.com</a>
            </li>
            <li>
              <a href="tel:+6590000000" className="hover:text-gold">+65 9000 0000</a>
            </li>
            <li>Singapore</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 text-xs text-cream/60 md:px-8">
          <p>© {new Date().getFullYear()} 5stones Group. All rights reserved.</p>
          <p>Built for real estate professionals in Singapore.</p>
        </div>
      </div>
    </footer>
  );
}
