const venues = [
  "American Journal of Clinical Nutrition",
  "Journal of Nutrition",
  "Annual Review of Nutrition",
  "JAMA Network Open",
  "Circulation",
  "Nutrients",
  "Journal of the Academy of Nutrition and Dietetics",
  "Public Health Nutrition",
  "Health Equity",
  "Preventive Medicine",
];

const featured = [
  {
    title:
      "Food Insecurity, Neighborhood Food Environment, and Health Disparities: State of the Science, Research Gaps and Opportunities",
    venue: "American Journal of Clinical Nutrition · 2024",
    href: "https://pubmed.ncbi.nlm.nih.gov/38160801/",
    note: "AJCN · 2024",
  },
  {
    title:
      "Bridging the Gap: The Need to Implement Dietary Guidance to Address Cardiovascular Health",
    venue: "Nutrients · 2024",
    href: "https://pubmed.ncbi.nlm.nih.gov/38999873/",
    note: "Nutrients · 2024",
  },
  {
    title:
      "Perspective on Advancing Health Equity: Enhancing Impact Through Collaboration",
    venue: "JACC Advances · 2024",
    href: "https://pubmed.ncbi.nlm.nih.gov/39130019/",
    note: "JACC · 2024",
  },
  {
    title:
      "Perspectives on Precision Nutrition Research in Heart, Lung, and Blood Diseases and Sleep Disorders",
    venue: "Advances in Nutrition · 2022",
    href: "https://pubmed.ncbi.nlm.nih.gov/35561742/",
    note: "Adv. Nutr. · 2022",
  },
  {
    title:
      "A Decade of Nutrition and Health Disparities Research at NIH, 2010–2019",
    venue: "American Journal of Preventive Medicine · 2022",
    href: "https://pubmed.ncbi.nlm.nih.gov/35469699/",
    note: "AJPM · 2022",
  },
  {
    title: "Nutrition Disparities and Cardiovascular Health",
    venue: "Current Atherosclerosis Reports · 2020",
    href: "https://pubmed.ncbi.nlm.nih.gov/32440941/",
    note: "Curr Atheroscler · 2020",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Publications
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight">
              35+ peer-reviewed papers. 780+ citations. And counting.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              Peer-reviewed research in leading nutrition, cardiovascular, and
              public health journals — indexed across PubMed, ResearchGate, and
              the major scholarly databases.
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-16">
          {featured.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-6 p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]/40 transition-all"
            >
              <div className="hidden sm:block flex-shrink-0 w-20 text-xs uppercase tracking-wider text-[var(--accent)] pt-1">
                {p.note}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {p.title}
                </h3>
                <div className="text-sm text-[var(--muted)]">{p.venue}</div>
              </div>
              <svg
                className="flex-shrink-0 mt-2 text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ))}
        </div>

        <div className="p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border)]">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
                Indexed in
              </div>
              <h3 className="font-serif text-2xl mb-3">
                Journals where the work lives
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                A selection of venues where my peer-reviewed research has been
                published.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=Alison+G.M.+Brown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-light)]"
                >
                  PubMed →
                </a>
                <a
                  href="https://www.researchgate.net/scientific-contributions/Alison-GM-Brown-2120979741"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)]"
                >
                  ResearchGate →
                </a>
                <a
                  href="https://sciprofiles.com/profile/3601217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)]"
                >
                  SciProfiles →
                </a>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {venues.map((v) => (
                  <li
                    key={v}
                    className="flex items-start gap-3 text-sm leading-snug"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
