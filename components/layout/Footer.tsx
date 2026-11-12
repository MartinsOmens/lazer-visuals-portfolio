import { Icon } from "@iconify/react";

const socialLinks = [
  {
    name: "Instagram",
    icon: "mdi:instagram",
    url: "https://www.instagram.com/lazervisuals/",
  },
  {
    name: "Facebook",
    icon: "mdi:facebook",
    url: "https://www.facebook.com/",
  },
  {
    name: "X",
    icon: "simple-icons:x",
    url: "https://x.com/",
  },
  {
    name: "TikTok",
    icon: "simple-icons:tiktok",
    url: "https://www.tiktok.com/@lazervisuals",
  },

  {
    name: "Email",
    icon: "mdi:email-outline",
    url: "mailto:hello@lazervisuals.com",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative mt-0 flex min-h-62.5 items-end justify-center bg-cover bg-center px-4 pb-8"
      style={{
        backgroundImage: "url('/images/footer-bg.jpg')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 text-center">
        <p className="font-serif text-4xl font-bold text-white">
          Lazer Visuals
        </p>

        <p className="mt-2 text-sm text-gray-300">
          Capturing moments. Creating memories.
        </p>
        {/* Social media links */}
        <div className="mt-6 flex items-center justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.name === "Email" ? undefined : "_blank"}
              rel={social.name === "Email" ? undefined : "noopener noreferrer"}
              aria-label={social.name}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-gray-300 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/20"
            >
              <Icon icon={social.icon} width={21} height={21} />
            </a>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Lazer Visuals. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
