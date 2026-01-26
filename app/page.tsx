export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(241,192,122,0.35),transparent_60%),radial-gradient(circle_at_30%_30%,rgba(30,111,92,0.12),transparent_55%),linear-gradient(120deg,rgba(201,109,79,0.18),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] mix-blend-multiply noise-overlay" />
      <a
        href="#main"
        className="sr-only rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--paper)] focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--paper)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink)]"
      >
        Skip to Content
      </a>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--paper)] font-display text-lg">
            S
          </div>
          <div>
            <p className="font-display text-lg">Soya MVP Studio</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
              MVP Builders
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <a
            href="#pricing"
            className="transition-colors hover:text-[var(--ink)] focus-visible:underline focus-visible:text-[var(--ink)] focus-visible:outline-none motion-reduce:transition-none touch-manipulation"
          >
            Pricing
          </a>
          <a
            href="#process"
            className="transition-colors hover:text-[var(--ink)] focus-visible:underline focus-visible:text-[var(--ink)] focus-visible:outline-none motion-reduce:transition-none touch-manipulation"
          >
            Process
          </a>
          <a
            href="#deliverables"
            className="transition-colors hover:text-[var(--ink)] focus-visible:underline focus-visible:text-[var(--ink)] focus-visible:outline-none motion-reduce:transition-none touch-manipulation"
          >
            Deliverables
          </a>
          <a
            href="#faq"
            className="transition-colors hover:text-[var(--ink)] focus-visible:underline focus-visible:text-[var(--ink)] focus-visible:outline-none motion-reduce:transition-none touch-manipulation"
          >
            FAQ
          </a>
        </nav>
        <a
          href="#intake"
          className="rounded-full border border-[var(--ink)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)] motion-reduce:transition-none touch-manipulation"
        >
          Get My MVP Plan
        </a>
      </header>

      <main
        id="main"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-8 lg:px-10 lg:pt-14"
      >
        <section className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-[var(--line)] bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              MVPs Shipped in Days, Not Months
            </span>
            <h1 className="font-display text-4xl leading-tight text-[var(--ink)] text-balance md:text-5xl lg:text-6xl">
              Ship a Production-Ready MVP in Days, Not Quarters.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              For solo founders who need a real product in users' hands fast. You get
              tight scope, conversion-focused design, and a clean handoff so you can
              keep shipping.
            </p>
            <div className="grid gap-4 text-sm text-[var(--ink)] sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-4">
                <p className="font-semibold">48-Hour Scope Clarity</p>
                <p className="mt-2 text-[var(--muted)]">
                  A focused plan that keeps timelines in days, not months.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-4">
                <p className="font-semibold">Design That Converts</p>
                <p className="mt-2 text-[var(--muted)]">
                  UI and UX built to validate demand quickly.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-4">
                <p className="font-semibold">Clean Handoff, No Debt</p>
                <p className="mt-2 text-[var(--muted)]">
                  Production-ready code + docs so you can keep shipping.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-4">
                <p className="font-semibold">One Senior Team</p>
                <p className="mt-2 text-[var(--muted)]">
                  Strategy, design, and engineering in one sprint cadence.
                </p>
              </div>
            </div>
          </div>

          <div
            id="intake"
            className="scroll-mt-24 rounded-3xl border border-[var(--line)] bg-white/85 p-6 shadow-[0_24px_60px_-40px_rgba(16,21,16,0.6)] backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                Start Here
              </p>
              <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                Fast Scope + Estimate
              </span>
            </div>
            <h2 className="font-display text-2xl text-[var(--ink)] text-balance">
              Get Your MVP Plan
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Share the idea and get a clear scope outline with the fastest path to
              launch.
            </p>
            <form className="mt-6 grid gap-4" method="post">
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Name</span>
                <input
                  name="name"
                  required
                  autoComplete="off"
                  className="h-11 rounded-xl border border-[var(--line)] bg-white px-3 text-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,109,79,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
                  placeholder="Alex Rivera…"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Work email</span>
                <input
                  type="email"
                  name="email"
                  required
                  inputMode="email"
                  autoComplete="off"
                  spellCheck={false}
                  className="h-11 rounded-xl border border-[var(--line)] bg-white px-3 text-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,109,79,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
                  placeholder="alex@company.com…"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Company or project</span>
                <input
                  name="company"
                  autoComplete="off"
                  className="h-11 rounded-xl border border-[var(--line)] bg-white px-3 text-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,109,79,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
                  placeholder="Stealth health-tech startup…"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">What are you building?</span>
                <textarea
                  name="overview"
                  required
                  rows={4}
                  autoComplete="off"
                  className="rounded-xl border border-[var(--line)] bg-white px-3 py-2 text-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,109,79,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
                  placeholder="Marketplace for local clinics to manage overflow patients…"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Target launch window</span>
                <select
                  name="timeline"
                  autoComplete="off"
                  className="h-11 rounded-xl border border-[var(--line)] bg-white px-3 text-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,109,79,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
                  defaultValue="4-8 weeks"
                >
                  <option value="asap">ASAP</option>
                  <option value="4-8 weeks">4-8 weeks</option>
                  <option value="8-12 weeks">8-12 weeks</option>
                  <option value="flexible">Flexible</option>
                </select>
              </label>
              <button
                type="submit"
                className="mt-2 h-12 rounded-full bg-[var(--ink)] text-sm font-semibold text-[var(--paper)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none motion-reduce:hover:transform-none touch-manipulation"
              >
                Get My MVP Plan
              </button>
              <p className="text-xs text-[var(--muted)]">
                No obligation. Get a clear scope outline and next steps.
              </p>
            </form>
          </div>
        </section>

        <section
          id="pricing"
          className="grid gap-8 rounded-3xl border border-[var(--line)] bg-white/80 p-6 scroll-mt-24"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Pricing Anchors
              </p>
              <h2 className="mt-3 font-display text-3xl text-[var(--ink)] text-balance">
                Pricing Anchors, No Surprises.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
                Scope Sprint is fixed at $500 for a 48-hour plan. MVP builds start at
                $6,000, with MVP + Mobile starting at $9,500 once scope is locked.
              </p>
            </div>
            <a
              href="#intake"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--ink)] px-5 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)] motion-reduce:transition-none touch-manipulation"
            >
              Get a Custom Scope
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Scope Sprint",
                price: "$500",
                kicker: "48-Hour Plan",
                description: "A fixed scope sprint to lock the plan and estimate.",
                bullets: [
                  "Core flow + success metrics",
                  "Feature cut list + priorities",
                  "Build-ready scope + timeline",
                ],
              },
              {
                title: "MVP Build",
                price: "Starts at $6,000",
                kicker: "Most Common",
                featured: true,
                description: "Design and build the web MVP that validates demand fast.",
                bullets: [
                  "Product design + clickable prototype",
                  "Full-stack build in days/weeks",
                  "QA, launch, and clean handoff",
                ],
              },
              {
                title: "MVP + Mobile",
                price: "Starts at $9,500",
                kicker: "Web + Mobile",
                description: "Web MVP plus a mobile companion for iOS + Android.",
                bullets: [
                  "Unified design system",
                  "Cross-platform mobile build",
                  "Store-ready release support",
                ],
              },
            ].map((tier) => (
              <div
                key={tier.title}
                className={`rounded-2xl border border-[var(--line)] p-5 ${
                  tier.featured
                    ? "bg-[var(--ink)] text-[var(--paper)]"
                    : "bg-white/80 text-[var(--ink)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{tier.title}</p>
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${
                      tier.featured
                        ? "border-[rgba(247,241,232,0.4)] text-[rgba(247,241,232,0.72)]"
                        : "border-[var(--line)] text-[var(--muted)]"
                    }`}
                  >
                    {tier.kicker}
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl">{tier.price}</p>
                <p
                  className={`mt-3 text-sm ${
                    tier.featured
                      ? "text-[rgba(247,241,232,0.7)]"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {tier.description}
                </p>
                <ul
                  className={`mt-4 space-y-2 text-sm ${
                    tier.featured
                      ? "text-[rgba(247,241,232,0.75)]"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {tier.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-[var(--line)] bg-white/70 p-6 md:grid-cols-4">
          {[
            "SaaS Dashboards",
            "Marketplaces",
            "AI Copilots",
            "Mobile Companions",
          ].map((item) => (
            <div key={item} className="text-sm text-[var(--muted)]">
              <span className="text-base font-semibold text-[var(--ink)]">
                {item}
              </span>
              <p className="mt-2">
                Build MVPs for validation, onboarding, and early revenue.
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 rounded-3xl border border-[var(--line)] bg-white/80 p-6 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Proof
            </p>
            <h2 className="mt-3 font-display text-3xl text-[var(--ink)] text-balance">
              Selected Builds, Shipped Fast
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Mini case studies from recent MVP launches.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "SponsorSynq",
                url: "https://sponsorsynq.com",
                summary:
                  "Built a sponsorship monetization MVP for event hosts in 10 days, with Stripe payments so hosts can start earning immediately.",
                timeline: "10 days",
                stack: "Next.js + Supabase + Stripe",
              },
              {
                title: "The Quad Flow",
                url: "https://thequadflow.com",
                summary:
                  "Shipped a productivity MVP in 3 days that auto-prioritizes tasks so users always know what to work on next.",
                timeline: "3 days",
                stack: "Next.js + Supabase + OpenAI",
              },
              {
                title: "Djembe",
                url: "https://djembe.tech",
                summary:
                  "Delivered a music marketplace proof-of-concept in under 24 hours so creators could buy/sell beats and validate demand fast.",
                timeline: "Under 24 hours",
                stack: "Next.js + Stripe + Cloudflare",
              },
            ].map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-[var(--line)] bg-white/70 p-5 text-sm text-[var(--muted)] transition-transform hover:-translate-y-1 hover:border-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none motion-reduce:hover:transform-none touch-manipulation"
              >
                <p className="text-base font-semibold text-[var(--ink)]">
                  {project.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {project.summary}
                </p>
                <div className="mt-4 space-y-2 text-xs text-[var(--muted)]">
                  <p>
                    <span className="font-semibold text-[var(--ink)]">
                      Timeline:
                    </span>{" "}
                    {project.timeline}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--ink)]">Stack:</span>{" "}
                    {project.stack}
                  </p>
                  <p className="pt-1 text-[var(--ink)]">View Live →</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-[var(--ink)] text-balance">
              If You Are Building Solo, Momentum Dies Fast.
            </h2>
            <p className="text-[var(--muted)]">
              You are juggling product, design, and engineering alone. Freelancers
              slow you down, agencies bloat scope, and your idea stays stuck in
              planning. You need a tight focus on what proves demand.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "No more juggling product, design, and engineering alone",
                "A tight backlog that keeps you out of scope creep",
                "Weekly proof points you can test with users",
                "Clarity on what to build next and what to ignore",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--line)] bg-white/70 p-4 text-sm text-[var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--line)] bg-[var(--ink)] p-6 text-[var(--paper)]">
            <h3 className="font-display text-2xl text-balance">
              Designed for High-Intent Search
            </h3>
            <p className="mt-3 text-sm text-[rgba(247,241,232,0.72)]">
              Founders searching for “MVP development agency,” “build web app MVP,”
              or “mobile app MVP” land on a page that answers their questions and
              earns trust fast.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>Clear offer and proof of focus</li>
              <li>Fast path to a scoped plan</li>
              <li>One CTA that keeps momentum</li>
            </ul>
          </div>
        </section>

        <section id="process" className="grid gap-8 lg:grid-cols-3 scroll-mt-24">
          {[
            {
              label: "1. Scope Sprint",
              title: "Scope Sprint",
              text: "Clarify the core flow, success metrics, and what gets cut. Leave with a build-ready plan.",
            },
            {
              label: "2. Design + Prototype",
              title: "Design + Prototype",
              text: "Validate the experience before code. Visuals, UX, and clickable flows.",
            },
            {
              label: "3. Build + Launch",
              title: "Build + Launch",
              text: "Full-stack build, QA, and a clean handoff so you keep moving.",
            },
          ].map((step) => (
            <div
              key={step.label}
              className="rounded-3xl border border-[var(--line)] bg-white/70 p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {step.label}
              </p>
              <p className="mt-4 font-display text-2xl">{step.title}</p>
              <p className="mt-3 text-sm text-[var(--muted)]">{step.text}</p>
            </div>
          ))}
        </section>

        <section
          id="deliverables"
          className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr] scroll-mt-24"
        >
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-balance">
              What You Get in Every MVP Build
            </h2>
            <p className="text-[var(--muted)]">
              Focus on the minimum that proves value, then build in a way you can
              scale after launch.
            </p>
            <div className="grid gap-3 text-sm text-[var(--muted)]">
              {[
                "Strategic scope, success criteria, and feature priority",
                "Clickable prototype to validate flow before build",
                "Responsive web or mobile build with production-ready code",
                "Analytics hooks so you can measure activation and retention",
                "Launch checklist plus a clean handoff document",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--line)] bg-white/70 px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--line)] bg-white/80 p-6">
            <h3 className="font-display text-2xl text-balance">
              Built for Founders Like
            </h3>
            <div className="mt-6 grid gap-4">
              {[
                {
                  title: "Solo founders",
                  text: "Need a focused MVP without hiring a full team.",
                },
                {
                  title: "First-time founders",
                  text: "Want to validate demand before raising or hiring.",
                },
                {
                  title: "Repeat founders",
                  text: "Need a fast path to a shippable product.",
                },
              ].map((persona) => (
                <div
                  key={persona.title}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4"
                >
                  <p className="font-semibold">{persona.title}</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{persona.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Traditional Agency",
              text: "Slow discovery, lots of meetings, large teams, and diluted outcomes.",
            },
            {
              title: "Freelancer Roulette",
              text: "Hard to coordinate design, strategy, and engineering without gaps.",
            },
            {
              title: "Soya MVP Studio",
              text: "One senior team, one focused plan, and a launch-ready MVP.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[var(--line)] bg-white/70 p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {item.title}
              </p>
              <p className="mt-4 text-lg font-semibold">{item.text}</p>
            </div>
          ))}
        </section>

        <section
          id="faq"
          className="grid gap-6 lg:grid-cols-[0.4fr_0.6fr] scroll-mt-24"
        >
          <div>
            <h2 className="font-display text-3xl text-balance">FAQ</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Answering the most common questions solo founders ask.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                q: "How fast can you launch?",
                a: "Timelines depend on scope, but you get an MVP that ships in weeks, not quarters. You receive a clear timeline after the scope sprint.",
              },
              {
                q: "Do you build both web and mobile apps?",
                a: "Yes. You can ship a responsive web MVP, a mobile app, or both depending on where your users are.",
              },
              {
                q: "Do I need a team already?",
                a: "No. Scope, design, and build are handled end-to-end, with a clean handoff so you can keep going.",
              },
              {
                q: "What if I am still validating the idea?",
                a: "Start with a lightweight prototype and validation plan before committing to a full build.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-[var(--line)] bg-white/70 p-5"
              >
                <p className="font-semibold">{item.q}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[var(--line)] bg-[var(--ink)] p-10 text-[var(--paper)]">
          <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl text-balance">
                Ready to Ship a Focused MVP?
              </h2>
              <p className="mt-3 text-sm text-[rgba(247,241,232,0.72)]">
                Share the idea and get a clear scope with the fastest path to launch.
              </p>
            </div>
            <a
              href="#intake"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--paper)] px-6 text-sm font-semibold text-[var(--ink)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--paper)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink)] motion-reduce:transition-none motion-reduce:hover:transform-none touch-manipulation"
            >
              Get My MVP Plan
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
