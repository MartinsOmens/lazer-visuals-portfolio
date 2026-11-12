import Image from "next/image";
import { catalogueImages } from "@/src/assets";

export default function Catalogue() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="px-4 pt-24 pb-16 text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Popular Works
        </h1>

        <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
          A collection of moments, stories, and perspectives captured through my
          lens. Explore some of my favourite photographs, where every frame
          tells a story.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="relative w-full pb-24">
        {/* Black Background Effect */}
        {/* <div className="absolute inset-x-0 top-[0.2px] mt-0 bottom-0 bg-black" /> */}

        {/* Gallery Grid */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {catalogueImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-4/5 overflow-hidden bg-gray-100"
              >
                <Image
                  src={image}
                  alt={`Catalogue photography ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
