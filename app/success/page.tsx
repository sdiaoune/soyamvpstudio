export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <div className="mx-auto w-full max-w-2xl px-6 py-16">
        <h1 className="font-display text-4xl">Payment confirmed.</h1>
        <p className="mt-4 text-[var(--muted)]">
          You’re in. Next step: submit the intake so I can deliver your Lead Gen Plan
          within 24 hours.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/#intake"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--ink)] px-6 text-sm font-semibold text-[var(--paper)]"
          >
            Fill out intake
          </a>
          <a
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--ink)] px-6 text-sm font-semibold"
          >
            Back to site
          </a>
        </div>

        <p className="mt-8 text-xs text-[var(--muted)]">
          If you have any trouble, DM @soya_da_yoot on X with the word “PLAN” and
          your email.
        </p>
      </div>
    </main>
  );
}
