import Image from "next/image";
import Link from "next/link";
import { Assets } from "@/src/assets";

const collections = [
  {
    category: "Portraits",
    title: "Authentic Portrait Photography",
    image: Assets.feature1,
    href: "/gallery?category=portraits",
  },
  {
    category: "Creative",
    title: "Creative & Artistic Stories",
    image: Assets.feature2,
    href: "/gallery?category=creative",
  },
  {
    category: "Street",
    title: "People & Street Photography",
    image: Assets.feature3,
    href: "/gallery?category=street",
  },
];

export default function PhotographyShowcase() {
  return (
    <section className="relative">
      {/* Dark background behind the cards */}
      <div className="absolute inset-x-0 top-0 h-16 bg-[#080A0D] sm:h-48" />

      {/* White background */}
      <div className="absolute inset-0 -z-10 bg-white" />

      {/* Photography cards */}
      <div className="relative z-10 mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:-mt-20 sm:grid-cols-2 md:-mt-15 md:px-12 lg:grid-cols-3 lg:px-16">
        {collections.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative aspect-3/4 overflow-hidden border-8 border-white bg-neutral-200"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Cinematic image overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/10 transition-all duration-300 group-hover:from-black/90" />

            {/* Card content */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <span className="text-xs font-medium text-white/80">
                {item.category}
              </span>

              <h3 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
                {item.title}
              </h3>

              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 transition-colors group-hover:text-[#FF573D]">
                View collection
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
