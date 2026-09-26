import Image from "next/image";
import Link from "next/link";
import {
  RiArrowRightLine,
  RiArrowLeftRightLine,
  RiLeafLine,
  RiShieldCheckFill,
} from "react-icons/ri";

export default function ExchangeBanner({ final = false }: { final?: boolean }) {
  return (
    <section className="overflow-hidden bg-[#032F28]">
      <div className="relative mx-auto grid max-w-[1440px] lg:min-h-[370px] lg:grid-cols-[0.43fr_0.57fr]">
        <div className="relative z-10 flex flex-col justify-center px-5 py-9 sm:px-8 lg:py-10 lg:pl-12 lg:pr-6 xl:pl-16">
          <p className="mb-3 flex items-center gap-2 text-sm text-white">
            <RiLeafLine className="shrink-0 text-2xl text-[#C1FF25]" /> A
            smarter way to get what you need
          </p>
          <h2 className="max-w-[430px] text-[32px] font-bold leading-[1.12] tracking-[-0.8px] text-white sm:text-[36px] xl:text-[40px]">
            {final ? (
              <>
                Items find new
                <br />
                homes. People find
                <br />
                new possibilities.
              </>
            ) : (
              "Your items can open new possibilities."
            )}
          </h2>
          <p className="mt-4 max-w-[435px] text-base leading-6 text-white/90">
            {final
              ? "BataX makes it easy, safe and reliable to exchange items with real people around you."
              : "BataX connects you with real people who may have exactly what you need and need exactly what you have."}
          </p>
          <Link
            href="/register"
            className="mt-5 inline-flex w-fit items-center gap-3 rounded-full bg-[#C1FF25] px-7 py-3 text-sm font-bold text-[#032F28] transition hover:bg-[#AEEC18]"
          >
            Join BataX Today <RiArrowRightLine className="text-lg" />
          </Link>
        </div>
        <div className="relative min-h-[350px] overflow-hidden rounded-tl-[38%] lg:-ml-5 lg:rounded-tl-[38%] lg:rounded-bl-[8%]">
          <Image
            src="/batax-cta.png"
            alt="BataX member smiling as he receives an exchange request on his phone"
            fill
            sizes="(min-width: 1440px) 820px, (min-width: 1024px) 58vw, 100vw"
            className="object-cover object-top"
          />
          <div className="absolute right-5 top-1/2 w-[170px] -translate-y-1/2 rounded-[20px] bg-white px-4 pb-5 pt-8 text-center shadow-xl sm:right-10 sm:w-[220px] lg:right-8 xl:right-16">
            <span className="absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#C1FF25] text-[#032F28]">
              <RiShieldCheckFill />
            </span>
            <h3 className="text-xs font-bold text-[#092C25] sm:text-sm">
              Exchange Request Received!
            </h3>
            <p className="mt-2 text-xs leading-4 text-[#444]">
              Someone wants to exchange their camera for your books.
            </p>
            <div className="my-4 flex items-center justify-center gap-2">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-[#F6F6F2]">
                <Image
                  src="/batax-camera.png"
                  alt="Camera"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <RiArrowLeftRightLine className="shrink-0 text-2xl text-[#8CBC17]" />
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                <Image
                  src="/batax-books.png"
                  alt="Books"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
            </div>
            <Link
              href="/login"
              className="block rounded-full bg-[#C1FF25] px-4 py-2.5 text-sm font-bold text-[#032F28] transition hover:bg-[#AEEC18]"
            >
              View Offer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
