"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tiers = [
    {
        tier: "TIER 1",
        title: "Enablement",
        subtitle: "Establish your digital data layer",
        description:
            "Asset registers, checklists, meter readings, and core operational workflows. This is the foundation everything else builds on.",
        modules: ["Digital Asset Register", "Digital Checklists", "Meter Readings & Logs", "DMR Report"],
    },
    {
        tier: "TIER 2",
        title: "Optimisation",
        subtitle: "Activate structured operational excellence",
        description:
            "Maintenance scheduling, service ticketing, compliance tracking, and people management for consistent, measurable FM performance.",
        modules: ["Preventive Maintenance", "Smart Ticketing", "Compliance Module", "Visitor & Attendance Management"],
    },
    {
        tier: "TIER 3",
        title: "Transformation",
        subtitle: "Unlock strategic advantage",
        description:
            "ESG reporting, AI-powered insights, and executive dashboards that drive cost savings, sustainability outcomes, and data-driven leadership decisions.",
        modules: ["CXO Dashboard & AI Analytics", "ESG Data Collection", "Predictive Maintenance", "Custom KPI Dashboards"],
    },
];

export default function ProgressionSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const prev = () => setActiveIndex((i) => (i === 0 ? tiers.length - 1 : i - 1));
    const next = () => setActiveIndex((i) => (i + 1) % tiers.length);

    return (
        <section
            className="bg-white py-16 md:py-24"
            style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
        >
            <div className="mx-auto max-w-9xl px-6 md:px-10 lg:px-[72px]">

                {/* Header row */}
                <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-lg">
                        <p
                            className="mb-3 text-sm font-bold uppercase tracking-wide"
                            style={{ color: "#1fa279" }}
                        >
                            Progressive Transformation
                        </p>
                        <h2
                            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                            style={{
                                color: "#5B2D8E",
                                fontFamily: "var(--font-dm-serif, 'DM Serif Display', serif)",
                            }}
                        >
                            Start Where You Are. Scale to Where You Need to Be.
                        </h2>
                        <p className="mt-4 text-sm leading-6 text-[#33363c] md:text-base md:leading-7">
                            Deploy the capabilities that solve your most pressing challenges today
                            and expand seamlessly as your digital FM journey matures.
                        </p>
                    </div>

                    {/* Nav arrows — mobile only */}
                    <div className="flex items-center gap-2 shrink-0 lg:hidden">
                        <button
                            onClick={prev}
                            aria-label="Previous"
                            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5"
                            style={{ borderColor: "#5B2D8E", color: "#5B2D8E" }}
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next"
                            className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5"
                            style={{ backgroundColor: "#5B2D8E", color: "#fff" }}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Cards — desktop: all 3 visible | mobile: carousel */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                    {tiers.map((t, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <article
                                key={index}
                                className={`flex-col rounded-2xl p-7 transition-all duration-300 sm:p-8 lg:flex ${isActive ? "flex" : "hidden lg:flex"
                                    }`}
                                style={{
                                    backgroundColor: isActive ? "#5B2D8E" : "#F7F8FA",
                                    boxShadow: isActive
                                        ? "0 8px 32px rgba(91,45,142,0.18)"
                                        : "0 1px 4px rgba(0,0,0,0.06)",
                                }}
                            >
                                {/* Tier badge */}
                                <div className="mb-6">
                                    <span
                                        className="rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wider"
                                        style={{
                                            backgroundColor: isActive
                                                ? "rgba(127,255,212,0.18)"
                                                : "rgba(91,45,142,0.10)",
                                            color: isActive ? "#7FFFD4" : "#5B2D8E",
                                            border: `1.5px solid ${isActive ? "rgba(127,255,212,0.4)" : "rgba(91,45,142,0.2)"}`,
                                        }}
                                    >
                                        {t.tier}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-2xl font-bold leading-tight tracking-tight"
                                    style={{
                                        color: isActive ? "#fff" : "#202126",
                                        fontFamily: "var(--font-dm-serif, 'DM Serif Display', serif)",
                                    }}
                                >
                                    {t.title}
                                </h3>

                                {/* Subtitle */}
                                <p
                                    className="mt-1 text-sm font-semibold"
                                    style={{ color: isActive ? "#7FFFD4" : "#1fa279" }}
                                >
                                    {t.subtitle}
                                </p>

                                {/* Description */}
                                <p
                                    className="mt-4 flex-1 text-sm leading-6 md:text-base md:leading-7"
                                    style={{ color: isActive ? "rgba(255,255,255,0.85)" : "#33363c" }}
                                >
                                    {t.description}
                                </p>

                                {/* Divider */}
                                <div
                                    className="my-6 h-px w-full"
                                    style={{
                                        backgroundColor: isActive
                                            ? "rgba(127,255,212,0.25)"
                                            : "rgba(91,45,142,0.12)",
                                    }}
                                />

                                {/* Module tags */}
                                <ul className="flex flex-wrap gap-2">
                                    {t.modules.map((m, i) => (
                                        <li
                                            key={i}
                                            className="rounded-full px-3 py-1 text-xs font-medium"
                                            style={{
                                                backgroundColor: isActive
                                                    ? "rgba(127,255,212,0.12)"
                                                    : "rgba(91,45,142,0.08)",
                                                color: isActive ? "rgba(255,255,255,0.80)" : "#5B2D8E",
                                                border: `1px solid ${isActive ? "rgba(127,255,212,0.25)" : "rgba(91,45,142,0.15)"}`,
                                            }}
                                        >
                                            {m}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>

                {/* Dot indicators — mobile only */}
                <div className="mt-8 flex items-center justify-center gap-2 lg:hidden">
                    {tiers.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Go to tier ${i + 1}`}
                            className="h-1.5 rounded-full transition-all duration-300"
                            style={{
                                width: activeIndex === i ? "2rem" : "0.5rem",
                                backgroundColor:
                                    activeIndex === i ? "#5B2D8E" : "rgba(91,45,142,0.20)",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}