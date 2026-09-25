const steps = [
  { number: "1", title: "List Your Item", text: "Add clear photos and details about what you have." },
  { number: "2", title: "Find a Match", text: "Browse or get matched with what you need." },
  { number: "3", title: "Propose an Exchange", text: "Send or accept an exchange offer." },
  { number: "4", title: "Meet & Exchange", text: "Complete the exchange safely with our guidance." },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FFFCF7] py-7">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <h2 className="mb-6 text-2xl font-bold tracking-[-0.6px] text-[#032F28] sm:text-[28px]">How BataX Works</h2>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, text }, index) => (
            <div key={number} className="relative flex gap-4">
              {index < steps.length - 1 && <span aria-hidden="true" className="absolute left-12 right-[-12px] top-[19px] hidden h-px bg-[#D9DED4] lg:block" />}
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C1FF25] text-lg font-bold text-[#032F28]">{number}</span>
              <div className="relative pt-2">
                <h3 className="w-fit bg-[#FFFCF7] pr-3 text-sm font-bold text-[#032F28]">{title}</h3>
                <p className="mt-1 max-w-[220px] text-sm leading-5 text-[#424D47]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
