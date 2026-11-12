import Image from "next/image";
import { galleryImages } from "@/src/assets";

export default function GallerySection() {
  return (
    <section
      className="relative z-20 -mt-px overflow-hidden bg-white"
      aria-label="Photography gallery"
    >
      {/* Top fade: smoother, darker blend */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-48 bg-linear-to-b from-black via-black/50 to-transparent sm:h-60" />

      {/* Gallery images */}
      <div className="relative mx-auto -mt-12 grid w-full max-w-7xl grid-cols-2 gap-2 px-5 sm:-mt-16 sm:grid-cols-4 sm:px-8 lg:px-10">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden bg-gray-200"
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 320px"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </div>
        ))}
      </div>

      {/* Bottom fade: transparent to black */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-linear-to-t from-black via-black/20 to-transparent sm:h-52" />
    </section>
  );
}
