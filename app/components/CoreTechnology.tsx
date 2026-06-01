"use client";

import React from "react";

type TechCard = {
    title: string;
    description: string;
    image: string;
    gridColumn: string;
    gridRow: string;
};

const technologies: TechCard[] = [
    {
        title: "AI-Powered Intelligence",
        description:
            "Machine learning and analytics are embedded across all modules — not bolted on. FusionEdge delivers predictive maintenance, anomaly detection, and operational insights as a native capability, not an add-on.",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=700&q=80",
        gridColumn: "1",
        gridRow: "1 / 5",
    },
    {
        title: "Modular Architecture",
        description:
            "Deploy any combination of modules with a shared data layer, unified UX, and seamless cross-module intelligence. Start with what you need. Scale to everything.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
        gridColumn: "2",
        gridRow: "1 / 4",
    },
    {
        title: "Cloud-Native SaaS",
        description:
            "Hosted on AWS with enterprise-grade uptime, automatic updates, and zero infrastructure overhead for your IT team. No servers. No maintenance. No upgrades to manage.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80",
        gridColumn: "3",
        gridRow: "1 / 3",
    },
    {
        title: "Mobile-First Design",
        description:
            "Native Android and iOS apps with full offline capability. Field teams can raise tickets, log readings, complete checklists, and access asset history in any connectivity environment.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80",
        gridColumn: "1",
        gridRow: "5 / 9",
    },
    {
        title: "Enterprise-Grade Security",
        description:
            "256-bit AES encryption, WAF, DDoS protection, two-factor authentication, role-based access control, and a complete audit trail across every module and every transaction.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=700&q=80",
        gridColumn: "2",
        gridRow: "4 / 7",
    },
    {
        title: "QR-Centric Field Operations",
        description:
            "Dynamic QR codes enable scan-to-action across all modules. Raise tickets, log readings, complete checklists, access full asset history — all with a single scan, anywhere on site.",
        image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=700&q=80",
        gridColumn: "3",
        gridRow: "6 / 9",
    },
    {
        title: "Rapid Deployment",
        description:
            "Configurable templates and agile delivery methodology mean you are live fast — not after months of implementation. No disruption to your ongoing FM operations.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80",
        gridColumn: "3",
        gridRow: "3 / 6",
    },
    {
        title: "Open API Architecture",
        description:
            "A comprehensive API framework enables seamless integration with CAFM, ERP, BMS, and any enterprise system in your existing ecosystem. FusionEdge connects to your world.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=700&q=80",
        gridColumn: "2",
        gridRow: "7 / 9",
    },
];

const proofPoints = [
    "Native intelligence.",
    "Unified modules.",
    "Secure operations.",
    "Open ecosystem.",
];

// Brand colors
const BRAND_PURPLE = "#5B2D8E";
const BRAND_MINT = "#7FFFD4";

export default function CoreTechnologySection() {
    return (
        <section className="bg-white text-black">
            <div className="mx-auto w-full max-w-[1370px] px-6 py-16 sm:px-10 lg:px-[72px]">

                {/* ── Desktop: side-by-side ── */}
                <div className="lg:flex lg:items-start lg:gap-10 xl:gap-14">

                    {/* Left column — text content */}
                    <div className="flex-shrink-0 lg:w-[400px] xl:w-[460px] lg:pt-2">

                        {/* Subheading label — #1fa279, font-bold, uppercase, tracking-wide */}
                        <p
                            className="mb-5 text-sm font-bold uppercase tracking-wide"
                            style={{ color: "#1fa279" }}
                        >
                            Core Technology
                        </p>

                        {/* Main heading — dm-serif, font-bold, 3xl→4xl→5xl, #5B2D8E, tracking-tight, leading-tight */}
                        <h2
                            className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                            style={{
                                color: BRAND_PURPLE,
                                fontFamily: "var(--font-dm-serif)",
                            }}
                        >
                            Built Different,
                            <br />
                            By Design
                        </h2>

                        {/* Body copy — #33363c, normal, text-sm→base */}
                        <p className="mt-6 text-sm leading-6 text-[#33363c] md:text-base md:leading-7">
                            Every architectural decision in FusionEdge was made
                            for the realities of enterprise FM — not adapted from
                            a generic enterprise platform. Here is what that
                            means in practice.
                        </p>

                        {/* CTA button — Purple fill */}
                        <button
                            className="mt-7 rounded-full px-6 py-3 text-[15px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 active:translate-y-0"
                            style={{ backgroundColor: BRAND_PURPLE }}
                        >
                            Explore Technology
                        </button>

                        {/* Proof points — #5B2D8E text, #1fa279 arrow */}
                        <div className="mt-10 space-y-4">
                            {proofPoints.map((point) => (
                                <div
                                    key={point}
                                    className="flex items-center gap-3 text-sm font-bold leading-none tracking-wide md:text-base"
                                    style={{ color: BRAND_PURPLE }}
                                >
                                    <span
                                        className="text-[24px] leading-none"
                                        style={{ color: "#1fa279" }}
                                    >
                                        ↗
                                    </span>
                                    <span>{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column — CSS grid mosaic (desktop only) */}
                    <div className="mt-10 hidden flex-1 lg:block">
                        <div
                            className="grid grid-cols-3 gap-3"
                            style={{ gridTemplateRows: "repeat(8, 80px)" }}
                        >
                            {technologies.map((tech) => (
                                <TechTile key={tech.title} {...tech} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Mobile / tablet: stacked card grid ── */}
                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
                    {technologies.map((tech) => (
                        <TechTileMobile
                            key={tech.title}
                            title={tech.title}
                            description={tech.description}
                            image={tech.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Desktop tile ────────────────────────────────────────────────────────────

function TechTile({ title, description, image, gridColumn, gridRow }: TechCard) {
    return (
        <article
            className="group relative overflow-hidden rounded-[17px] bg-neutral-200"
            style={{ gridColumn, gridRow }}
        >
            <img
                src={image}
                alt=""
                className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay — uses brand purple tint */}
            <div
                className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `linear-gradient(to top, ${BRAND_PURPLE}CC 0%, ${BRAND_PURPLE}1A 55%, transparent 100%)`,
                }}
            />
            {/* Text reveal on hover */}
            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-sm font-bold leading-tight tracking-tight">
                    {title}
                </h3>
                <p className="mt-1 text-xs leading-4 text-white/85">
                    {description}
                </p>
            </div>
        </article>
    );
}

// ── Mobile tile ─────────────────────────────────────────────────────────────

type TechTileMobileProps = Omit<TechCard, "gridColumn" | "gridRow">;

function TechTileMobile({ title, description, image }: TechTileMobileProps) {
    return (
        <article className="overflow-hidden rounded-[17px] bg-neutral-200">
            <div className="aspect-[1.12] overflow-hidden">
                <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover grayscale"
                />
            </div>
            {/* Card footer — Purple background */}
            <div className="p-5 text-white" style={{ backgroundColor: BRAND_PURPLE }}>
                <h3 className="text-lg font-bold leading-tight tracking-tight">
                    {title}
                </h3>
                <p className="mt-2 text-sm leading-5 text-white/75">
                    {description}
                </p>
            </div>
        </article>
    );
}