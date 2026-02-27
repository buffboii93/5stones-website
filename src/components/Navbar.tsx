import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#why-5stones" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="5STONES Group logo"
            width={52}
            height={52}
            className="h-11 w-auto"
            priority
          />
          <span className="font-serif text-2xl font-semibold text-charcoal">5STONES Group</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm text-charcoal/80 transition hover:text-berry">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-charcoal transition hover:bg-berry hover:text-cream"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
