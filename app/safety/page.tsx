import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import {
  RiAlertLine,
  RiCameraLensLine,
  RiChatCheckLine,
  RiCheckboxCircleFill,
  RiCustomerService2Line,
  RiFingerprintLine,
  RiFlagLine,
  RiLock2Line,
  RiMapPinUserLine,
  RiShieldCheckLine,
  RiUserStarLine,
} from "react-icons/ri";

const protectionLayers = [
  {
    icon: RiFingerprintLine,
    title: "Identity verification",
    text: "Exchange privileges can require identity verification. Verification status is shown without exposing sensitive identity information publicly.",
  },
  {
    icon: RiCameraLensLine,
    title: "Proof of possession",
    text: "Selected listings can require additional photographs or other verification designed to help establish that the member actually possesses the listed item.",
  },
  {
    icon: RiUserStarLine,
    title: "Exchange reputation",
    text: "Completed exchanges and transaction-specific reviews create useful history that members can consider before proceeding.",
  },
  {
    icon: RiChatCheckLine,
    title: "Exchange-linked communication",
    text: "Keeping conversations connected to an exchange creates clearer context and supports moderation when a problem is reported.",
  },
  {
    icon: RiFlagLine,
    title: "Reporting and moderation",
    text: "Suspicious users, listings, messages and exchanges can be reported for review by the BataX moderation team.",
  },
  {
    icon: RiLock2Line,
    title: "Account protection",
    text: "BataX can use contact verification, secure authentication, rate limiting and additional security checks to protect accounts.",
  },
];

const userSafety = [
  "Inspect an item carefully before accepting an exchange.",
  "Check the listing details, condition and disclosed defects.",
  "Review the other member's verification and exchange history.",
  "Keep important exchange communication on BataX.",
  "For in-person exchanges, use an appropriate public meeting location.",
  "Do not share passwords, OTPs or unnecessary sensitive information.",
  "Report suspicious behaviour instead of continuing an exchange that feels unsafe.",
];

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#032F28]">
      <Navbar />

      <section className="bg-[#032F28]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C1FF25] text-2xl">
                <RiShieldCheckLine />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[2px] text-[#C1FF25]">
                Safety at BataX
              </p>

              <h1 className="mt-4 max-w-[720px] text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-white sm:text-[54px]">
                Trust should be built into every exchange.
              </h1>

              <p className="mt-6 max-w-[650px] text-base leading-7 text-white/75">
                Exchanging with another person requires trust. BataX combines
                verification, platform history, moderation and safer exchange
                practices to help members make informed decisions.
              </p>
            </div>

            <div className="rounded-[30px] bg-[#0A5144] p-7 sm:p-9">
              <p className="text-sm font-semibold text-[#C1FF25]">Important</p>

              <h2 className="mt-3 text-2xl font-bold text-white">
                Verification reduces risk. It does not remove it completely.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70">
                A verified badge means particular checks were completed. It
                should never be interpreted as a guarantee about a person or
                item. Members should still inspect items and follow BataX safety
                guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[700px]">
            <p className="text-sm font-bold uppercase tracking-[2px] text-[#719B15]">
              Layers of protection
            </p>

            <h2 className="mt-3 text-[32px] font-extrabold sm:text-[40px]">
              Trust is more than one verification badge.
            </h2>

            <p className="mt-5 leading-7 text-[#667771]">
              Different safeguards work together throughout the BataX journey.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {protectionLayers.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[26px] border border-[#E2E7DF] bg-white p-7"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#C1FF25] p-3 text-2xl">
                  <Icon />
                </div>

                <h3 className="mt-6 text-lg font-bold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#667771]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1F5E9] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[2px] text-[#719B15]">
              Before you exchange
            </p>

            <h2 className="mt-3 text-[32px] font-extrabold leading-tight">
              Take a few minutes to protect yourself.
            </h2>

            <p className="mt-5 leading-7 text-[#667771]">
              Technology can reduce risk, but members also play an important
              role in keeping exchanges safe.
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-6 sm:p-8">
            <div className="space-y-5">
              {userSafety.map((item) => (
                <div key={item} className="flex gap-3">
                  <RiCheckboxCircleFill className="mt-0.5 shrink-0 text-xl text-[#76A900]" />
                  <p className="text-sm leading-6 text-[#43534E]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[30px] bg-[#032F28] p-8 sm:p-10">
              <RiMapPinUserLine className="text-4xl text-[#C1FF25]" />

              <h2 className="mt-6 text-2xl font-bold text-white">
                Meeting someone for an exchange?
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Use an appropriate public location, inspect the item before
                confirming the exchange, and avoid unnecessarily sharing your
                private home address.
              </p>
            </div>

            <div className="rounded-[30px] bg-[#C1FF25] p-8 sm:p-10">
              <RiAlertLine className="text-4xl" />

              <h2 className="mt-6 text-2xl font-bold">
                Something does not look right?
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#38534C]">
                Do not feel pressured to continue. You can leave an exchange and
                report suspicious behaviour, misleading listings or
                inappropriate messages.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#032F28] px-6 py-3 text-sm font-bold text-white"
              >
                <RiCustomerService2Line />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
