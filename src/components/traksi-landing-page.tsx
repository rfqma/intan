import Image from "next/image";
import Link from "next/link";
import Iconify from "./Iconify";
import { CtaSection, Footer } from "./site-chrome";

const assets = {
  about: "/portfolio/traksi-about.png",
  design: "/portfolio/traksi-design.png",
  hero: "/portfolio/traksi-hero.png",
  icon: "/portfolio/traksi-icon.svg",
  otherProjects: "/portfolio/traksi-other-projects.png",
  projectNyambut: "/portfolio/traksi-other-nyambut.png",
  projectRackeet: "/portfolio/traksi-project-rackeet.png",
  thankYou: "/portfolio/traksi-thankyou.svg",
  thankYouHover: "/portfolio/traksi-thank-you-hover.svg",
} as const;

const menuItems = [
  ["about", "01", "About TRAKSI"],
  ["design", "02", "High Fidelity & Key Highlight"],
] as const;

const facts = [
  ["ROLE", "UI Designer"],
  ["PLATFORM", "Website"],
  ["FOCUS", "Non government organization"],
  ["DELIVERABLES", "UI design, prototype"],
] as const;

function TraksiNavbar() {
  return (
    <header className="portfolio-navbar traksi-navbar">
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

function TraksiHero() {
  return (
    <section aria-labelledby="traksi-hero-title" className="traksi-hero">
      <div className="traksi-hero__header">
        <div className="traksi-hero__badge">
          <Image
            alt="TRAKSI"
            height={93}
            priority
            src={assets.icon}
            width={93}
          />
          <span>03</span>
        </div>
        <div className="traksi-hero__heading">
          <p>UI Design</p>
          <h1 id="traksi-hero-title">Landing Page</h1>
        </div>
      </div>
      <div className="traksi-hero__image">
        <Image
          alt="TRAKSI landing page shown on desktop and mobile screens"
          fill
          priority
          sizes="100vw"
          src={assets.hero}
        />
      </div>
    </section>
  );
}

function TraksiSideNavigation() {
  return (
    <aside className="traksi-side-nav">
      <div className="traksi-side-nav__intro">
        <p>TRAKSI</p>
        <h2>A quick look at the process</h2>
      </div>
      <nav
        aria-label="TRAKSI project sections"
        className="traksi-side-nav__menu"
      >
        <p>MENU</p>
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

function TraksiAboutSection() {
  return (
    <section
      aria-labelledby="traksi-about-title"
      className="traksi-about"
      id="about"
    >
      <div aria-hidden="true" className="traksi-about__backdrop">
        <Image
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, 1026px"
          src={assets.about}
        />
      </div>
      <div className="traksi-about__copy">
        <h2 id="traksi-about-title">About</h2>
        <p>
          TRAKSI is a digital platform designed for an environmental NGO focused
          on combating illegal deforestation and industrial oil palm expansion
          in Indonesia.
        </p>
      </div>
      <dl className="traksi-about__facts">
        {facts.map(([label, value]) => (
          <div className="traksi-about__fact" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function TraksiDesignSection() {
  return (
    <section
      aria-label="TRAKSI high fidelity and key highlights"
      className="traksi-design"
      id="design"
    >
      <Image
        alt="Annotated TRAKSI landing page design and key highlights"
        fill
        sizes="(max-width: 760px) 100vw, 1026px"
        src={assets.design}
      />
    </section>
  );
}

function TraksiConclusion() {
  return (
    <section aria-labelledby="traksi-thank-you" className="traksi-conclusion">
      <h2 id="traksi-thank-you">THANK YOU!</h2>
      <div aria-hidden="true" className="traksi-conclusion__character">
        <Image
          alt=""
          className="traksi-conclusion__character-default"
          height={178}
          src={assets.thankYou}
          width={240}
        />
        <Image
          alt=""
          className="traksi-conclusion__character-hover"
          height={178}
          src={assets.thankYouHover}
          width={240}
        />
      </div>
    </section>
  );
}

function ProjectCard({
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
      className="traksi-project-card portfolio-other-project-card"
      href={href}
    >
      <div className="traksi-project-card__image">
        <Image
          alt={`${title} project preview`}
          fill
          sizes="347px"
          src={image}
        />
      </div>
      <div className="traksi-project-card__details">
        <div className="traksi-project-card__copy">
          <p>{type}</p>
          <h3>{title}</h3>
        </div>
        <div className="traksi-project-card__arrow-button">
          <Iconify
            aria-hidden="true"
            icon="tabler:arrow-up-right"
            className="traksi-project-card__arrow"
            width={40}
            height={40}
            strokeWidth={2}
          />
        </div>
      </div>
    </Link>
  );
}

function TraksiOtherProjects() {
  return (
    <section className="traksi-other-projects">
      <div aria-hidden="true" className="traksi-other-projects__backdrop">
        <Image alt="" fill sizes="100vw" src={assets.otherProjects} />
      </div>
      <div className="traksi-other-projects__header">
        <h2>Other Projects</h2>
        <p>Here are a few my works I&apos;ve poured my heart into</p>
      </div>
      <div className="traksi-other-projects__cards">
        <ProjectCard
          href="/nyambut-gawe"
          image={assets.projectNyambut}
          title="Nyambut Gawe"
          type="UI/UX Case Study"
        />
        <ProjectCard
          href="/rackeet"
          image={assets.projectRackeet}
          title="RACKEET"
          type="UI/UX Case Study"
        />
      </div>
    </section>
  );
}

export default function TraksiLandingPage() {
  return (
    <div className="traksi-page" id="top">
      <TraksiNavbar />
      <TraksiHero />
      <div className="traksi-main">
        <TraksiSideNavigation />
        <div className="traksi-main__content">
          <TraksiAboutSection />
          <TraksiDesignSection />
        </div>
      </div>
      <TraksiConclusion />
      <TraksiOtherProjects />
      <CtaSection />
      <Footer backToTopHref="#top" />
    </div>
  );
}
