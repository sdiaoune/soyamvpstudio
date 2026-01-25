export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(241,192,122,0.35),transparent_60%),radial-gradient(circle_at_30%_30%,rgba(30,111,92,0.12),transparent_55%),linear-gradient(120deg,rgba(201,109,79,0.18),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] mix-blend-multiply noise-overlay" />

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
          <a href="#process" className="transition-colors hover:text-[var(--ink)]">
            Process
          </a>
          <a href="#deliverables" className="transition-colors hover:text-[var(--ink)]">
            Deliverables
          </a>
          <a href="#faq" className="transition-colors hover:text-[var(--ink)]">
            FAQ
          </a>
        </nav>
        <a
          href="#intake"
          className="rounded-full border border-[var(--ink)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
        >
          Get my MVP plan
        </a>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-8 lg:px-10 lg:pt-14">
        <section className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-[var(--line)] bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              MVP development for solo founders
            </span>
            <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl lg:text-6xl">
              Build the MVP that proves demand, without hiring a team.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              For solo founders who need a real product in users' hands fast. We scope
              the minimum, design the experience, and ship production-ready code you
              can grow.
            </p>
            <div className="grid gap-4 text-sm text-[var(--ink)] sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-4">
                <p className="font-semibold">Scope that stays tight</p>
                <p className="mt-2 text-[var(--muted)]">
                  We cut the noise and ship only what validates demand.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-4">
                <p className="font-semibold">Design that sells</p>
                <p className="mt-2 text-[var(--muted)]">
                  UI and UX crafted to convert early users into signals.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-4">
                <p className="font-semibold">Builds that can grow</p>
                <p className="mt-2 text-[var(--muted)]">
                  Clean architecture and handoff docs so you keep momentum.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-4">
                <p className="font-semibold">One senior team</p>
                <p className="mt-2 text-[var(--muted)]">
                  Strategy, design, and engineering under one roof.
                </p>
              </div>
            </div>
          </div>

          <div
            id="intake"
            className="rounded-3xl border border-[var(--line)] bg-white/85 p-6 shadow-[0_24px_60px_-40px_rgba(16,21,16,0.6)] backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                Start here
              </p>
              <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                Fast scope + estimate
              </span>
            </div>
            <h2 className="font-display text-2xl text-[var(--ink)]">
              Get your MVP plan
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Tell us the idea and we will reply with a clear scope outline and the
              fastest path to launch.
            </p>
            <form className="mt-6 grid gap-4" method="post">
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Name</span>
                <input
                  name="name"
                  required
                  className="h-11 rounded-xl border border-[var(--line)] bg-white px-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(201,109,79,0.25)]"
                  placeholder="Alex Rivera"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Work email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="h-11 rounded-xl border border-[var(--line)] bg-white px-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(201,109,79,0.25)]"
                  placeholder="alex@company.com"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Company or project</span>
                <input
                  name="company"
                  className="h-11 rounded-xl border border-[var(--line)] bg-white px-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(201,109,79,0.25)]"
                  placeholder="Stealth health-tech startup"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">What are you building?</span>
                <textarea
                  name="overview"
                  required
                  rows={4}
                  className="rounded-xl border border-[var(--line)] bg-white px-3 py-2 text-sm outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(201,109,79,0.25)]"
                  placeholder="Marketplace for local clinics to manage overflow patients..."
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Target launch window</span>
                <select
                  name="timeline"
                  className="h-11 rounded-xl border border-[var(--line)] bg-white px-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(201,109,79,0.25)]"
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
                className="mt-2 h-12 rounded-full bg-[var(--ink)] text-sm font-semibold text-[var(--paper)] transition-transform hover:-translate-y-0.5"
              >
                Get my MVP plan
              </button>
              <p className="text-xs text-[var(--muted)]">
                No obligation. You will get a clear scope outline and next steps.
              </p>
            </form>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-[var(--line)] bg-white/70 p-6 md:grid-cols-4">
          {[
            "SaaS dashboards",
            "Marketplaces",
            "AI copilots",
            "Mobile companions",
          ].map((item) => (
            <div key={item} className="text-sm text-[var(--muted)]">
              <span className="text-base font-semibold text-[var(--ink)]">
                {item}
              </span>
              <p className="mt-2">
                MVPs built for validation, onboarding, and early revenue.
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 rounded-3xl border border-[var(--line)] bg-white/80 p-6 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Proof of concept
            </p>
            <h2 className="mt-3 font-display text-3xl text-[var(--ink)]">
              Selected builds by Soya
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              A few real products we have shipped end-to-end.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "The Quad Flow",
                url: "https://thequadflow.com",
                note: "AI productivity tool that organizes tasks from email, calendar, and messages.",
              },
              {
                title: "SponsorSynq",
                url: "https://sponsorsynq.com",
                note: "Event sponsorship platform for proposals, contracts, and payments.",
              },
              {
                title: "Djembe",
                url: "https://djembe.tech",
                note: "Exclusive beats marketplace with MP3, WAV, stems, and MIDI packs.",
              },
            ].map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-[var(--line)] bg-white/70 p-4 text-sm text-[var(--muted)] transition-transform hover:-translate-y-1 hover:border-[var(--ink)]"
              >
                <p className="text-base font-semibold text-[var(--ink)]">
                  {project.title}
                </p>
                <p className="mt-2">{project.note}</p>
                <p className="mt-3 text-xs text-[var(--muted)]">{project.url}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-[var(--ink)]">
              If you are building solo, momentum dies fast.
            </h2>
            <p className="text-[var(--muted)]">
              You are juggling product, design, and engineering alone. Freelancers
              slow you down, agencies bloat scope, and your idea stays stuck in
              planning. We keep the focus on what proves demand.
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
            <h3 className="font-display text-2xl">Designed for high-intent search</h3>
            <p className="mt-3 text-sm text-[rgba(247,241,232,0.72)]">
              Founders searching for "MVP development agency," "build web app MVP," or
              "mobile app MVP" land on a page that answers their questions and earns
              trust fast.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>Clear offer and proof of focus</li>
              <li>Fast path to a scoped plan</li>
              <li>One CTA that keeps momentum</li>
            </ul>
          </div>
        </section>

        <section id="process" className="grid gap-8 lg:grid-cols-3">
          {[
            {
              label: "1. Scope Sprint",
              title: "Scope Sprint",
              text: "We clarify the core flow, success metrics, and what gets cut. You leave with a build-ready plan.",
            },
            {
              label: "2. Design + Prototype",
              title: "Design + Prototype",
              text: "Validate the experience before we write code. Visuals, UX, and clickable flows.",
            },
            {
              label: "3. Build + Launch",
              title: "Build + Launch",
              text: "Full-stack build, QA, and a clean handoff so you can keep moving.",
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

        <section id="deliverables" className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr]">
          <div className="space-y-6">
            <h2 className="font-display text-3xl">What you get in every MVP build</h2>
            <p className="text-[var(--muted)]">
              We focus on the minimum that proves value, then build in a way you can
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
            <h3 className="font-display text-2xl">Built for founders like</h3>
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
              title: "Traditional agency",
              text: "Slow discovery, lots of meetings, large teams, and diluted outcomes.",
            },
            {
              title: "Freelancer roulette",
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

        <section id="faq" className="grid gap-6 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <h2 className="font-display text-3xl">FAQ</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Answering the most common questions we hear from solo founders.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                q: "How fast can we launch?",
                a: "Timelines depend on scope, but we build MVPs to ship in weeks, not quarters. You will get a clear timeline after the scope sprint.",
              },
              {
                q: "Do you build both web and mobile apps?",
                a: "Yes. We build responsive web MVPs, mobile apps, or both depending on where your users are.",
              },
              {
                q: "Do I need a team already?",
                a: "No. We handle scope, design, and build, then hand off cleanly so you can keep going.",
              },
              {
                q: "What if I am still validating the idea?",
                a: "We can start with a lightweight prototype and validation plan before committing to a full build.",
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
              <h2 className="font-display text-3xl">
                Ready to ship a focused MVP?
              </h2>
              <p className="mt-3 text-sm text-[rgba(247,241,232,0.72)]">
                Tell us the idea and we will reply with a clear scope and the fastest
                path to launch.
              </p>
            </div>
            <a
              href="#intake"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--paper)] px-6 text-sm font-semibold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              Get my MVP plan
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
