"use client";
import Image from "next/image";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    role: "Graduate Teaching Assistant & AI Lab Researcher",
    org: "Pace University — Seidenberg School of CSIS",
    location: "New York, NY",
    dates: "Oct 2025 – Present",
    bullets: [
      "Selected by faculty (Profs. Sara Falcone, Paul Benjamin) to instruct and grade Python, ML, and AI Systems coursework — coaching graduate students on RAG pipelines, NLP, ML evaluation (AUC, F1, confusion matrix), and data-mining workflows.",
      "Pace AI Lab researcher on the ADAPT architecture, fine-tuning frontier vision-language and depth-foundation models (Meta SAM 3D, Depth Anything v3, VGGT).",
      "AI-native operator — using ChatGPT, Claude, Cursor, and agentic tooling daily as throughput multipliers across research, code, and writing.",
    ],
    tags: ["Vision-Language Models", "RAG", "PyTorch", "Research"],
  },
  {
    role: "Founder & Data Scientist",
    org: "PrimeMarket AI",
    location: "Independent",
    dates: "2024 – Present",
    href: "https://www.primemarketai.com",
    bullets: [
      "Built an AI-native time-series forecasting product for retail traders — solo-built data, ML, product, and measurement stack end-to-end.",
      "Defined the product north-star (forecast directional accuracy on held-out intraday windows) and a 'time-to-first-signal' activation metric.",
      "Built the experimentation harness from scratch: rolling-window backtests, walk-forward validation, and champion/challenger comparisons across XGBoost, LSTM/RNN, and transformer-based forecasters.",
      "Instrumented full funnel (landing → signup → first forecast → repeat session); used cohort retention curves to prioritize highest-leverage UX fixes.",
    ],
    tags: ["FastAPI", "PyTorch", "Time-Series", "AWS", "Docker"],
  },
  {
    role: "AI / ML Engineer — Data Science & Analytics",
    org: "Tata Consultancy Services",
    location: "Pune, India",
    dates: "Oct 2022 – Aug 2024",
    bullets: [
      "Embedded data scientist for global B2B enterprise clients: Tokyo Electron (semiconductor), Lamb Weston (CPG/manufacturing), and Stellantis (automotive).",
      "Defined KPI frameworks and end-to-end funnels for client AI rollouts — adoption, accuracy SLAs, operator throughput, and quality guardrails.",
      "Designed and ran controlled A/B comparisons across 6+ model variants (YOLO, Detectron2, ResNet, X3D, ANN). Shipped versions improved operator workflow efficiency by up to 40%.",
      "Built SQL-driven analytical pipelines on multi-million-row enterprise datasets to surface drift, cohort regressions, and edge-case failure modes.",
      "Delivered production-grade systems achieving 80–90% accuracy across CV/OCR.",
    ],
    tags: ["Computer Vision", "OCR", "AWS Textract", "Azure ML", "Detectron2"],
  },
];

const PROJECTS = [
  {
    title: "PrimeMarket AI",
    tagline: "AI-native intraday forecasting platform",
    description:
      "End-to-end deep-learning forecasting product for retail traders. Built data pipelines, model training (XGBoost, LSTMs, transformers), backtesting harness, FastAPI service, and the user funnel — all solo.",
    tags: ["Python", "PyTorch", "FastAPI", "AWS", "Docker"],
    href: "https://www.primemarketai.com",
    cta: "Visit live site →",
    logo: "/primemarket-logo.png",
  },
  {
    title: "Opinfer",
    tagline: "Optimized Video Inference for ViTs & VLMs",
    description:
      "Open-source Python package that significantly optimizes video inference performance for Vision Transformers and Vision-Language Models by automatically adjusting parameters based on video characteristics.",
    tags: ["Python", "PyTorch", "Vision Transformers", "VLMs", "Video AI"],
    href: "https://github.com/ruturajdixit99/Opinfer",
    cta: "View on GitHub →",
    logo: "/opinfer-logo.jpg",
  },
  {
    title: "Pattern Recognition in Financial Charts",
    tagline: "Peer-reviewed publication (ResearchGate)",
    description:
      "Image segmentation method for detecting Fair Value Gaps, trendlines, and harmonic patterns in financial market visuals. Designed evaluation methodology and authored independently.",
    tags: ["Computer Vision", "Image Segmentation", "OpenCV"],
    href: "https://www.researchgate.net/publication/389497552_Pattern_Recognition_in_Financial_Charts_Using_Image_Segmentation_Technique_Author_Ruturaj_Dixit",
    cta: "Read on ResearchGate →",
  },
  {
    title: "Pace AI Lab — ADAPT Research",
    tagline: "Vision-language & depth-foundation models",
    description:
      "Research on the ADAPT architecture — fine-tuning Meta SAM 3D, Depth Anything v3, and VGGT for downstream applications in human-AI interaction quality and trust.",
    tags: ["VLM", "SAM 3D", "Depth Anything", "Fine-tuning"],
  },
];

const SKILLS = [
  {
    group: "Languages & Core",
    items: ["Python", "SQL", "PySpark", "Bash", "TypeScript"],
  },
  {
    group: "ML / Deep Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "LightGBM",
      "XGBoost",
      "Hugging Face",
    ],
  },
  {
    group: "AI Systems",
    items: ["LLMs", "RAG (LangChain)", "Vision Transformers", "Embeddings", "Agentic workflows"],
  },
  {
    group: "Data Engineering",
    items: ["Apache Spark", "Airflow", "Kafka", "Snowflake", "AWS S3", "Azure Data Lake"],
  },
  {
    group: "Cloud & MLOps",
    items: ["AWS (S3, EC2, SageMaker, Textract)", "Azure ML", "GCP", "Databricks", "Docker", "FastAPI"],
  },
  {
    group: "Product & Analytics",
    items: ["A/B testing", "Funnel analysis", "Cohort retention", "Power BI", "Causal inference"],
  },
];

const CERTS = [
  "AWS Certified Machine Learning Engineer – Associate",
  "Databricks Fundamentals Certified",
  "PCAP: Programming Essentials in Python",
];

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/60 border-b border-white/5">
        <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            Ruturaj <span className="text-accent">Dixit</span>
          </a>
          <ul className="hidden sm:flex gap-6 text-sm text-gray-300">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            className="text-sm rounded-full border border-white/10 px-3 py-1.5 hover:border-white/30 transition-colors"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 sm:pt-32 sm:pb-32 relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-5 animate-fade-in">
                Data Scientist · AI/ML Engineer
              </p>
              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] animate-fade-up">
                Building AI-native products and shipping
                <span className="block text-gray-400 mt-1">
                  production ML for global enterprises.
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-gray-300 animate-fade-up" style={{ animationDelay: "120ms" }}>
                I&apos;ve shipped AI systems for Tokyo Electron, Lamb Weston, and Stellantis at TCS,
                founded{" "}
                <a className="text-white underline underline-offset-4 decoration-accent/60 hover:decoration-accent" href="https://www.primemarketai.com">
                  PrimeMarket AI
                </a>
                , and now research vision-language and depth-foundation models at the Pace AI Lab while finishing
                an M.S. in Data Science.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
                <a
                  href="#projects"
                  className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:border-white/40 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Profile photo */}
            <div className="flex-shrink-0 flex justify-center md:justify-end animate-fade-in">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-white/10 ring-1 ring-white/5 shadow-2xl">
                <Image
                  src="/profile-headshot.png"
                  alt="Ruturaj Dixit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* quick stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            {[
              { v: "3", l: "Fortune-500 enterprise clients shipped" },
              { v: "40%", l: "Workflow efficiency gain (TCS)" },
              { v: "1", l: "Founded AI product live in prod" },
              { v: "1", l: "Peer-reviewed publication" },
            ].map((s) => (
              <div key={s.l} className="border-l border-white/10 pl-4">
                <div className="text-2xl font-semibold text-white">{s.v}</div>
                <div className="text-xs text-gray-400 mt-1 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="01" title="About">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-gray-300 leading-relaxed">
            <p>
              I&apos;m a data scientist focused on the intersection of applied ML and AI-native product building.
              My instinct is to instrument first, hypothesize second, and ship — measuring what changed and why.
            </p>
            <p>
              At <span className="text-white">Tata Consultancy Services</span>, I was the embedded data scientist
              for AI rollouts at Tokyo Electron, Lamb Weston, and Stellantis — defining KPI frameworks, running
              model A/B comparisons, and building SQL pipelines on multi-million-row enterprise datasets that
              fed back into product iteration.
            </p>
            <p>
              On my own time I founded <a href="https://www.primemarketai.com" className="text-white underline underline-offset-4 decoration-accent/60">PrimeMarket AI</a>,
              an intraday forecasting platform where I own everything from data ingestion to the user funnel.
              At Pace, I&apos;m a TA + AI Lab researcher working on vision-language and depth-foundation models.
            </p>
          </div>
          <aside className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.02]">
            <div className="relative w-full h-64">
              <Image
                src="/profile-full.png"
                alt="Ruturaj Dixit"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 space-y-3">
              <Detail label="Based in" value="New York, NY · open to SF" />
              <Detail label="Education" value="M.S. Data Science, Pace (May 2026)" />
              <Detail label="Languages" value="English, Hindi, Marathi" />
              <Detail label="Currently" value="Researching VLMs · Building PrimeMarket AI" />
            </div>
          </aside>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="02" title="Experience">
        <ol className="relative border-l border-white/10 ml-2">
          {EXPERIENCE.map((e, idx) => (
            <li key={idx} className="pl-8 pb-12 last:pb-0 relative">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-black" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-medium text-white">{e.role}</h3>
                <span className="text-xs text-gray-500">·</span>
                {e.href ? (
                  <a className="text-gray-300 hover:text-white underline underline-offset-4 decoration-white/20" href={e.href}>
                    {e.org}
                  </a>
                ) : (
                  <span className="text-gray-300">{e.org}</span>
                )}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {e.location} · {e.dates}
              </div>
              <ul className="mt-4 space-y-2 text-gray-300">
                {e.bullets.map((b, i) => (
                  <li key={i} className="pl-4 relative">
                    <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span key={t} className="text-[11px] uppercase tracking-wider text-gray-400 border border-white/10 rounded-full px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="03" title="Selected Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-white/10 p-6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {p.logo && (
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-white/5 border border-white/10">
                      <Image src={p.logo} alt={p.title} fill className="object-contain p-1" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-medium text-white">{p.title}</h3>
                    <p className="text-sm text-accent mt-0.5">{p.tagline}</p>
                  </div>
                </div>
                {p.href && (
                  <span className="text-xs text-gray-500 group-hover:text-white transition-colors">↗</span>
                )}
              </div>
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] text-gray-400 bg-white/5 rounded-md px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm text-white border-b border-accent/60 hover:border-accent pb-0.5"
                >
                  {p.cta}
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="04" title="Skills & Stack">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((s) => (
            <div key={s.group} className="rounded-xl border border-white/10 p-5 bg-white/[0.02]">
              <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">{s.group}</h4>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="text-sm text-gray-200 bg-white/5 border border-white/5 rounded-md px-2.5 py-1">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-white/10 p-5 bg-white/[0.02]">
          <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Certifications</h4>
          <ul className="space-y-2 text-gray-200">
            {CERTS.map((c) => (
              <li key={c} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="05" title="Get in Touch">
        <div className="rounded-2xl border border-white/10 p-8 sm:p-12 bg-gradient-to-br from-white/[0.04] to-transparent glow">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Have a problem worth solving?
          </h3>
          <p className="mt-3 text-gray-300 max-w-xl">
            I&apos;m most interested in roles building AI-native B2B products, applied ML, and product analytics for
            AI workspaces. Drop me a line — I reply fast.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:dixitruturaj54@gmail.com"
              className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-gray-200"
            >
              dixitruturaj54@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ruturajdixit/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-white/40"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ruturajdixit99"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-white/40"
            >
              GitHub
            </a>
            <a
              href="https://www.primemarketai.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-white/40"
            >
              PrimeMarket AI
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 py-10 text-sm text-gray-500 border-t border-white/5 mt-16">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Ruturaj Dixit · Built with Next.js + Tailwind</span>
          <a href="#top" className="hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="text-accent text-xs font-mono">{eyebrow}</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
        <span className="flex-1 h-px bg-white/10" />
      </div>
      {children}
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
      <div className="text-sm text-gray-200 mt-0.5">{value}</div>
    </div>
  );
}
