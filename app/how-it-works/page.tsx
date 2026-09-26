import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ExchangeBanner from "@/components/home/ExchangeBanner";
import {
  RiArrowLeftRightLine,
  RiArrowRightLine,
  RiCameraLensLine,
  RiChat3Line,
  RiCheckboxCircleFill,
  RiFileList3Line,
  RiSearchEyeLine,
  RiShieldCheckLine,
} from "react-icons/ri";

const steps = [
  {
    number: "1",
    icon: RiShieldCheckLine,
    title: "Create & Verify Your Account",
    text: "Create your BataX account and complete the required verification to start participating in exchanges.",
  },
  {
    number: "2",
    icon: RiFileList3Line,
    title: "List Your Item",
    text: "Add clear photos, the item's condition, description, location and other useful information.",
  },
  {
    number: "3",
    icon: RiCameraLensLine,
    title: "Verify Possession",
    text: "Selected listings may require extra proof that you actually possess the item being offered.",
  },
  {
    number: "4",
    icon: RiSearchEyeLine,
    title: "Tell Us What You Want",
    text: "Choose a specific item, category, alternatives or remain open to suitable exchange offers.",
  },
  {
    number: "5",
    icon: RiChat3Line,
    title: "Find & Discuss a Match",
    text: "Discover compatible people, review their items and send or respond to an exchange proposal.",
  },
  {
    number: "6",
    icon: RiArrowLeftRightLine,
    title: "Meet & Exchange",
    text: "Follow BataX safety guidance, inspect the items and confirm the exchange when both sides are satisfied.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#032F28]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#032F28]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-12 xl:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#C1FF25]">
              How BataX Works
            </p>

            <h1 className="mt-3 text-[34px] font-extrabold leading-[1.08] tracking-[-1px] text-white sm:text-[40px]">
              What you have could get you what you need.
            </h1>

            <p className="mt-4 max-w-[570px] text-sm leading-6 text-white/75 sm:text-base">
              BataX connects people who have items they are willing to exchange
              with people who may have exactly what they want in return.
            </p>

            <Link
              href="/browse"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C1FF25] px-6 py-3 text-sm font-bold text-[#032F28]"
            >
              Browse Items
              <RiArrowRightLine />
            </Link>
          </div>

          <div className="rounded-[20px] bg-[#0A5144] p-5 sm:p-6">
            <p className="text-xs font-semibold text-[#C1FF25]">
              A simple exchange
            </p>

            <div className="mt-4 grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-[16px] bg-white p-4">
                <p className="text-[10px] text-[#71817D]">You have</p>
                <p className="mt-1 text-sm font-bold">Camera</p>

                <p className="mt-4 text-[10px] text-[#71817D]">You want</p>
                <p className="mt-1 text-sm font-bold">Tablet</p>
              </div>

              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#C1FF25] text-xl">
                <RiArrowLeftRightLine />
              </span>

              <div className="rounded-[16px] bg-white p-4">
                <p className="text-[10px] text-[#71817D]">They have</p>
                <p className="mt-1 text-sm font-bold">Tablet</p>

                <p className="mt-4 text-[10px] text-[#71817D]">They want</p>
                <p className="mt-1 text-sm font-bold">Camera</p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-center gap-2 rounded-[12px] bg-[#C1FF25] px-4 py-2.5 text-xs font-bold">
              <RiCheckboxCircleFill className="text-base" />A compatible
              exchange
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[650px]">
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#719B15]">
              Step by step
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.6px] sm:text-[28px]">
              From listing to exchange
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#5D6D68]">
              BataX makes the process clear from the moment you list an item
              until both people complete the exchange.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, text }) => (
              <article
                key={number}
                className="relative rounded-[18px] border border-[#E4E8E0] bg-white p-5"
              >
                <span className="absolute right-5 top-4 text-3xl font-black text-[#032F28]/5">
                  {number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C1FF25] text-xl">
                  <Icon />
                </span>

                <h3 className="mt-4 text-sm font-bold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#5D6D68]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Matching */}
      <section className="bg-[#F3F5EB] py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12 xl:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#719B15]">
              Smart matching
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.6px] sm:text-[28px]">
              Finding an item is only half the exchange.
            </h2>

            <p className="mt-4 max-w-[560px] text-sm leading-6 text-[#5D6D68]">
              It is not enough for another person to have what you want. A
              useful exchange also considers what they are willing to receive.
              BataX helps surface those opportunities.
            </p>
          </div>

          <div className="rounded-[20px] bg-white p-5">
            <div className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C1FF25] font-bold">
                A
              </span>

              <div>
                <p className="text-xs text-[#71817D]">Member A</p>
                <p className="mt-1 text-sm font-semibold">
                  Has a PlayStation 5 and wants an iPhone.
                </p>
              </div>
            </div>

            <div className="my-4 ml-4 h-6 w-px bg-[#CBD3CC]" />

            <div className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#032F28] font-bold text-white">
                B
              </span>

              <div>
                <p className="text-xs text-[#71817D]">Member B</p>
                <p className="mt-1 text-sm font-semibold">
                  Has an iPhone and wants a PlayStation 5.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-[12px] bg-[#EAF7D1] px-4 py-3 text-xs font-semibold">
              BataX can identify the reciprocal opportunity between them.
            </div>
          </div>
        </div>
      </section>

      {/* Before completion */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl font-bold tracking-[-0.6px] sm:text-[28px]">
            Before an exchange is completed
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Review the other person's profile and verification.",
              "Discuss the item and ask important questions.",
              "Inspect the item before completing the exchange.",
              "Confirm the exchange and leave an honest review.",
            ].map((item, index) => (
              <div key={item} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C1FF25] text-xs font-bold">
                  {index + 1}
                </span>

                <p className="pt-1 text-sm leading-5 text-[#4E5F59]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExchangeBanner />
      <Footer />
    </main>
  );
}
