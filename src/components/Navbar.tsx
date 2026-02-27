"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#why-5stones" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-charcoal/10 bg-white/80 shadow-md backdrop-blur-xl"
          : "border-charcoal/5 bg-white/95 backdrop-blur"
      }`}
    >
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

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-charcoal shadow-sm transition hover:bg-berry hover:text-cream hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
