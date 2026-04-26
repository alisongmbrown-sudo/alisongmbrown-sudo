const topics = [
  {
    title: "Nutrition & Health Equity",
    body: "Why diet-related disease is a justice issue, and what evidence-based interventions look like at scale.",
  },
  {
    title: "Translating Science",
    body: "How federally-funded nutrition research becomes policy, programs, and practice — and where the gaps are.",
  },
  {
    title: "Community-Engaged Research",
    body: "Designing studies with — not on — communities. Practical lessons from a decade of partnership.",
  },
  {
    title: "Pathways into STEM & Public Health",
    body: "For students and early-career scientists, especially from communities historically underrepresented in research.",
  },
];

export default function Speaking() {
  return (
    <section
      id="speaking"
      className="py-24 lg:py-32 bg-[var(--surface)] border-y border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
            Speaking
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            Available for keynotes, panels, and classroom visits.
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            I speak regularly to academic audiences, federal partners,
            community organizations, and student groups. Here are the topics I
            return to most.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {topics.map((t, i) => (
            <div
              key={t.title}
              className="p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:shadow-lg transition-all"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-serif text-3xl text-[var(--accent)]">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-xl">{t.title}</h3>
              </div>
              <p className="text-[var(--muted)] leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-light)] transition-colors"
          >
            Invite Alison to speak
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
