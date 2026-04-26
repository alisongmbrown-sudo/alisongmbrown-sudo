"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#workshops", label: "Workshops" },
  { href: "#community", label: "Community" },
  { href: "#writing", label: "Publications" },
  { href: "#speaking", label: "Speaking" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/85 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
        <a
          href="#"
          className="font-serif text-lg tracking-tight flex-shrink-0 whitespace-nowrap"
        >
          Alison G.M. Brown<span className="text-[var(--accent)]">,</span>{" "}
          <span className="text-[var(--muted)] text-sm font-sans">PhD RDN</span>
        </a>

        <nav className="hidden xl:flex items-center gap-7 text-sm flex-1 justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden sm:inline-flex flex-shrink-0 items-center text-sm font-medium px-4 py-2 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] transition-colors whitespace-nowrap"
        >
          Get in touch
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2 -mr-2 flex-shrink-0"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-px bg-current mb-1.5" />
          <div className="w-5 h-px bg-current mb-1.5" />
          <div className="w-5 h-px bg-current" />
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-[var(--border)] bg-[var(--background)]">
          <nav className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--muted)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm text-[var(--accent)] font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
