import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden grain">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--accent-soft)] via-[var(--background)] to-[var(--background)]" />
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] -z-10 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #b8d4be 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <h1 className="animate-fade-up-delay-1 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance">
            Nutrition science{" "}
            <span className="italic text-[var(--accent)]">in service of</span>{" "}
            health equity.
          </h1>

          <p className="animate-fade-up-delay-2 mt-8 text-lg lg:text-xl leading-relaxed text-[var(--muted)] max-w-2xl text-pretty">
            I'm Alison Brown — a public health nutrition researcher whose
            work centers on the social determinants of health and
            nutrition-related disparities. I write, teach, and partner with
            communities to translate science into policy and practice.
          </p>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#research"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-medium hover:bg-[var(--accent)] transition-colors"
            >
              Explore the work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Speaking inquiries
            </a>
          </div>

          <div className="animate-fade-up-delay-3 mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {[
              ["35+", "Publications"],
              ["780+", "Citations"],
              ["100", "Inspiring Black Scientists"],
              ["40 / 40", "Leaders in Health"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-3xl text-[var(--accent)]">{n}</div>
                <div className="text-xs uppercase tracking-wider text-[var(--muted)] mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-up-delay-2">
          <div className="relative max-w-sm mx-auto">
            <div
              className="absolute -inset-4 rounded-[2.5rem] -z-10 opacity-60 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, var(--accent-light), transparent 60%)",
              }}
            />

            <div className="absolute -top-3 -left-3 w-24 h-24 rounded-2xl border-2 border-[var(--accent)]/20 -z-10" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-[var(--accent-soft)] -z-10" />

            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-xl shadow-[var(--accent)]/10">
              <Image
                src="/alison-brown.jpg"
                alt="Alison G.M. Brown, PhD, RDN"
                fill
                priority
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 80vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <div className="font-serif text-xl">Alison G.M. Brown</div>
                <div className="text-sm opacity-85">PhD, RDN</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
