"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiSearchLine, RiNotification3Line, RiMenu3Line, RiCloseLine, RiArrowDownSLine } from "react-icons/ri";

const links = [["Home", "/"], ["Browse", "/browse"], ["How It Works", "/how-it-works"], ["Safety", "/safety"], ["Blog", "/blog"]];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative z-50 w-full bg-[#032F28] text-white">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link href="/" aria-label="BataX home" className="text-[32px] font-extrabold tracking-[-1.5px]">Bata<span className="text-[#C1FF25]">X</span></Link>
        <nav aria-label="Main navigation" className="hidden h-full items-center gap-5 lg:flex xl:gap-7">
          {links.map(([label, href], index) => (
            <Link key={label} href={href} aria-current={index === 0 ? "page" : undefined} className={`relative flex h-full items-center px-3 text-sm transition hover:text-[#C1FF25] ${index === 0 ? "after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#C1FF25]" : ""}`}>{label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/browse" aria-label="Search items" className="text-[25px] transition hover:text-[#C1FF25]"><RiSearchLine /></Link>
          <Link href="/login" aria-label="Sign in to view notifications" className="hidden text-[24px] transition hover:text-[#C1FF25] sm:block"><RiNotification3Line /></Link>
          <Link href="/login" className="hidden items-center gap-2 text-xs sm:flex">
            <Image src="/batax-avatar-woman-3.png" alt="" width={38} height={38} className="rounded-full" />
            <span>Hi, Amanda</span><RiArrowDownSLine />
          </Link>
          <button type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="text-2xl lg:hidden">{menuOpen ? <RiCloseLine /> : <RiMenu3Line />}</button>
        </div>
      </div>
      {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col gap-1 border-t border-white/10 px-5 py-4 lg:hidden">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-white/10">{label}</Link>)}<Link href="/login" className="px-3 py-2 text-sm text-[#C1FF25]">Sign in</Link></nav>}
    </header>
  );
}
