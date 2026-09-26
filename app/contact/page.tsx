"use client";

import { FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import {
  RiArrowLeftRightLine,
  RiArrowRightUpLine,
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
    text: "Interested in working with BataX or exploring a partnership?",
    value: "hello@batax.com",
    href: "mailto:hello@batax.com",
  },
  {
    icon: RiMessage3Line,
    title: "Safety & Reports",
    text: "Need help with a suspicious listing, user or exchange?",
    value: "safety@batax.com",
    href: "mailto:safety@batax.com",
  },
];

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect this to the Django contact endpoint later.
  }

  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#032F28]">
      <Navbar />

      <section className="overflow-hidden bg-[#032F28]">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-12 lg:py-24 xl:px-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#C1FF25]">
              The thinking behind BataX
            </p>

            <h1 className="mt-4 max-w-[720px] text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-white sm:text-[54px]">
              Sometimes you have value. It just is not money.
            </h1>

            <p className="mt-6 max-w-[650px] text-base leading-7 text-white/75">
              BataX started with a simple observation: someone can have
              something valuable and still be unable or unwilling to spend money
              on the next thing they need.
            </p>

            <p className="mt-4 max-w-[650px] text-base leading-7 text-white/75">
              Somewhere else, another person may already have exactly what they
              need and may want exactly what the first person has. Traditional
              barter understood this. BataX brings that idea into a modern,
              searchable and trust-focused digital experience.
            </p>
          </div>

          <div className="relative rounded-[34px] bg-[#C1FF25] p-8 sm:p-10">
            <RiArrowLeftRightLine className="text-[54px]" />

            <p className="mt-8 text-sm font-semibold uppercase tracking-[1.5px] text-[#547300]">
              Our belief
            </p>

            <blockquote className="mt-3 text-[28px] font-bold leading-[1.2] tracking-[-0.8px] sm:text-[34px]">
              What you already have could be exactly what someone else is
              looking for.
            </blockquote>

            <p className="mt-6 text-sm leading-6 text-[#38534C]">
              BataX exists to help those two people find each other and make
              that exchange with greater confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-sm font-bold uppercase tracking-[2px] text-[#719B15]">
              Talk to BataX
            </p>

            <h2 className="mt-3 text-[32px] font-extrabold sm:text-[40px]">
              We would love to hear from you.
            </h2>

            <p className="mt-5 leading-7 text-[#667771]">
              Whether you need support, want to report something, have a
              partnership idea or simply want to learn more about BataX, there
              is a way to reach us.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {contactMethods.map(({ icon: Icon, title, text, value, href }) => (
              <a
                key={title}
                href={href}
                className="group rounded-[26px] border border-[#E2E7DF] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#C1FF25] p-3 text-2xl">
                  <Icon />
                </div>

                <h3 className="mt-6 text-lg font-bold">{title}</h3>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#667771]">
                  {text}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#E7EBE5] pt-5">
                  <span className="text-sm font-semibold">{value}</span>
                  <RiArrowRightUpLine className="text-xl transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1F5E9] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[2px] text-[#719B15]">
              Send a message
            </p>

            <h2 className="mt-3 text-[32px] font-extrabold leading-tight">
              Tell us how we can help.
            </h2>

            <p className="mt-5 leading-7 text-[#667771]">
              Send us a message and the appropriate BataX team can follow up
              with you.
            </p>

            <div className="mt-9">
              <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#72817C]">
                Follow BataX
              </p>

              <div className="mt-4 flex gap-3">
                <Link
                  href="#"
                  aria-label="BataX on Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#032F28] text-xl text-white transition hover:bg-[#C1FF25] hover:text-[#032F28]"
                >
                  <RiInstagramLine />
                </Link>

                <Link
                  href="#"
                  aria-label="BataX on X"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#032F28] text-xl text-white transition hover:bg-[#C1FF25] hover:text-[#032F28]"
                >
                  <RiTwitterXLine />
                </Link>

                <Link
                  href="#"
                  aria-label="BataX on LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#032F28] text-xl text-white transition hover:bg-[#C1FF25] hover:text-[#032F28]"
                >
                  <RiLinkedinBoxLine />
                </Link>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[30px] bg-white p-6 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold">First name</span>
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="Your first name"
                  className="mt-2 h-12 w-full rounded-xl border border-[#D8DFD9] bg-[#FFFCF7] px-4 text-sm outline-none transition focus:border-[#032F28]"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold">Last name</span>
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Your last name"
                  className="mt-2 h-12 w-full rounded-xl border border-[#D8DFD9] bg-[#FFFCF7] px-4 text-sm outline-none transition focus:border-[#032F28]"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-semibold">Email address</span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-2 h-12 w-full rounded-xl border border-[#D8DFD9] bg-[#FFFCF7] px-4 text-sm outline-none transition focus:border-[#032F28]"
              />
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-semibold">
                What can we help with?
              </span>

              <select
                name="subject"
                defaultValue=""
                required
                className="mt-2 h-12 w-full rounded-xl border border-[#D8DFD9] bg-[#FFFCF7] px-4 text-sm outline-none transition focus:border-[#032F28]"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="support">General support</option>
                <option value="safety">Safety or report</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Product feedback</option>
                <option value="other">Something else</option>
              </select>
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-semibold">Message</span>

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us more..."
                className="mt-2 w-full resize-none rounded-xl border border-[#D8DFD9] bg-[#FFFCF7] p-4 text-sm outline-none transition focus:border-[#032F28]"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#C1FF25] px-7 py-3.5 text-sm font-bold transition hover:bg-[#AEEC18]"
            >
              Send Message
              <RiSendPlaneLine className="text-lg" />
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <RiArrowLeftRightLine className="mx-auto text-4xl text-[#719B15]" />

          <h2 className="mt-5 text-[30px] font-extrabold">
            Have it. Want it. BataX it.
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] leading-7 text-[#667771]">
            We are building a different way for people to access what they need
            by recognizing the value in what they already have.
          </p>

          <Link
            href="/browse"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#032F28] px-7 py-3.5 text-sm font-bold text-white"
          >
            Explore BataX
            <RiArrowRightUpLine />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
