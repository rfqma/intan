import Image from "next/image";
import type { ReactNode } from "react";

const assets = {
  footerArrow: "/portfolio/footer-arrow.svg",
  footerRight: "/portfolio/footer-right.svg",
  footerUp: "/portfolio/footer-up.svg",
} as const;

export { default as CtaSection } from "./cta-section";

function ExternalArrow({ className = "" }: { className?: string }) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={className}
      src={assets.footerArrow}
      width={24}
      height={24}
    />
  );
}

function FooterLink({ children, href }: { children: ReactNode; href: string }) {
  return <a href={href}>{children}</a>;
}

export function Footer({
  backToTopHref = "/#home",
}: {
  backToTopHref?: string;
}) {
  return (
    <footer className="portfolio-footer" id="connect">
      <nav aria-label="Footer navigation" className="portfolio-footer__nav">
        <FooterLink href="/#home">Home</FooterLink>
        <FooterLink href="/#about">About Me</FooterLink>
        <FooterLink href="/#work">Work</FooterLink>
      </nav>
      <div className="portfolio-footer__content">
        <div className="portfolio-footer__main">
          <h2>Let&apos;s Connect</h2>
          <div className="portfolio-footer__contact">
            <p>Contact</p>
            <div>
              <a href="mailto:intanraainii28@gmail.com">
                Email
                <span
                  aria-hidden="true"
                  className="portfolio-footer__contact-icon"
                >
                  <ExternalArrow className="portfolio-footer__contact-icon--default" />
                  <Image
                    alt=""
                    className="portfolio-footer__contact-icon--hover"
                    height={24}
                    src={assets.footerRight}
                    width={24}
                  />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/intan-nuraini-91a4b9362/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
                <span
                  aria-hidden="true"
                  className="portfolio-footer__contact-icon"
                >
                  <ExternalArrow className="portfolio-footer__contact-icon--default" />
                  <Image
                    alt=""
                    className="portfolio-footer__contact-icon--hover"
                    height={24}
                    src={assets.footerRight}
                    width={24}
                  />
                </span>
              </a>
              <a
                href="https://www.instagram.com/intanraainii/"
                rel="noreferrer"
                target="_blank"
              >
                Instagram
                <span
                  aria-hidden="true"
                  className="portfolio-footer__contact-icon"
                >
                  <ExternalArrow className="portfolio-footer__contact-icon--default" />
                  <Image
                    alt=""
                    className="portfolio-footer__contact-icon--hover"
                    height={24}
                    src={assets.footerRight}
                    width={24}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-footer__bottom">
          <p>© 2026 Intan Nuraini</p>
          <a href={backToTopHref}>
            Back to Top
            <Image
              alt=""
              aria-hidden="true"
              height={16}
              src={assets.footerUp}
              width={16}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
