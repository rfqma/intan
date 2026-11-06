import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Iconify from "./Iconify";
import { CtaSection, Footer } from "./site-chrome";

const assets = {
  colorPrimary: [
    "/portfolio/rackeet-design-system-icon.svg",
    "/portfolio/rackeet-color-1.svg",
    "/portfolio/rackeet-color-2.svg",
  ],
  colorSecondary: [
    "/portfolio/rackeet-color-3.svg",
    "/portfolio/rackeet-color-4.svg",
    "/portfolio/rackeet-color-5.svg",
  ],
  competitor: "/portfolio/rackeet-competitor.png",
  competitorTable: "/portfolio/rackeet-competitor-table.png",
  divider: "/portfolio/rackeet-divider.svg",
  hero: "/portfolio/rackeet-hero-b.png",
  highFidelity: "/portfolio/rackeet-high-fidelity.png",
  informationArchitecture:
    "/portfolio/rackeet-information-architecture-card.png",
  jtbd: "/portfolio/rackeet-jtbd.png",
  method: "/portfolio/rackeet-method.png",
  persona: "/portfolio/rackeet-persona.png",
  profile: "/portfolio/rackeet-profile.png",
  thankYou: "/portfolio/rackeet-thankyou.svg",
  thankYouHover: "/portfolio/rackeet-thank-you-hover.svg",
  userJourney: "/portfolio/rackeet-user-journey.png",
  wireframe: "/portfolio/rackeet-wireframe.png",
} as const;

const menuItems = [
  ["problems", "01", "Problems and Goals"],
  ["process", "02", "Design Process"],
  ["research", "03", "User Research"],
  ["persona", "04", "User Persona"],
  ["empathy-map", "05", "Empathy Map"],
  ["jtbd", "06", "Framework User Journey"],
  ["competitive", "07", "Competitive Analysis"],
  ["architecture", "08", "Information Architecture"],
  ["wireframe", "09", "Wireframe"],
  ["design-system", "10", "Design System"],
  ["high-fidelity", "11", "High Fidelity"],
  ["evaluation", "12", "Key Highlight & Evaluation"],
] as const;

const researchInsights = [
  "Strongly needs an app that provides quick assessment parameters",
  "Confused about finding trainer/coach services, unsure of or worried about the cost",
  "Wants to be able to see the coach’s price and experience, as well as bookable schedules",
  "Wants to receive feedback on progress with a description",
  "Wastes time searching for court and coach availability",
];

const quoteItems = {
  hear: [
    "“I don't use a coach's services because of the cost”",
    "“I chose my exercise location based on a friend's recommendation”",
    "“I exercise because I was invited by a colleague/friend”",
  ],
  see: [
    "“My colleague/friend has good stroke/shot technique”",
    "“I once passed by a sports building and saw people playing racket sports, so I rented that court”",
    "“I once looked for coaching services on social media, but only found training videos posted”",
  ],
  sayAndDo: [
    "“My colleague/friend suggested a stroke technique, and I tried it”",
    "“Based on a friend's recommendation to hire a coach, I went to the location and asked about the price and schedule”",
  ],
  thinkAndFeel: [
    "“Confused when booking a place to exercise, the admin replied slowly, and by the time I found another location, they finally replied”",
    "“If there's a coach's service, I don't dare contact them because there's no information on price and schedule availability, and it feels awkward if it doesn't work out”",
    "“Haven't gone as far as hiring a coach because there's no price or schedule information”",
  ],
  pain: [
    "“Wasting time contacting a coach”",
    "“Confused about finding trainer/coach services, unsure of or worried about the cost”",
  ],
  gain: [
    "“Getting information on the coach's achievements/certification and background (cost and schedule)”",
    "“Guidance from a professional to avoid injury and learn good technique (best practice)”",
    "“Being able to choose a coach with flexible availability”",
    "“Receiving feedback in the form of a long written description or verbal explanation”",
  ],
};

function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={["rackeet-section-title", className].filter(Boolean).join(" ")}
    >
      {children}
    </h2>
  );
}

function RackeetNavbar() {
  return (
    <header className="portfolio-navbar">
      <Link className="portfolio-navbar__brand" href="/">
        INTAN NURAINI
      </Link>
      <nav aria-label="Primary navigation" className="portfolio-navbar__links">
        <Link href="/#about">About Me</Link>
        <Link href="/#work">Work</Link>
        <Link href="/#connect">Connect</Link>
      </nav>
    </header>
  );
}

function RackeetHero() {
  return (
    <section aria-labelledby="rackeet-hero-title" className="rackeet-hero">
      <div className="rackeet-hero__header">
        <div className="rackeet-hero__badge">
          <Image
            alt=""
            aria-hidden="true"
            height={94}
            src="/portfolio/rackeet-icon-graphics.svg"
            width={93}
          />
          <span>02</span>
        </div>
        <div className="rackeet-hero__heading">
          <p>UI/UX Case Study</p>
          <h1 id="rackeet-hero-title">RACKEET</h1>
          <Image
            alt=""
            aria-hidden="true"
            height={1}
            src={assets.divider}
            width={972}
          />
        </div>
      </div>
      <div className="rackeet-hero__image">
        <Image
          alt="RACKEET mobile application screens"
          fill
          priority
          sizes="100vw"
          src={assets.hero}
        />
      </div>
    </section>
  );
}

function RackeetSideNavigation() {
  return (
    <aside className="rackeet-side-nav">
      <div className="rackeet-side-nav__intro">
        <p>RACKEET</p>
        <h2>A quick look at the process</h2>
      </div>
      <nav
        aria-label="RACKEET case study sections"
        className="rackeet-side-nav__menu"
      >
        <p>MENU</p>
        <ol>
          {menuItems.map(([id, number, label]) => (
            <li key={id}>
              <a href={["#", id].join("")}>
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

function OverviewSection() {
  return (
    <section className="rackeet-section rackeet-overview" id="overview">
      <div className="rackeet-overview__copy">
        <p className="rackeet-section-kicker">Overview</p>
        <SectionTitle>
          One system for
          <br />
          every racket sport need
        </SectionTitle>
      </div>
      <div className="rackeet-overview__facts">
        <div className="rackeet-overview__fact-row">
          <div>
            <dt>Role</dt>
            <dd>UI/UX Designer</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>Mobile App</dd>
          </div>
        </div>
        <div className="rackeet-overview__fact-row">
          <div>
            <dt>Focus</dt>
            <dd>Sport ecosystem</dd>
          </div>
          <div>
            <dt>Deliverables</dt>
            <dd>Research, design process, UI design, prototype</dd>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="rackeet-section rackeet-problems" id="problems">
      <div className="rackeet-problems__backdrop" />
      <div className="rackeet-problems__intro">
        <SectionTitle>5 Whys Analysis</SectionTitle>
        <p>
          In identifying the focus of the problem, the five whys analysis method
          was used to find the root cause of the problem.
        </p>
      </div>
      <div className="rackeet-problems__panel">
        <div className="rackeet-problems__column">
          <SectionTitle>Problems</SectionTitle>
          <p>
            Racket sports are currently booming and gaining massive popularity
            across various circles. The current rise in racket sport trends is
            dominated by beginners, who often use it as a way to fill leisure
            time or as an escape to relieve stress from daily routines. However,
            this enthusiasm has not been matched by adequate and verified
            technical understanding, which in turn triggers injuries.
          </p>
          <div className="rackeet-problems__stat">
            <strong>65%</strong>
            <span>
              of beginners in racket sports experienced injuries, making this
              phenomenon one that requires serious attention, given that a lack
              of proper technique mastery can increase the risk of severe injury
              and hinder daily activities.
            </span>
          </div>
          <p>
            However, athletes and beginner still need extra effort to find a
            trainer with the competence to design appropriate training. From
            market research on racket sports trainer services, several trainer
            accounts market their services without providing that information.
            This reliance on social media makes information about rates, trainer
            qualifications, and schedule availability limited and lacking in
            transparency.
          </p>
        </div>
        <div className="rackeet-problems__column rackeet-problems__goals">
          <SectionTitle>Goals</SectionTitle>
          <ul>
            <li>
              Identify the main obstacles and alternatives beginner athletes
              face in choosing their trainer/coach preferences/criteria
            </li>
            <li>
              Identify the marketing needs of trainers/coaches in promoting
              their services
            </li>
            <li>
              Identify the progress chart/graph needed by beginner athletes
            </li>
            <li>Identify the data trainers need to evaluate progress</li>
            <li>
              Identify the ideal training progress monitoring needed to assess
              whether a training program is running smoothly and showing
              progress
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function DesignProcessSection() {
  return (
    <section className="rackeet-section rackeet-process" id="process">
      <div className="rackeet-process__backdrop" />
      <SectionTitle>Design Process</SectionTitle>
      <div className="rackeet-process__content">
        <div>
          <h3>Double Diamond</h3>
          <p>
            The double diamond method was used, consisting of the discover stage
            to study the problem, define to define and break down the problem,
            develop to create solutions through ideation, and deliver to test
            the product.
          </p>
        </div>
        <figure>
          <Image
            alt="Double Diamond design thinking process"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            src={assets.method}
          />
        </figure>
      </div>
    </section>
  );
}

function ResearchInsightSection() {
  return (
    <section className="rackeet-section rackeet-research" id="research">
      <div className="rackeet-research__interview">
        <div className="rackeet-research__cards">
          <article>
            <h3>User Interview</h3>
            <div className="rackeet-research__card-body">
              <p>
                One on one in depth interviews were conducted to ask a series of
                questions related to habits, experiences, identifying pain
                points, and other information.
              </p>
            </div>
          </article>
          <article>
            <h3>Scope</h3>
            <div className="rackeet-research__card-body">
              <ul>
                <li>
                  Beginner(18-30 Years Old) → Have not mastered racket sports
                  techniques: low accuracy in stroke technique
                </li>
                <li>Trainer</li>
                <li>3-5 Participants</li>
              </ul>
            </div>
          </article>
          <article>
            <h3>Interview Guideline</h3>
            <div className="rackeet-research__card-body">
              <p>
                The interview guideline contains questions directed at both
                beginners and trainers, covering motivation, routines, exercise
                activities, needs fulfillment, and expectations.
              </p>
            </div>
          </article>
        </div>
      </div>
      <div className="rackeet-research__insight">
        <div className="rackeet-research__insight-heading">
          <SectionTitle>User Research Insight</SectionTitle>
          <p>
            The interview results were compiled into an affinity diagram to sort
            participants&apos; answers into categories based on their needs
          </p>
        </div>
        <div className="rackeet-research__insight-grid">
          <div className="rackeet-research__insight-row">
            {researchInsights.slice(0, 3).map((insight) => (
              <p key={insight}>{insight}</p>
            ))}
          </div>
          <div className="rackeet-research__insight-row rackeet-research__insight-row--bottom">
            {researchInsights.slice(3).map((insight) => (
              <p key={insight}>{insight}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonaSection() {
  return (
    <section className="rackeet-section rackeet-persona" id="persona">
      <SectionTitle>User Persona</SectionTitle>
      <div className="rackeet-persona__panel">
        <div className="rackeet-persona__top">
          <div className="rackeet-persona__profile">
            <Image
              alt="Rifqi Maulana"
              height={198}
              src={assets.profile}
              width={189}
            />
            <h3>Rifqi Maulana</h3>
            <p>24 Years Old</p>
            <span>Front-End Developer</span>
          </div>
          <figure>
            <Image
              alt="RACKEET user persona profile"
              fill
              sizes="(max-width: 760px) 100vw, 40vw"
              src={assets.persona}
            />
          </figure>
        </div>
        <div className="rackeet-persona__biography">
          <h3>Biography</h3>
          <p>
            Rifqi Maulana is a beginner in racket sports, specifically
            badminton, with less than 1 year of experience. He currently works
            as a Tech office employee in the role of Front-End Developer. Rifqi
            hopes his exercise activities can show progress.
          </p>
        </div>
      </div>
    </section>
  );
}

function EmpathyCard({
  title,
  items,
  tone = "light",
  titleFirst = true,
  horizontal = false,
}: {
  title: string;
  items: string[];
  tone?: "light" | "blue";
  titleFirst?: boolean;
  horizontal?: boolean;
}) {
  return (
    <article
      className={[
        "rackeet-empathy-card",
        ["rackeet-empathy-card--", tone].join(""),
        titleFirst ? "rackeet-empathy-card--title-first" : "",
        horizontal ? "rackeet-empathy-card--horizontal" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {titleFirst && <h3>{title}</h3>}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {!titleFirst && <h3>{title}</h3>}
    </article>
  );
}

function EmpathyMapSection() {
  return (
    <section className="rackeet-section rackeet-empathy" id="empathy-map">
      <div className="rackeet-empathy__backdrop" />
      <SectionTitle>Empathy Map</SectionTitle>
      <div className="rackeet-empathy__rows">
        <div className="rackeet-empathy__row">
          <EmpathyCard
            title="Hear"
            items={quoteItems.hear}
            titleFirst={false}
          />
          <EmpathyCard title="See" items={quoteItems.see} titleFirst={false} />
        </div>
        <div className="rackeet-empathy__row">
          <EmpathyCard title="Say and Do" items={quoteItems.sayAndDo} />
          <EmpathyCard title="Think and Feel" items={quoteItems.thinkAndFeel} />
        </div>
        <div className="rackeet-empathy__row rackeet-empathy__row--blue">
          <EmpathyCard
            horizontal
            title="Pain"
            items={quoteItems.pain}
            tone="blue"
          />
          <EmpathyCard
            horizontal
            title="Gain"
            items={quoteItems.gain}
            tone="blue"
          />
        </div>
      </div>
      <div className="rackeet-empathy__avatar">
        <Image alt="Rifqi Maulana" fill sizes="119px" src={assets.profile} />
      </div>
    </section>
  );
}

function FrameworkJourneySection() {
  return (
    <section className="rackeet-section rackeet-framework" id="jtbd">
      <div className="rackeet-framework__one-liner">
        <SectionTitle>One Liner Framework</SectionTitle>
        <div>
          <p>
            <strong>
              Beginners in racket sports choose not to use a coach&apos;s
              services due to a lack of information and the perception that they
              don&apos;t yet need one; when some do seek a coach&apos;s
              services, it takes a long time to access direct information
              related to cost, schedule, credibility, and other background
              details.
            </strong>{" "}
            <u>
              By providing a digital platform that connects beginner athletes
              with trainers/coaches,
            </u>{" "}
            they can cut down the time spent searching for coach information
            until they find a credible, transparent racket sports trainer who
            fits their schedule allowing them to carry out training safely,
            whether independently or guided, and receive feedback on their
            exercise progress.
          </p>
        </div>
      </div>
      <div className="rackeet-framework__user-journey">
        <div className="rackeet-framework__heading">
          <div className="rackeet-framework__heading-copy">
            <SectionTitle>JTBD Framework</SectionTitle>
            <p>
              The Jobs to Be Done framework used to measure the ultimate goal
              the user wants to achieve.
            </p>
          </div>
          <div className="rackeet-framework__goals">
            <GoalItem number="#1">
              <strong>As a user, I want to </strong>
              get technical exercise guidance and injury prevention tips
              <strong> so that I can </strong>
              make progress and keep exercising safely.
            </GoalItem>
            <GoalItem number="#2">
              <strong>As a user, I want to </strong>
              have a coaching session with a certified trainer
              <strong> so that I can </strong>
              implement the correct exercise techniques.
            </GoalItem>
            <GoalItem number="#3">
              <strong>As a user, I want to </strong>
              know my progress through trainer feedback
              <strong> so that I can </strong>
              evaluate myself in my training.
            </GoalItem>
          </div>
        </div>
        <div className="rackeet-framework__statement">
          <h3>JTBD #1</h3>
          <p>
            <strong>As a user, I want to </strong>
            <span>
              get technical exercise guidance and injury prevention tips{" "}
            </span>
            <strong>so that I can </strong>
            <span>make progress and keep exercising safely.</span>
          </p>
          <figure>
            <Image
              alt="RACKEET JTBD framework graphic"
              fill
              sizes="(max-width: 760px) 100vw, 70vw"
              src={assets.jtbd}
            />
          </figure>
        </div>
        <div className="rackeet-framework__journey">
          <SectionTitle>User Journey Map</SectionTitle>
          <p>Based on JTBD #1</p>
          <figure>
            <Image
              alt="RACKEET user journey map"
              fill
              sizes="(max-width: 760px) 100vw, 90vw"
              src={assets.userJourney}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

function GoalItem({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <article>
      <span>{number}</span>
      <p>{children}</p>
    </article>
  );
}

function CompetitiveAnalysisSection() {
  return (
    <section className="rackeet-section rackeet-competitive" id="competitive">
      <div className="rackeet-competitive__backdrop" />
      <div className="rackeet-competitive__intro">
        <SectionTitle>Competitive Analysis</SectionTitle>
        <p>
          Competitive analysis was conducted to assess the features, strengths,
          and weaknesses of competitors, in order to identify opportunities for
          innovation in the product being designed
        </p>
      </div>
      <figure className="rackeet-competitive__graphic">
        <Image
          alt="RACKEET competitive analysis"
          fill
          sizes="(max-width: 760px) 100vw, 55vw"
          src={assets.competitor}
        />
      </figure>
      <figure className="rackeet-competitive__table">
        <Image
          alt="RACKEET competitor comparison table"
          fill
          sizes="100vw"
          src={assets.competitorTable}
        />
      </figure>
    </section>
  );
}

function InformationArchitectureSection() {
  return (
    <section className="rackeet-section rackeet-architecture" id="architecture">
      <SectionTitle>Information Architecture</SectionTitle>
      <figure>
        <Image
          alt="RACKEET information architecture"
          fill
          sizes="100vw"
          src={assets.informationArchitecture}
        />
      </figure>
    </section>
  );
}

function WireframeSection() {
  return (
    <section className="rackeet-section rackeet-wireframe" id="wireframe">
      <SectionTitle>Wireframe</SectionTitle>
      <figure>
        <Image
          alt="RACKEET wireframes"
          fill
          sizes="100vw"
          src={assets.wireframe}
        />
      </figure>
    </section>
  );
}

function ColorGroup({
  colors,
  title,
  values,
}: {
  colors: readonly string[];
  title: string;
  values: string[];
}) {
  return (
    <div className="rackeet-design-system__color-group">
      <h4>{title}</h4>
      <div className="rackeet-design-system__swatches">
        {colors.map((src, index) => (
          <div key={src}>
            <Image
              alt=""
              aria-hidden="true"
              height={112}
              src={src}
              width={112}
            />
            <span style={{ color: values[index] }}>{values[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DesignSystemSection() {
  return (
    <section
      className="rackeet-section rackeet-design-system"
      id="design-system"
    >
      <SectionTitle>Design System</SectionTitle>
      <div className="rackeet-design-system__typography">
        <div className="rackeet-design-system__label">
          <h3>Typography</h3>
          <div>
            <strong>Inter</strong>
            <span>Aa</span>
          </div>
        </div>
        <div className="rackeet-design-system__type-samples">
          <div className="rackeet-design-system__font-types">
            <div className="rackeet-design-system__weight-row rackeet-design-system__weight-row--wide">
              <div className="rackeet-design-system__font-weight-title rackeet-design-system__font-weight-title--bold">
                <span className="rackeet-design-system__font-name">Inter</span>
                <span className="rackeet-design-system__font-weight-label">
                  ( Bold )
                </span>
              </div>
              <div className="rackeet-design-system__font-weight-title rackeet-design-system__font-weight-title--medium">
                <span className="rackeet-design-system__font-name">Inter</span>
                <span className="rackeet-design-system__font-weight-label">
                  ( Medium )
                </span>
              </div>
            </div>
            <div className="rackeet-design-system__weight-row">
              <div className="rackeet-design-system__font-weight-title rackeet-design-system__font-weight-title--semibold">
                <span className="rackeet-design-system__font-name">Inter</span>
                <span className="rackeet-design-system__font-weight-label">
                  ( SemiBold )
                </span>
              </div>
              <div className="rackeet-design-system__font-weight-title rackeet-design-system__font-weight-title--regular">
                <span className="rackeet-design-system__font-name">Inter</span>
                <span className="rackeet-design-system__font-weight-label">
                  ( Regular )
                </span>
              </div>
            </div>
          </div>
          <p>
            The Inter typeface was chosen for its high legibility, along with
            comfortable letter spacing and x-height for reading.
          </p>
        </div>
      </div>
      <div className="rackeet-design-system__colors">
        <h3>Colors</h3>
        <div className="rackeet-design-system__color-groups">
          <ColorGroup
            colors={assets.colorPrimary}
            title="Primary"
            values={["#1070C8", "#0C5496", "#062746"]}
          />
          <ColorGroup
            colors={assets.colorSecondary}
            title="Secondary"
            values={["#E5FF09", "#ACBF07", "#505903"]}
          />
        </div>
      </div>
    </section>
  );
}

function HighFidelitySection() {
  return (
    <section
      className="rackeet-section rackeet-high-fidelity"
      id="high-fidelity"
    >
      <SectionTitle>High Fidelity</SectionTitle>
      <figure>
        <Image
          alt="RACKEET high fidelity screens"
          fill
          sizes="100vw"
          src={assets.highFidelity}
        />
      </figure>
    </section>
  );
}

function EvaluationSection() {
  return (
    <section className="rackeet-section rackeet-evaluation" id="evaluation">
      <div className="rackeet-evaluation__backdrop" />
      <div>
        <SectionTitle>Key Highlights</SectionTitle>
        <ul>
          <li>
            In-depth research process using 5 Whys Analysis to identify the root
            cause of the problem, rather than only addressing surface-level
            symptoms within the racket sports industry.
          </li>
          <li>
            A JTBD-based User Journey Map that maps out the user experience,
            making the product flow more relevant to real user needs.
          </li>
          <li>
            Competitive Analysis that helped determine RACKEET&apos;s
            positioning among existing racket sports applications.
          </li>
        </ul>
      </div>
      <div>
        <div className="rackeet-evaluation__title">
          <SectionTitle>Evaluation</SectionTitle>
          <p>What I Learned</p>
        </div>
        <ul>
          <li>
            Throughout this design process, I learned that in-depth UX research
            is essential — building the User Journey Map based on the JTBD
            Framework helped me focus more on designing solutions around user
            motivations, giving the following process a solid foundation to
            build on.
          </li>
          <li>
            Given more time and opportunity, I would conduct usability testing
            to directly test the product with real users, in order to uncover
            friction points and measure task success rate.
          </li>
        </ul>
      </div>
    </section>
  );
}

function ConclusionSection() {
  return (
    <section className="rackeet-conclusion">
      <h2>THANK YOU!</h2>
      <div aria-hidden="true" className="rackeet-conclusion__character">
        <Image
          alt=""
          className="rackeet-conclusion__character-default"
          height={180}
          src={assets.thankYou}
          width={242}
        />
        <Image
          alt=""
          className="rackeet-conclusion__character-hover"
          height={180}
          src={assets.thankYouHover}
          width={242}
        />
      </div>
    </section>
  );
}

function OtherProjectCard({
  href,
  image,
  title,
  type,
}: {
  href: string;
  image: string;
  title: string;
  type: string;
}) {
  return (
    <Link
      className="rackeet-other-project portfolio-other-project-card"
      href={href}
    >
      <div className="rackeet-other-project__image">
        <Image alt="" fill sizes="(max-width: 760px) 100vw, 50vw" src={image} />
      </div>
      <div className="rackeet-other-project__meta">
        <div>
          <span>{type}</span>
          <h3>{title}</h3>
        </div>
        <span className="rackeet-other-project__arrow">
          <Iconify
            aria-hidden="true"
            icon="tabler:arrow-up-right"
            width={40}
            height={40}
          />
        </span>
      </div>
    </Link>
  );
}

function OtherProjectsSection() {
  return (
    <section className="rackeet-other-projects">
      <div className="rackeet-other-projects__backdrop" />
      <div className="rackeet-other-projects__heading">
        <h2>Other Projects</h2>
        <p>Here are a few my works I&apos;ve poured my heart into</p>
      </div>
      <div className="rackeet-other-projects__grid">
        <OtherProjectCard
          href="/nyambut-gawe"
          image="/portfolio/rackeet-cta-card-a.png"
          title="Nyambut Gawe"
          type="UI/UX Case Study"
        />
        <OtherProjectCard
          href="/traksi"
          image="/portfolio/rackeet-cta-card-b.png"
          title="TRAKSI"
          type="UI Design"
        />
      </div>
    </section>
  );
}

export default function RackeetCaseStudy() {
  return (
    <div className="rackeet-page" id="top">
      <RackeetNavbar />
      <RackeetHero />
      <div className="rackeet-main">
        <RackeetSideNavigation />
        <main className="rackeet-main__content">
          <OverviewSection />
          <ProblemsSection />
          <DesignProcessSection />
          <ResearchInsightSection />
          <PersonaSection />
          <EmpathyMapSection />
          <FrameworkJourneySection />
          <CompetitiveAnalysisSection />
          <InformationArchitectureSection />
          <WireframeSection />
          <DesignSystemSection />
          <HighFidelitySection />
          <EvaluationSection />
        </main>
      </div>
      <ConclusionSection />
      <OtherProjectsSection />
      <CtaSection />
      <Footer backToTopHref="#top" />
    </div>
  );
}
