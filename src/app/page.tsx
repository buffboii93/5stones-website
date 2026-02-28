"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const services = [
  {
    title: "Marketing & Brand Management",
    description: "Build a recognizable personal brand. We manage your social media presence, create targeted campaigns, and position you as the go-to agent in your area.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    alt: "Organized office desk with documents and laptop",
  },
  {
    title: "Paperwork & Admin",
    description: "Never get buried in paperwork again. From contracts to compliance documents, we handle the administrative load so nothing falls through the cracks.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    alt: "Person analyzing social media performance on smartphone",
  },
  {
    title: "Calendar & Appointment Management",
    description: "Stay on top of every viewing, meeting, and deadline. We coordinate your schedule, send reminders, and ensure your calendar runs like clockwork.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    alt: "Two professionals shaking hands over a real estate agreement",
  },
  {
    title: "Content Creation",
    description: "Stand out with professional content. From property listings to social media posts and marketing collateral — we create content that gets you noticed.",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80",
    alt: "Laptop with digital dashboard and content planning notes",
  },
];

const differentiators = [
  { title: "Dedicated 1-to-1 Support", description: "Each client gets their own dedicated PA focused on your goals." },
  { title: "Managed & Trained Team", description: "Our PAs are professionally trained and managed. You get a reliable, quality-controlled support system — not a freelancer you have to manage yourself." },
  { title: "More Than Just a PA", description: "Your PA is backed by an entire support team — in-house designers, customer success managers, and internal resources — all working behind the scenes to deliver the best possible support." },
];

const testimonials = [
  { quote: "Since partnering with 5STONES Group, I've been able to focus on what I do best — closing deals. My PA handles all my listings admin, social media posts, and client follow-ups.", name: "R.T.", title: "Senior Associate", agency: "PropNex" },
  { quote: "I was skeptical about hiring a virtual PA, but 5STONES changed my mind. They understand the Singapore property market and my PA is basically part of my team now.", name: "D.L.", title: "Senior Marketing Director", agency: "ERA" },
  { quote: "Managing a team of agents is no joke. 5STONES provides dedicated PAs for my top performers. The consistency and quality have been impressive.", name: "S.N.", title: "Team Leader", agency: "Huttons" },
  { quote: "What sets 5STONES apart is the management layer. I don't just get a PA — I get a managed, trained assistant who understands real estate workflows.", name: "M.W.", title: "Associate Division Director", agency: "OrangeTee" },
];

function InitialsAvatar({ name }: { name: string }) {
  const letters = name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
  return <div className="flex h-10 w-10 items-center justify-center rounded-full bg-berry/15 text-sm font-semibold text-berry">{letters}</div>;
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 36]);

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Navbar />
      <main>
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto grid w-full max-w-6xl gap-10 overflow-hidden px-5 py-16 md:grid-cols-2 md:px-8 md:py-24"
        >
          <div className="relative z-10 flex flex-col justify-center">
            <h1 className="max-w-2xl font-serif text-5xl leading-tight font-semibold text-charcoal md:text-7xl">Focus on closing. We&apos;ll handle the rest.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-charcoal/85 md:text-xl">Dedicated personal assistants for Singapore&apos;s real estate professionals. Admin, marketing, lead generation — we handle it all so you can focus on closing deals.</p>
            <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} className="mt-10">
              <Link href="/contact" className="inline-flex rounded-xl bg-gold px-8 py-3 text-base font-semibold text-charcoal shadow-sm transition hover:shadow-lg hover:bg-berry hover:text-cream">Get in Touch</Link>
            </motion.div>
          </div>
          <motion.div style={{ y: heroImageY }} className="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl md:h-[520px]">
            <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80" alt="Professional team collaborating in a modern Singapore office" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/35 via-transparent to-gold/25" />
          </motion.div>
        </motion.section>

        <div className="h-20 bg-gradient-to-b from-white to-cream/70" />

        <motion.section id="services" initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="bg-white py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">Services Overview</h2>
            <motion.div initial={{ opacity: 1, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service, idx) => (
                <motion.article key={service.title} initial={{ opacity: 1, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -4, scale: 1.01 }} className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-soft transition hover:shadow-xl">
                  <div className="relative h-40 w-full"><Image src={service.image} alt={service.alt} fill className="object-cover" /></div>
                  <div className="p-7"><h3 className="text-xl font-semibold text-charcoal">{service.title}</h3><p className="mt-3 leading-relaxed text-plum/90">{service.description}</p></div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <div className="h-20 bg-gradient-to-b from-white to-cream/90" />

        <motion.section id="why-5stones" initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-cream py-16 md:py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 md:grid-cols-[1.2fr_1fr] md:px-8">
            <div>
              <h2 className="font-serif text-4xl font-semibold md:text-5xl">Why 5STONES Group</h2>
              <div className="mt-12 grid gap-6 md:grid-cols-1">
                {differentiators.map((item, idx) => (
                  <motion.article key={item.title} initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: idx * 0.08 }} className="rounded-2xl border border-charcoal/10 bg-white p-7 shadow-soft">
                    <div className="h-2 w-12 rounded-full bg-berry" />
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-plum/90">{item.description}</p>
                  </motion.article>
                ))}
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-xl">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Real estate team collaborating in a meeting room" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">Trusted by agents</h2>
            <p className="mt-5 text-lg text-charcoal/80">Trusted by 15+ real estate professionals in Singapore</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, idx) => (
                <motion.article key={testimonial.name} initial={{ opacity: 1, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="rounded-2xl border border-charcoal/10 bg-white p-7 shadow-soft">
                  <p className="text-5xl leading-none text-gold/90">“</p>
                  <p className="mt-3 leading-relaxed text-plum/90">{testimonial.quote}</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-charcoal/10 pt-4">
                    <InitialsAvatar name={testimonial.name} />
                    <div><p className="font-semibold text-charcoal">{testimonial.name}</p><p className="text-sm text-plum/90">{testimonial.title}, {testimonial.agency}</p></div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
