"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiSearchLine,
  RiNotification3Line,
  RiMenu3Line,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";

const links = [
  ["Home", "/"],
  ["Browse", "/browse"],
  ["How It Works", "/how-it-works"],
  ["Safety", "/safety"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="relative z-50 w-full bg-[#032F28] text-white">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Logo */}
        <Link
          href="/"
          aria-label="BataX home"
          className="shrink-0 text-[32px] font-extrabold tracking-[-1.5px]"
        >
          Bata<span className="text-[#C1FF25]">X</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden h-full items-center gap-5 lg:flex xl:gap-7"
        >
          {links.map(([label, href]) => {
            const active = isActive(href);

            return (
              <Link
                key={label}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative flex h-full items-center px-3 text-sm transition ${
                  active
                    ? "text-[#C1FF25] after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#C1FF25]"
                    : "text-white hover:text-[#C1FF25]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search */}
          <Link
            href="/browse"
            aria-label="Search items"
            className="text-[25px] transition hover:text-[#C1FF25]"
          >
            <RiSearchLine />
          </Link>

          {/* Notifications */}
          <Link
            href="/login"
            aria-label="Sign in to view notifications"
            className="hidden text-[24px] transition hover:text-[#C1FF25] sm:block"
          >
            <RiNotification3Line />
          </Link>

          {/* User */}
          <Link
            href="/login"
            className="hidden items-center gap-2 text-xs transition hover:text-[#C1FF25] sm:flex"
          >
            <Image
              src="/batax-avatar-woman-3.png"
              alt=""
              width={38}
              height={38}
              className="h-[38px] w-[38px] rounded-full object-cover"
            />

            <span>Hi, Amanda</span>

            <RiArrowDownSLine />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="text-2xl transition hover:text-[#C1FF25] lg:hidden"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 top-full w-full border-t border-white/10 bg-[#032F28] px-5 py-4 shadow-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
            {links.map(([label, href]) => {
              const active = isActive(href);

              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-[#C1FF25] font-semibold text-[#032F28]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <span>{label}</span>

                  {active && (
                    <span className="h-2 w-2 rounded-full bg-[#032F28]" />
                  )}
                </Link>
              );
            })}

            <div className="my-2 border-t border-white/10" />

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#C1FF25] transition hover:bg-white/10"
            >
              Sign in
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
