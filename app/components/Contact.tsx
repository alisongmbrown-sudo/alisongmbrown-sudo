export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
          Get in touch
        </div>
        <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight mb-6 text-balance">
          Let&apos;s build healthier futures, together.
        </h2>
        <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed mb-12">
          For speaking engagements, research collaborations, media inquiries, or
          mentorship — the best place to reach me is LinkedIn. I read every
          message.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/alisonbrownnutrition/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-medium hover:bg-[var(--accent)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 gap-8 pt-12 border-t border-[var(--border)]">
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--muted)] mb-2">
              Best for
            </div>
            <div className="font-serif text-lg">Speaking & collaborations</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--muted)] mb-2">
              Response time
            </div>
            <div className="font-serif text-lg">Within a week</div>
          </div>
        </div>
      </div>
    </section>
  );
}
