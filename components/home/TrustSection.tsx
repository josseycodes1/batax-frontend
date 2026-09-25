import {
  RiFingerprintLine,
  RiCameraLensLine,
  RiShieldUserLine,
  RiCustomerService2Line,
} from "react-icons/ri";

const trustItems = [
  {
    icon: RiFingerprintLine,
    title: "Identity Verification",
    text: "Trading privileges can require identity verification before users participate in exchanges.",
  },
  {
    icon: RiCameraLensLine,
    title: "Proof of Possession",
    text: "Selected listings can require additional evidence that the person actually possesses the item.",
  },
  {
    icon: RiShieldUserLine,
    title: "Reputation That Matters",
    text: "Completed exchanges and transaction-specific reviews help build meaningful platform history.",
  },
  {
    icon: RiCustomerService2Line,
    title: "Reporting & Support",
    text: "Users can report suspicious listings, accounts, messages and exchange problems for review.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-start gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[2px] text-[#719B15]">
              Trust at the centre
            </p>

            <h2 className="mt-3 text-[30px] font-black leading-[1.12] tracking-[-1px] text-[#063F35] sm:text-4xl">
              Exchange with more confidence.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-[#71817D]">
              Trust is not one badge. BataX combines several verification,
              moderation and reputation measures to help users make more
              informed exchange decisions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {trustItems.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[28px] bg-[#F6F8F0] p-7 transition hover:bg-[#EAF7D1]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#063F35]">
                  <Icon className="text-2xl text-[#B8FF1F]" />
                </div>

                <h3 className="mt-6 text-lg font-black text-[#063F35]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#71817D]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
