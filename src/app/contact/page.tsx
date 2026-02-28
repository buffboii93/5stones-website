"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setFeedback("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message. Please try again.");
      }

      setSubmitState("success");
      setFeedback("Thanks — your message has been sent. We’ll get back to you soon.");
      event.currentTarget.reset();
    } catch (error) {
      setSubmitState("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Navbar />

      <main className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(191,180,143,0.2),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(144,78,85,0.14),_transparent_45%)]" />

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-plum/85">Contact</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">Let&apos;s Talk</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/85">
            Tell us where you need support, and we&apos;ll match you with the right dedicated VA for your workflow.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-2xl border border-charcoal/10 bg-white/90 p-7 shadow-soft backdrop-blur"
            >
              <h2 className="font-serif text-2xl font-semibold">Send us a message</h2>
              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-charcoal/20 bg-white px-4 py-3 outline-none transition focus:border-berry"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-charcoal/20 bg-white px-4 py-3 outline-none transition focus:border-berry"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-charcoal">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+65 8064 3906"
                    required
                    className="w-full rounded-xl border border-charcoal/20 bg-white px-4 py-3 outline-none transition focus:border-berry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help?"
                    required
                    className="w-full rounded-xl border border-charcoal/20 bg-white px-4 py-3 outline-none transition focus:border-berry"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="inline-flex rounded-xl bg-gold px-8 py-3 text-base font-semibold text-charcoal shadow-sm transition hover:bg-berry hover:text-cream hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState === "submitting" ? "Sending..." : "Send Message"}
                </motion.button>

                {feedback ? (
                  <p
                    className={`text-sm ${
                      submitState === "success" ? "text-emerald-700" : submitState === "error" ? "text-red-700" : "text-charcoal"
                    }`}
                  >
                    {feedback}
                  </p>
                ) : null}
              </form>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="space-y-6"
            >
              <article className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white/90 shadow-soft backdrop-blur">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80"
                    alt="Modern meeting room in a professional office"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h2 className="font-serif text-2xl font-semibold">Contact details</h2>
                  <ul className="mt-5 space-y-3 text-plum/90">
                    <li>
                      <span className="font-semibold text-charcoal">Email:</span> hello@5stonesgroup.com
                    </li>
                    <li>
                      <span className="font-semibold text-charcoal">Phone:</span>{" "}
                      <a href="https://wa.me/6580643906" target="_blank" rel="noreferrer" className="hover:text-berry">
                        +65 8064 3906
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold text-charcoal">Location:</span> Singapore
                    </li>
                  </ul>
                </div>
              </article>
            </motion.section>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
