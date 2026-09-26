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

      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.wants.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#032F28]">
      <Navbar />

      <section className="bg-[#032F28]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
          <div className="max-w-[760px]">
            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#C1FF25]">
              Discover your next exchange
            </p>

            <h1 className="mt-4 text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-white sm:text-[54px]">
              Find something you need.
              <br />
              Exchange what you have.
            </h1>

            <p className="mt-5 max-w-[620px] text-base leading-7 text-white/75">
              Explore items listed by BataX members and discover people who may
              be looking for exactly what you have.
            </p>

            <div className="mt-8 flex max-w-[700px] items-center rounded-full bg-white p-1.5">
              <RiSearchLine className="ml-4 shrink-0 text-xl text-[#032F28]" />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                type="search"
                placeholder="Search items, categories or what people want..."
                className="h-12 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-[#7A8581]"
              />

              <button
                type="button"
                className="hidden h-12 rounded-full bg-[#C1FF25] px-8 text-sm font-bold text-[#032F28] sm:block"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E4E8DE] bg-white">
        <div className="mx-auto max-w-[1440px] overflow-x-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex min-w-max gap-2 py-5">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                  category === item
                    ? "bg-[#032F28] text-white"
                    : "bg-[#F3F5EB] text-[#314943] hover:bg-[#EAF7D1]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h2 className="text-2xl font-bold sm:text-[28px]">
                {category === "All" ? "Available Items" : category}
              </h2>

              <p className="mt-2 text-sm text-[#60716C]">
                {filteredItems.length} items available for exchange
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-[#CCD5CE] bg-white px-5 py-2.5 text-sm"
            >
              <RiEqualizerLine className="text-lg" />
              Filters
            </button>
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredItems.map((item) => {
                const isSaved = saved.includes(item.id);

                return (
                  <article
                    key={item.id}
                    className="group overflow-hidden rounded-[18px] border border-[#E4E8DE] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[1.35] overflow-hidden bg-[#ECEFE8]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <button
                        type="button"
                        aria-label={
                          isSaved
                            ? `Remove ${item.title} from saved items`
                            : `Save ${item.title}`
                        }
                        onClick={() =>
                          setSaved((previous) =>
                            isSaved
                              ? previous.filter((id) => id !== item.id)
                              : [...previous, item.id],
                          )
                        }
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl shadow"
                      >
                        {isSaved ? <RiHeartFill /> : <RiHeartLine />}
                      </button>

                      <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold">
                        <RiCheckboxCircleFill className="text-sm text-[#76A900]" />
                        Verified
                      </span>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-bold">{item.title}</h3>
                          <p className="mt-1 text-xs text-[#63716D]">
                            {item.category}
                          </p>
                        </div>

                        <span className="rounded-full bg-[#EFF5E6] px-2.5 py-1 text-[10px] font-semibold">
                          {item.condition}
                        </span>
                      </div>

                      <p className="mt-3 flex items-center gap-1 text-xs text-[#63716D]">
                        <RiMapPinLine />
                        {item.location}
                      </p>

                      <div className="mt-5 border-t border-[#E8ECE5] pt-4">
                        <p className="text-[11px] text-[#7A8581]">
                          Looking for
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C1FF25]">
                            <RiArrowLeftRightLine />
                          </span>

                          <p className="text-xs font-semibold">{item.wants}</p>
                        </div>
                      </div>

                      <Link
                        href={`/items/${item.id}`}
                        className="mt-5 block rounded-full bg-[#032F28] py-3 text-center text-xs font-bold text-white transition hover:bg-[#0A5144]"
                      >
                        View Exchange
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[24px] border border-dashed border-[#CBD4CD] bg-white px-6 py-20 text-center">
              <RiSearchLine className="mx-auto text-4xl text-[#789087]" />
              <h3 className="mt-4 text-xl font-bold">No items found</h3>
              <p className="mt-2 text-sm text-[#71817D]">
                Try another search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col items-start justify-between gap-7 rounded-[28px] bg-[#EAF7D1] px-7 py-9 sm:flex-row sm:items-center lg:px-10">
            <div>
              <p className="text-sm font-semibold text-[#628600]">
                Cannot find what you need?
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                List what you have and tell BataX what you want.
              </h2>
            </div>

            <Link
              href="/register"
              className="shrink-0 rounded-full bg-[#C1FF25] px-7 py-3.5 text-sm font-bold"
            >
              List an Item
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
