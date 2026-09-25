import { RiDoubleQuotesL, RiShieldCheckFill, RiStarFill } from "react-icons/ri";

const testimonials = [
  {
    name: "Tomi Adeyemi",
    location: "Lagos",
    text: "I had a camera and needed a tablet. BataX made it easy to understand what the other person wanted before I even sent an offer.",
  },
  {
    name: "Chisom Okafor",
    location: "Abuja",
    text: "What I like most is the verification process. Seeing the verification details before discussing an exchange made the experience feel much safer.",
  },
  {
    name: "Damilola Akin",
    location: "Ibadan",
    text: "The matching idea is brilliant. Instead of messaging random people, I can focus on people who may actually want something I have.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#063F35] py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[2px] text-[#B8FF1F]">
            Community experiences
          </p>

          <h2 className="mt-3 text-[28px] font-black tracking-[-1px] text-white sm:text-4xl">
            Better exchanges start with trust.
          </h2>

          <p className="mt-5 leading-7 text-white/65">
            BataX is designed to make exchanging with other people clearer,
            safer and more intentional.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[28px] bg-white p-7 sm:p-8"
            >
              <RiDoubleQuotesL className="text-4xl text-[#B8FF1F]" />

              <div className="mt-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <RiStarFill key={star} className="text-lg text-[#719B15]" />
                ))}
              </div>

              <p className="mt-6 text-[15px] leading-7 text-[#52645F]">
                “{testimonial.text}”
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-[#E9EDE8] pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7D1] font-black text-[#063F35]">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-[#063F35]">
                      {testimonial.name}
                    </h3>

                    <RiShieldCheckFill className="text-[#86C600]" />
                  </div>

                  <p className="mt-0.5 text-xs text-[#87948F]">
                    Verified user · {testimonial.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
