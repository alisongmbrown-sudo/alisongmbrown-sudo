export default function Community() {
  return (
    <section
      id="community"
      className="py-24 lg:py-32 bg-[var(--surface)] border-y border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
            Community & Education
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            Science doesn&apos;t change anything until it leaves the journal.
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            Alongside the research, I teach, mentor, and partner with community
            organizations. Some of the work I&apos;m proudest of has happened in
            church basements, community gyms, and clinic waiting rooms — not
            conference halls.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3">Carney Hospital</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Designed and led a patient education program in Dorchester through
              an independent study with master&apos;s students — bringing
              evidence-based nutrition guidance to a safety-net hospital.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a3 3 0 015.36-1.84M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                <circle cx="17" cy="11" r="2" />
                <circle cx="7" cy="11" r="2" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3">Healthworks Community Fitness</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Albert Schweitzer Fellowship project at the non-profit gym in
              Dorchester, building nutrition programming alongside the women
              they serve.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                <path d="M3 7l9-4 9 4M3 7v10l9 4 9-4V7M3 7l9 4m9-4l-9 4m0 0v10" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3">Manna Food Center</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Volunteering with Montgomery County&apos;s leading hunger-relief
              nonprofit — distributing food, supporting nutrition education, and
              helping families across the DMV access fresh, healthy groceries.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 items-stretch">
          <div className="p-10 rounded-2xl bg-[var(--accent-soft)]">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Working group
            </div>
            <h3 className="font-serif text-2xl mb-3">
              NIH Diet, Nutrition, and Health Outcomes Working Group
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Co-Chair. Coordinates strategy across NIH Institutes & Centers to
              advance research on nutrition-related health disparities.
            </p>
          </div>
          <div className="p-10 rounded-2xl bg-[var(--accent-soft)]">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Friedman School · Tufts
            </div>
            <h3 className="font-serif text-2xl mb-3">
              Faculty, Justice League, DEI Leadership Council
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Faculty Search Committee, Admissions Committee, Diversity &
              Inclusion Leadership Council. Mentoring the next generation of
              nutrition scientists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
