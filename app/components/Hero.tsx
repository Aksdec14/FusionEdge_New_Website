"use client";

/**
 * AssetManagementHero — FOUC-free version
 *
 * What changed vs. the original and WHY:
 *
 * 1. Fonts → next/font/google (was: @import inside <style jsx global>)
 *    next/font preloads fonts at build time and injects them in <head>
 *    before the first paint, so there is never a font-swap flash.
 *
 * 2. All CSS → hero.module.css (was: <style jsx global> in the component)
 *    CSS modules are extracted into a static .css file by Next.js and
 *    linked in <head> synchronously. Styles are present before the JS
 *    bundle even executes, eliminating every layout/animation pop.
 *
 * 3. No more <style> tag in this file at all.
 *    The only remaining runtime styling is the font className wiring,
 *    which next/font handles without any flash.
 */

import React from "react";
import Link from "next/link";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import styles from "../styles/hero.module.css";

/* ── Font setup ─────────────────────────────────────────────
   next/font/google downloads + self-hosts the fonts at build
   time. No external request at runtime → no layout shift.     */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",           // still good UX; font is preloaded anyway
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
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Hero() {
  /* Attach CSS-variable classes to the root so the font families
     are available to all descendants via var(--font-dm-sans) etc. */
  const fontVars = `${dmSans.variable} ${dmSerif.variable} ${dmSans.className}`;

  return (
    <div className={fontVars}>
      <section className={styles.heroSection}>

        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.bgVideo}
        >
          <source src="/videos/FusionEdge.mp4" type="video/mp4" />
        </video>

        {/* Left-side dark gradient */}
        <div aria-hidden="true" className={styles.leftGradient} />

        {/* Bottom fade */}
        <div aria-hidden="true" className={styles.bottomFade} />

        {/* Diagonal decorative stripe */}
        <div aria-hidden="true" className={styles.diagonalStripe} />

        {/* Content — animation driven entirely by CSS module */}
        <div className={styles.heroContentAnim}>
          <div className={styles.heroInner}>
            <div className={styles.heroGrid}>

              {/* ── LEFT ── */}
              <div className={styles.heroLeft}>

                {/* Badge */}
                <div className={styles.badge}>
                  <p className={styles.badgeText}>
                    AI-Powered FM-Tech SaaS &nbsp;·&nbsp; Singapore &amp; India
                  </p>
                </div>

                {/* Headline — uses CSS variable for DM Serif Display */}
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

                {/* CTAs */}
                <div className={styles.ctaRow}>
                  <Link href="/platform" className={styles.btnGhost}>
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