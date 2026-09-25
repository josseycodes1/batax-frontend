import Link from "next/link";
import { RiMacbookFill, RiSofaFill, RiTShirtFill, RiBookOpenFill, RiGamepadFill, RiToolsFill, RiLayoutGridFill, RiArrowRightLine, RiFlaskFill } from "react-icons/ri";
import { FaDumbbell } from "react-icons/fa6";

const categories = [
  { name: "Electronics", icon: RiMacbookFill },
  { name: "Home & Living", icon: RiSofaFill },
  { name: "Fashion & Accessories", icon: RiTShirtFill },
  { name: "Books & Education", icon: RiBookOpenFill },
  { name: "Sports & Outdoors", icon: FaDumbbell },
  { name: "Beauty & Personal Care", icon: RiFlaskFill },
  { name: "Toys & Games", icon: RiGamepadFill },
  { name: "Tools & DIY", icon: RiToolsFill },
  { name: "Others", icon: RiLayoutGridFill },
];

export default function CategorySection() {
  return (
    <section className="bg-[#FFFCF7] pb-7 pt-9">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-5 flex items-center justify-between gap-5">
          <h2 className="text-2xl font-bold tracking-[-0.6px] text-[#032F28] sm:text-[28px]">Explore by Category</h2>
          <Link href="/browse" className="hidden items-center gap-2 text-sm text-[#032F28] sm:flex">View all categories <RiArrowRightLine /></Link>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
          {categories.map(({ name, icon: Icon }) => (
            <Link key={name} href={`/browse?category=${encodeURIComponent(name)}`} className="group flex min-h-[118px] flex-col items-center justify-center rounded-[18px] bg-[#F3F5EB] px-2 py-4 text-center transition hover:-translate-y-1 hover:bg-[#EAF7D1]">
              <Icon className="text-[34px] text-[#032F28] transition group-hover:scale-110" />
              <span className="mt-3 max-w-[110px] text-xs leading-[1.5] text-[#183D35]">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
