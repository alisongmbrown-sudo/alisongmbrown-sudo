export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              About
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight">
              From Spelman to The Gambia to Federal Service.
            </h2>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-[var(--foreground)]/85">
          <p>
            My path into nutrition began at home — watching my mother navigate the
            health consequences of obesity. It pushed me toward prevention rather
            than treatment, and toward the structural questions that decide who
            gets to live a long, healthy life and who doesn&apos;t.
          </p>
          <p>
            As an undergraduate at <strong>Spelman College</strong>, I studied
            chemistry and joined the NIH-funded Minority Health International
            Research Training Program, spending a transformative summer in The
            Gambia studying the seasonality of malnutrition in infants. That
            experience reframed my career: I went from considering bariatric
            medicine to committing to public health.
          </p>
          <p>
            I earned an MS in Applied Physiology and Nutrition at{" "}
            <strong>Columbia University&apos;s Teachers College</strong>, then a
            PhD in Food Policy and Applied Nutrition at the{" "}
            <strong>Friedman School at Tufts University</strong>. Today, as a
            Program Director at the NIH&apos;s National Heart, Lung, and Blood
            Institute, I help shape research that takes social determinants of
            health seriously — and brings communities into the science.
          </p>

          <div className="pt-8 grid sm:grid-cols-2 gap-6 mt-8 border-t border-[var(--border)]">
            <div>
              <div className="text-xs uppercase tracking-wider text-[var(--muted)] mb-2">
                Education
              </div>
              <ul className="space-y-2 text-base">
                <li>
                  <strong>PhD</strong>, Food Policy & Applied Nutrition · Tufts
                </li>
                <li>
                  <strong>MS</strong>, Applied Physiology & Nutrition · Columbia
                </li>
                <li>
                  <strong>BS</strong>, Chemistry · Spelman College
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[var(--muted)] mb-2">
                Credentials
              </div>
              <ul className="space-y-2 text-base">
                <li>Registered Dietitian Nutritionist (RDN)</li>
                <li>Albert Schweitzer Fellow</li>
                <li>Co-Chair, NIH Diet, Nutrition, and Health Outcomes WG</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
