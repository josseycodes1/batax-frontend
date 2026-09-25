import { RiSearchLine, RiShieldCheckFill, RiBox3Line, RiSeedlingLine } from "react-icons/ri";

const benefits = [
  { icon: RiShieldCheckFill, title: "Verified Users", description: "Real people, real items" },
  { icon: RiBox3Line, title: "Secure Exchanges", description: "Our safety measures keep you protected" },
  { icon: RiSeedlingLine, title: "Sustainable Living", description: "Give items a new home" },
];

export default function SearchExchange() {
  return (
    <section className="bg-[#FAFBF4] pb-0">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[20px] bg-[#032F28] px-5 py-7 sm:px-6">
            <h2 className="text-xl font-bold tracking-[-0.3px] text-white sm:text-[23px]">What are you looking to exchange?</h2>
            <form action="/browse" className="mt-4 flex flex-col gap-3 sm:flex-row">
              <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5">
                <RiSearchLine className="shrink-0 text-xl text-[#032F28]" />
                <span className="sr-only">Search for items</span>
                <input name="q" type="search" placeholder="Search for items (e.g. laptop, guitar, sofa, books...)" className="h-12 min-w-0 w-full bg-transparent text-sm text-[#032F28] outline-none placeholder:text-[#777]" />
              </label>
              <button type="submit" className="h-12 rounded-full bg-[#C1FF25] px-9 text-sm font-bold text-[#032F28] transition hover:bg-[#AEEC18]">Search</button>
            </form>
          </div>
          <div className="grid grid-cols-3 gap-3 py-5">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <Icon className="mb-3 text-[38px] text-[#032F28]" />
                <h3 className="text-xs font-bold text-[#032F28]">{title}</h3>
                <p className="mt-1 max-w-[150px] text-xs leading-[1.5] text-[#314943]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
