import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-cream text-charcoal">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <h3 className="font-serif text-3xl font-semibold">5STONES Group</h3>
          <p className="mt-4 max-w-md text-sm text-plum/90">
            Dedicated virtual assistants for Singapore businesses across industries.
            We help you stay organised, visible, and focused on growth.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-charcoal">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-plum/90">
            <li><Link href="#" className="hover:text-berry">Home</Link></li>
            <li><Link href="#services" className="hover:text-berry">Services</Link></li>
            <li><Link href="#why-5stones" className="hover:text-berry">About</Link></li>
            <li>
              <Link href="https://whitedoors.vercel.app" target="_blank" className="hover:text-berry">
                Whitedoors
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-charcoal">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-plum/90">
            <li>
              <a href="mailto:hello@5stonesgroup.com" className="hover:text-berry">hello@5stonesgroup.com</a>
            </li>
            <li>
              <a href="https://wa.me/6580643906" target="_blank" rel="noreferrer" className="hover:text-berry">+65 8064 3906</a>
            </li>
            <li>Singapore</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 text-xs text-plum/90 md:px-8">
          <p>© {new Date().getFullYear()} 5STONES Group. All rights reserved.</p>
          <p>Built for modern businesses in Singapore.</p>
        </div>
      </div>
    </footer>
  );
}
