const experience = [
  {
    period: "2018 — Present",
    role: "Program Director, Nutrition & Health Disparities",
    org: "NIH · National Heart, Lung, and Blood Institute",
    detail:
      "Division of Cardiovascular Sciences. Lead nutrition health-disparities research portfolio and serve as Co-Chair of the NIH Diet, Nutrition, and Health Outcomes Working Group.",
  },
  {
    period: "2019 — 2022",
    role: "Adjunct Professor of Nutrition",
    org: "Prince George's Community College",
    detail:
      "Teaching the next generation of public-health and allied-health professionals.",
  },
  {
    period: "2023 — 2026",
    role: "Board of Directors",
    org: "American Society for Nutrition (ASN)",
    detail:
      "Serving on the governing board of the leading professional society for nutrition researchers, advancing the field's strategic priorities and member community.",
  },
  {
    period: "2017 — 2018",
    role: "Health Disparities Clinical Fellow",
    org: "Tufts CTSI · Tufts Medical Center",
    detail:
      "Analyzed health disparities, insurance stability, and diabetes outcomes by race and ethnicity. Earned a graduate certificate in Clinical & Translational Science.",
  },
  {
    period: "2012 — 2017",
    role: "PhD, Food Policy & Applied Nutrition",
    org: "Friedman School · Tufts University",
    detail:
      "Doctoral research on diet-related disparities. Albert Schweitzer Fellow. Recipient of the Gershoff–Simonian Prize and the Tufts Presidential Award for Citizenship & Public Service.",
  },
  {
    period: "Earlier",
    role: "Research Associate",
    org: "Center for Science in the Public Interest",
    detail:
      "Federal nutrition policy and food-systems advocacy in Washington, DC.",
  },
  {
    period: "Volunteer",
    role: "Manna Food Center · Boston NAACP · Boston Public Health Commission",
    org: "Community service & civic engagement",
    detail:
      "Hunger-relief volunteering with Manna Food Center, leadership roles with the Boston Branch NAACP, and a Fellowship at the Boston Public Health Commission&apos;s Office of Health Equity.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Experience
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight">
              A career spent at the intersection of science and service.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              From federal policy advocacy in DC, through doctoral research at
              Tufts, to leading a nutrition health-disparities portfolio at the
              NIH — the through-line is community.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[7.5rem] sm:left-[10rem] top-2 bottom-2 w-px bg-[var(--border)] hidden sm:block" />

          <ol className="space-y-10">
            {experience.map((e) => (
              <li
                key={e.role + e.period}
                className="grid sm:grid-cols-[10rem_1fr] gap-6 sm:gap-10 items-start"
              >
                <div className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)] sm:text-right sm:pt-1">
                  {e.period}
                </div>
                <div className="relative sm:pl-10">
                  <span className="hidden sm:block absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)]" />
                  <h3 className="font-serif text-xl leading-snug mb-1">
                    {e.role}
                  </h3>
                  <div className="text-sm text-[var(--accent)] mb-3">
                    {e.org}
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed text-sm max-w-2xl">
                    {e.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
