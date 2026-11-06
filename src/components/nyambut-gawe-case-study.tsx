import Image from "next/image";
import Link from "next/link";
import Iconify from "./Iconify";
import { CtaSection, Footer } from "./site-chrome";

const assets = {
  avatar: "/portfolio/nyambut-avatar.svg",
  heroImage: "/portfolio/nyambut-macbook.png",
  heroVector: "/portfolio/nyambut-vector-reference.svg",
  problemSolution: "/portfolio/nyambut-problem-solution.png",
  informationArchitecture: "/portfolio/nyambut-information-architecture.png",
  wireframe: "/portfolio/nyambut-wireframe.png",
  styleGuide: "/portfolio/nyambut-style-guide.png",
  highFidelity: "/portfolio/nyambut-high-fidelity.png",
  otherProjects: "/portfolio/nyambut-other-projects.png",
  rackeet: "/portfolio/nyambut-other-rackeet.png",
  traksi: "/portfolio/nyambut-other-traksi.png",
  thankYou: "/portfolio/nyambut-thank-you-default.svg",
  thankYouHover: "/portfolio/nyambut-thank-you-hover.svg",
  bulb: "/portfolio/nyambut-bulb.svg",
  sketch: "/portfolio/nyambut-sketch.svg",
  fileUnknown: "/portfolio/nyambut-file-unknown.svg",
  cornerDouble: "/portfolio/nyambut-corner-double.svg",
  cloudUpload: "/portfolio/nyambut-cloud-upload.svg",
  copyCheck: "/portfolio/nyambut-copy-check.svg",
  fileInfo: "/portfolio/nyambut-file-info.svg",
} as const;

const menuItems = [
  ["problems", "01", "Problems and Goals"],
  ["design-thinking", "02", "Design Thinking Process"],
  ["insight", "03", "Research Insight"],
  ["problem-statement", "04", "Problem Statement"],
  ["information-architecture", "05", "Information Architecture"],
  ["wireframe", "06", "Wireframe"],
  ["design-system", "07", "Design System"],
  ["high-fidelity", "08", "High Fidelity"],
  ["evaluation", "09", "Evaluation"],
] as const;

const goals = [
  {
    icon: assets.fileInfo,
    iconWidth: 14,
    iconHeight: 18,
    text: "Provide a centralized platform for accessing job vacancy information.",
  },
  {
    icon: assets.copyCheck,
    iconWidth: 18,
    iconHeight: 18,
    text: "Display job listings tailored to users' skills and interests.",
  },
  {
    icon: assets.cloudUpload,
    iconWidth: 21,
    iconHeight: 17,
    text: "Streamline the hiring process for companies to post jobs and reach qualified candidates matching their required skills.",
  },
] as const;

function CaseStudyNavbar() {
  return (
    <header className="nyambut-navbar">
      <Link className="nyambut-navbar__brand" href="/">
        INTAN NURAINI
      </Link>
      <nav aria-label="Primary navigation" className="nyambut-navbar__links">
        <Link href="/#about">About Me</Link>
        <Link href="/#work">Work</Link>
        <Link href="/#connect">Connect</Link>
      </nav>
    </header>
  );
}

function CaseStudyHero() {
  return (
    <section aria-labelledby="nyambut-hero-title" className="nyambut-hero">
      <div className="nyambut-hero__profile">
        <Image alt="" height={93} priority src={assets.avatar} width={93} />
        <span>01</span>
      </div>

      <div className="nyambut-hero__heading">
        <p>UI/UX Case Study</p>
        <h1 id="nyambut-hero-title">Nyambut Gawe Website</h1>
      </div>

      <div className="nyambut-hero__content">
        <div className="nyambut-hero__visual">
          <div className="nyambut-hero__visual-image">
            <Image
              alt="Nyambut Gawe website shown on a laptop"
              height={512}
              priority
              sizes="(max-width: 900px) 100vw, 1268px"
              src={assets.heroImage}
              width={749}
            />
          </div>
          <Image
            alt=""
            className="nyambut-hero__vector"
            height={207.671}
            src={assets.heroVector}
            width={664.404}
          />
        </div>
      </div>
    </section>
  );
}

function CaseStudyNavigation() {
  return (
    <aside className="nyambut-side-nav">
      <div className="nyambut-side-nav__intro">
        <p>Nyambut Gawe</p>
        <h2>A quick look at the process</h2>
      </div>
      <nav aria-label="Case study sections" className="nyambut-side-nav__menu">
        <p className="nyambut-side-nav__label">MENU</p>
        <ol>
          {menuItems.map(([id, number, label]) => (
            <li key={id}>
              <a href={`#${id}`}>
                <span>{number}</span>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}

function GoalIcon({
  icon,
  iconHeight,
  iconWidth,
}: {
  icon: string;
  iconHeight: number;
  iconWidth: number;
}) {
  return (
    <span className="nyambut-goal-icon">
      <Image alt="" height={iconHeight} src={icon} width={iconWidth} />
    </span>
  );
}

function ProjectSummarySection() {
  return (
    <section
      aria-labelledby="nyambut-summary-title"
      className="nyambut-project-summary"
    >
      <div className="nyambut-project-summary__copy">
        <h2 id="nyambut-summary-title">About</h2>
        <p>
          Nyambut Gawe is a digital job portal platform designed specifically
          for the workforce ecosystem in Belitung Timur.
        </p>
      </div>
      <dl className="nyambut-project-summary__details">
        <div className="nyambut-project-summary__row">
          <div>
            <dt>ROLE</dt>
            <dd>UI/UX Designer</dd>
          </div>
          <div>
            <dt>PLATFORM</dt>
            <dd>Website</dd>
          </div>
        </div>
        <div className="nyambut-project-summary__row">
          <div>
            <dt>FOCUS</dt>
            <dd>Job portal</dd>
          </div>
          <div>
            <dt>DELIVERABLES</dt>
            <dd>Research, design process, UI design, prototype</dd>
          </div>
        </div>
      </dl>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="nyambut-problems" id="problems">
      <div aria-hidden="true" className="nyambut-problems__background">
        <Image
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, 1000px"
          src={assets.problemSolution}
        />
      </div>
      <div className="nyambut-problems__copy">
        <h2>
          Problems
          <span aria-hidden="true">🔴</span>
        </h2>
        <p>
          Belitung Timur is home to abundant resources and a growing number of
          companies and UMKM, yet this potential has not been matched by an
          adequate employment information ecosystem.
        </p>
        <p>
          Job openings remain scattered and difficult to find in one place,
          growing companies that are actively hiring often go unnoticed, the job
          application process is far from efficient, and job seekers frequently
          struggle to understand what qualifications the local market actually
          demands.
        </p>
        <p>
          On the other side, companies find it hard to reach suitable local
          candidates without a centralized platform to rely on. Together, these
          gaps have widened the mismatch between local labor supply and company
          demand.
        </p>
      </div>

      <div className="nyambut-goals">
        <h2>Goals</h2>
        <div className="nyambut-goals__list">
          {goals.map((goal) => (
            <div className="nyambut-goal" key={goal.text}>
              <GoalIcon
                icon={goal.icon}
                iconHeight={goal.iconHeight}
                iconWidth={goal.iconWidth}
              />
              <p>{goal.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessIcon({
  kind,
}: {
  kind: "bulb" | "define" | "sketch" | "prototype";
}) {
  if (kind === "bulb") {
    return <Image alt="" height={66} src={assets.bulb} width={66} />;
  }

  if (kind === "sketch") {
    return <Image alt="" height={66} src={assets.sketch} width={66} />;
  }

  return (
    <span className="nyambut-process__icon-box">
      <Image
        alt=""
        height={kind === "define" ? 31 : 21}
        src={kind === "define" ? assets.fileUnknown : assets.cornerDouble}
        width={24}
      />
    </span>
  );
}

function DesignThinkingSection() {
  const steps = [
    ["bulb", "Empathize", "(01)"],
    ["define", "Define", "(02)"],
    ["sketch", "Ideate", "(03)"],
    ["prototype", "Prototype", "(04)"],
  ] as const;

  return (
    <section className="nyambut-process" id="design-thinking">
      <h2>Design Thinking Process</h2>
      <div className="nyambut-process__steps">
        {steps.map(([kind, label, number]) => (
          <div className="nyambut-process__step" key={label}>
            <ProcessIcon kind={kind} />
            <div className="nyambut-process__step-copy">
              <span className="nyambut-process__step-label">{label}</span>
              <span className="nyambut-process__step-number">{number}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InsightSection() {
  return (
    <section className="nyambut-insight" id="insight">
      <div className="nyambut-section-heading">
        <p>Insight</p>
        <h2>Direct User Observation</h2>
      </div>
      <div className="nyambut-insight__content">
        <article className="nyambut-insight-note nyambut-insight-note--blue">
          Informasi lowongan kerja di Belitung Timur tersebar acak di grup
          WhatsApp, pamflet cetak, dan media sosial pribadi
        </article>
        <article className="nyambut-insight-note nyambut-insight-note--purple">
          Pencari kerja lokal kesulitan memahami kualifikasi spesifik yang
          sebenarnya dibutuhkan oleh UMKM/perusahaan lokal
        </article>
        <article className="nyambut-insight-note nyambut-insight-note--yellow">
          Pencari kerja lokal kesulitan memahami kualifikasi spesifik yang
          sebenarnya dibutuhkan oleh UMKM/perusahaan lokal
        </article>
        <article className="nyambut-insight-note nyambut-insight-note--pink">
          Pencari kerja dari kecamatan yang lebih jauh merasa terbebani jika
          harus datang langsung ke kota hanya untuk sekadar menanyakan atau
          mengantar amplop lamaran
        </article>
      </div>
    </section>
  );
}

function ProblemStatementSection() {
  return (
    <section className="nyambut-problem-statement" id="problem-statement">
      <div className="nyambut-problem-statement__panel">
        <div className="nyambut-problem-statement__top">
          <article>
            <h2>Problem Statement</h2>
            <p>
              Job seekers across sub districts in Belitung Timur face unequal
              access and career inefficiency due to scattered job information
              and geographic barriers when applying in person
            </p>
          </article>
          <article>
            <h2>If/Then Statement</h2>
            <p>
              <strong>If</strong> we create a centralized job portal with
              transparent job requirements and digital applications,{" "}
              <strong>then</strong> job seekers throughout Belitung Timur can
              access equal career opportunities efficiently, free from
              geographic constraints and information ambiguity
            </p>
          </article>
        </div>
        <article className="nyambut-problem-statement__objective">
          <h2>Project Objective</h2>
          <p>
            Build an integrated, responsive, and user-friendly web-based job
            portal platform, &apos;Nyambut Gawe,&apos; to bridge local talent
            with companies in Belitung Timur
          </p>
        </article>
      </div>
    </section>
  );
}

function InformationArchitectureSection() {
  return (
    <section
      className="nyambut-information-architecture"
      id="information-architecture"
    >
      <div className="nyambut-information-architecture__image">
        <Image
          alt="Nyambut Gawe information architecture diagram"
          fill
          sizes="(max-width: 760px) 100vw, 1038px"
          src={assets.informationArchitecture}
        />
      </div>
    </section>
  );
}

function WireframeSection() {
  return (
    <section className="nyambut-wireframe" id="wireframe">
      <Image
        alt=""
        className="nyambut-wireframe__background"
        fill
        sizes="(max-width: 760px) 100vw, 1026px"
        src={assets.wireframe}
      />
      <div className="nyambut-wireframe__content">
        <div className="nyambut-wireframe__title">
          <h2>Wireframe</h2>
          <p>Nyambut Gawe</p>
        </div>
        <p>
          a low-fidelity visual blueprint to structure Nyambut Gawe page before
          moving on to the detailed visual stages.
        </p>
      </div>
    </section>
  );
}

function DesignSystemSection() {
  return (
    <section className="nyambut-design-system" id="design-system">
      <div className="nyambut-design-system__intro">
        <h2>Design System</h2>
        <p>
          Design System ensures that the same elements have an identical
          appearance across all pages of Nyambut Gawe and becomes a single
          source of truth for designers and developers.
        </p>
      </div>
      <div className="nyambut-design-system__image">
        <Image
          alt="Nyambut Gawe design system style guide"
          fill
          sizes="(max-width: 760px) 100vw, 1026px"
          src={assets.styleGuide}
        />
      </div>
    </section>
  );
}

function HighFidelitySection() {
  return (
    <section className="nyambut-high-fidelity" id="high-fidelity">
      <h2>High Fidelity</h2>
      <div className="nyambut-high-fidelity__image">
        <Image
          alt="Nyambut Gawe high fidelity website screens"
          fill
          sizes="(max-width: 760px) 100vw, 1026px"
          src={assets.highFidelity}
        />
      </div>
    </section>
  );
}

function EvaluationSection() {
  const learnings = [
    "Designing a job portal based on user observation insights pushed me to prioritize clarity of information above all else",
    "Translating observation findings into synthesized user pain points helped focus the design direction, rather than trying to solve every problem at once",
    "Structuring the website's information architecture to organize content with a strong emphasis on ease of exploration for users",
    "Given more time and opportunity, I would conduct usability testing with users to gather feedback and evaluate their experience in terms of ease of use and functionality",
  ];

  return (
    <section className="nyambut-evaluation" id="evaluation">
      <div className="nyambut-section-heading">
        <p>Evaluation</p>
        <h2>What I Learned</h2>
      </div>
      <ul>
        {learnings.map((learning) => (
          <li key={learning}>{learning}</li>
        ))}
      </ul>
    </section>
  );
}

function ConclusionSection() {
  return (
    <section className="nyambut-conclusion">
      <h2>THANK YOU!</h2>
      <div className="nyambut-conclusion__character">
        <div className="nyambut-conclusion__character-art">
          <Image
            alt=""
            aria-hidden="true"
            className="nyambut-conclusion__character-default"
            height={178}
            src={assets.thankYou}
            width={240}
          />
          <Image
            alt=""
            aria-hidden="true"
            className="nyambut-conclusion__character-hover"
            height={178}
            src={assets.thankYouHover}
            width={240}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  category,
  href,
  image,
  title,
}: {
  category: string;
  href: string;
  image: string;
  title: string;
}) {
  return (
    <Link
      className="nyambut-project-card portfolio-other-project-card"
      href={href}
    >
      <div className="nyambut-project-card__image">
        <Image
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 760px) 100vw, 347px"
          src={image}
        />
      </div>
      <div className="nyambut-project-card__details">
        <div>
          <p>{category}</p>
          <h3>{title}</h3>
        </div>
        <span aria-hidden="true">
          <Iconify
            icon="tabler:arrow-up-right"
            width={40}
            height={40}
            strokeWidth={2}
          />
        </span>
      </div>
    </Link>
  );
}

function OtherProjectsSection() {
  return (
    <section className="nyambut-other-projects">
      <div aria-hidden="true" className="nyambut-other-projects__background">
        <Image alt="" fill sizes="100vw" src={assets.otherProjects} />
      </div>
      <div className="nyambut-other-projects__header">
        <h2>Other Projects</h2>
        <p>Here are a few my works I&apos;ve poured my heart into</p>
      </div>
      <div className="nyambut-other-projects__cards">
        <ProjectCard
          category="UI/UX Case Study"
          href="/rackeet"
          image={assets.rackeet}
          title="RACKEET"
        />
        <ProjectCard
          category="UI Case Study"
          href="/traksi"
          image={assets.traksi}
          title="TRAKSI"
        />
      </div>
    </section>
  );
}

export default function NyambutGaweCaseStudy() {
  return (
    <div className="nyambut-page" id="top">
      <CaseStudyNavbar />
      <CaseStudyHero />
      <div className="nyambut-main">
        <CaseStudyNavigation />
        <div className="nyambut-main__content">
          <ProjectSummarySection />
          <ProblemsSection />
          <DesignThinkingSection />
          <InsightSection />
          <ProblemStatementSection />
          <InformationArchitectureSection />
          <WireframeSection />
          <DesignSystemSection />
          <HighFidelitySection />
          <EvaluationSection />
        </div>
      </div>
      <ConclusionSection />
      <OtherProjectsSection />
      <CtaSection />
      <Footer backToTopHref="#top" />
    </div>
  );
}
