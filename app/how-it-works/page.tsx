import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ExchangeBanner from "@/components/home/ExchangeBanner";
import {
  RiArrowLeftRightLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiChat3Line,
  RiFileList3Line,
  RiSearchEyeLine,
  RiShieldCheckLine,
  RiUserSearchLine,
} from "react-icons/ri";

const steps = [
  {
    number: "01",
    icon: RiShieldCheckLine,
    title: "Create and verify your account",
    text: "Create your BataX account and complete the required verification. Verification helps us build a community where people can make exchange decisions with more confidence.",
  },
  {
    number: "02",
    icon: RiFileList3Line,
    title: "List what you have",
    text: "Create a listing with clear photographs, the item's condition, description, location and other useful information. Some listings may require proof that you actually possess the item.",
  },
  {
    number: "03",
    icon: RiSearchEyeLine,
    title: "Tell us what you want",
    text: "Specify the item, items or category you would consider receiving. You can be specific or keep your preferences flexible and remain open to other offers.",
  },
  {
    number: "04",
    icon: RiUserSearchLine,
    title: "Discover compatible people",
    text: "BataX looks beyond ordinary search. We help surface people who have something you want and may also be interested in something you have.",
  },
  {
    number: "05",
    icon: RiChat3Line,
    title: "Make an exchange proposal",
    text: "Found something interesting? Propose an exchange. The other person can review your item, accept, decline or discuss the offer before making a decision.",
  },
  {
    number: "06",
    icon: RiArrowLeftRightLine,
    title: "Inspect, exchange and confirm",
    text: "When both sides agree, follow the safety guidance, inspect the items and complete the handover. Both users confirm the completed exchange on BataX.",
  },
];

const matchExamples = [
  {
    person: "Person A",
    has: "PlayStation 5",
    wants: "iPhone 13",
  },
  {
    person: "Person B",
    has: "iPhone 13",
    wants: "PlayStation 5",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#032F28]">
      <Navbar />

      <section className="overflow-hidden bg-[#032F28]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-24 xl:px-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#C1FF25]">
              How BataX works
            </p>

            <h1 className="mt-4 max-w-[650px] text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-white sm:text-[54px]">
              From what you have to what you need.
            </h1>

            <p className="mt-6 max-w-[620px] text-base leading-7 text-white/75">
              BataX brings structure to item-for-item exchange. You list what
              you have, tell us what you want, find compatible people and
              complete the exchange with safety measures around the process.
            </p>

            <Link
              href="/browse"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#C1FF25] px-7 py-3.5 text-sm font-bold"
            >
              Explore Items
              <RiArrowRightLine />
            </Link>
          </div>

          <div className="rounded-[32px] bg-[#0A5144] p-6 sm:p-9">
            <p className="text-sm font-semibold text-[#C1FF25]">
              A simple BataX match
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              {matchExamples.map((item, index) => (
                <div key={item.person} className="contents">
                  <div className="rounded-[22px] bg-white p-5">
                    <p className="text-xs text-[#73827D]">{item.person}</p>

                    <div className="mt-5">
                      <p className="text-xs text-[#73827D]">Has</p>
                      <p className="mt-1 font-bold">{item.has}</p>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-[#73827D]">Wants</p>
                      <p className="mt-1 font-bold">{item.wants}</p>
                    </div>
                  </div>

                  {index === 0 && (
                    <div className="flex justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C1FF25] text-2xl">
                        <RiArrowLeftRightLine />
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-2xl bg-[#C1FF25] px-4 py-3 text-sm font-semibold">
              <RiCheckboxCircleLine className="text-xl" />A direct reciprocal
              match
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-sm font-bold uppercase tracking-[2px] text-[#719B15]">
              The journey
            </p>

            <h2 className="mt-3 text-[32px] font-extrabold tracking-[-1px] sm:text-[40px]">
              Six steps. One better way to exchange.
            </h2>

            <p className="mt-5 leading-7 text-[#667771]">
              BataX does not simply show you listings. The platform connects
              ownership, intent and trust throughout the exchange.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, text }) => (
              <article
                key={number}
                className="relative rounded-[26px] border border-[#E3E8E1] bg-white p-7"
              >
                <span className="absolute right-6 top-5 text-[44px] font-black text-[#032F28]/5">
                  {number}
                </span>

                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#C1FF25] p-3 text-2xl">
                  <Icon />
                </span>

                <h3 className="mt-6 text-lg font-bold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#667771]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[2px] text-[#719B15]">
                More than search
              </p>

              <h2 className="mt-3 text-[32px] font-extrabold leading-tight">
                The important part is finding the right exchange.
              </h2>

              <p className="mt-5 leading-7 text-[#667771]">
                On an ordinary marketplace, you search for someone who has
                something you want. BataX goes further by considering what that
                person wants in return.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#F3F7EC] p-7">
              <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#719B15]">
                Example
              </p>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm">
                    You have a <strong>camera</strong> and want a{" "}
                    <strong>tablet</strong>.
                  </p>
                </div>

                <div className="flex justify-center text-2xl">
                  <RiArrowLeftRightLine />
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm">
                    Another verified member has a <strong>tablet</strong> and
                    wants a <strong>camera</strong>.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#C1FF25] p-5 text-center text-sm font-bold">
                  BataX identifies the opportunity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExchangeBanner />
      <Footer />
    </main>
  );
}
