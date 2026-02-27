import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const services = [
  {
    icon: "🗂️",
    title: "Administrative Support",
    description:
      "From paperwork to scheduling, we keep your business running smoothly",
  },
  {
    icon: "📈",
    title: "Marketing & Lead Gen",
    description:
      "Social media management, property listings, and targeted outreach",
  },
  {
    icon: "🤝",
    title: "Deal Support",
    description: "Transaction coordination from offer to close",
  },
  {
    icon: "💻",
    title: "Digital Presence",
    description: "Content creation, social media, and online visibility",
  },
];

const differentiators = [
  {
    title: "Dedicated 1-to-1 support",
    description: "Each real estate agent gets a dedicated PA focused on your goals.",
  },
  {
    title: "Managed team",
    description: "We recruit, train, and quality-control so you don't have to.",
  },
  {
    title: "Real estate expertise",
    description: "Our team understands the Singapore property market and workflow.",
  },
];

const testimonials = [
  {
    quote:
      "Since partnering with 5STONES Group, I've been able to focus on what I do best — closing deals. My PA handles all my listings admin, social media posts, and client follow-ups. I closed 30% more deals in Bukit Timah last year because I wasn't drowning in paperwork.",
    name: "Rachel Tan",
    title: "Senior Associate",
    agency: "PropNex",
  },
  {
    quote:
      "I was skeptical about hiring a virtual PA, but 5STONES changed my mind. They understand the Singapore property market — from HDB resale timelines to condo launch procedures. My PA is basically part of my team now.",
    name: "David Lim",
    title: "Senior Marketing Director",
    agency: "ERA",
  },
  {
    quote:
      "Managing a team of 8 agents in the East side is no joke. 5STONES provides dedicated PAs for three of my top performers. The consistency and quality of support has been impressive — and it's freed up my agents to focus on viewings and negotiations.",
    name: "Sarah Ng",
    title: "Team Leader",
    agency: "Huttons",
  },
  {
    quote:
      "What sets 5STONES apart is the management layer. I don't just get a PA — I get a managed, trained assistant who understands real estate workflows. From Tampines HDB listings to Sentosa Cove showflats, they handle it all.",
    name: "Marcus Wong",
    title: "Associate Division Director",
    agency: "OrangeTee",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Navbar />

      <main>
        <section className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-plum/85">5STONES Group</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-tight font-semibold text-charcoal md:text-7xl">
            Focus on closing. We&apos;ll handle the rest.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-charcoal/85 md:text-xl">
            Dedicated personal assistants for Singapore&apos;s real estate professionals.
            Admin, marketing, lead generation — we handle it all so you can focus on
            closing deals.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-gold px-8 py-3 text-base font-semibold text-charcoal transition hover:bg-berry hover:text-cream"
          >
            Get in Touch
          </Link>
        </section>

        <section id="services" className="bg-white py-20 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">Services Overview</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-charcoal/10 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-2xl">{service.icon}</p>
                  <h3 className="mt-4 text-xl font-semibold text-charcoal">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-plum/90">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-5stones" className="bg-cream py-20 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">Why 5STONES Group</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {differentiators.map((item) => (
                <article key={item.title} className="rounded-2xl border border-charcoal/10 bg-white p-7 shadow-soft">
                  <div className="h-2 w-12 rounded-full bg-berry" />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-plum/90">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">Trusted by agents</h2>
            <p className="mt-5 text-lg text-charcoal/80">
              Trusted by 15+ real estate professionals in Singapore
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-2xl border border-charcoal/10 bg-white p-7 shadow-soft">
                  <p className="text-4xl leading-none text-gold">“</p>
                  <p className="mt-3 leading-relaxed text-plum/90">{testimonial.quote}</p>
                  <div className="mt-6 border-t border-charcoal/10 pt-4">
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-plum/90">
                      {testimonial.title}, {testimonial.agency}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 text-center text-sm font-medium text-plum md:grid-cols-3">
              <div className="rounded-xl border border-charcoal/10 bg-white px-4 py-4">15 PAs</div>
              <div className="rounded-xl border border-charcoal/10 bg-white px-4 py-4">15 Agents</div>
              <div className="rounded-xl border border-charcoal/10 bg-white px-4 py-4">Founded 2023</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
