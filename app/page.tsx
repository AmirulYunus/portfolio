import { SignalCarousel } from "./components/SignalCarousel";

const projects = [
  {
    name: "Distributed Systems Platform",
    label: "Backend Architecture",
    summary:
      "A service-oriented platform for ingesting events, processing queues, and keeping operational workflows observable under load.",
    tags: ["TypeScript", "Node.js", "Postgres"],
    metric: "99.9% uptime target",
    variant: "network",
  },
  {
    name: "Product Operations Dashboard",
    label: "Frontend Engineering",
    summary:
      "A dense, responsive workspace that turns product metrics, cases, and team handoffs into a clear daily operating surface.",
    tags: ["Next.js", "React", "Tailwind"],
    metric: "12 core workflows",
    variant: "dashboard",
  },
  {
    name: "Developer Workflow Tooling",
    label: "Internal Tools",
    summary:
      "Automation and UI tooling that reduced repetitive engineering tasks and gave teams faster feedback during delivery.",
    tags: ["APIs", "CI/CD", "DX"],
    metric: "Faster reviews",
    variant: "terminal",
  },
];

const capabilities = [
  "Next.js App Router",
  "React UI systems",
  "TypeScript contracts",
  "API integration",
  "PostgreSQL models",
  "Auth flows",
  "Performance budgets",
  "CI/CD hygiene",
];

const signalCards = [
  {
    label: "Frontend",
    value: "React / Next.js",
    detail: "Building fast, modern interfaces with the App Router and reusable components.",
  },
  {
    label: "Backend",
    value: "Laravel",
    detail: "My primary stack for building enterprise APIs, business logic, and integrations.",
  },
  {
    label: "Cloud",
    value: "AWS",
    detail: "Experienced with EC2, RDS, S3, ALB, and CloudWatch from production environments.",
  },
  {
    label: "Database",
    value: "MySQL",
    detail: "Designing schemas, optimizing queries, and powering analytics-driven features.",
  },
  {
    label: "Learning",
    value: "Always Improving",
    detail: "Currently exploring Docker, Kubernetes, system design, and AWS Solutions Architect.",
  },
  {
    label: "Beyond Code",
    value: "Runner & Gamer",
    detail: "Morning runs, story-driven games, and continuously learning new technologies.",
  },
];

const approach = [
  {
    title: "Architecture before decoration",
    text: "I start with the structure: flows, states, data boundaries, and failure paths. The interface gets sharper when the system underneath is clear.",
  },
  {
    title: "Interfaces that respect attention",
    text: "I prefer compact, readable screens that help people scan, compare, decide, and continue without unnecessary motion or noise.",
  },
  {
    title: "Details that survive production",
    text: "I care about loading states, empty states, accessibility, edge cases, and the maintainability of the components behind the polish.",
  },
];

const photoFrames = [
  {
    title: "Street light",
    location: "Kuala Lumpur",
    style: "bg-[linear-gradient(135deg,#080808_0%,#3f0d12_48%,#111111_100%)]",
  },
  {
    title: "Quiet water",
    location: "After hours",
    style: "bg-[linear-gradient(135deg,#09090b_0%,#27272a_50%,#5f1218_100%)]",
  },
  {
    title: "Hard edges",
    location: "Concrete study",
    style: "bg-[linear-gradient(135deg,#050505_0%,#52525b_50%,#151515_100%)]",
  },
  {
    title: "Open sky",
    location: "Travel notes",
    style: "bg-[linear-gradient(135deg,#090909_0%,#1f1f23_55%,#7f1d1d_100%)]",
  },
];

function HeroVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-md border border-white/10 bg-[#101010] shadow-2xl shadow-black/50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#ef4444]/20 to-transparent" />
      <div className="absolute left-6 right-6 top-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
            System Snapshot
          </p>
          <p className="mt-2 text-sm text-white/55">Portfolio runtime</p>
        </div>
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-[#f87171]" />
          <span className="size-2 rounded-full bg-[#ef4444]" />
          <span className="size-2 rounded-full bg-white/30" />
        </div>
      </div>

      <div className="absolute inset-x-6 top-32 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-md border border-white/10 bg-black/25 p-4 backdrop-blur">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.22em] text-white/45">
              Services
            </span>
            <span className="rounded-sm bg-[#f87171]/15 px-2 py-1 text-xs font-semibold text-[#f87171]">
              Live
            </span>
          </div>
          <div className="relative h-48">
            <span className="absolute left-2 top-3 size-14 rounded-md border border-[#f87171]/40 bg-[#f87171]/10" />
            <span className="absolute right-4 top-8 size-16 rounded-md border border-[#ef4444]/40 bg-[#ef4444]/10" />
            <span className="absolute bottom-4 left-1/3 size-20 rounded-md border border-white/20 bg-white/5" />
            <span className="absolute left-[23%] top-[28%] h-px w-[42%] rotate-12 bg-white/20" />
            <span className="absolute left-[45%] top-[52%] h-px w-[32%] -rotate-[35deg] bg-white/20" />
            <span className="absolute bottom-8 left-4 h-px w-[34%] -rotate-12 bg-white/20" />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-4 gap-2">
              <span className="h-9 rounded-sm bg-white/8" />
              <span className="h-14 rounded-sm bg-[#f87171]/45" />
              <span className="h-11 rounded-sm bg-white/8" />
              <span className="h-20 rounded-sm bg-[#ef4444]/60" />
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-md border border-white/10 bg-[#090909]/80 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Pipeline
            </p>
            <div className="mt-4 space-y-2 font-mono text-xs text-white/60">
              <p>
                <span className="text-[#f87171]">pass</span> typecheck
              </p>
              <p>
                <span className="text-[#f87171]">pass</span> lint
              </p>
              <p>
                <span className="text-[#ef4444]">watch</span> p95.latency
              </p>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-white/55">Signal quality</span>
              <span className="font-semibold text-white">94%</span>
            </div>
            <div className="h-2 rounded-sm bg-white/10">
              <div className="h-2 w-[94%] rounded-sm bg-[#f87171]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ variant }: { variant: string }) {
  if (variant === "dashboard") {
    return (
      <div className="relative h-56 overflow-hidden bg-[#101010] p-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="h-2 w-24 rounded-sm bg-white/20" />
          <div className="flex gap-1">
            <span className="size-2 rounded-full bg-[#f87171]" />
            <span className="size-2 rounded-full bg-[#ef4444]" />
          </div>
        </div>
        <div className="grid gap-3 pt-4">
          <div className="grid grid-cols-3 gap-3">
            <span className="h-16 rounded-sm bg-[#f87171]/20" />
            <span className="h-16 rounded-sm bg-white/8" />
            <span className="h-16 rounded-sm bg-[#ef4444]/25" />
          </div>
          <div className="flex h-24 items-end gap-2 rounded-sm border border-white/10 bg-black/25 p-3">
            <span className="h-8 flex-1 rounded-sm bg-white/12" />
            <span className="h-16 flex-1 rounded-sm bg-[#f87171]/50" />
            <span className="h-12 flex-1 rounded-sm bg-white/12" />
            <span className="h-20 flex-1 rounded-sm bg-[#ef4444]/60" />
            <span className="h-14 flex-1 rounded-sm bg-white/12" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "terminal") {
    return (
      <div className="h-56 overflow-hidden bg-[#090909] p-5 font-mono text-xs">
        <div className="mb-4 flex gap-1.5">
          <span className="size-2 rounded-full bg-white/25" />
          <span className="size-2 rounded-full bg-white/25" />
          <span className="size-2 rounded-full bg-[#f87171]" />
        </div>
        <div className="space-y-3 text-white/58">
          <p>
            <span className="text-[#ef4444]">$</span> pnpm test:contracts
          </p>
          <p>
            <span className="text-[#f87171]">pass</span> workflow.graph.ts
          </p>
          <p>
            <span className="text-[#f87171]">pass</span> release.pipeline.ts
          </p>
          <div className="h-px bg-white/10" />
          <p className="text-white/40">generating typed client...</p>
          <p>
            <span className="text-[#f87171]">done</span> 18.4s
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 overflow-hidden bg-[#111111]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <span className="absolute left-8 top-9 size-16 rounded-md border border-[#f87171]/45 bg-[#f87171]/10" />
      <span className="absolute right-10 top-14 size-20 rounded-md border border-[#ef4444]/45 bg-[#ef4444]/10" />
      <span className="absolute bottom-9 left-1/3 size-24 rounded-md border border-white/20 bg-white/5" />
      <span className="absolute left-[25%] top-[35%] h-px w-[42%] rotate-12 bg-white/20" />
      <span className="absolute left-[47%] top-[55%] h-px w-[30%] -rotate-[35deg] bg-white/20" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end gap-2">
        <span className="h-7 flex-1 rounded-sm bg-white/10" />
        <span className="h-12 flex-1 rounded-sm bg-[#f87171]/35" />
        <span className="h-9 flex-1 rounded-sm bg-white/10" />
        <span className="h-16 flex-1 rounded-sm bg-[#ef4444]/45" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f4f4f5]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f4f4f5]"
          >
            Amirul
          </a>
          <div className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a1a1aa] md:flex">
            <a className="transition hover:text-[#f4f4f5]" href="#work">
              Work
            </a>
            <a className="transition hover:text-[#f4f4f5]" href="#stack">
              Stack
            </a>
            <a className="transition hover:text-[#f4f4f5]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#f4f4f5]" href="#photography">
              Photography
            </a>
            <a className="transition hover:text-[#f4f4f5]" href="#contact">
              Contact
            </a>
          </div>
          <a
            href="mailto:amirulyunus29@gmail.com"
            className="rounded-sm border border-white/15 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f4f4f5] transition hover:border-[#f87171]/70 hover:text-[#f87171]"
          >
            Email
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative overflow-hidden border-b border-white/10 px-5 pb-12 pt-28 sm:px-8 lg:pb-16"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050505_0%,#101010_54%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:96px_96px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
              Software engineer / full-stack builder
            </p>
            <h1 className="[font-family:var(--font-display)] text-7xl leading-none text-[#fafafa] sm:text-8xl lg:text-9xl">
              Amirul
            </h1>
            <p className="mt-8 max-w-2xl text-2xl leading-tight text-[#f4f4f5] sm:text-3xl">
              I build product-grade web systems with clean architecture,
              sharp interfaces, and reliable delivery.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#a1a1aa]">
              My work sits between frontend craft and full-stack execution:
              translating product intent into typed interfaces, stable APIs,
              and maintainable software.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-[#f4f4f5] px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0b0b0c] transition hover:bg-[#f87171]"
              >
                View engineering work
              </a>
              <a
                href="#photography"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f4f4f5] transition hover:border-[#ef4444] hover:text-[#ef4444]"
              >
                Photography notes
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section
        id="stack"
        className="border-b border-white/10 bg-[#080808] px-5 py-12 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SignalCarousel items={signalCards} />
        </div>
      </section>

      <section id="work" className="border-b border-white/10 bg-[#0b0b0c]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.75fr_1fr] md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
                Portfolio
              </p>
              <h2 className="mt-4 [font-family:var(--font-display)] text-4xl leading-tight text-[#fafafa] sm:text-5xl">
                Engineering projects
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#a1a1aa]">
              A software-first portfolio should prove how you think: the
              constraints you handled, the systems you shaped, and the product
              outcomes your implementation supported.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-md border border-white/10 bg-[#101010] transition duration-300 hover:-translate-y-1 hover:border-[#f87171]/45"
              >
                <ProjectVisual variant={project.variant} />
                <div className="flex min-h-80 flex-col p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ef4444]">
                    {project.label}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#f4f4f5]">
                    {project.name}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#a1a1aa]">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e4e4e7]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-xs uppercase tracking-[0.18em]">
                    <span className="text-[#a1a1aa]">{project.metric}</span>
                    <a
                      href="#contact"
                      className="font-semibold text-[#f4f4f5] transition group-hover:text-[#f87171]"
                    >
                      Discuss {"->"}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0f0f10]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
              Toolkit
            </p>
            <h2 className="mt-4 max-w-xl [font-family:var(--font-display)] text-4xl leading-tight text-[#fafafa] sm:text-5xl">
              Technical range without losing product focus.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {capabilities.map((skill) => (
              <div
                key={skill}
                className="rounded-md border border-white/10 bg-[#171717] px-4 py-4 text-sm font-medium text-[#e4e4e7]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="photography" className="border-b border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
                Observations
              </p>
              <h2 className="mt-4 [font-family:var(--font-display)] text-4xl leading-tight text-[#fafafa] sm:text-5xl">
                Photography, after hours
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a1a1aa]">
                A hobby, not the headline. A place to study light, texture, and
                composition when I step away from software.
              </p>
            </div>
            <a
              href="#contact"
              className="w-fit border-b border-[#ef4444] pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f4f4f5] transition hover:text-[#ef4444]"
            >
              Ask about prints
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {photoFrames.map((frame) => (
              <figure
                key={frame.title}
                className="group relative aspect-square overflow-hidden rounded-md border border-white/10 bg-[#101010]"
              >
                <div
                  className={`absolute inset-0 transition duration-700 group-hover:scale-105 ${frame.style}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.06)_62%)]" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-semibold text-[#f4f4f5]">
                    {frame.title}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/55">
                    {frame.location}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 bg-[#0d0d0e]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-28">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 border-l border-t border-[#ef4444]/40" />
            <div className="relative overflow-hidden rounded-md border border-white/10 bg-[#101010] p-5">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ef4444]">
                  Profile
                </p>
                <span className="text-xs text-[#a1a1aa]">MY / UTC+8</span>
              </div>
              <div className="grid gap-4">
                <div className="rounded-md border border-white/10 bg-black/25 p-5">
                  <p className="text-5xl font-semibold text-[#fafafa]">A</p>
                  <p className="mt-6 max-w-sm text-sm leading-7 text-[#a1a1aa]">
                    Software engineer with an eye for systems, interface
                    clarity, and the visual discipline learned from photography.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-3xl font-semibold text-[#f87171]">UI</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                      Product surfaces
                    </p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-3xl font-semibold text-[#ef4444]">
                      API
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                      Service contracts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-28 w-28 border-b border-r border-[#ef4444]/40" />
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
              About
            </p>
            <h2 className="mt-4 max-w-2xl [font-family:var(--font-display)] text-4xl leading-tight text-[#fafafa] sm:text-5xl">
              Building the useful parts first, then refining until they feel
              inevitable.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#a1a1aa]">
              I like software that is understandable from the first screen and
              dependable after the first release. My work sits between product
              thinking and implementation: shaping flows, building components,
              connecting APIs, and tightening the experience until it holds
              together.
            </p>
            <div className="mt-10 grid gap-4">
              {approach.map((item) => (
                <div
                  key={item.title}
                  className="rounded-md border border-white/10 bg-[#101010] p-5"
                >
                  <h3 className="text-lg font-semibold text-[#f4f4f5]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#a1a1aa]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#050505] px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
              Contact
            </p>
            <h2 className="mt-3 max-w-2xl [font-family:var(--font-display)] text-3xl leading-tight text-[#fafafa] sm:text-4xl">
              Let us build something focused, fast, and maintainable.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-[#f4f4f5] px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0b0b0c] transition hover:bg-[#f87171]"
            >
              Email me
            </a>
            <a
              href="https://github.com/"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/15 px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f4f4f5] transition hover:border-[#ef4444] hover:text-[#ef4444]"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
