export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[var(--muted)]">
        <div className="font-serif text-base text-[var(--foreground)]">
          Alison G.M. Brown<span className="text-[var(--accent)]">.</span>{" "}
          <span className="text-[var(--muted)] text-sm font-sans">
            PhD, RDN
          </span>
        </div>
        <div className="text-xs">
          © {new Date().getFullYear()}. All views are my own and do not represent
          the NIH or NHLBI.
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/alisonbrownnutrition/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/?term=Alison+G.M.+Brown"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            PubMed
          </a>
        </div>
      </div>
    </footer>
  );
}
