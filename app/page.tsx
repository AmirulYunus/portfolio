import { SignalCarousel } from "./components/SignalCarousel";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Amirul Bin Yunus",
  jobTitle: "Backend Software Engineer",
  email: "mailto:amirulyunus29@gmail.com",
  telephone: "+60162081960",
  url: siteUrl,
  sameAs: ["https://www.linkedin.com/in/amirulyunus"],
  knowsAbout: [
    "Laravel",
    "PHP",
    "MySQL",
    "AWS",
    "Ubuntu",
    "Nginx",
    "PHP-FPM",
    "REST APIs",
    "Query optimization",
    "Production deployments",
    "Backend automation",
  ],
};

type CaseStudy = {
  title: string;
  eyebrow: string;
  background: string;
  problem: string;
  responsibilities: string[];
  challenge: string;
  decisions?: string[];
  timeline?: { label: string; text: string }[];
  dataFlow?: string[];
  serviceMap?: Record<string, string>;
  failureModes?: string[];
  implementation: string[];
  production: string;
  lessons: string;
  impact: string;
  stack: string[];
};

const signalCards = [
  {
    label: "Backend",
    value: "Laravel / PHP",
    detail:
      "Built and maintained production Laravel systems across APIs, business logic, background jobs, and legacy refactoring.",
  },
  {
    label: "Production",
    value: "Weekly Releases",
    detail:
      "Owned release coordination, deployment verification, post-release monitoring, and hotfix support for live systems.",
  },
  {
    label: "Database",
    value: "MySQL / SQL",
    detail:
      "Worked on schema migrations, query optimization, reporting workflows, forecasting data, and data integrity checks.",
  },
  {
    label: "Cloud",
    value: "AWS + Linux",
    detail:
      "Provisioned and supported EC2, ELB, RDS, S3, IAM, CloudWatch, Ubuntu, Nginx, and PHP-FPM environments.",
  },
  {
    label: "Automation",
    value: "Scheduler / Queues",
    detail:
      "Implemented Laravel scheduled commands, background processes, data synchronization, and operational automation.",
  },
  {
    label: "Platform",
    value: "Operational Debugging",
    detail:
      "Investigated production issues through Nginx logs, PHP-FPM behavior, SQL traces, CloudWatch, and environment config.",
  },
];

const proofPoints = [
  {
    value: "3+",
    label: "years",
    detail: "backend-heavy software engineering experience",
  },
  {
    value: "~80%",
    label: "backend",
    detail: "primary engineering focus across recent roles",
  },
  {
    value: "MY + BR",
    label: "production",
    detail: "supported Malaysia and Brazil environments",
  },
  {
    value: "6 -> 12",
    label: "Laravel",
    detail: "led legacy modernization to Laravel 12",
  },
];

const architectureFlow = [
  "Browser",
  "Cloudflare",
  "Vercel",
  "Next.js",
  "Laravel API",
  "AWS EC2",
  "RDS",
  "S3",
  "CloudWatch",
];

const systemFlows = [
  {
    title: "Request lifecycle",
    steps: ["DNS", "Load balancer", "Nginx", "PHP-FPM", "Laravel", "MySQL"],
  },
  {
    title: "Authentication",
    steps: ["Client", "API guard", "Authorization", "Business rule", "Audit trail"],
  },
  {
    title: "Queue flow",
    steps: ["Scheduler", "Command", "Queue worker", "Job handler", "Retry / log"],
  },
  {
    title: "Storage flow",
    steps: ["Upload", "Access rule", "S3 path", "Preview", "Fallback"],
  },
];

const caseStudies: CaseStudy[] = [
  {
    title: "Legacy Laravel Modernization",
    eyebrow: "Modernization",
    background:
      "A production Laravel 6 codebase needed to move to Laravel 12 and PHP 8 while preserving existing business workflows.",
    problem:
      "Framework upgrades affect package compatibility, runtime behavior, deprecated APIs, authentication paths, and regression risk.",
    responsibilities: [
      "Led the Laravel 6 -> 12 migration work.",
      "Reviewed package compatibility and runtime changes.",
      "Supported production rollout planning and regression checks.",
      "Participated in code reviews and technical discussions around system design.",
    ],
    challenge:
      "The work had to improve maintainability and long-term support without breaking live user workflows.",
    timeline: [
      {
        label: "Audit",
        text: "Mapped framework, PHP, package, and compatibility risks before changing runtime behavior.",
      },
      {
        label: "Refactor",
        text: "Separated concerns in legacy code so debugging and future changes became easier.",
      },
      {
        label: "Validate",
        text: "Used regression checks, API behavior review, and release validation to protect production paths.",
      },
      {
        label: "Release",
        text: "Supported rollout awareness, post-release monitoring, and hotfix readiness.",
      },
    ],
    implementation: [
      "Updated framework and PHP assumptions from Laravel 6 / PHP 7 to Laravel 12 / PHP 8.",
      "Refactored legacy areas for reusability, debugging efficiency, and cleaner architecture.",
      "Checked API behavior and database interactions around upgraded flows.",
    ],
    production:
      "Production safety came from compatibility review, regression testing, deployment coordination, and watching for post-release issues.",
    lessons:
      "Modernization is not only package updates. It is risk management, backward compatibility, and keeping operators confident after release.",
    impact:
      "Improved maintainability, security posture, and long-term support for a legacy production system.",
    stack: ["Laravel 6 -> 12", "PHP 7 -> 8", "MySQL", "Regression checks"],
  },
  {
    title: "Forecasting And Reporting Workflows",
    eyebrow: "Data systems",
    background:
      "Business teams needed reporting and forecasting workflows backed by historical operational data.",
    problem:
      "Forecasting accuracy depends on reliable data extraction, business-rule validation, SQL behavior, and transparent reporting outputs.",
    responsibilities: [
      "Worked with historical data and reporting flows.",
      "Used SQL debugging and query optimization to improve data-heavy paths.",
      "Validated outputs against business expectations and operational rules.",
      "Used Python for algorithmic thinking and analysis where useful.",
    ],
    challenge:
      "The hard part was keeping business logic, SQL queries, and forecast outputs understandable enough to debug.",
    dataFlow: [
      "Historical station sales",
      "Extraction query",
      "Business rules",
      "Forecast logic",
      "Validation",
      "Report output",
    ],
    decisions: [
      "Kept SQL behavior explicit so incorrect output could be traced to data, rules, or transformation logic.",
      "Favored validation checkpoints over hidden calculations.",
      "Optimized query shape where response time or report generation became a bottleneck.",
    ],
    implementation: [
      "Designed and executed schema migrations while preserving data integrity.",
      "Extracted and analyzed data to support business decisions.",
      "Identified bottlenecks and optimized queries for better system efficiency.",
    ],
    production:
      "Production work focused on correctness, query performance, and predictable report behavior for users relying on the data.",
    lessons:
      "Data systems fail quietly when validation is weak. The useful engineering work is making each transformation explainable.",
    impact:
      "Supported business decision-making through reporting, forecasting inputs, and database-backed workflows.",
    stack: ["MySQL", "SQL tuning", "Reporting", "Forecasting", "Python"],
  },
  {
    title: "AWS Production Deployment",
    eyebrow: "Cloud infrastructure",
    background:
      "Production Laravel applications needed infrastructure that could support deployments, database connectivity, storage, load balancing, and observability.",
    problem:
      "Cloud issues often appear outside application code: load balancer behavior, Nginx config, PHP-FPM, environment variables, IAM, storage permissions, and database access.",
    responsibilities: [
      "Provisioned and configured AWS infrastructure with EC2, ELB, and RDS.",
      "Worked with S3, IAM, CloudWatch, and environment configuration.",
      "Investigated production performance issues using server logs and query optimization.",
      "Supported multiple production environments and deployment cycles.",
    ],
    challenge:
      "The system had to remain operable across deployment, monitoring, file storage, database access, and troubleshooting workflows.",
    serviceMap: {
      EC2: "Application runtime for Laravel/PHP workloads.",
      ELB: "Traffic entry point and load distribution.",
      RDS: "Managed relational database layer for production data.",
      S3: "Object storage for files and attachment workflows.",
      IAM: "Access boundaries for AWS resources.",
      CloudWatch: "Logs and operational visibility after release.",
    },
    implementation: [
      "Configured AWS components around application deployment needs.",
      "Used Nginx and PHP-FPM logs to investigate runtime failures.",
      "Supported production validation and post-release troubleshooting.",
    ],
    production:
      "Operational readiness meant knowing where to look when deployment, database, storage, or runtime behavior failed.",
    lessons:
      "Cloud experience becomes useful when it is tied to real troubleshooting paths, not just service names.",
    impact:
      "Supported production application deployments and gave the backend system clearer operational boundaries.",
    stack: ["AWS", "EC2", "ELB", "RDS", "S3", "CloudWatch"],
  },
  {
    title: "Attachment Preview And File Access",
    eyebrow: "Storage and security",
    background:
      "Users needed a smoother way to inspect attachments without downloading every file manually.",
    problem:
      "File preview work crosses authorization, storage paths, browser behavior, PDF rendering, security, and fallback handling.",
    responsibilities: [
      "Handled backend file access and preview behavior.",
      "Worked with storage paths, access rules, and failure states.",
      "Considered browser behavior, PDF handling, and user workflow reliability.",
    ],
    challenge:
      "The feature had to feel simple while protecting files and handling unsupported preview cases gracefully.",
    failureModes: [
      "User has no permission for the attachment.",
      "File path exists but storage object is unavailable.",
      "Browser cannot preview the file type.",
      "PDF render or download behavior differs across browsers.",
      "Fallback must not bypass authorization.",
    ],
    decisions: [
      "Treat preview as a backend access-control problem before treating it as a UI convenience.",
      "Keep fallback behavior explicit for unsupported files or failed previews.",
      "Avoid exposing storage details directly to users.",
    ],
    implementation: [
      "Connected authorization checks to file access paths.",
      "Handled storage integration and preview failure paths.",
      "Kept download fallback available where preview behavior was unreliable.",
    ],
    production:
      "The production concern was avoiding broken file workflows while keeping access control intact.",
    lessons:
      "File features look small, but the real engineering work is security, storage correctness, and graceful failure.",
    impact:
      "Improved attachment inspection while preserving backend control over file access.",
    stack: ["Laravel", "S3", "Access control", "PDF handling", "Fallbacks"],
  },
];

const productionWins = [
  "Owned weekly production release cycle with deployment, verification, monitoring, and hotfix support.",
  "Supported Malaysia and Brazil production environments for deployments of the same system.",
  "Led migration of a legacy Laravel 6 codebase to Laravel 12.",
  "Supported PHP 7 -> 8 runtime modernization work.",
  "Provisioned and configured AWS infrastructure using EC2, ELB, and RDS.",
  "Investigated production performance issues with Nginx logs, PHP-FPM logs, and SQL optimization.",
  "Implemented Laravel scheduled commands and background processes for data synchronization.",
  "Improved average execution time from 70ms to 50ms by reducing queries per page.",
  "Cached infrequently updated data in Redis to reduce loading time.",
  "Led Bitbucket to GitLab migration to improve version-control workflow.",
  "Implemented PASETO security measures for HTTP redirect services.",
  "Tested shell scripts and SFTP flows for server-to-server file transfers.",
];

const releaseSteps = [
  {
    title: "Prepare",
    text: "Review backlog scope, deployment notes, schema changes, and environment configuration before release.",
  },
  {
    title: "Deploy",
    text: "Coordinate weekly production releases and monthly production updates across live environments.",
  },
  {
    title: "Verify",
    text: "Validate API behavior, core workflows, database changes, and integration points after deployment.",
  },
  {
    title: "Monitor",
    text: "Watch logs, user reports, CloudWatch signals, and production behavior after release.",
  },
  {
    title: "Hotfix",
    text: "Investigate failures quickly and support targeted fixes when production behavior changes.",
  },
];

const debuggingSignals = [
  "Nginx access and error logs",
  "PHP-FPM runtime behavior",
  "CloudWatch logs and metrics",
  "SQL query plans and slow paths",
  "Environment variables and deployment config",
  "Linux permissions and storage paths",
  "API payloads and third-party responses",
  "Performance bottlenecks and load-time regressions",
];

const skillGroups = [
  {
    title: "Backend",
    skills: [
      "PHP",
      "Laravel",
      "Symfony",
      "REST APIs",
      "Auth / authorization",
      "Business logic",
    ],
  },
  {
    title: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Schema migrations",
      "Query optimization",
      "Reporting",
      "Data integrity",
    ],
  },
  {
    title: "Cloud",
    skills: ["AWS", "EC2", "ELB", "RDS", "IAM", "S3", "CloudWatch", "Lambda"],
  },
  {
    title: "Infrastructure",
    skills: [
      "Ubuntu",
      "Nginx",
      "PHP-FPM",
      "DNS",
      "Environment config",
      "Server monitoring",
    ],
  },
  {
    title: "Automation",
    skills: [
      "Laravel Scheduler",
      "Queue workers",
      "Background jobs",
      "Data sync",
      "Shell scripts",
      "SFTP testing",
    ],
  },
  {
    title: "Earlier Backend Signals",
    skills: [
      "Redis caching",
      "PASETO",
      "Git migration",
      "Reverse engineering",
      "C++ builds",
      "API specs",
    ],
  },
];

const timeline = [
  {
    period: "2022",
    title: "Backend foundations",
    text: "Maintained Laravel backends for delivery, invoicing, and HR systems; implemented PASETO, Redis caching, API specs, and a 70ms -> 50ms query reduction.",
  },
  {
    period: "2023 - 2025",
    title: "Production support and systems work",
    text: "Shipped Laravel systems, monthly production updates, GitLab migration, server monitoring, API integrations, shell-script testing, SFTP validation, and reverse-engineering/debugging work.",
  },
  {
    period: "2025",
    title: "Backend modernization and cloud",
    text: "Maintained Laravel applications, developed REST APIs, handled schema migrations, led Laravel 6 -> 12 migration, configured AWS EC2/ELB/RDS, and debugged Nginx/PHP-FPM production issues.",
  },
  {
    period: "2026",
    title: "Senior full-stack role with backend ownership",
    text: "Owned weekly production releases, supported Malaysia and Brazil environments, optimized APIs and database queries, implemented scheduler/background processes, and refactored legacy code.",
  },
];

const principles = [
  "Build for maintainability before cleverness.",
  "Debug using evidence: logs, queries, payloads, and reproducible behavior.",
  "Treat production release work as engineering work, not an afterthought.",
  "Understand the full request lifecycle before changing one layer.",
  "Make failure modes visible so support is faster.",
  "Prefer simple architecture that another engineer can operate.",
];

function HeroSystemVisual() {
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-md border border-white/10 bg-[#101010] shadow-2xl shadow-black/50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#ef4444]/20 to-transparent" />
      <div className="absolute left-6 right-6 top-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
            Production Snapshot
          </p>
          <p className="mt-2 text-sm text-white/55">
            Release, runtime, database, and support responsibilities
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
            Release Path
          </p>
          <div className="mt-5 grid gap-2">
            {["Plan", "Deploy", "Verify", "Monitor", "Hotfix"].map(
              (step, index) => (
                <div
                  key={step}
                  className="flex items-center justify-between rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2 text-xs"
                >
                  <span className="font-mono uppercase tracking-[0.18em] text-white/45">
                    0{index + 1}
                  </span>
                  <span className="font-semibold text-[#f4f4f5]">{step}</span>
                  <span className="text-[#ef4444]">owned</span>
                </div>
              ),
            )}
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
                <span className="text-[#ef4444]">ops</span> nginx/php-fpm
              </p>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Signal
            </p>
            <p className="mt-3 text-3xl font-semibold text-[#fafafa]">
              Production
            </p>
            <p className="mt-2 text-sm leading-6 text-[#a1a1aa]">
              Releases, logs, APIs, SQL, infrastructure, and user support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="min-w-0 rounded-md border border-white/10 bg-[#101010] p-5">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {architectureFlow.map((item, index) => (
          <div
            key={item}
            className="rounded-md border border-white/10 bg-black/25 p-4"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ef4444]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-sm font-semibold text-[#f4f4f5]">
              {item}
            </p>
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
            <a className="transition hover:text-[#f4f4f5]" href="#production">
              Production
            </a>
            <a className="transition hover:text-[#f4f4f5]" href="#stack">
              Skills
            </a>
            <a className="transition hover:text-[#f4f4f5]" href="#about">
              About
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
              Backend software engineer / production systems / AWS
            </p>
            <h1 className="[font-family:var(--font-display)] text-7xl leading-none text-[#fafafa] sm:text-8xl lg:text-9xl">
              Amirul
            </h1>
            <p className="mt-8 max-w-2xl text-2xl leading-tight text-[#f4f4f5] sm:text-3xl">
              I build and maintain backend systems that survive real production
              use.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#a1a1aa]">
              3+ years across Laravel, PHP, MySQL, AWS, Linux, Nginx, REST
              APIs, release engineering, production support, and database-heavy
              systems.
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
                Production backend case studies.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#a1a1aa]">
              These are backend problems: modernization, data correctness,
              deployment, storage, debugging, release safety, and keeping
              systems maintainable after they are live.
            </p>
          </div>

          <div className="grid gap-5">
            {caseStudies.map((item, index) => (
              <article
                key={item.title}
                className="rounded-md border border-white/10 bg-[#101010] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f87171]/45"
              >
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ef4444]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#f4f4f5]">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-[#a1a1aa]">
                      {item.background}
                    </p>
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
                  </div>

                  <div className="grid gap-5">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="border-l border-[#ef4444]/40 pl-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Problem
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#a1a1aa]">
                          {item.problem}
                        </p>
                      </div>
                      <div className="border-l border-[#ef4444]/40 pl-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Technical Challenge
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#a1a1aa]">
                          {item.challenge}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-md border border-white/10 bg-black/25 p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                        My Responsibilities
                      </p>
                      <div className="mt-4 grid gap-2">
                        {item.responsibilities.map((responsibility) => (
                          <p
                            key={responsibility}
                            className="text-sm leading-6 text-[#d4d4d8]"
                          >
                            {responsibility}
                          </p>
                        ))}
                      </div>
                    </div>

                    {item.timeline ? (
                      <div className="grid gap-3 md:grid-cols-4">
                        {item.timeline.map((step) => (
                          <div
                            key={step.label}
                            className="rounded-md border border-white/10 bg-white/[0.04] p-4"
                          >
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ef4444]">
                              {step.label}
                            </p>
                            <p className="mt-3 text-xs leading-6 text-[#a1a1aa]">
                              {step.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {item.dataFlow ? (
                      <div className="rounded-md border border-white/10 bg-black/25 p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Data Flow
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.dataFlow.map((step, stepIndex) => (
                            <span
                              key={step}
                              className="rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-[#d4d4d8]"
                            >
                              {stepIndex + 1}. {step}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {item.serviceMap ? (
                      <div className="grid gap-3 md:grid-cols-2">
                        {Object.entries(item.serviceMap).map(
                          ([service, responsibility]) => (
                            <div
                              key={service}
                              className="rounded-md border border-white/10 bg-white/[0.04] p-4"
                            >
                              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ef4444]">
                                {service}
                              </p>
                              <p className="mt-2 text-xs leading-6 text-[#a1a1aa]">
                                {responsibility}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    ) : null}

                    {item.failureModes ? (
                      <div className="rounded-md border border-white/10 bg-black/25 p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Failure Modes Considered
                        </p>
                        <div className="mt-4 grid gap-2 md:grid-cols-2">
                          {item.failureModes.map((mode) => (
                            <p
                              key={mode}
                              className="text-xs leading-6 text-[#a1a1aa]"
                            >
                              {mode}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Engineering Decisions
                        </p>
                        <div className="mt-3 grid gap-2">
                          {(item.decisions ?? item.implementation).map(
                            (decision) => (
                              <p
                                key={decision}
                                className="text-sm leading-6 text-[#a1a1aa]"
                              >
                                {decision}
                              </p>
                            ),
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Production Considerations
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[#a1a1aa]">
                          {item.production}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 border-t border-white/10 pt-5 md:grid-cols-2">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Lessons Learned
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#a1a1aa]">
                          {item.lessons}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Business Impact
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#a1a1aa]">
                          {item.impact}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Case study {String(index + 1).padStart(2, "0")} / Code
                      unavailable where company confidentiality applies.
                    </p>
                  </div>
                </div>
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
              I think in request paths and failure modes.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#a1a1aa]">
              Backend ownership means understanding what happens before and
              after the controller: DNS, load balancing, runtime, auth, queues,
              storage, database behavior, logs, and post-release monitoring.
            </p>
          </div>
          <ArchitectureDiagram />
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {systemFlows.map((flow) => (
            <div
              key={flow.title}
              className="rounded-md border border-white/10 bg-[#101010] p-5"
            >
              <h3 className="text-lg font-semibold text-[#fafafa]">
                {flow.title}
              </h3>
              <div className="mt-5 grid gap-2">
                {flow.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center justify-between rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2 text-xs"
                  >
                    <span className="font-mono text-white/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#d4d4d8]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="production"
        className="border-b border-white/10 bg-[#0f0f10] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.75fr_1fr] md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
                Production Ownership
              </p>
              <h2 className="mt-4 [font-family:var(--font-display)] text-4xl leading-tight text-[#fafafa] sm:text-5xl">
                Release engineering and debugging are part of the work.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#a1a1aa]">
              My strongest production signals are not UI polish. They are
              release cycles, logs, hotfixes, SQL behavior, environment config,
              server health, deployment validation, and support after the code
              is live.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-md border border-white/10 bg-[#101010] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ef4444]">
                Release Engineering
              </p>
              <div className="mt-6 grid gap-4">
                {releaseSteps.map((step) => (
                  <div
                    key={step.title}
                    className="grid gap-3 border-l border-[#ef4444]/40 pl-4 sm:grid-cols-[120px_1fr]"
                  >
                    <h3 className="text-sm font-semibold text-[#f4f4f5]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-7 text-[#a1a1aa]">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-md border border-white/10 bg-[#101010] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ef4444]">
                Debugging Production Systems
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {debuggingSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-[#d4d4d8]"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-5 rounded-md border border-white/10 bg-[#101010] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ef4444]">
              Production Wins
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {productionWins.map((win) => (
                <div
                  key={win}
                  className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-[#d4d4d8]"
                >
                  {win}
                </div>
              ))}
            </div>
          </section>
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
              Grouped by production responsibility: backend code, data,
              infrastructure, automation, debugging, and earlier platform
              signals.
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
              Backend ownership built through production work.
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
        id="principles"
        className="border-b border-white/10 bg-[#050505] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ef4444]">
              Engineering Principles
            </p>
            <h2 className="mt-4 [font-family:var(--font-display)] text-4xl leading-tight text-[#fafafa] sm:text-5xl">
              The habits behind the backend work.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#a1a1aa]">
              These are the principles I come back to when working with legacy
              systems, production incidents, release cycles, APIs, and data
              workflows.
            </p>
          </div>
          <div className="grid gap-3">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-md border border-white/10 bg-[#101010] p-5 text-sm leading-7 text-[#d4d4d8]"
              >
                {principle}
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
                    Backend engineer who enjoys tracing a request from DNS to
                    Laravel, SQL, logs, infrastructure, and user impact.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-3xl font-semibold text-[#f87171]">
                      API
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                      REST and integration
                    </p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-3xl font-semibold text-[#ef4444]">
                      Ops
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                      Release and support
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
              I like backend work because the truth is in the system.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#a1a1aa]">
              I enjoy the part of engineering where you follow evidence:
              reading logs, checking SQL, tracing API payloads, reviewing
              environment configuration, and finding the exact point where a
              production workflow breaks.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#a1a1aa]">
              My best work sits between backend code and operations: Laravel
              systems, database-heavy features, AWS deployments, release
              coordination, legacy refactoring, and making software easier for
              the next engineer to maintain.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#a1a1aa]">
              I also work closely with business stakeholders, product owners,
              QA, external systems, and other engineers through estimation,
              technical discussions, code reviews, and modest mentoring of
              interns.
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
              Need someone who can build, release, and debug backend systems?
              Let&apos;s talk.
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
