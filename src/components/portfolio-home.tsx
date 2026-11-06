import Image from "next/image";
import Link from "next/link";
import Iconify from "./Iconify";
import { CtaSection, Footer } from "./site-chrome";

const assets = {
  aboutCard: "/portfolio/about-card.png",
  aboutTexture: "/portfolio/about-texture.png",
  experienceCard: "/portfolio/experience-card.png",
  footerRight: "/portfolio/footer-right.svg",
  heroCat: "/portfolio/hero-cat.png",
  heroIcon: "/portfolio/hero-icon.svg",
  nyambutDecoration: "/portfolio/nyambut-decoration.svg",
  nyambutImage: "/portfolio/nyambut-image.png",
  profileCard: "/portfolio/profile-card.png",
  profileHover: "/portfolio/profile-hover.png",
  rackeetDecoration: "/portfolio/rackeet-decoration.svg",
  rackeetImage: "/portfolio/rackeet-image.png",
  toolOne: "/portfolio/tool-1.png",
  toolTwo: "/portfolio/tool-2.png",
  traksiDecoration: "/portfolio/traksi-decoration.svg",
  traksiImage: "/portfolio/traksi-image.png",
  workArrow: "/portfolio/work-arrow.svg",
  workBackground: "/portfolio/work-background.png",
  workIcon: "/portfolio/work-icon.svg",
} as const;

type WorkCardProps = {
  category: string;
  decoration: string;
  description: string;
  href: string;
  image: string;
  number: string;
  title: string;
  tone: "blue" | "green" | "lavender";
};

const workItems: WorkCardProps[] = [
  {
    category: "UI/UX Case Study",
    decoration: assets.nyambutDecoration,
    description:
      "Nyambut Gawe is a digital job portal platform designed specifically for the workforce ecosystem in Belitung Timur",
    href: "/nyambut-gawe",
    image: assets.nyambutImage,
    number: "01",
    title: "Nyambut Gawe Website",
    tone: "lavender",
  },
  {
    category: "UI/UX Case Study",
    decoration: assets.rackeetDecoration,
    description:
      "RACKEET is an integrated digital ecosystem designed specifically to connect, manage, and elevate the racket sports industry",
    href: "/rackeet",
    image: assets.rackeetImage,
    number: "02",
    title: "RACKEET",
    tone: "blue",
  },
  {
    category: "UI Design",
    decoration: assets.traksiDecoration,
    description:
      "TRAKSI is a digital platform designed for an environmental NGO focused on combating illegal deforestation and industrial oil palm",
    href: "/traksi",
    image: assets.traksiImage,
    number: "03",
    title: "TRAKSI Landing Page",
    tone: "green",
  },
];

function Navbar() {
  return (
    <header className="portfolio-navbar">
      <Link className="portfolio-navbar__brand" href="/">
        INTAN NURAINI
      </Link>
      <nav aria-label="Primary navigation" className="portfolio-navbar__links">
        <a href="#about">About Me</a>
        <a href="#work">Work</a>
        <a href="#connect">Connect</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section aria-labelledby="portfolio-heading" className="portfolio-hero">
      <div className="portfolio-hero__cover">
        <p className="portfolio-hero__discipline">(ui/ux design)</p>
        <div className="portfolio-hero__name">Intan</div>
        <p className="portfolio-hero__wordmark" id="portfolio-heading">
          <span className="portfolio-hero__script">P</span>
          <span>ort</span>
          <span className="portfolio-hero__script">f</span>
          <span>ol</span>
          <span className="portfolio-hero__accent">io</span>
        </p>
        <div className="portfolio-hero__date">
          <span>2026</span>
        </div>
        <Image
          alt=""
          aria-hidden="true"
          className="portfolio-hero__icon"
          src={assets.heroIcon}
          width={88}
          height={91}
        />
      </div>
      <div className="portfolio-hero__image">
        <Image
          alt="Illustrated cat in the portfolio hero"
          fill
          loading="eager"
          sizes="(max-width: 760px) 100vw, 534px"
          src={assets.heroCat}
        />
      </div>
    </section>
  );
}

function AboutTab({
  image,
  label,
  variant,
}: {
  image: string;
  label: React.ReactNode;
  variant: "experience" | "profile";
}) {
  return (
    <div className={`about-tab about-tab--${variant}`}>
      <div className="about-tab__tint" />
      <Image
        alt=""
        aria-hidden="true"
        className="about-tab__image"
        src={image}
        width={315}
        height={1080}
      />
      <div className="about-tab__label-frame">
        <div className="about-tab__label-rotated">
          <p className="about-tab__label">{label}</p>
        </div>
      </div>
      {variant === "experience" && (
        <div className="about-tab__experience-content">
          <div className="about-tab__experience-section">
            <p className="about-tab__experience-heading about-tab__experience-heading--primary">
              EXPERIENCE
            </p>
            <div className="about-tab__experience-details">
              <p className="about-tab__experience-company">Techave</p>
              <p className="about-tab__experience-role">UI/UX Designer</p>
              <p className="about-tab__experience-date">
                July 2026 - Now (Internship)
              </p>
            </div>
          </div>
          <div className="about-tab__experience-section">
            <p className="about-tab__experience-heading">LEARNING</p>
            <div className="about-tab__experience-details">
              <p className="about-tab__experience-company">SanberCode</p>
              <p className="about-tab__experience-role">UI/UX Designer</p>
              <p className="about-tab__experience-date">
                January - February 2026
              </p>
              <p className="about-tab__experience-score">
                &gt; 85 (has mastered)
              </p>
            </div>
          </div>
          <div className="about-tab__experience-section">
            <p className="about-tab__experience-heading">EDUCATION</p>
            <div className="about-tab__experience-details about-tab__experience-details--education">
              <p className="about-tab__experience-company">Special Education</p>
              <p className="about-tab__experience-role">
                Yogyakarta State University
              </p>
              <p className="about-tab__experience-date">2020 - 2024</p>
              <p className="about-tab__experience-score">IPK 3.71 / 4.00</p>
            </div>
          </div>
        </div>
      )}
      {variant === "profile" && (
        <div className="about-tab__profile-content">
          <Image
            alt=""
            aria-hidden="true"
            height={625}
            src={assets.profileHover}
            width={557}
          />
        </div>
      )}
    </div>
  );
}

function AboutPanel() {
  return (
    <div className="about-panel">
      <div className="about-tabs">
        <div className="about-tab about-tab--active">
          <Image
            alt=""
            aria-hidden="true"
            className="about-tab__image"
            src={assets.aboutCard}
            width={314}
            height={1077}
          />
          <div className="about-tab__active-content">
            <div>
              <p className="about-tab__active-title">Hi. I am Intan Nuraini</p>
              <div className="about-tab__active-description">
                <p>
                  Entry level UI/UX Designer focused on accessible and
                  functional design.
                </p>
                <p>
                  Transitioned into tech to build meaningful user experiences.
                </p>
              </div>
            </div>
            <div className="about-tab__tools">
              <span>Tools</span>
              <div>
                <div className="about-tab__tool-icon about-tab__tool-icon--figma">
                  <Image
                    alt="Figma"
                    height={32}
                    src={assets.toolOne}
                    width={32}
                  />
                </div>
                <div className="about-tab__tool-icon about-tab__tool-icon--framer">
                  <Image
                    alt="Notion"
                    height={32}
                    src={assets.toolTwo}
                    width={32}
                  />
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="about-tab__collapsed-labels">
            <div className="about-tab__collapsed-label-frame about-tab__collapsed-label-frame--about">
              <div className="about-tab__label-rotated">
                <p className="about-tab__label">
                  <span className="portfolio-script">About</span> Me
                </p>
              </div>
            </div>
            <div className="about-tab__collapsed-label-frame about-tab__collapsed-label-frame--year">
              <div className="about-tab__label-rotated">
                <p className="about-tab__label">2026</p>
              </div>
            </div>
          </div>
        </div>
        <AboutTab
          image={assets.experienceCard}
          label="Experience"
          variant="experience"
        />
        <AboutTab
          image={assets.profileCard}
          label={
            <>
              <span className="portfolio-script">My</span> Profile
            </>
          }
          variant="profile"
        />
      </div>

      <div className="about-feature">
        <div aria-hidden="true" className="about-feature__background">
          <div className="about-feature__gradient" />
          <div className="about-feature__texture-layer">
            <Image
              alt=""
              aria-hidden="true"
              className="about-feature__texture"
              src={assets.aboutTexture}
              width={1920}
              height={1080}
            />
          </div>
        </div>
        <div className="about-feature__copy">
          <p className="about-feature__title">Stil learning, still building</p>
          <div className="about-feature__actions">
            <a className="about-feature__outline-button" href="#work">
              View My Works
            </a>
            <a
              className="about-feature__filled-button"
              href="mailto:intanraainii28@gmail.com"
            >
              Let&apos;s Talk
              <Image
                alt=""
                aria-hidden="true"
                height={24}
                src={assets.footerRight}
                width={24}
              />
            </a>
          </div>
        </div>
        <div className="about-feature__social">
          <p>Find me on</p>
          <div>
            <a
              href="https://www.linkedin.com/in/intan-nuraini-91a4b9362/"
              rel="noreferrer"
              target="_blank"
            >
              <Iconify
                aria-hidden="true"
                icon="tabler:brand-linkedin"
                width={24}
                height={24}
              />
              in/intan-nuraini
            </a>
            <a
              href="https://www.instagram.com/intanraainii/"
              rel="noreferrer"
              target="_blank"
            >
              <Iconify
                aria-hidden="true"
                icon="tabler:brand-instagram"
                width={24}
                height={24}
              />
              intanraainii
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="portfolio-about"
      id="about"
    >
      <div
        aria-hidden="true"
        className="portfolio-about__background"
        data-name="Background Shape"
        data-node-id="129:1423"
      />
      <h2 className="sr-only" id="about-title">
        About Me
      </h2>
      <AboutPanel />
    </section>
  );
}

function WorkCard({
  category,
  decoration,
  description,
  href,
  image,
  number,
  title,
  tone,
}: WorkCardProps) {
  const gradientByTone = {
    blue: "linear-gradient(304.707deg, #3a536a 0%, #7b9cbb 100%)",
    green: "linear-gradient(304.339deg, #3b5346 0%, #63987b 100%)",
    lavender: "linear-gradient(125.337deg, #ced7ff 0%, #7783bd 97.89%)",
  };

  const decorationImage = (
    <Image
      alt=""
      aria-hidden="true"
      className="work-card__decoration"
      src={decoration}
      width={114}
      height={77}
    />
  );

  return (
    <Link className={`work-card work-card--${tone}`} href={href}>
      <div className="work-card__image">
        <Image
          alt={`${title} preview`}
          fill
          sizes="(max-width: 760px) calc(100vw - 32px), 436px"
          src={image}
        />
      </div>
      <div
        className="work-card__body"
        style={{ backgroundImage: gradientByTone[tone] }}
      >
        <p className="work-card__category">{category}</p>
        <div className="work-card__copy">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <p className="work-card__number">{number}</p>
        {tone !== "blue" && decorationImage}
      </div>
      {tone === "blue" && decorationImage}
    </Link>
  );
}

function WorkSection() {
  return (
    <section aria-labelledby="work-title" className="portfolio-work" id="work">
      <Image
        alt=""
        aria-hidden="true"
        className="portfolio-work__background"
        src={assets.workBackground}
        width={2880}
        height={1620}
      />
      <div
        className="portfolio-work__heading"
        data-name="Work Description Container"
        data-node-id="131:1486"
      >
        <div data-name="Work Title Container" data-node-id="42:5001">
          <span>Selected Work</span>
        </div>
        <Image
          alt=""
          aria-hidden="true"
          data-name="Arrow Triangle"
          data-node-id="42:4999"
          height={40}
          src={assets.workArrow}
          width={40}
        />
      </div>
      <Image
        alt=""
        aria-hidden="true"
        className="portfolio-work__icon"
        src={assets.workIcon}
        width={53}
        height={86}
      />
      <h2 className="sr-only" id="work-title">
        Selected Work
      </h2>
      <div className="portfolio-work__cards-scroll">
        <div className="portfolio-work__cards">
          {workItems.map((work) => (
            <WorkCard key={work.number} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PortfolioHome() {
  return (
    <div className="portfolio-page" id="home">
      <Navbar />
      <Hero />
      <AboutSection />
      <WorkSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
