import { SignalCarousel } from "./components/SignalCarousel";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amirul",
  jobTitle: "Backend Software Engineer",
  email: "mailto:amirulyunus29@gmail.com",
  url: siteUrl,
  knowsAbout: [
    "Laravel",
    "PHP",
    "MySQL",
    "AWS",
    "Ubuntu",
    "Nginx",
    "REST APIs",
    "Backend systems",
    "System design",
  ],
};

const signalCards = [
  {
    label: "Backend",
    value: "Laravel / PHP",
    detail:
      "Backend-focused software engineer working across APIs, business logic, MySQL data models, and production maintenance.",
  },
  {
    label: "Cloud",
    value: "AWS + Linux",
    detail:
      "Hands-on with EC2, RDS, S3, Ubuntu, Nginx, deployment environments, logs, and production troubleshooting.",
  },
  {
    label: "Database",
    value: "MySQL / SQL",
    detail:
      "Comfortable with relational schemas, query behavior, reporting flows, forecasting inputs, and debugging data issues.",
  },
  {
    label: "Frontend",
    value: "Next.js / React",
    detail:
      "Enough frontend to ship complete products while keeping the portfolio clearly backend-led.",
  },
  {
    label: "Learning",
    value: "Docker + System Design",
    detail:
      "Building toward platform engineering with Docker, Kubernetes, AWS architecture, algorithms, and distributed systems.",
  },
  {
    label: "Direction",
    value: "Backend / Platform",
    detail:
      "Targeting scalable systems, cloud infrastructure, distributed applications, and R&D-style engineering.",
  },
];

const proofPoints = [
  {
    value: "3+",
    label: "years",
    detail: "software engineering experience",
  },
  {
    value: "~80%",
    label: "backend",
    detail: "primary engineering focus",
  },
  {
    value: "6 -> 12",
    label: "Laravel",
    detail: "modernization work to document",
  },
  {
    value: "7 -> 8",
    label: "PHP",
    detail: "runtime migration work to document",
  },
];

const architectureFlow = [
  "Browser",
  "Cloudflare DNS",
  "Vercel",
  "Next.js",
  "Laravel API",
  "AWS",
  "RDS / S3",
];

const engineeringWork = [
  {
    title: "Laravel Modernization Path",
    eyebrow: "Legacy systems",
    problem:
      "Production PHP applications need to move forward without breaking the workflows people already depend on.",
    challenge:
      "Laravel 6 -> 12 and PHP 7 -> 8 changes touch framework behavior, package compatibility, runtime assumptions, and regression risk.",
    solution:
      "Frame the work as a migration plan: dependency audit, risk map, testing checklist, rollout notes, and the production issues to watch.",
    impact:
      "Shows maintainability, upgrade discipline, and production judgment without exposing company-confidential code.",
    stack: ["Laravel", "PHP", "MySQL", "Regression checks"],
  },
  {
    title: "Forecasting And Analytics Systems",
    eyebrow: "Data-heavy backend",
    problem:
      "Business teams need planning tools that turn historical station sales and operational data into usable scenarios.",
    challenge:
      "The hard part is the data path: query design, forecasting inputs, report accuracy, and keeping complex logic understandable.",
    solution:
      "Present the work as an engineering case study with data flow, SQL notes, algorithm decisions, and validation steps.",
    impact:
      "Positions the project as backend problem-solving, not just dashboard UI.",
    stack: ["MySQL", "SQL", "Forecasting", "Python algorithms"],
  },
  {
    title: "AWS Production Deployment",
    eyebrow: "Cloud infrastructure",
    problem:
      "Backend applications need predictable deployment, storage, database access, logs, and recovery paths.",
    challenge:
      "AWS work often fails at the edges: Linux configuration, Nginx behavior, environment variables, file storage, and database connectivity.",
    solution:
      "Document the deployment architecture from DNS to app runtime, including EC2, RDS, S3, Nginx, and CloudWatch responsibilities.",
    impact:
      "Makes infrastructure experience concrete for backend, platform, and cloud-oriented roles.",
    stack: ["AWS", "EC2", "RDS", "S3", "Nginx"],
  },
  {
    title: "Attachment Preview Flow",
    eyebrow: "Files and rendering",
    problem:
      "Users should be able to inspect attachments without downloading every file manually.",
    challenge:
      "File previews involve permissions, storage paths, browser behavior, PDF rendering, and failure handling.",
    solution:
      "Describe the preview pipeline, access rules, storage integration, and fallback behavior as a reliability problem.",
    impact:
      "Turns a product feature into proof of backend ownership across storage, security, and user workflow.",
    stack: ["Laravel", "S3", "PDF handling", "Access control"],
  },
];

const skillGroups = [
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "REST APIs", "Queue workers", "Auth flows", "Business logic"],
  },
  {
    title: "Database",
    skills: ["MySQL", "SQL", "Schema design", "Query tuning", "Reports", "Forecasting data"],
  },
  {
    title: "Cloud",
    skills: ["AWS", "EC2", "RDS", "S3", "CloudWatch", "Deployments"],
  },
  {
    title: "Infrastructure",
    skills: ["Ubuntu", "Nginx", "Linux logs", "PHP-FPM", "Docker basics", "Production debugging"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "JavaScript", "TypeScript", "API integration", "Responsive UI"],
  },
  {
    title: "Learning",
    skills: ["Docker", "Kubernetes", "Terraform", "System design", "AWS architecture", "Algorithms"],
  },
];

const timeline = [
  {
    period: "2022",
    title: "Software engineering foundation",
    text: "Built experience with Laravel, PHP, MySQL, API work, and production support.",
  },
  {
    period: "Backend focus",
    title: "Production systems",
    text: "Moved deeper into reports, data flows, file handling, Linux/Nginx environments, and AWS-backed applications.",
  },
  {
    period: "Now",
    title: "Platform direction",
    text: "Strengthening Docker, Kubernetes, AWS architecture, system design, and algorithms for backend/platform roles.",
  },
];

const notes = [
  "Laravel upgrade lessons: framework risk, package compatibility, and rollout checks.",
  "AWS deployment notes: EC2, RDS, S3, Nginx, logs, and production troubleshooting.",
  "MySQL performance notes: query shape, report data, indexes, and validation.",
  "System design notes: queues, file storage, observability, and failure modes.",
];

function HeroSystemVisual() {
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-md border border-white/10 bg-[#101010] shadow-2xl shadow-black/50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#ef4444]/20 to-transparent" />
      <div className="absolute left-6 right-6 top-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
            System Snapshot
          </p>
          <p className="mt-2 text-sm text-white/55">
            Request path and runtime responsibilities
          </p>
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-[#f87171]" />
          <span className="size-2 rounded-full bg-[#ef4444]" />
          <span className="size-2 rounded-full bg-white/30" />
        </div>
      </div>

      <div className="absolute inset-x-6 top-32 grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-md border border-white/10 bg-black/30 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">
            Architecture
          </p>
          <div className="mt-5 grid gap-2">
            {["DNS", "App", "API", "Database", "Storage"].map((step, index) => (
              <div
                key={step}
                className="flex items-center justify-between rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2 text-xs"
              >
                <span className="font-mono uppercase tracking-[0.18em] text-white/45">
                  0{index + 1}
                </span>
                <span className="font-semibold text-[#f4f4f5]">{step}</span>
                <span className="text-[#ef4444]">ready</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-md border border-white/10 bg-[#090909]/80 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Runtime
            </p>
            <div className="mt-4 space-y-2 font-mono text-xs text-white/60">
              <p>
                <span className="text-[#f87171]">api</span> laravel/php
              </p>
              <p>
                <span className="text-[#f87171]">db</span> mysql/rds
              </p>
              <p>
                <span className="text-[#ef4444]">ops</span> ubuntu/nginx
              </p>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Focus
            </p>
            <p className="mt-3 text-3xl font-semibold text-[#fafafa]">
              Backend
            </p>
            <p className="mt-2 text-sm leading-6 text-[#a1a1aa]">
              APIs, data, deployment, reliability, and migration work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="rounded-md border border-white/10 bg-[#101010] p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        {architectureFlow.map((item, index) => (
          <div key={item} className="contents md:flex md:flex-1 md:items-center">
            <div className="rounded-md border border-white/10 bg-black/25 p-4 text-center md:min-h-28 md:flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ef4444]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#f4f4f5]">
                {item}
              </p>
            </div>
            {index < architectureFlow.length - 1 ? (
              <div
                className="hidden px-2 text-center font-mono text-sm text-white/30 md:block"
                aria-hidden="true"
              >
                -&gt;
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f4f4f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-[#f4f4f5] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#050505]"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
          aria-label="Primary navigation"
        >
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f4f4f5]"
          >
            Amirul
          </a>
          <div className="hidden items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a1a1aa] lg:flex">
            <a className="transition hover:text-[#f4f4f5]" href="#work">
              Work
            </a>
            <a className="transition hover:text-[#f4f4f5]" href="#architecture">
              Architecture
            </a>
            <a className="transition hover:text-[#f4f4f5]" href="#stack">
              Skills
            </a>
            <a className="transition hover:text-[#f4f4f5]" href="#timeline">
              Timeline
            </a>
            <a className="transition hover:text-[#f4f4f5]" href="#notes">
              Notes
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
        className="relative overflow-hidden border-b border-white/10 px-5 pb-14 pt-28 sm:px-8 lg:pb-20"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050505_0%,#101010_54%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:96px_96px]" />

        <div
          id="content"
          className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
              Backend software engineer / Laravel / AWS
            </p>
            <h1 className="[font-family:var(--font-display)] text-7xl leading-none text-[#fafafa] sm:text-8xl lg:text-9xl">
              Amirul
            </h1>
            <p className="mt-8 max-w-2xl text-2xl leading-tight text-[#f4f4f5] sm:text-3xl">
              I build Laravel/PHP systems that are easier to operate, migrate,
              and scale.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#a1a1aa]">
              Backend-focused software engineer with 3+ years of experience
              across Laravel, MySQL, AWS, Ubuntu, Nginx, JavaScript, and
              production application support.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/amirul-resume.pdf"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-[#f4f4f5] px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0b0b0c] transition hover:bg-[#f87171]"
              >
                Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f4f4f5] transition hover:border-[#ef4444] hover:text-[#ef4444]"
              >
                Talk backend systems
              </a>
            </div>
          </div>

          <HeroSystemVisual />
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808] px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="rounded-md border border-white/10 bg-[#101010] p-5"
            >
              <p className="[font-family:var(--font-display)] text-4xl leading-none text-[#fafafa]">
                {point.value}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ef4444]">
                {point.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#a1a1aa]">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="border-b border-white/10 bg-[#0b0b0c] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.75fr_1fr] md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
                Featured Engineering Work
              </p>
              <h2 className="mt-4 [font-family:var(--font-display)] text-4xl leading-tight text-[#fafafa] sm:text-5xl">
                Case studies that prove backend depth.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#a1a1aa]">
              The goal is to show the problem, technical challenge, solution,
              and impact behind each project. Code can stay private when it is
              company-confidential; the engineering thinking should still be
              visible.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {engineeringWork.map((item) => (
              <article
                key={item.title}
                className="rounded-md border border-white/10 bg-[#101010] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f87171]/45"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ef4444]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#f4f4f5]">
                  {item.title}
                </h3>
                <div className="mt-6 grid gap-4">
                  {[
                    ["Problem", item.problem],
                    ["Challenge", item.challenge],
                    ["Solution", item.solution],
                    ["Impact", item.impact],
                  ].map(([label, text]) => (
                    <div
                      key={label}
                      className="border-l border-[#ef4444]/40 pl-4"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#a1a1aa]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e4e4e7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.18em] text-white/40">
                  Code unavailable where company confidentiality applies.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="architecture"
        className="border-b border-white/10 bg-[#050505] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
              Architecture
            </p>
            <h2 className="mt-4 [font-family:var(--font-display)] text-4xl leading-tight text-[#fafafa] sm:text-5xl">
              Show the system, not just the screen.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#a1a1aa]">
              Recruiters should see the path from request to runtime: DNS,
              frontend host, Laravel API, AWS services, database, storage, and
              operational concerns.
            </p>
          </div>
          <ArchitectureDiagram />
        </div>
      </section>

      <section
        id="stack"
        className="border-b border-white/10 bg-[#080808] px-5 py-16 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
                Skills
              </p>
              <h2 className="mt-4 [font-family:var(--font-display)] text-4xl leading-tight text-[#fafafa] sm:text-5xl">
                Backend-led toolkit.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#a1a1aa]">
              Grouped by how the work actually happens, not as a wall of logos
              or skill percentages.
            </p>
          </div>
          <SignalCarousel items={signalCards} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <section
                key={group.title}
                className="rounded-md border border-white/10 bg-[#101010] p-5"
              >
                <h3 className="text-lg font-semibold text-[#fafafa]">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-sm border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e4e4e7]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section
        id="timeline"
        className="border-b border-white/10 bg-[#0f0f10] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
              Engineering Timeline
            </p>
            <h2 className="mt-4 [font-family:var(--font-display)] text-4xl leading-tight text-[#fafafa] sm:text-5xl">
              The direction is backend and platform engineering.
            </h2>
          </div>
          <div className="grid gap-4">
            {timeline.map((item) => (
              <article
                key={item.period}
                className="grid gap-4 rounded-md border border-white/10 bg-[#101010] p-5 sm:grid-cols-[150px_1fr]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ef4444]">
                  {item.period}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-[#f4f4f5]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#a1a1aa]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="notes"
        className="border-b border-white/10 bg-[#050505] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
              Engineering Notes
            </p>
            <h2 className="mt-4 [font-family:var(--font-display)] text-4xl leading-tight text-[#fafafa] sm:text-5xl">
              Write about the hard parts.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#a1a1aa]">
              These topics are strong blog or case-study material because they
              show decision-making, debugging, and trade-offs.
            </p>
          </div>
          <div className="grid gap-3">
            {notes.map((note) => (
              <div
                key={note}
                className="rounded-md border border-white/10 bg-[#101010] p-5 text-sm leading-7 text-[#d4d4d8]"
              >
                {note}
              </div>
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
                    Backend-focused engineer building from application code
                    down to database, deployment, and operations.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-3xl font-semibold text-[#f87171]">
                      API
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                      Laravel services
                    </p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-3xl font-semibold text-[#ef4444]">
                      Ops
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                      AWS and Linux
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
              I want the work to survive real production use.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#a1a1aa]">
              My strongest work is backend-heavy: Laravel and PHP applications,
              MySQL data flows, AWS services, Linux/Nginx environments, and the
              debugging that happens when software meets real users.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#a1a1aa]">
              The next step I am building toward is backend/platform
              engineering: scalable systems, cloud infrastructure, distributed
              applications, and R&D-style problem solving.
            </p>
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
              Interested in scalable backend systems? Let&apos;s talk.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:amirulyunus29@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-[#f4f4f5] px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0b0b0c] transition hover:bg-[#f87171]"
            >
              Email me
            </a>
            <a
              href="/amirul-resume.pdf"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/15 px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f4f4f5] transition hover:border-[#ef4444] hover:text-[#ef4444]"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
