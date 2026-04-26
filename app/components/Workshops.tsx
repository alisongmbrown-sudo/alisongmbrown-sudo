const workshops = [
  {
    year: "2021",
    title:
      "Food Insecurity, Neighborhood Food Environment, and Nutrition Health Disparities",
    href: "https://www.nhlbi.nih.gov/events/2021/food-insecurity-neighborhood-food-environment-and-nutrition-health-disparities",
    body: "Convened federal scientists, academic researchers, and community partners to map the state of the science on food insecurity and neighborhood food environments — and to chart research priorities for closing nutrition health-disparity gaps.",
  },
  {
    year: "2023",
    title:
      "Advancing Health Equity Through Culture-Centered Dietary Interventions",
    href: "https://www.nhlbi.nih.gov/events/2023/advancing-health-equity-through-culture-centered-dietary-interventions",
    body: "Brought together federal partners and the field to elevate culturally-grounded dietary intervention research — centering community knowledge and lived experience as core inputs to evidence-based nutrition science.",
  },
];

const agencies = ["NIH", "USDA", "CDC"];

export default function Workshops() {
  return (
    <section
      id="workshops"
      className="py-24 lg:py-32 border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Federal Workshops
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight">
              Convening across agencies to move the field forward.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
              I plan and lead scientific workshops with colleagues across the
              NIH, USDA, and CDC — bringing federal partners, academic
              researchers, and community organizations into the same room to
              shape the nutrition health-equity research agenda.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
                In partnership with
              </span>
              {agencies.map((a) => (
                <span
                  key={a}
                  className="px-3 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-xs font-semibold tracking-wider"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {workshops.map((w) => (
            <a
              key={w.title}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-xl hover:shadow-[var(--accent)]/10 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent-soft)]">
                  Workshop · {w.year}
                </div>
                <svg
                  className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl leading-snug mb-4 group-hover:text-[var(--accent)] transition-colors">
                {w.title}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm">
                {w.body}
              </p>
              <div className="mt-6 pt-6 border-t border-[var(--border)] text-xs text-[var(--muted)] uppercase tracking-wider">
                NHLBI · NIH
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
