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
    description: "Your brand is your business. We manage your social media channels, design campaigns, and keep your online presence consistent and active — so you stay visible to the people that matter.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Laptop showing marketing analytics dashboard",
  },
  {
    title: "Paperwork & Admin",
    description: "The admin never stops — but it doesn't have to be your problem. We handle documentation, data entry, filing, and follow-ups so nothing slips through the cracks.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    alt: "Organized desk with paperwork and documents",
  },
  {
    title: "Calendar & Appointment Management",
    description: "A missed appointment is a missed opportunity. We manage your schedule end-to-end — coordinating meetings, sending reminders, and making sure your day runs smoothly.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    alt: "Calendar planning and schedule management",
  },
  {
    title: "Content Creation",
    description: "Great content builds trust. From social media posts to marketing collateral and presentation decks — we produce polished, on-brand content that gets you noticed.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative workspace for content creation",
  },
];

const differentiators = [
  { title: "Dedicated 1-to-1 Support", description: "Every client gets a dedicated PA who learns your workflow, your preferences, and your business. No sharing, no rotation — just consistent support from someone who knows how you work." },
  { title: "Managed & Trained Team", description: "Our PAs are professionally recruited, trained, and managed. You get reliable, quality-controlled support — without the hassle of hiring, training, or managing someone yourself." },
  { title: "More Than Just a PA", description: "Your PA is backed by an entire support ecosystem — in-house designers, customer success managers, and shared resources. When your PA needs help, they have a team behind them to deliver." },
];

const testimonials = [
  { quote: "Since partnering with 5STONES Group, I can finally stay focused on growth. My PA handles admin, scheduling, social media coordination, and follow-ups without dropping the ball.", name: "R.T.", title: "Business Owner", agency: "Professional Services" },
  { quote: "I was skeptical about outsourcing support at first, but 5STONES changed my mind. My PA feels like part of the team and keeps operations running smoothly every day.", name: "D.L.", title: "Marketing Lead", agency: "E-commerce" },
  { quote: "Managing a fast-moving team is intense. 5STONES gives our key people dedicated PAs, and the quality and consistency have been excellent.", name: "S.N.", title: "Operations Manager", agency: "Education" },
  { quote: "What sets 5STONES apart is the managed model. You don't just get one assistant — you get a trained PA backed by a support team that helps deliver reliably.", name: "M.W.", title: "General Manager", agency: "Consulting" },
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
            <h1 className="max-w-2xl font-serif text-5xl leading-tight font-semibold text-charcoal md:text-7xl">Focus on growth. We&apos;ll handle the rest.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-charcoal/85 md:text-xl">Dedicated virtual assistants for Singapore&apos;s busiest professionals. Admin, marketing, scheduling, content — we handle it all so you can focus on what you do best.</p>
            <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} className="mt-10">
              <Link href="/contact" className="inline-flex rounded-xl bg-gold px-8 py-3 text-base font-semibold text-charcoal shadow-sm transition hover:shadow-lg hover:bg-berry hover:text-cream">Get in Touch</Link>
            </motion.div>
          </div>
          <motion.div style={{ y: heroImageY }} className="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl md:h-[520px]">
            <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80" alt="Professional team collaborating in a modern office" fill className="object-cover" priority />
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
                  <div className="relative aspect-[4/3] w-full"><Image src={service.image} alt={service.alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" /></div>
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
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Business team collaborating in a meeting room" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">Trusted by growing teams</h2>
            <p className="mt-5 text-lg text-charcoal/80">Trusted by businesses across multiple industries in Singapore</p>
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
