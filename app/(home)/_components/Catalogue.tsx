// app/page.tsx
import Image from "next/image";

// Array of image data for easy mapping
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1541590858599-71c6b1e59390?q=80&w=1000&auto=format&fit=crop",
    alt: "Man sitting on subway steps",
  },
  {
    src: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1000&auto=format&fit=crop",
    alt: "Silhouette of a woman",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
    alt: "Portrait of a smiling woman",
  },
  {
    src: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=1000&auto=format&fit=crop",
    alt: "Pink flamingo",
  },
  {
    src: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=1000&auto=format&fit=crop",
    alt: "DJ mixing music",
  },
  {
    src: "https://images.unsplash.com/photo-1520583457224-aee11bad5112?q=80&w=1000&auto=format&fit=crop",
    alt: "Woman with neon lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1000&auto=format&fit=crop",
    alt: "Woman sitting in a boat",
  },
  {
    src: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=1000&auto=format&fit=crop",
    alt: "Autumn leaves on branches",
  },
];

export default function Catalogue() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Popular Works
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt labore dolore.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="relative w-full pb-24">
        {/* 
          This absolute div creates the black background.
          It starts halfway down the grid container and extends to the bottom.
          We use -z-10 to keep it behind the images.
        */}
        <div className="absolute top-1/2 bottom-0 left-0 w-full bg-black -z-10"></div>

        {/* Grid Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/5] overflow-hidden group bg-gray-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
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