import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiPlayLine, RiArrowLeftRightLine } from "react-icons/ri";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#FAFBF4]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 pb-8 pt-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4 lg:px-12 lg:pb-9 xl:px-16">
        <div className="relative z-10">
          <h1 className="text-[36px] font-extrabold leading-[1.04] tracking-[-1.8px] text-[#032F28] sm:text-[54px] lg:text-[56px] xl:text-[60px]">
            Exchange<br />More. Spend<br />Less. Live Better.
          </h1>
          <p className="mt-4 max-w-[530px] text-[17px] leading-[1.5] text-[#183D35] sm:text-[18px]">
            BataX is a secure platform where people exchange items they have for things they need — no money involved.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/register" className="inline-flex items-center gap-3 rounded-full bg-[#C1FF25] px-7 py-3.5 text-[15px] font-bold text-[#032F28] transition hover:bg-[#AEEC18]">
              Start an Exchange <RiArrowRightLine className="text-xl" />
            </Link>
            <Link href="/how-it-works" className="inline-flex items-center gap-3 rounded-full border border-[#032F28]/40 px-7 py-3.5 text-[15px] text-[#032F28] transition hover:bg-white">
              <RiPlayLine className="text-2xl" /> How It Works
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex shrink-0 -space-x-2">
              {["man", "woman", "woman-2", "woman-3"].map((person) => (
                <span key={person} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#FAFBF4] bg-[#DCE6D5]">
                  <Image src={`/batax-avatar-${person}.png`} alt="" fill sizes="40px" className="object-cover" />
                </span>
              ))}
            </div>
            <p className="max-w-[260px] text-sm leading-5 text-[#183D35]">10,000+ people are already exchanging on BataX</p>
          </div>
        </div>
        <div className="relative mx-auto aspect-[1.25] w-full max-w-[650px] lg:aspect-[1.35]">
          <div aria-hidden="true" className="absolute bottom-[9%] left-[20%] h-[79%] w-[68%] -rotate-12 rounded-[44%_56%_35%_48%] bg-[#DEF0B9]" />
          <div aria-hidden="true" className="absolute right-[12%] top-[1%] h-[34%] w-[26%] rotate-12 rounded-[40%] bg-[#D7EBB0]" />
          <div className="absolute left-0 top-[2%] z-20 flex w-[34%] items-center gap-2 rounded-[20px] bg-white p-3 shadow-[0_3px_14px_#032f2814] sm:p-4">
            <div className="relative aspect-square w-[48%] shrink-0 overflow-hidden rounded-lg">
              <Image src="/batax-books.png" alt="Books available to exchange" fill sizes="100px" className="object-cover" />
            </div>
            <p className="text-[10px] leading-[1.5] text-[#555] sm:text-xs">Your Item<br /><strong className="font-semibold text-[#082D26]">Books</strong><br />(Literature)</p>
            <Image src="/batax-avatar-woman.png" alt="" width={34} height={34} className="absolute -bottom-2 right-8 rounded-full border-2 border-white" />
          </div>
          <div className="absolute right-0 top-[2%] z-20 w-[20%] rounded-[20px] bg-white p-3 text-center shadow-[0_3px_14px_#032f2814]">
            <div className="relative aspect-square w-full">
              <Image src="/batax-camera.png" alt="DSLR camera offered in exchange" fill sizes="100px" className="object-contain" />
            </div>
            <p className="mt-2 text-[10px] leading-[1.5] text-[#555] sm:text-xs">Their Item<br /><strong className="font-semibold text-[#082D26]">Camera</strong><br />(DSLR)</p>
            <Image src="/batax-avatar-woman-2.png" alt="" width={34} height={34} className="absolute -left-4 bottom-4 rounded-full border-2 border-white" />
          </div>
          <span className="absolute right-[23%] top-[8%] z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[28px] text-[#032F28]">
            <RiArrowLeftRightLine />
          </span>
          <div className="absolute bottom-0 left-0 z-10 h-[96%] w-[91%]">
            <Image src="/batax-hero.png" alt="Smiling woman holding books and a camera ready for an exchange" fill preload sizes="(min-width: 1440px) 590px, (min-width: 1024px) 48vw, 90vw" className="object-contain object-bottom" />
          </div>
          <div className="absolute bottom-[3%] right-[-1%] z-30 flex aspect-[1.3] w-[27%] -rotate-12 items-center justify-center rounded-[38%_35%_35%_30%] bg-[#D4FF69] p-3 text-center">
            <p className="font-serif text-[10px] font-bold italic leading-snug text-[#032F28] sm:text-[17px]"><span className="text-base sm:text-xl">Trade</span><br /><span className="whitespace-nowrap">what you have</span><br /><span className="whitespace-nowrap">for what you need</span></p>
          </div>
          <span aria-hidden="true" className="absolute left-[9%] top-[43%] h-7 w-0.5 -rotate-25 bg-[#8CBC17]" />
          <span aria-hidden="true" className="absolute left-[5%] top-[48%] h-6 w-0.5 -rotate-60 bg-[#8CBC17]" />
        </div>
      </div>
    </section>
  );
}
