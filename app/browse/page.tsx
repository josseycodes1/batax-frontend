"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import {
  RiArrowLeftRightLine,
  RiCheckboxCircleFill,
  RiEqualizerLine,
  RiHeartFill,
  RiHeartLine,
  RiMapPinLine,
  RiSearchLine,
} from "react-icons/ri";

const categories = [
  "All",
  "Electronics",
  "Home & Living",
  "Fashion & Accessories",
  "Books & Education",
  "Sports & Outdoors",
  "Beauty & Personal Care",
  "Toys & Games",
  "Tools & DIY",
  "Others",
];

const items = [
  {
    id: 1,
    title: "MacBook Air M1",
    category: "Electronics",
    location: "Lagos, NG",
    condition: "Good",
    wants: "Tablet or Smartphone",
    image: "/batax-macbook.png",
  },
  {
    id: 2,
    title: "Yamaha Acoustic Guitar",
    category: "Others",
    location: "Abuja, NG",
    condition: "Like New",
    wants: "Camera or Headphones",
    image: "/batax-guitar.png",
  },
  {
    id: 3,
    title: "3-Seater Sofa",
    category: "Home & Living",
    location: "Port Harcourt, NG",
    condition: "Good",
    wants: "Dining Table or TV Stand",
    image: "/batax-sofa.png",
  },
  {
    id: 4,
    title: "Collection of Books",
    category: "Books & Education",
    location: "Ibadan, NG",
    condition: "Good",
    wants: "Laptop or Smartwatch",
    image: "/batax-books.png",
  },
  {
    id: 5,
    title: "Designer Handbag",
    category: "Fashion & Accessories",
    location: "Lagos, NG",
    condition: "Like New",
    wants: "Sneakers or Jacket",
    image: "/batax-handbag.png",
  },
];

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [saved, setSaved] = useState<number[]>([]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;

      const query = search.toLowerCase();

      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.wants.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#032F28]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#032F28]">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12 lg:py-12 xl:px-16">
          <div className="max-w-[720px]">
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#C1FF25]">
              Explore BataX
            </p>

            <h1 className="mt-3 text-[34px] font-extrabold leading-[1.08] tracking-[-1px] text-white sm:text-[40px]">
              Find what you need.
              <br />
              Exchange what you have.
            </h1>

            <p className="mt-4 max-w-[600px] text-sm leading-6 text-white/75 sm:text-base">
              Browse items from people looking to exchange and discover an
              opportunity that works for both of you.
            </p>

            <div className="mt-6 flex max-w-[650px] items-center rounded-full bg-white p-1">
              <RiSearchLine className="ml-4 shrink-0 text-xl text-[#032F28]" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search for laptop, guitar, sofa, books..."
                className="h-11 min-w-0 flex-1 bg-transparent px-3 text-sm text-[#032F28] outline-none placeholder:text-[#777]"
              />

              <button
                type="button"
                className="hidden h-11 rounded-full bg-[#C1FF25] px-7 text-sm font-bold text-[#032F28] transition hover:bg-[#AEEC18] sm:block"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-[#E6E9E2] bg-white">
        <div className="mx-auto max-w-[1440px] overflow-x-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex min-w-max gap-2 py-4">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  category === item
                    ? "bg-[#C1FF25] text-[#032F28]"
                    : "bg-[#F3F5EB] text-[#314943] hover:bg-[#EAF7D1]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Items */}
      <section className="py-9">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-6 flex items-center justify-between gap-5">
            <div>
              <h2 className="text-2xl font-bold tracking-[-0.6px] sm:text-[28px]">
                {category === "All" ? "Available Items" : category}
              </h2>

              <p className="mt-1 text-xs text-[#5C6D68]">
                {filteredItems.length} items available for exchange
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-[#D8DED8] bg-white px-4 py-2 text-xs"
            >
              <RiEqualizerLine className="text-base" />
              Filters
            </button>
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {filteredItems.map((item) => {
                const isSaved = saved.includes(item.id);

                return (
                  <article
                    key={item.id}
                    className="group overflow-hidden rounded-[14px] border border-[#E7E9DF] bg-[#FFFCF7] transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[1.5] overflow-hidden bg-[#ECECE5]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 19vw, (min-width: 768px) 30vw, 90vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <button
                        type="button"
                        aria-label={`${isSaved ? "Unsave" : "Save"} ${item.title}`}
                        onClick={() =>
                          setSaved((previous) =>
                            isSaved
                              ? previous.filter((id) => id !== item.id)
                              : [...previous, item.id],
                          )
                        }
                        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg shadow-sm"
                      >
                        {isSaved ? <RiHeartFill /> : <RiHeartLine />}
                      </button>

                      <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white px-1.5 py-0.5 text-[10px] font-bold">
                        <RiCheckboxCircleFill className="text-sm text-[#7AA500]" />
                        Verified
                      </span>
                    </div>

                    <div className="px-3 pb-4 pt-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-[13px] font-bold leading-5">
                            {item.title}
                          </h3>

                          <p className="mt-0.5 text-xs text-[#424D47]">
                            {item.category}
                          </p>
                        </div>

                        <span className="shrink-0 rounded-full bg-[#F1F5E9] px-2 py-1 text-[9px] font-semibold">
                          {item.condition}
                        </span>
                      </div>

                      <p className="mt-2 flex items-center gap-1 text-xs text-[#424D47]">
                        <RiMapPinLine className="shrink-0 text-sm" />
                        {item.location}
                      </p>

                      <div className="mt-4 flex items-center gap-2">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B2E564] text-lg">
                          <RiArrowLeftRightLine />
                        </span>

                        <div className="min-w-0 text-xs leading-5">
                          <p className="text-[#424D47]">Looking for</p>
                          <p className="font-medium">{item.wants}</p>
                        </div>
                      </div>

                      <Link
                        href={`/items/${item.id}`}
                        className="mt-4 block rounded-full bg-[#032F28] py-2.5 text-center text-xs font-bold text-white transition hover:bg-[#0A5144]"
                      >
                        View Item
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[18px] bg-[#F3F5EB] px-5 py-14 text-center">
              <RiSearchLine className="mx-auto text-3xl" />
              <h3 className="mt-3 text-base font-bold">No items found</h3>
              <p className="mt-1 text-xs text-[#5C6D68]">
                Try another search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 pb-12 pt-3 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 rounded-[20px] bg-[#EAF7D1] px-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold text-[#719B15]">
              Cannot find what you need?
            </p>

            <h2 className="mt-1 text-xl font-bold">
              List what you have and tell us what you want.
            </h2>
          </div>

          <Link
            href="/register"
            className="w-fit shrink-0 rounded-full bg-[#C1FF25] px-6 py-3 text-xs font-bold"
          >
            List an Item
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
