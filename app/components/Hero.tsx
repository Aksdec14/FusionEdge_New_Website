"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import styles from "../styles/hero.module.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-serif",
});

const FEATURES = [
  { title: "Every FM Function Covered", desc: "Asset to ESG — nothing missing" },
  { title: "One Unified Platform", desc: "No silos. No parallel tools." },
  { title: "Live Fast, Without Disruption", desc: "Rapid go-live. Zero downtime." },
  { title: "Enterprise-Grade Reliability", desc: "Built for scale and always on." },
];

function ArrowIcon() {
  return (
    <svg
      width="15" height="15" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Hero() {
  const fontVars = `${dmSans.variable} ${dmSerif.variable} ${dmSans.className}`;

  return (
    <div className={fontVars}>
      <section className={styles.heroSection}>

        {/* Background video — desktop only */}
        <video autoPlay muted loop playsInline className={styles.bgVideo}>
          <source src="/videos/FusionEdge.mp4" type="video/mp4" />
        </video>

        {/* Background image — mobile only (replaces video on small screens)
            • fill      → stretches to the nearest positioned ancestor (the
                          section, which is position:relative), matching the
                          same inset:0 / width+height:100% behaviour the old
                          <img> had.
            • priority  → disables lazy-loading so the image is fetched
                          immediately, preventing a blank background flash on
                          first paint on mobile.
            • quality   → 85 is the Next.js default; lower if the image is
                          very large and you want faster mobile loads.        */}
        <Image
          src="/city-bg.png"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className={styles.bgImage}
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />

        {/* Left-side dark gradient */}
        <div aria-hidden="true" className={styles.leftGradient} />

        {/* Bottom fade */}
        <div aria-hidden="true" className={styles.bottomFade} />

        {/* Diagonal decorative stripe */}
        <div aria-hidden="true" className={styles.diagonalStripe} />

        {/* Content */}
        <div className={styles.heroContentAnim}>
          <div className={styles.heroInner}>
            <div className={styles.heroGrid}>

              {/* ── LEFT ── */}
              <div className={styles.heroLeft}>

                <div className={styles.badge}>
                  <p className={styles.badgeText}>
                    AI-Powered FM-Tech SaaS &nbsp;·&nbsp; Singapore &amp; India
                  </p>
                </div>

                <h1 className={styles.headline}>
                  Intelligent Facility
                  <br />
                  Management —
                  <br />
                  <span className={styles.accentText}>Reimagined.</span>
                </h1>

                <p className={styles.descPrimary}>
                  Every FM function you need — in one platform. From asset lifecycle to
                  ESG reporting — fully covered.{" "}
                  <strong className={styles.descStrong}>
                    One platform. Zero operational gaps.
                  </strong>
                </p>
                <p className={styles.descSecondary}>
                  Purpose-built for enterprise facility operations. Cloud-native.
                  Mobile-first. AI-powered. Deployed fast — without disrupting live
                  operations.
                </p>
                <p className={styles.descTertiary}>
                  Live fast. No disruption to operations. No infrastructure overhead.
                </p>

                <div className={styles.ctaRow}>
                  <Link href="/about" className={styles.btnGhost}>
                    Explore the Platform <ArrowIcon />
                  </Link>
                  <Link href="/request-demo" className={styles.btnPrimary}>
                    Request a Demo
                  </Link>
                </div>
              </div>

              {/* ── RIGHT: feature cards ── */}
              <div className={styles.heroCards}>
                {FEATURES.map((f, i) => (
                  <div
                    key={f.title}
                    className={`${styles.featureCard} ${styles[`featureCard${i}`]}`}
                  >
                    <div className={styles.featureCardHeader}>
                      <span className={styles.featureDot} />
                      <p className={styles.featureTitle}>{f.title}</p>
                    </div>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}