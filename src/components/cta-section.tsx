"use client";

import Image from "next/image";
import { useState } from "react";
import Iconify from "./Iconify";

const assets = {
  ctaArrow: "/portfolio/cta-arrow.svg",
  ctaUnion: "/portfolio/cta-union.svg",
  ctaUnionOpen: "/portfolio/cta-union-open.svg",
} as const;

export default function CtaSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={`portfolio-cta${isOpen ? " portfolio-cta--open" : ""}`}>
      <div className="portfolio-cta__shell">
        <Image
          alt=""
          aria-hidden="true"
          className="portfolio-cta__union portfolio-cta__union--default"
          fill
          src={assets.ctaUnion}
          sizes="(max-width: 1296px) 100vw, 1296px"
        />
        <Image
          alt=""
          aria-hidden="true"
          className="portfolio-cta__union portfolio-cta__union--open"
          fill
          src={assets.ctaUnionOpen}
          sizes="(max-width: 1296px) 100vw, 1296px"
        />

        <div className="portfolio-cta__actions">
          <a
            className="portfolio-cta__action portfolio-cta__action--connect"
            href="https://www.linkedin.com/in/intan-nuraini-91a4b9362/"
            rel="noreferrer"
            target="_blank"
          >
            <span>Connect</span>
            <Iconify aria-hidden="true" icon="tabler:chevron-right" />
          </a>
          <a
            className="portfolio-cta__action portfolio-cta__action--message"
            href="mailto:intanraainii28@gmail.com"
          >
            <Iconify aria-hidden="true" icon="tabler:mail" />
            <span>Send Me a Message</span>
          </a>
        </div>

        <button
          aria-expanded={isOpen}
          aria-hidden={isOpen}
          aria-label="Open contact actions"
          className="portfolio-cta__button"
          onClick={() => setIsOpen(true)}
          tabIndex={isOpen ? -1 : 0}
          type="button"
        >
          <Image
            alt=""
            aria-hidden="true"
            height={24}
            src={assets.ctaArrow}
            width={24}
          />
          <Image
            alt=""
            aria-hidden="true"
            className="portfolio-cta__button-icon--after-delay"
            height={24}
            src={assets.ctaArrow}
            width={24}
          />
        </button>
      </div>
      <div className="portfolio-cta__copy">
        <p>Let’s Work Together</p>
        <span>
          Have a project in mind or just want to say hi? I&apos;d love to hear
          from you
        </span>
      </div>
    </section>
  );
}
