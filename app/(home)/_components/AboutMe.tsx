import Image from "next/image";
import { Assets } from "@/src/assets";
import { aboutMeContent } from "@/src/data/about-me";

type BiographyParagraph = {
  text: string;
  firstLetter?: string;
  featured?: boolean;
};

function BiographyColumn({ paragraphs }: { paragraphs: BiographyParagraph[] }) {
  return (
    <div className="space-y-6">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-[13px] leading-[1.8] sm:text-sm ${
            paragraph.featured ? "text-white" : "text-white/65"
          }`}
        >
          {paragraph.firstLetter && (
            <span className="float-left mr-2 -mt-1 font-sans text-[66px] font-bold leading-[0.85] text-white">
              {paragraph.firstLetter}
            </span>
          )}

          {paragraph.text}
        </p>
      ))}
    </div>
  );
}

export default function AboutMe() {
  return (
    <section
      aria-labelledby="about-me-heading"
      className="relative isolate w-full overflow-hidden bg-black"
    >
      {/* Background image */}
      <Image
        src={Assets.aboutMe}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center"
      />

      {/* Dark overlay and bottom fade */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/35 via-black/65 to-black" />

      {/* Main content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-10">
        {/* Introduction */}
        <div className="max-w-150">
          <h2
            id="about-me-heading"
            className="max-w-130 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[88px]"
          >
            {aboutMeContent.name}
          </h2>

          <p className="mt-5 max-w-150 text-xs leading-6 text-white/80 sm:text-sm">
            {aboutMeContent.introduction}
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold text-white sm:text-sm">
            {aboutMeContent.highlights.map((item, index) => (
              <div key={item.label} className="flex items-center gap-3">
                <span>
                  {item.value} {item.label}
                </span>

                {index !== aboutMeContent.highlights.length - 1 && (
                  <span className="text-orange-500">|</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Orange divider */}
        <div className="mb-8 mt-8 h-0.5 w-22 bg-orange-500" />

        {/* Biography columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <BiographyColumn paragraphs={aboutMeContent.leftColumn} />

          <BiographyColumn paragraphs={aboutMeContent.rightColumn} />
        </div>
        
      </div>
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/35 via-black/65 to-black" />
    </section>
  );
}
