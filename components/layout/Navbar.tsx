"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-200 bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        {/* Brand */}
        <Link
          href="/"
          className={`relative z-50 text-2xl font-bold tracking-tight transition-colors md:text-3xl ${
            scrolled ? "text-neutral-900" : "text-white/90"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Lazer<span className="text-[#FF573D]">{"_"}</span>Visual
          <span className="sr-only"> Home</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#FF573D] ${
                scrolled ? "text-neutral-600" : "text-white/75"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-[#FF573D] text-white hover:bg-[#e94830]"
                : "border border-white/30 text-white hover:border-[#FF573D] hover:bg-[#FF573D]"
            }`}
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full border transition-colors md:hidden ${
            scrolled
              ? "border-neutral-200 text-neutral-900"
              : "border-white/20 text-white"
          }`}
        >
          <Icon icon={menuOpen ? "lucide:x" : "lucide:menu"} width={22} />
        </button>

        {/* Mobile navigation */}
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center gap-9 transition-all duration-300 md:hidden ${
            scrolled ? "bg-white" : "bg-[#080A0D]"
          } ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }`}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-medium transition-colors hover:text-[#FF573D] ${
                scrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-[#FF573D] px-8 py-4 font-semibold text-white"
          >
            Let's Talk
          </Link>
        </div>
      </nav>
    </header>
  );
}
