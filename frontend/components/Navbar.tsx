"use client";

import { profile } from "@/lib/content";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const initials = profile.name
  .split(" ")
  .map((word) => word.charAt(0))
  .join("");

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[5%] py-[22px] mix-blend-difference">
      <a
        href="#top"
        className="font-mono text-sm font-bold tracking-[0.05em] text-ink"
      >
        {initials}
        <span className="opacity-10"> / PORTFOLIO</span>
      </a>

      <ul className="hidden list-none items-center gap-[34px] md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative text-[13px] font-medium tracking-[0.03em] text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 rounded-full border border-ink/35 px-[14px] py-[7px] font-mono text-[11px] text-ink">
        <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-[#3ee06b]" />
        Available for projects
      </div>
    </nav>
  );
}