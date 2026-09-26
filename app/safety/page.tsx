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

const safetyFeatures = [
  {
    icon: RiFingerprintLine,
    title: "Identity Verification",
    text: "Eligible exchange activity can require identity verification while sensitive identity information remains private.",
  },
  {
    icon: RiCameraLensLine,
    title: "Proof of Possession",
    text: "Selected listings can require additional evidence that the person actually possesses the item.",
  },
  {
    icon: RiUserStarLine,
    title: "Exchange Reputation",
    text: "Completed exchanges and transaction-specific reviews help members build meaningful platform history.",
  },
  {
    icon: RiChatCheckLine,
    title: "Exchange Conversations",
    text: "Keeping important conversations on BataX provides clearer context if an exchange needs to be reviewed.",
  },
  {
    icon: RiFlagLine,
    title: "Reports & Moderation",
    text: "Members can report suspicious accounts, listings, messages and exchange-related problems.",
  },
  {
    icon: RiLock2Line,
    title: "Account Security",
    text: "Authentication, verification and security checks help protect accounts from suspicious access.",
  },
];

const checklist = [
  "Review the person's profile and verification status.",
  "Read the complete listing and disclosed condition carefully.",
  "Ask questions about anything that is unclear.",
  "Inspect the item before confirming an exchange.",
  "Keep important conversations on BataX.",
  "Use an appropriate public location for in-person exchanges.",
  "Never share passwords, OTPs or unnecessary private information.",
];

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#032F28]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#032F28]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-12 xl:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#C1FF25]">
              Safety on BataX
            </p>

            <h1 className="mt-3 max-w-[650px] text-[34px] font-extrabold leading-[1.08] tracking-[-1px] text-white sm:text-[40px]">
              Exchange with more confidence.
            </h1>

            <p className="mt-4 max-w-[600px] text-sm leading-6 text-white/75 sm:text-base">
              BataX combines identity checks, item verification, reputation,
              reporting and safer exchange practices to help people make more
              informed decisions.
            </p>
          </div>

          <div className="rounded-[20px] bg-[#0A5144] p-5 sm:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C1FF25] text-xl">
              <RiShieldCheckLine />
            </div>

            <h2 className="mt-4 text-lg font-bold text-white">
              Verification is a layer of protection, not a guarantee.
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/70">
              A verification badge shows that particular checks were completed.
              Members should still inspect items, review profiles and follow
              safe exchange practices.
            </p>
          </div>
        </div>
      </section>

      {/* Safety features */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[650px]">
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#719B15]">
              Built around trust
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.6px] sm:text-[28px]">
              Several layers work together.
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#5D6D68]">
              Safety is not determined by one badge. BataX combines different
              signals and safeguards throughout an exchange.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {safetyFeatures.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[18px] bg-[#F3F5EB] p-5 transition hover:bg-[#EAF7D1]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#032F28]">
                  <Icon className="text-xl text-[#C1FF25]" />
                </div>

                <h3 className="mt-4 text-sm font-bold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#5D6D68]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Safety checklist */}
      <section className="bg-[#F3F5EB] py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] items-start gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 xl:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#719B15]">
              Before you exchange
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.6px] sm:text-[28px]">
              A little caution goes a long way.
            </h2>

            <p className="mt-3 max-w-[480px] text-sm leading-6 text-[#5D6D68]">
              BataX provides tools to support safer exchanges, but every member
              should still make careful decisions before handing over an item.
            </p>
          </div>

          <div className="rounded-[20px] bg-white p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {checklist.map((item) => (
                <div key={item} className="flex gap-2.5">
                  <RiCheckboxCircleFill className="mt-0.5 shrink-0 text-lg text-[#719B15]" />

                  <p className="text-sm leading-5 text-[#4E5F59]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet safely */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-4 px-5 sm:px-8 lg:grid-cols-2 lg:px-12 xl:px-16">
          <div className="rounded-[20px] bg-[#032F28] p-6">
            <RiMapPinUserLine className="text-3xl text-[#C1FF25]" />

            <h2 className="mt-4 text-xl font-bold text-white">
              Meeting for an exchange
            </h2>

            <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/70">
              When meeting another member, use an appropriate public location.
              Inspect the item before confirming the exchange and avoid sharing
              private information that is not necessary.
            </p>
          </div>

          <div className="rounded-[20px] bg-[#C1FF25] p-6">
            <RiAlertLine className="text-3xl" />

            <h2 className="mt-4 text-xl font-bold">
              If something does not look right
            </h2>

            <p className="mt-3 max-w-[520px] text-sm leading-6 text-[#38534C]">
              You do not have to continue an exchange. Report suspicious
              listings, misleading information, inappropriate messages or other
              concerns so they can be reviewed.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#032F28] px-5 py-2.5 text-xs font-bold text-white"
            >
              <RiCustomerService2Line />
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
