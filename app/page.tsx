const projects = [
  {
    name: "Ops Dashboard",
    type: "Product Design / Frontend",
    summary:
      "A focused operations workspace for monitoring key work queues, cycle time, and team handoffs.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Charts"],
    accent: "bg-teal-600",
    panel: "from-teal-50 to-white",
  },
  {
    name: "Client Portal",
    type: "Full-stack Application",
    summary:
      "A secure portal experience with document exchange, status tracking, and self-serve account updates.",
    stack: ["React", "Node.js", "Postgres", "Auth"],
    accent: "bg-blue-600",
    panel: "from-blue-50 to-white",
  },
  {
    name: "Analytics Kit",
    type: "Data Interface",
    summary:
      "A reusable analytics layer for filtering, comparing, and exporting business performance reports.",
    stack: ["TypeScript", "APIs", "Tables", "UX"],
    accent: "bg-amber-500",
    panel: "from-amber-50 to-white",
  },
];

const skills = [
  "Interface design",
  "React / Next.js",
  "TypeScript",
  "API integration",
  "Responsive UI",
  "Design systems",
  "Performance",
  "Product thinking",
];

const principles = [
  {
    title: "Clear product thinking",
    text: "I shape interfaces around the job users need to finish, then keep the path direct and readable.",
  },
  {
    title: "Calm, durable execution",
    text: "I prefer simple architecture, strong defaults, and components that are easy to maintain after launch.",
  },
  {
    title: "Polished interaction",
    text: "I pay attention to spacing, states, accessibility, and the small details that make software feel complete.",
  },
];

function ProjectPreview({
  accent,
  panel,
}: {
  accent: string;
  panel: string;
}) {
  return (
    <div
      className={`relative min-h-48 overflow-hidden rounded-md border border-black/10 bg-gradient-to-br ${panel} p-4`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-black/10 pb-3">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-amber-400" />
          <span className="size-2 rounded-full bg-emerald-400" />
        </div>
        <div className="h-2 w-24 rounded-sm bg-black/10" />
      </div>
      <div className="grid gap-3 pt-4 sm:grid-cols-[1fr_0.72fr]">
        <div className="space-y-3">
          <div className="h-3 w-28 rounded-sm bg-black/15" />
          <div className="grid grid-cols-3 gap-2">
            <div className={`${accent} h-16 rounded-md`} />
            <div className="h-16 rounded-md bg-white shadow-sm ring-1 ring-black/10" />
            <div className="h-16 rounded-md bg-white shadow-sm ring-1 ring-black/10" />
          </div>
          <div className="space-y-2">
            <div className="h-2 rounded-sm bg-black/10" />
            <div className="h-2 w-4/5 rounded-sm bg-black/10" />
            <div className="h-2 w-2/3 rounded-sm bg-black/10" />
          </div>
        </div>
        <div className="rounded-md bg-white p-3 shadow-sm ring-1 ring-black/10">
          <div className="mb-3 h-2 w-16 rounded-sm bg-black/10" />
          <div className="flex h-24 items-end gap-1.5">
            <span className="h-8 flex-1 rounded-sm bg-black/10" />
            <span className={`h-14 flex-1 rounded-sm ${accent}`} />
            <span className="h-10 flex-1 rounded-sm bg-black/10" />
            <span className="h-20 flex-1 rounded-sm bg-black/10" />
            <span className={`h-16 flex-1 rounded-sm ${accent}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7f4] text-[#181a17]">
      <header className="border-b border-black/10 bg-[#f5f7f4]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="font-semibold tracking-tight">
            Amirul
          </a>
          <div className="hidden items-center gap-6 text-sm text-[#5f665d] sm:flex">
            <a className="transition hover:text-[#181a17]" href="#work">
              Work
            </a>
            <a className="transition hover:text-[#181a17]" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-[#181a17]" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24"
      >
        <div>
          <p className="mb-5 w-fit rounded-md border border-teal-700/20 bg-teal-700/10 px-3 py-1.5 text-sm font-medium text-teal-900">
            Available for frontend and full-stack work
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-[#10120f] sm:text-6xl">
            I build clean, usable web products with careful frontend craft.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f665d]">
            I am Amirul, a developer focused on practical interfaces, reliable
            implementation, and product details that make software easier to
            use every day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#181a17] px-5 text-sm font-semibold text-white transition hover:bg-[#2d312b]"
            >
              View selected work
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center rounded-md border border-black/15 px-5 text-sm font-semibold transition hover:border-black/35 hover:bg-white"
            >
              Contact me
            </a>
          </div>
        </div>

        <aside className="rounded-md border border-black/10 bg-white p-4 shadow-sm">
          <div className="rounded-md bg-[#10120f] p-4 text-white">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                  Current focus
                </p>
                <p className="mt-1 text-lg font-semibold">Product interfaces</p>
              </div>
              <span className="rounded-sm bg-teal-400 px-2 py-1 text-xs font-semibold text-[#10120f]">
                Live
              </span>
            </div>
            <div className="grid gap-3">
              <div className="rounded-md bg-white/8 p-4 ring-1 ring-white/10">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-white/60">Delivery</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="h-2 rounded-sm bg-white/10">
                  <div className="h-2 w-[92%] rounded-sm bg-teal-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md bg-white/8 p-4 ring-1 ring-white/10">
                  <p className="text-3xl font-semibold">24</p>
                  <p className="mt-1 text-sm text-white/55">Components</p>
                </div>
                <div className="rounded-md bg-white/8 p-4 ring-1 ring-white/10">
                  <p className="text-3xl font-semibold">4.8</p>
                  <p className="mt-1 text-sm text-white/55">UX score</p>
                </div>
              </div>
              <div className="rounded-md bg-white p-4 text-[#181a17]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold">Recent build</span>
                  <span className="text-xs text-[#6c7368]">Next.js</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-sm bg-[#dde3da]" />
                  <div className="h-2 w-5/6 rounded-sm bg-[#dde3da]" />
                  <div className="h-2 w-2/3 rounded-sm bg-[#dde3da]" />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section id="work" className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
                Selected Work
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal sm:text-4xl">
                Project stories with visible product thinking.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5f665d]">
              Replace these examples with your strongest projects, then lead
              each case study with the problem, your role, and the result.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-md border border-black/10 bg-[#fbfcfa] p-4 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
              >
                <ProjectPreview accent={project.accent} panel={project.panel} />
                <div className="pt-5">
                  <p className="text-sm font-medium text-teal-800">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-normal">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5f665d]">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm border border-black/10 bg-white px-2.5 py-1 text-xs font-medium text-[#4f564c]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
              Approach
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">
              How I work
            </h2>
          </div>
          <div className="grid gap-4">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-black/10 bg-white p-5"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 leading-7 text-[#5f665d]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-black/10 bg-[#eef3ee]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
                Skills
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal">
                Useful across the full product surface.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-md border border-black/10 bg-white px-4 py-3 text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-center md:py-20"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
            Contact
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal sm:text-4xl">
            Have a project, role, or collaboration in mind?
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-[#5f665d]">
            Send a short note with what you are building and the kind of help
            you need.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <a
            href="mailto:hello@example.com"
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#181a17] px-5 text-sm font-semibold text-white transition hover:bg-[#2d312b]"
          >
            Email me
          </a>
          <a
            href="https://github.com/"
            className="inline-flex h-12 items-center justify-center rounded-md border border-black/15 px-5 text-sm font-semibold transition hover:border-black/35 hover:bg-white"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
