const themes = [
  {
    title: "Nutrition & Health Disparities",
    body: "Understanding why diet-related disease tracks so closely with race, place, and income — and what kinds of interventions actually move the needle.",
    tags: ["Cardiovascular", "Diabetes", "Obesity"],
  },
  {
    title: "Social Determinants of Health",
    body: "Embedding social, economic, and environmental context into nutrition research.",
    tags: ["Food access", "Policy", "Equity"],
  },
  {
    title: "Community-Engaged Science",
    body: "Building research that begins with — not about — the communities it's meant to serve. Co-designing studies, training, and translation.",
    tags: ["CBPR", "Translation", "Capacity"],
  },
  {
    title: "Diet, Activity & Sleep Assessment",
    body: "Improving how large-scale epidemiological studies measure what people eat, how they move, and how they rest.",
    tags: ["Epidemiology", "Methods", "Cohorts"],
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="py-24 lg:py-32 bg-[var(--surface)] border-y border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
            Research
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            Four threads, one question:{" "}
            <span className="italic text-[var(--accent)]">
              who gets to be healthy?
            </span>
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            My research sits at the intersection of nutrition science, chronic
            disease epidemiology, and the lived experience of the communities
            most affected by diet-related disparities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {themes.map((t, i) => (
            <div
              key={t.title}
              className="group relative p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-xs text-[var(--muted)]">
                0{i + 1}
              </div>
              <h3 className="font-serif text-2xl mb-4 pr-10">{t.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed mb-6">{t.body}</p>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] text-white">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] opacity-70 mb-3">
                Featured publication
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl mb-3">
                Perspective on Advancing Health Equity: Enhancing Impact Through
                Collaboration
              </h3>
              <p className="opacity-85 leading-relaxed">
                A perspective on how cross-sector collaboration — across federal
                agencies, academic researchers, and community partners — can
                amplify the reach and impact of health-equity science. Published
                in JACC Advances.
              </p>
            </div>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/39130019/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[var(--accent)] text-sm font-medium hover:bg-[var(--accent-soft)] transition-colors"
            >
              Read on PubMed
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
