export default function CancelPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <div className="mx-auto w-full max-w-2xl px-6 py-16">
        <h1 className="font-display text-4xl">No worries.</h1>
        <p className="mt-4 text-[var(--muted)]">
          Your checkout was canceled. If you want to move forward, you can grab the
          Lead Gen Plan any time.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/#pricing"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--ink)] px-6 text-sm font-semibold text-[var(--paper)]"
          >
            Back to pricing
          </a>
          <a
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--ink)] px-6 text-sm font-semibold"
          >
            Back to site
          </a>
        </div>

        <p className="mt-8 text-xs text-[var(--muted)]">
          Prefer DM? Message @soya_da_yoot with “PLAN”.
        </p>
      </div>
    </main>
  );
}
