"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftRightLine, RiArrowRightLine, RiHeartLine, RiHeartFill, RiMapPinLine, RiCheckboxCircleFill } from "react-icons/ri";

const items = [
  { id: 1, title: "MacBook Air M1", category: "Electronics", location: "Lagos, NG", wants: "Tablet or Smartphone", image: "/batax-macbook.png" },
  { id: 2, title: "Yamaha Acoustic Guitar", category: "Music", location: "Abuja, NG", wants: "Camera or Headphones", image: "/batax-guitar.png" },
  { id: 3, title: "3-Seater Sofa", category: "Home & Living", location: "Port Harcourt, NG", wants: "Dining Table or TV Stand", image: "/batax-sofa.png" },
  { id: 4, title: "Collection of Books", category: "Books & Education", location: "Ibadan, NG", wants: "Laptop or Smartwatch", image: "/batax-books.png" },
  { id: 5, title: "Designer Handbag", category: "Fashion & Accessories", location: "Lagos, NG", wants: "Sneakers or Jacket", image: "/batax-handbag.png" },
];

export default function FeaturedItems() {
  const [saved, setSaved] = useState<number[]>([]);
  return (
    <section className="bg-[#FFFCF7] pb-9 pt-5">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-6 flex flex-wrap items-center gap-x-8 gap-y-4">
          <h2 className="text-2xl font-bold tracking-[-0.6px] text-[#032F28] sm:text-[28px]">Featured Items</h2>
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-[#C1FF25] px-5 py-2 font-semibold">Popular</span>
            <Link href="/browse?sort=latest" className="rounded-full bg-[#F1F1EF] px-5 py-2 hover:bg-[#E5EDD9]">Latest</Link>
            <Link href="/browse?sort=nearby" className="rounded-full bg-[#F1F1EF] px-5 py-2 hover:bg-[#E5EDD9]">Near You</Link>
          </div>
          <Link href="/browse" className="ml-auto flex items-center gap-2 text-sm text-[#032F28]">View all items <RiArrowRightLine className="text-lg" /></Link>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => {
            const isSaved = saved.includes(item.id);
            return (
              <article key={item.id} className="group overflow-hidden rounded-[14px] border border-[#E7E9DF] bg-[#FFFCF7] transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[1.5] overflow-hidden bg-[#ECECE5]">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 1440px) 250px, (min-width: 1024px) 19vw, (min-width: 768px) 30vw, (min-width: 480px) 46vw, 90vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <button type="button" aria-label={`${isSaved ? "Unsave" : "Save"} ${item.title}`} aria-pressed={isSaved} onClick={() => setSaved((previous) => isSaved ? previous.filter((id) => id !== item.id) : [...previous, item.id])} className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xl text-[#032F28] shadow-sm">
                    {isSaved ? <RiHeartFill /> : <RiHeartLine />}
                  </button>
                  <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white px-1.5 py-0.5 text-[10px] font-bold text-[#032F28]"><RiCheckboxCircleFill className="rounded-full bg-[#C1FF25] text-sm" />Verified</span>
                </div>
                <div className="px-3 pb-4 pt-3">
                  <h3 className="text-[13px] font-bold leading-5 text-[#032F28] xl:text-sm">{item.title}</h3>
                  <p className="mt-0.5 text-xs text-[#424D47]">{item.category}</p>
                  <p className="mt-2 flex items-center gap-1 text-xs text-[#424D47]"><RiMapPinLine className="shrink-0 text-sm" />{item.location}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B2E564] text-lg"><RiArrowLeftRightLine /></span>
                    <div className="min-w-0 text-xs leading-5"><p className="text-[#424D47]">Looking for</p><p className="font-medium text-[#032F28]">{item.wants}</p></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
