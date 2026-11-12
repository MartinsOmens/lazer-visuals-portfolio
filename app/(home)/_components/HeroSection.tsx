"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Assets } from "@/src/assets";

const heroImages = [
  Assets.homeHero,
  Assets.galleryHero,
  Assets.contactHero,
];

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate flex min-h-190 items-center overflow-hidden bg-[#080A0D] md:min-h-212.5">

      {/* Hero background slideshow */}
      <div className="absolute inset-0 -z-20">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Lazer Visuals photography showcase ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center md:object-[65%_center]"
            />
          </div>
        ))}
      </div>

      {/* Image overlays */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#080A0D] via-[#080A0D]/70 to-[#080A0D]/15" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#080A0D] via-transparent to-[#080A0D]/50" />

      {/* Hero content */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-36 md:px-12 md:pb-32 md:pt-44 lg:px-16">
        <div className="max-w-190">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-[#FF573D]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF573D]">
              Photography & Visual Storytelling
            </span>
          </div>

          <h1 className="font-(--font-playfair) text-5xl leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
            Capturing
            <br />
            Moments,
            <br />
            <span className="font-light italic text-[#FF573D]">
              Creating Stories.
            </span>
          </h1>

          <p className="mt-8 max-w-127.5 text-base leading-8 text-white">
            Every photograph has a story worth telling. From authentic portraits
            to unforgettable moments, we turn real experiences into timeless
            visual memories.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 rounded-full bg-[#FF573D] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e94830]"
            >
              Explore Gallery
              <Icon
                icon="lucide:arrow-up-right"
                width={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}