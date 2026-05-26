"use client";

import { useState } from "react";
import {
    BarChart3,
    Building2,
    ClipboardCheck,
    ShieldCheck,
    TicketCheck,
    Users,
    FileCheck,
    Leaf,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

const modules = [
    {
        id: "cxo",
        label: "CXO",
        title: "CXO Dashboard",
        tagline: "Real-time portfolio intelligence for leadership",
        description:
            "Your command centre for enterprise FM. The CXO Dashboard aggregates live KPIs from every module and every site into a single, configurable view — eliminating information silos and giving leadership instant visibility without manual data gathering.",
        features: [
            "Portfolio-wide KPIs across all sites and modules",
            "Multi-site performance on a single command centre",
            "Configurable widgets for maintenance, compliance, ticketing, and ESG",
            "Real-time alerts, escalations, and exception notifications",
            "Export-ready reports in PDF and Excel",
        ],
        benefits: [
            "Eliminates information silos for leadership",
            "Data-driven decisions without manual aggregation",
            "Reduces time to insight from days to seconds",
        ],
        bg: "#0F0A1E",
        gradientFrom: "#1A0F3C",
        gradientTo: "#0A0618",
        accent: "#5B2D8E",
        accentLight: "#A07CC5",
        accentGlow: "rgba(91,45,142,0.15)",
        Icon: BarChart3,
    },
    {
        id: "dar",
        label: "DAR",
        title: "Digital Asset Register",
        tagline: "Complete living inventory of every asset, every site",
        description:
            "A centralised, always-accurate record of every asset across your portfolio. QR-tagged, document-linked, and lifecycle-tracked — the Digital Asset Register is the data foundation every other FusionEdge module builds on.",
        features: [
            "Comprehensive asset profiles with full lifecycle data",
            "QR Code tagging for rapid scan-to-action in the field",
            "Hierarchical asset grouping by type, building, and zone",
            "Document attachments: invoices, manuals, warranties",
            "Multi-site centralised and site-level views",
        ],
        benefits: [
            "Eliminates fragmented spreadsheets and paper registers",
            "Complete lifecycle visibility from acquisition to disposal",
            "Data foundation for PPM, ticketing, compliance, and ESG",
        ],
        bg: "#061714",
        gradientFrom: "#0A2420",
        gradientTo: "#040E0C",
        accent: "#10B981",
        accentLight: "#6EE7B7",
        accentGlow: "rgba(16,185,129,0.25)",
        Icon: Building2,
    },
    {
        id: "ppm",
        label: "PPM",
        title: "Preventive Maintenance",
        tagline: "Schedule-driven maintenance for maximum asset reliability",
        description:
            "Move from reactive firefighting to structured, schedule-driven maintenance. FusionEdge PPM generates tasks automatically, assigns them to technicians, and tracks compliance in real time — with a full audit trail for every activity.",
        features: [
            "Configurable PPM schedules by time, usage, or condition",
            "Asset-linked maintenance calendars with SLA tracking",
            "Automated task generation with technician assignment",
            "Mobile step-by-step procedures with cost capture",
            "PPM compliance dashboards with overdue escalation",
        ],
        benefits: [
            "Reduces unplanned breakdowns through structured scheduling",
            "Extends asset life and optimises maintenance spend",
            "Demonstrates compliance with timestamped, auditable records",
        ],
        bg: "#0E0A00",
        gradientFrom: "#1C1500",
        gradientTo: "#080600",
        accent: "#F59E0B",
        accentLight: "#FCD34D",
        accentGlow: "rgba(245,158,11,0.25)",
        Icon: ClipboardCheck,
    },
    {
        id: "tkt",
        label: "TKT",
        title: "Smart Ticketing",
        tagline: "End-to-end service request management with SLA accountability",
        description:
            "Transform ad-hoc service requests into fully managed, SLA-tracked workflows. Tenants, occupants, and staff can raise tickets via app, web portal, or QR scan — and every request is automatically assigned, escalated, and resolved with a full audit trail.",
        features: [
            "Multi-channel ticket creation: app, web, QR scan",
            "Configurable SLA matrices by category, priority, and site",
            "Automated assignment, escalation, and notifications",
            "Technician job management with resolution documentation",
            "SLA compliance dashboards with client-ready reporting",
        ],
        benefits: [
            "Transforms ad-hoc requests into managed, accountable workflows",
            "Complete audit trail for every service event",
            "SLA performance reporting for contract management",
        ],
        bg: "#000D1F",
        gradientFrom: "#001535",
        gradientTo: "#00070F",
        accent: "#3B82F6",
        accentLight: "#93C5FD",
        accentGlow: "rgba(59,130,246,0.25)",
        Icon: TicketCheck,
    },
    {
        id: "wrk",
        label: "WRK",
        title: "Digital Work Permit",
        tagline: "Structured safety authorisation for high-risk activities",
        description:
            "Eliminate safety compliance gaps in high-risk work with structured, digitised permit workflows. Every work authorisation is documented, approved through a multi-tier sign-off chain, and instantly retrievable for regulatory requirements.",
        features: [
            "Configurable permit templates by work type",
            "Risk assessment with hazard and control documentation",
            "Multi-tier digital approval workflow with sign-off chain",
            "Permit validity management with auto-expiry workflows",
            "Instantly retrievable compliance documentation",
        ],
        benefits: [
            "Eliminates safety compliance gaps in high-risk work",
            "Complete permit records for regulatory requirements",
            "Reduces liability through structured risk authorisation",
        ],
        bg: "#120400",
        gradientFrom: "#200800",
        gradientTo: "#080200",
        accent: "#EF4444",
        accentLight: "#FCA5A5",
        accentGlow: "rgba(239,68,68,0.25)",
        Icon: FileCheck,
    },
    {
        id: "vms",
        label: "VMS",
        title: "Visitor Management",
        tagline: "Professional, secure visitor experience — end to end",
        description:
            "Replace paper registers and manual sign-in processes with a digitised, professional visitor journey. From pre-registration and host approval to badge generation, check-in, and emergency evacuation lists — every visitor interaction is logged and traceable.",
        features: [
            "Pre-registration with host notification and approval workflow",
            "Visitor badge generation and digital check-in",
            "Comprehensive visitor log with time-stamped audit trail",
            "Emergency evacuation visitor list integration",
        ],
        benefits: [
            "Eliminates paper registers and associated security risks",
            "Creates professional, branded first impressions for clients",
            "Complete visitor records for emergency response",
        ],
        bg: "#0A0812",
        gradientFrom: "#140F1E",
        gradientTo: "#050408",
        accent: "#EC4899",
        accentLight: "#F9A8D4",
        accentGlow: "rgba(236,72,153,0.25)",
        Icon: Users,
    },
    {
        id: "cmp",
        label: "CMP",
        title: "Compliance Module",
        tagline: "Proactive statutory and regulatory compliance tracking",
        description:
            "Never miss a licence renewal, inspection deadline, or statutory obligation. The Compliance Module maps every regulatory requirement by site, sends advance alerts before due dates, and maintains a complete document repository — making audit preparation effortless.",
        features: [
            "Compliance register mapped to regulations by site",
            "Renewal and inspection due-date tracking with advance alerts",
            "Document repository for certificates, licences, and permits",
            "Status dashboards by site, category, and responsible owner",
            "Configurable overdue escalation notifications",
        ],
        benefits: [
            "Prevents compliance lapses through advance alerts",
            "Single source of truth for all regulatory obligations",
            "Reduces audit preparation effort dramatically",
        ],
        bg: "#001212",
        gradientFrom: "#001E1E",
        gradientTo: "#000808",
        accent: "#06B6D4",
        accentLight: "#67E8F9",
        accentGlow: "rgba(6,182,212,0.25)",
        Icon: ShieldCheck,
    },
    {
        id: "esg",
        label: "ESG",
        title: "ESG Data Collection",
        tagline: "Structured sustainability data for reporting and compliance",
        description:
            "Consolidate energy, water, waste, and emissions data from across your portfolio into a single, audit-ready reporting layer. Set baselines, track progress against net-zero targets, and produce defensible ESG reports for boards and regulators — without manual consolidation.",
        features: [
            "Configurable templates for energy, water, waste, and related metrics",
            "Multi-site data aggregation with hierarchy-based reporting",
            "Baseline setting and performance tracking vs. targets",
            "Integration-ready export for ESG reporting frameworks",
            "Full audit trail with source and timestamp for every data point",
        ],
        benefits: [
            "Enables defensible ESG reporting for boards and regulators",
            "Tracks measurable progress toward net-zero targets",
            "Dramatically reduces manual effort in ESG data consolidation",
        ],
        bg: "#040E06",
        gradientFrom: "#071A09",
        gradientTo: "#020703",
        accent: "#22C55E",
        accentLight: "#86EFAC",
        accentGlow: "rgba(34,197,94,0.25)",
        Icon: Leaf,
    },
];

// Brand typography constants
const BRAND_PURPLE = "#5B2D8E";
const BRAND_MINT = "#7FFFD4";

export default function FusionEdgeCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = modules[activeIndex];

    return (
        <div
            id="modules"
            className="min-h-screen w-full bg-white transition-colors duration-700"
            style={{ fontFamily: "var(--font-dm-sans)" }}
        >
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">

                {/* Header */}
                <div className="mb-14">
                    {/* Subheading — #1fa279, font-bold, uppercase, tracking-wide */}
                    <p
                        className="mb-3 text-sm font-bold uppercase tracking-wide"
                        style={{ color: "#1fa279" }}
                    >
                        FusionEdge Platform
                    </p>

                    {/* Heading — dm-serif, font-bold, 3xl→4xl→5xl, #5B2D8E, tracking-tight, leading-tight */}
                    <h1
                        className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                        style={{
                            color: BRAND_PURPLE,
                            fontFamily: "var(--font-dm-serif)",
                        }}
                    >
                        One Platform.
                        <br />
                        <span style={{ color: active.accent }}>Total Coverage.</span>
                    </h1>
                </div>

                {/* Module Tabs */}
                <div className="mb-12 flex flex-wrap gap-2">
                    {modules.map((mod, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <button
                                key={mod.id}
                                onClick={() => setActiveIndex(index)}
                                className="relative overflow-hidden px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                                style={{
                                    border: `1px solid ${isActive ? mod.accent : "rgba(0,0,0,0.12)"}`,
                                    backgroundColor: isActive ? mod.accent : "rgba(0,0,0,0.04)",
                                    color: isActive ? "#fff" : "rgba(0,0,0,0.45)",
                                    boxShadow: isActive ? `0 0 20px ${mod.accentGlow}` : "none",
                                }}
                            >
                                {mod.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content Panel */}
                <div
                    key={active.id}
                    className="grid gap-10 md:grid-cols-2 lg:gap-16"
                    style={{ animation: "fadeSlideIn 0.45s ease forwards" }}
                >
                    {/* Left — Main Info */}
                    <div>
                        {/* Icon + Module name */}
                        <div className="mb-6 flex items-center gap-4">
                            <div
                                className="flex h-14 w-14 items-center justify-center"
                                style={{
                                    backgroundColor: active.accentGlow,
                                    border: `1px solid ${active.accent}`,
                                    color: active.accent,
                                }}
                            >
                                <active.Icon size={26} />
                            </div>
                            <div>
                                {/* Sub-label — #1fa279, font-bold, uppercase, tracking-wide */}
                                <p
                                    className="text-sm font-bold uppercase tracking-wide"
                                    style={{ color: "#1fa279" }}
                                >
                                    Module
                                </p>
                                {/* Module title — dm-serif, font-bold, tracking-tight, leading-tight */}
                                <h2
                                    className="text-2xl font-bold leading-tight tracking-tight"
                                    style={{
                                        color: BRAND_PURPLE,
                                        fontFamily: "var(--font-dm-serif)",
                                    }}
                                >
                                    {active.title}
                                </h2>
                            </div>
                        </div>

                        {/* Tagline — accent color kept, semibold */}
                        <p
                            className="mb-5 text-lg font-semibold leading-snug"
                            style={{ color: active.accent }}
                        >
                            {active.tagline}
                        </p>

                        {/* Description — #33363c, normal weight, text-sm→base */}
                        <p
                            className="text-sm leading-6 text-[#33363c] md:text-base md:leading-7"
                        >
                            {active.description}
                        </p>

                        {/* Business Benefits */}
                        <div className="mt-10">
                            {/* Section label — #1fa279, font-bold, uppercase, tracking-wide */}
                            <p
                                className="mb-4 text-sm font-bold uppercase tracking-wide"
                                style={{ color: "#1fa279" }}
                            >
                                Business Benefits
                            </p>
                            <div className="flex flex-col gap-3">
                                {active.benefits.map((benefit) => (
                                    <div key={benefit} className="flex items-start gap-3">
                                        <ArrowRight
                                            size={14}
                                            className="mt-1 shrink-0"
                                            style={{ color: active.accent }}
                                        />
                                        {/* Benefit text — #33363c, normal, text-sm→base */}
                                        <p className="text-sm leading-6 text-[#33363c] md:text-base md:leading-7">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Key Features */}
                    <div>
                        {/* Section label — #1fa279, font-bold, uppercase, tracking-wide */}
                        <p
                            className="mb-5 text-sm font-bold uppercase tracking-wide"
                            style={{ color: "#1fa279" }}
                        >
                            Key Features
                        </p>

                        <div className="flex flex-col gap-4">
                            {active.features.map((feature, i) => (
                                <div
                                    key={feature}
                                    className="flex items-start gap-4 border-l-2 py-1 pl-5"
                                    style={{
                                        borderColor: active.accent,
                                        animationDelay: `${i * 60}ms`,
                                        animation: "fadeSlideIn 0.4s ease forwards",
                                        opacity: 0,
                                    }}
                                >
                                    <div className="flex-1">
                                        {/* Feature text — #34373d, normal, text-sm */}
                                        <p className="text-sm leading-6 text-[#34373d] md:text-base md:leading-7">
                                            {feature}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative stat block */}
                        <div
                            className="mt-10 border p-6"
                            style={{
                                borderColor: `${active.accent}33`,
                                backgroundColor: `${active.accentGlow}`,
                            }}
                        >
                            <p
                                className="mb-1 text-sm font-bold uppercase tracking-wide"
                                style={{ color: "#1fa279" }}
                            >
                                At a Glance
                            </p>
                            <p
                                className="text-5xl font-bold leading-tight tracking-tight"
                                style={{
                                    color: BRAND_PURPLE,
                                    fontFamily: "var(--font-dm-serif)",
                                }}
                            >
                                {active.features.length}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-[#33363c] md:text-base md:leading-7">
                                core features in {active.title}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom nav dots */}
                <div className="mt-16 flex items-center justify-center gap-2">
                    {modules.map((mod, index) => (
                        <button
                            key={mod.id}
                            onClick={() => setActiveIndex(index)}
                            className="h-1.5 transition-all duration-300"
                            style={{
                                width: activeIndex === index ? "2rem" : "0.5rem",
                                backgroundColor: activeIndex === index ? mod.accent : "rgba(0,0,0,0.15)",
                            }}
                            aria-label={mod.title}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(16px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}