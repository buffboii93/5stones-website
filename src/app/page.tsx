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
    description: "We recruit, train, and quality-control so you don&apos;t have to.",
  },
  {
    title: "Real estate expertise",
    description: "Our team understands the Singapore property market and workflow.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar />

      <main>
        <section className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-plum/80">5stones Group</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-tight font-semibold text-charcoal md:text-7xl">
            Focus on closing. We&apos;ll handle the rest.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-charcoal/80 md:text-xl">
            Dedicated personal assistants for Singapore&apos;s real estate professionals.
            Admin, marketing, lead generation — we handle it all so you can focus on
            closing deals.
          </p>
          <Link
            href="#contact"
            className="mt-10 inline-flex rounded-full bg-gold px-7 py-3 text-base font-semibold text-charcoal transition hover:bg-berry hover:text-cream"
          >
            Get in Touch
          </Link>
        </section>

        <section id="services" className="bg-white py-20 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">Services Overview</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="rounded-2xl bg-cream p-7 shadow-soft">
                  <p className="text-2xl">{service.icon}</p>
                  <h3 className="mt-4 text-xl font-semibold text-charcoal">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/75">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-5stones" className="py-20 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">Why 5stones</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {differentiators.map((item) => (
                <article key={item.title} className="rounded-2xl border border-charcoal/10 bg-white p-7">
                  <div className="h-2 w-12 rounded-full bg-berry" />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/75">{item.description}</p>
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

            <div className="mt-8 rounded-2xl border border-gold/40 bg-cream p-6 md:p-8">
              <p className="text-sm uppercase tracking-wider text-plum">Testimonials</p>
              <p className="mt-3 text-charcoal/70">
                Placeholder for client testimonials and success stories.
              </p>
            </div>

            <div className="mt-8 grid gap-4 text-center text-sm font-medium text-plum md:grid-cols-3">
              <div className="rounded-xl border border-charcoal/10 bg-cream px-4 py-4">15 PAs</div>
              <div className="rounded-xl border border-charcoal/10 bg-cream px-4 py-4">15 Agents</div>
              <div className="rounded-xl border border-charcoal/10 bg-cream px-4 py-4">Founded 2023</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
