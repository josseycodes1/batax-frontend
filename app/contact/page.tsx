"use client";

import { FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import {
  RiArrowLeftRightLine,
  RiArrowRightLine,
  RiCustomerService2Line,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiMessage3Line,
  RiSendPlaneLine,
  RiTwitterXLine,
} from "react-icons/ri";

const contactMethods = [
  {
    icon: RiCustomerService2Line,
    title: "General Support",
    text: "Questions about your account, listings or using BataX.",
    value: "support@batax.com",
    href: "mailto:support@batax.com",
  },
  {
    icon: RiMailLine,
    title: "Partnerships",
    text: "Want to work with BataX or discuss a partnership?",
    value: "hello@batax.com",
    href: "mailto:hello@batax.com",
  },
  {
    icon: RiMessage3Line,
    title: "Safety & Reports",
    text: "Need help with a suspicious listing, member or exchange?",
    value: "safety@batax.com",
    href: "mailto:safety@batax.com",
  },
];

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect this form to your Django API later.
  }

  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#032F28]">
      <Navbar />

      {/* Brand inspiration */}
      <section className="bg-[#032F28]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-12 xl:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#C1FF25]">
              The idea behind BataX
            </p>

            <h1 className="mt-3 max-w-[650px] text-[34px] font-extrabold leading-[1.08] tracking-[-1px] text-white sm:text-[40px]">
              Value does not always have to begin with money.
            </h1>

            <p className="mt-4 max-w-[610px] text-sm leading-6 text-white/75 sm:text-base">
              BataX was inspired by a simple idea: people already own things
              that have value, and sometimes someone else has exactly what they
              need.
            </p>

            <p className="mt-3 max-w-[610px] text-sm leading-6 text-white/75">
              Instead of every exchange beginning with money, what if we could
              help two people discover that what one has could be exchanged for
              what the other has?
            </p>
          </div>

          <div className="rounded-[20px] bg-[#C1FF25] p-6">
            <RiArrowLeftRightLine className="text-3xl" />

            <p className="mt-5 text-xs font-semibold uppercase tracking-[1.5px] text-[#5E8000]">
              What we believe
            </p>

            <h2 className="mt-2 text-2xl font-bold leading-[1.2]">
              What you have could be exactly what someone else needs.
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#38534C]">
              BataX exists to make those connections easier to discover and
              safer to explore.
            </p>
          </div>
        </div>
      </section>

      {/* Contact intro */}
      <section className="pb-8 pt-12">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[650px]">
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#719B15]">
              Contact BataX
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.6px] sm:text-[28px]">
              We would love to hear from you.
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#5D6D68]">
              Need support, want to share feedback, report a concern or discuss
              working with BataX? Choose the best way to reach us.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {contactMethods.map(({ icon: Icon, title, text, value, href }) => (
              <a
                key={title}
                href={href}
                className="group rounded-[18px] border border-[#E4E8E0] bg-white p-5 transition hover:-translate-y-1 hover:bg-[#F7FAF2]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C1FF25] text-xl">
                  <Icon />
                </div>

                <h3 className="mt-4 text-sm font-bold">{title}</h3>

                <p className="mt-2 min-h-[40px] text-sm leading-5 text-[#5D6D68]">
                  {text}
                </p>

                <p className="mt-4 border-t border-[#E8ECE6] pt-4 text-xs font-semibold">
                  {value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-12 pt-5">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 xl:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#719B15]">
              Send us a message
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.6px] sm:text-[28px]">
              How can we help?
            </h2>

            <p className="mt-3 max-w-[400px] text-sm leading-6 text-[#5D6D68]">
              Fill in the form and your message can be directed to the
              appropriate BataX team.
            </p>

            <div className="mt-7">
              <p className="text-xs font-semibold text-[#5D6D68]">
                Connect with BataX
              </p>

              <div className="mt-3 flex gap-2">
                <Link
                  href="#"
                  aria-label="BataX on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#032F28] text-base text-white transition hover:bg-[#C1FF25] hover:text-[#032F28]"
                >
                  <RiInstagramLine />
                </Link>

                <Link
                  href="#"
                  aria-label="BataX on X"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#032F28] text-base text-white transition hover:bg-[#C1FF25] hover:text-[#032F28]"
                >
                  <RiTwitterXLine />
                </Link>

                <Link
                  href="#"
                  aria-label="BataX on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#032F28] text-base text-white transition hover:bg-[#C1FF25] hover:text-[#032F28]"
                >
                  <RiLinkedinBoxLine />
                </Link>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[20px] bg-[#F3F5EB] p-5 sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                <span className="text-xs font-semibold">First name</span>

                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="Your first name"
                  className="mt-2 h-11 w-full rounded-[10px] border border-[#D9DED8] bg-white px-4 text-sm outline-none transition focus:border-[#032F28]"
                />
              </label>

              <label>
                <span className="text-xs font-semibold">Last name</span>

                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Your last name"
                  className="mt-2 h-11 w-full rounded-[10px] border border-[#D9DED8] bg-white px-4 text-sm outline-none transition focus:border-[#032F28]"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-xs font-semibold">Email address</span>

              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-2 h-11 w-full rounded-[10px] border border-[#D9DED8] bg-white px-4 text-sm outline-none transition focus:border-[#032F28]"
              />
            </label>

            <label className="mt-4 block">
              <span className="text-xs font-semibold">
                What can we help with?
              </span>

              <select
                name="subject"
                defaultValue=""
                required
                className="mt-2 h-11 w-full rounded-[10px] border border-[#D9DED8] bg-white px-4 text-sm outline-none transition focus:border-[#032F28]"
              >
                <option value="" disabled>
                  Select a subject
                </option>

                <option value="support">General Support</option>
                <option value="safety">Safety or Report</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Product Feedback</option>
                <option value="other">Something Else</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="text-xs font-semibold">Message</span>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us more..."
                className="mt-2 w-full resize-none rounded-[10px] border border-[#D9DED8] bg-white p-4 text-sm outline-none transition focus:border-[#032F28]"
              />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#C1FF25] px-6 py-3 text-xs font-bold transition hover:bg-[#AEEC18]"
            >
              Send Message
              <RiSendPlaneLine className="text-base" />
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#032F28]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center lg:px-12 xl:px-16">
          <div>
            <p className="text-xs font-semibold text-[#C1FF25]">
              Have it. Want it. BataX it.
            </p>

            <h2 className="mt-1 text-xl font-bold text-white">
              Ready to see what is available?
            </h2>
          </div>

          <Link
            href="/browse"
            className="inline-flex items-center gap-2 rounded-full bg-[#C1FF25] px-6 py-3 text-xs font-bold"
          >
            Browse Items
            <RiArrowRightLine />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
