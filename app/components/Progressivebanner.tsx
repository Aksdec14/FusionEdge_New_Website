"use client";

import React from "react";

export default function ProgressiveBanner() {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ minHeight: "420px" }}
        >
            {/* Background image */}
            <img
                src="/BannerImage.jpeg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Overlay — left-heavy gradient so text stays legible over the light bg image */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(91,45,142,0.92) 20%, rgba(91,45,142,0.78) 36%, rgba(91,45,142,0.38) 55%, rgba(91,45,142,0.08) 100%)",
                }}
            />


            {/* Content */}
            <div className="relative z-10 mx-auto max-w-9xl px-8 py-16 lg:px-[72px] lg:py-20">
                <div className="max-w-[600px]">

                    {/* Label */}
                    <div className="mb-5 flex items-center gap-3">
                        <span
                            className="h-px w-8"
                            style={{ backgroundColor: "#7FFFD4" }}
                        />
                        <p
                            className="text-sm font-bold uppercase tracking-wide"
                            style={{ color: "#7FFFD4" }}
                        >
                            Progressive Transformation
                        </p>
                    </div>

                    {/* Heading */}
                    <h2
                        className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
                        style={{ fontFamily: "var(--font-dm-serif, 'DM Serif Display', serif)" }}
                    >
                        Start Where You Are.{" "}
                        <span style={{ color: "#7FFFD4" }}>
                            Scale to Where You Need to Be.
                        </span>
                    </h2>

                    {/* Body */}
                    <p className="mt-6 text-sm leading-6 text-white md:text-base md:leading-7">
                        FusionEdge is designed for progressive transformation — not big-bang
                        implementations. Deploy the capabilities that solve your most pressing
                        challenges today and expand seamlessly as your digital FM journey matures.
                    </p>
                </div>
            </div>
        </section>
    );
}