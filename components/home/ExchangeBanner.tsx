import Link from "next/link";
import {
  RiArrowRightLine,
  RiArrowLeftRightLine,
  RiNotification3Line,
} from "react-icons/ri";

export default function ExchangeBanner() {
  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-16">
      <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[36px] bg-[#063F35] lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <div className="mb-5 flex items-center gap-2 text-sm font-bold text-[#B8FF1F]">
            <RiArrowLeftRightLine className="text-xl" />A smarter way to get
            what you need
          </div>

          <h2 className="max-w-[550px] text-4xl font-black leading-[1.05] tracking-[-1.5px] text-white sm:text-5xl">
            Your items can open new possibilities.
          </h2>

          <p className="mt-6 max-w-[530px] text-base leading-7 text-white/70">
            BataX connects you with real people who may have exactly what you
            need and need exactly what you have.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#B8FF1F] px-7 py-4 font-bold text-[#063F35]"
          >
            Join BataX Today
            <RiArrowRightLine />
          </Link>
        </div>

        <div className="relative min-h-[450px] bg-[#0A5144] p-8">
          <div className="absolute left-1/2 top-1/2 w-[82%] max-w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] bg-white p-7 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B8FF1F] text-xl text-[#063F35]">
              <RiNotification3Line />
            </div>

            <p className="mt-5 text-sm font-medium text-[#71817D]">
              Exchange Request Received
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#063F35]">
              Someone wants your item.
            </h3>

            <div className="my-6 flex items-center justify-center gap-5">
              <div className="h-20 w-20 rounded-2xl bg-[#EEF2EA]" />

              <RiArrowLeftRightLine className="text-3xl text-[#86C600]" />

              <div className="h-20 w-20 rounded-2xl bg-[#EEF2EA]" />
            </div>

            <button className="w-full rounded-full bg-[#B8FF1F] py-4 font-bold text-[#063F35]">
              View Offer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
