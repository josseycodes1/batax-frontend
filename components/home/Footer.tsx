import Link from "next/link";
import {
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinBoxLine,
  RiArrowLeftRightLine,
} from "react-icons/ri";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Browse Items", "/browse"],
      ["How It Works", "/how-it-works"],
      ["Categories", "/browse"],
      ["Safety", "/safety"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About BataX", "/about"],
      ["Contact", "/contact"],
      ["Help Centre", "/help"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
      ["Community Guidelines", "/community-guidelines"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#032F28] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="text-[32px] font-black tracking-[-1.5px]">
              Bata<span className="text-[#B8FF1F]">X</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              A trusted digital platform helping people exchange what they have
              for what they want.
            </p>

            <div className="mt-7 flex gap-3">
              {[RiInstagramLine, RiTwitterXLine, RiLinkedinBoxLine].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-[#B8FF1F] hover:text-[#063F35]"
                  >
                    <Icon />
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold">{group.title}</h3>

                <div className="mt-5 flex flex-col gap-3">
                  {group.links.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-sm text-white/55 transition hover:text-[#B8FF1F]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BataX. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <RiArrowLeftRightLine className="text-[#B8FF1F]" />
            <span>Have it. Want it. BataX it.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
