"use client";

import { useEffect, useRef, useState } from "react";

interface Industry {
    number: string;
    title: string;
    description: string;
}

const industries: Industry[] = [
    {
        number: "01",
        title: "Corporate Campuses",
        description: "Multi-building, multi-tenant operational control",
    },
    {
        number: "02",
        title: "Commercial Real Estate",
        description: "Portfolio-wide asset and compliance management",
    },
    {
        number: "03",
        title: "Healthcare Facilities",
        description: "Critical compliance, maintenance, and safety",
    },
    {
        number: "04",
        title: "Hospitality",
        description: "Guest experience, PPM, and vendor management",
    },
    {
        number: "05",
        title: "Critical Infrastructure",
        description: "High-stakes maintenance, work permits, and ESG",
    },
];

const track = [...industries, ...industries, ...industries];

export default function WhoWeServeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const offsetRef = useRef(0);
    const rafRef = useRef<number>(0);
    const SPEED = 0.55;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const getSetWidth = () => container.scrollWidth / 3;

        const animate = () => {
            if (!isPaused) {
                offsetRef.current += SPEED;
                const setWidth = getSetWidth();
                if (offsetRef.current >= setWidth) {
                    offsetRef.current -= setWidth;
                }
                container.style.transform = `translateX(-${offsetRef.current}px)`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [isPaused]);

    return (
        <section className="bg-white py-16 md:py-24 overflow-hidden">

            {/* Header */}
            <div className="mx-auto max-w-9xl px-6 md:px-10 lg:px-[72px] mb-14">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p
                            className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
                            style={{ color: "#1fa279" }}
                        >
                            Who We Serve
                        </p>
                        <h2
                            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                            style={{
                                color: "#5B2D8E",
                                fontFamily: "'DM Serif Display', serif",
                            }}
                        >
                            Built for the Complexity
                            <br />
                            <span style={{ color: "#5B2D8E" }}>
                                of Enterprise FM
                            </span>
                        </h2>
                    </div>

                </div>

            </div>

            {/* Carousel */}
            <div
                className="relative w-full"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    ref={containerRef}
                    className="flex will-change-transform"
                    style={{ width: "max-content" }}
                >
                    {track.map((item, i) => (
                        <div
                            key={i}
                            className="group mx-3 flex w-72 shrink-0 flex-col justify-between rounded-2xl p-7 transition-all duration-300 md:w-80"
                            style={{
                                transition: "border-color 0.3s, background-color 0.3s, box-shadow 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(91,45,142,0.25)";
                                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#fff";
                                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(91,45,142,0.10)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
                                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#F7F6F9";
                                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                            }}
                        >

                            {/* Title */}
                            <h3
                                className="text-lg font-bold leading-snug transition-colors duration-300"
                                style={{
                                    color: "#5B2D8E",
                                    fontFamily: "'DM Serif Display', serif",
                                }}
                            >
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="mt-3 text-sm leading-6"
                                style={{ color: "#6B7280" }}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}