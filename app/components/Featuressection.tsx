"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Feature = {
    number: string;
    title: string;
    subtitle: string;
    modules: string;
};

const features: Feature[] = [
    {
        number: "01",
        title: "Intelligence & Reporting",
        subtitle: "Real-time portfolio intelligence",
        modules: "CXO Dashboard · DMR Report · Custom Analytics",
    },
    {
        number: "02",
        title: "Asset Management",
        subtitle: "Complete lifecycle visibility, every asset",
        modules:
            "Digital Asset Register · AMC Tracker · Warranty & Document Repo · Vendor Tracking",
    },
    {
        number: "03",
        title: "Space & Workplace",
        subtitle: "Smart space utilisation & workplace experience",
        modules: "Space Management · Workplace Booking & Allocation",
    },
    {
        number: "04",
        title: "Maintenance & Operations",
        subtitle: "Proactive, schedule-driven field execution",
        modules:
            "Preventive Maintenance · Digital Checklist · Meter Readings · Reactive Maintenance",
    },
    {
        number: "05",
        title: "Smart Ticketing & Work Auth.",
        subtitle: "End-to-end service requests with SLA accountability",
        modules: "Smart Ticketing · Digital Work Permit · SLA Performance Reporting",
    },
    {
        number: "06",
        title: "People, Security & Compliance",
        subtitle: "Workforce, visitor & regulatory compliance",
        modules:
            "Visitor Management · Compliance Module · Digital Gatepass Attendance",
    },
    {
        number: "07",
        title: "Facilities & Inventory",
        subtitle: "Full operational control of stock & procurement",
        modules:
            "Inventory Management · Procurement · Consumables Tracking · Vendor Management",
    },
    {
        number: "08",
        title: "ESG & Stakeholder Engagement",
        subtitle: "Sustainability data & occupant satisfaction",
        modules: "ESG Data Collection · Feedback & Survey Module",
    },
];

export default function FeaturesCarouselSection() {
    const [startIndex, setStartIndex] = useState(0);

    const visibleFeatures = [
        features[startIndex],
        features[(startIndex + 1) % features.length],
    ];

    const prevSlide = () => {
        setStartIndex((current) =>
            current === 0 ? features.length - 1 : current - 1
        );
    };

    const nextSlide = () => {
        setStartIndex((current) => (current + 1) % features.length);
    };

    return (
        <section
            className="relative overflow-hidden bg-[#eef0f4] px-5 py-12 sm:px-8 md:px-14 md:py-16 lg:px-20"
            style={{ fontFamily: "var(--font-dm-sans)" }}
        >
            <div className="pointer-events-none absolute left-16 top-4 h-20 w-20 rounded-full border border-slate-300/40" />
            <div className="pointer-events-none absolute right-10 top-4 h-24 w-24 rounded-full border border-slate-300/40" />

            <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous feature"
                className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-slate-500 text-white transition hover:bg-slate-700"
            >
                <ChevronLeft size={18} />
            </button>

            <button
                type="button"
                onClick={nextSlide}
                aria-label="Next feature"
                className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-slate-500 text-white transition hover:bg-slate-700"
            >
                <ChevronRight size={18} />
            </button>

            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.35fr] lg:gap-12">
                <div className="max-w-lg">
                    <p className="text-sm font-bold uppercase tracking-wide text-[#1fa279]">
                        Platform Architecture
                    </p>

                    <h2
                        className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#5B2D8E] sm:text-4xl md:text-5xl"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                        Domains. Complete Coverage.
                    </h2>

                    <p className="mt-6 text-sm leading-6 text-[#33363c] md:text-base md:leading-7">
                        Every module in FusionEdge is purpose-built for a specific
                        operational function — yet all share a unified data layer, a single
                        UX, and seamless cross-module intelligence. No silos. No
                        integrations to manage between your own tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {visibleFeatures.map((feature, index) => (
                        <article
                            key={feature.number}
                            className={`relative min-h-[300px] bg-white px-6 py-7 shadow-sm sm:min-h-[330px] sm:px-8 sm:py-8 ${index === 1 ? "hidden sm:block" : ""
                                }`}
                        >
                            <span
                                className="absolute left-6 top-5 text-[96px] font-bold leading-none text-[#eef0f4] sm:left-8 sm:text-[118px]"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                                {feature.number}
                            </span>

                            <div className="relative z-10 mt-28 sm:mt-36">
                                <h3 className="text-sm font-extrabold text-[#202126]">
                                    {feature.title}
                                </h3>

                                <p className="mt-1 text-sm italic leading-5 text-[#00765a]">
                                    {feature.subtitle}
                                </p>

                                <p className="mt-4 text-xs leading-5 text-[#34373d]">
                                    {feature.modules}
                                </p>

                                <a
                                    href="#"
                                    className="mt-6 inline-block text-xs font-bold text-[#1fa279] transition hover:text-[#13795a]"
                                >
                                    Read more
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}