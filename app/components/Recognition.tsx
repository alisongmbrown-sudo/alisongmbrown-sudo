const awards = [
  {
    year: "2020",
    title: "100 Inspiring Black Scientists in America",
    org: "Cell Mentor",
  },
  {
    year: "2018",
    title: "40 Under 40 Leaders in Health",
    org: "National Minority Quality Forum",
  },
  {
    year: "Tufts",
    title: "Gershoff-Simonian Award for Research Excellence",
    org: "Friedman School of Nutrition Science & Policy",
  },
  {
    year: "Tufts",
    title: "Presidential Award for Citizenship & Public Service",
    org: "Tufts University",
  },
  {
    year: "Graduate",
    title: "Boston Delta Foundation & Pfizer Graduate Research Award",
    org: "Delta Sigma Theta · Pfizer",
  },
  {
    year: "Tufts",
    title: "Rising Star Award",
    org: "Friedman School of Nutrition Science and Policy",
  },
  {
    year: "NIH",
    title: "NHLBI Director's Award",
    org: "National Heart, Lung, and Blood Institute",
  },
  {
    year: "NIH",
    title: "NIH Director's Award",
    org: "National Institutes of Health",
  },
];

export default function Recognition() {
  return (
    <section id="recognition" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-5">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Recognition
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight">
              Honored, by people whose opinion I trust.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              Awards aren&apos;t the point — but I&apos;m grateful for the
              communities and institutions that have recognized this work and
              kept me accountable to it.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
          {awards.map((a) => (
            <div
              key={a.title}
              className="p-8 bg-[var(--background)] hover:bg-[var(--accent-soft)] transition-colors"
            >
              <div className="font-serif text-xl leading-snug mb-3">
                {a.title}
              </div>
              <div className="text-sm text-[var(--muted)]">{a.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
