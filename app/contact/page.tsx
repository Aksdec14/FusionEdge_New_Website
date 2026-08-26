"use client";
import React, { useState } from "react";


const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");

        // ✅ FIX: Capture form reference BEFORE the async call.
        // event.currentTarget becomes null after await due to React's
        // synthetic event pooling — always save it first.
        const form = event.currentTarget;

        const formData = new FormData(form);
        formData.append("access_key", "3f951b76-ae31-4fcf-9b95-c6c507352a96");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully! We'll get back to you soon.");
                form.reset(); // ✅ Uses saved DOM reference — not event.currentTarget
                setTimeout(() => setResult(""), 5000);
            } else {
                console.error("Web3Forms error:", data);
                setResult("Oops! Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setResult("Error submitting form. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Shared input focus/blur handlers for brand styling
    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        e.target.style.borderColor = "#5D1F73";
        e.target.style.background = "#FFFFFF";
        e.target.style.boxShadow = "0 0 0 3px rgba(93,31,115,0.1)";
    };
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        e.target.style.borderColor = "#D1D5DB";
        e.target.style.background = "#F8F9FA";
        e.target.style.boxShadow = "none";
    };

    const inputBase: React.CSSProperties = {
        borderColor: "#D1D5DB",
        color: "#111827",
        background: "#F8F9FA",
    };

    return (
        <>
            {/* ── Outfit Font ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        body, * { font-family: 'Outfit', system-ui, -apple-system, sans-serif; }
      `}</style>



            {/* ─────────────── Hero ─────────────── */}
            <section className="relative bg-white py-24 overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-10 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none"
                    style={{ background: "#5D1F73", opacity: 0.07 }} />
                <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
                    style={{ background: "#1ABC9C", opacity: 0.07 }} />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border"
                        style={{ background: "linear-gradient(to right, #F5EFF7, #E6F9F5)", borderColor: "#E9D5FF" }}>
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1ABC9C" }} />
                        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5D1F73" }}>
                            Contact Us
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: "#1A1A1A" }}>
                        Get in{" "}
                        <span style={{
                            background: "linear-gradient(to right, #5D1F73, #1ABC9C)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}>
                            Touch
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#6B7280" }}>
                        Have questions about FusionEdge? We&apos;re here to help. Reach out to our team
                        and let&apos;s transform your facility management together.
                    </p>
                </div>
            </section>

            {/* ─────────────── Main Content ─────────────── */}
            <section className="py-20" style={{ background: "#F8F9FA" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                        {/* ── Left — Contact Info ── */}
                        <div className="lg:col-span-2 space-y-5">

                            {/* Top gradient card */}
                            <div className="relative rounded-2xl p-8 text-white overflow-hidden shadow-2xl"
                                style={{ background: "linear-gradient(135deg, #5D1F73, #1ABC9C)" }}>
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">Let&apos;s Talk</h3>
                                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>We&apos;re just a message away</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <ContactCard
                                iconBg="#F3EBF5"
                                iconColor="#5D1F73"
                                icon={
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                }
                                label="Call Us"
                                title="+91-9015122212"
                                sub="Mon-Fri 9AM – 6PM IST"
                            />

                            {/* Email */}
                            <ContactCard
                                iconBg="#E6F9F5"
                                iconColor="#1ABC9C"
                                icon={
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                }
                                label="Email Us"
                                title="rana@fusionedge.io"
                                sub="We reply within 24 hours"
                            />

                            {/* Location 1 */}
                            <ContactCard
                                iconBg="#F3EBF5"
                                iconColor="#5D1F73"
                                icon={
                                    <>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </>
                                }
                                label="Visit Us — Noida"
                                title="3rd Floor, C33, Sector 62"
                                sub="Noida, Uttar Pradesh 201309"
                            />

                            {/* Location 2 */}
                            <ContactCard
                                iconBg="#F3EBF5"
                                iconColor="#5D1F73"
                                icon={
                                    <>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </>
                                }
                                label="Visit Us — Bengaluru"
                                title="Brigade Tech Park, 2nd floor, Tower B"
                                sub="Pattandur Agrahara Road, Whitefield, Bengaluru, Karnataka 560066"
                            />

                            {/* Social */}
                            <div className="bg-white rounded-2xl p-6 shadow-xl border" style={{ borderColor: "#E5E7EB" }}>
                                <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#9CA3AF" }}>
                                    Connect With Us
                                </p>
                                <div className="flex gap-3">
                                    {/* LinkedIn */}
                                    <SocialBtn href="https://www.linkedin.com/company/fusionedgeservices/">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </SocialBtn>
                                    {/* X / Twitter */}
                                    <SocialBtn href="#">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </SocialBtn>
                                    {/* Instagram */}
                                    <SocialBtn href="#">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </SocialBtn>
                                </div>
                            </div>
                        </div>

                        {/* ── Right — Form ── */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl shadow-2xl border p-8 md:p-10" style={{ borderColor: "#E5E7EB" }}>
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold mb-2" style={{ color: "#1A1A1A" }}>
                                        Send Us a Message
                                    </h2>
                                    <p style={{ color: "#6B7280" }}>
                                        Fill out the form below and our team will get back to you within 24 hours.
                                    </p>
                                </div>

                                <form onSubmit={onSubmit} className="space-y-6">

                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: "#111827" }}>
                                            Full Name <span style={{ color: "#5D1F73" }}>*</span>
                                        </label>
                                        <input
                                            type="text" id="name" name="name" required
                                            placeholder="John Doe"
                                            onFocus={handleFocus} onBlur={handleBlur}
                                            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-300"
                                            style={inputBase}
                                        />
                                    </div>

                                    {/* Email + Phone */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: "#111827" }}>
                                                Email Address <span style={{ color: "#5D1F73" }}>*</span>
                                            </label>
                                            <input
                                                type="email" id="email" name="email" required
                                                placeholder="john@example.com"
                                                onFocus={handleFocus} onBlur={handleBlur}
                                                className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-300"
                                                style={inputBase}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: "#111827" }}>
                                                Phone Number <span style={{ color: "#5D1F73" }}>*</span>
                                            </label>
                                            <input
                                                type="tel" id="phone" name="phone" required
                                                placeholder="+91 XXXXX XXXXX"
                                                onFocus={handleFocus} onBlur={handleBlur}
                                                className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-300"
                                                style={inputBase}
                                            />
                                        </div>
                                    </div>

                                    {/* Contact Method */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-3" style={{ color: "#111827" }}>
                                            Preferred Contact Method <span style={{ color: "#5D1F73" }}>*</span>
                                        </label>
                                        <div className="flex gap-6">
                                            {["Email", "Phone"].map((m) => (
                                                <label key={m} className="flex items-center gap-2.5 cursor-pointer">
                                                    <input
                                                        type="radio" name="contactMethod" value={m.toLowerCase()}
                                                        defaultChecked={m === "Email"}
                                                        className="w-4 h-4"
                                                        style={{ accentColor: "#5D1F73" }}
                                                    />
                                                    <span className="text-sm font-medium" style={{ color: "#374151" }}>{m}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Query Type */}
                                    <div>
                                        <label htmlFor="queryType" className="block text-sm font-semibold mb-2" style={{ color: "#111827" }}>
                                            How can we help you? <span style={{ color: "#5D1F73" }}>*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="queryType" name="queryType" required
                                                onFocus={handleFocus} onBlur={handleBlur}
                                                className="w-full px-4 py-3 rounded-xl border text-sm outline-none appearance-none cursor-pointer transition-all duration-300"
                                                style={inputBase}
                                            >
                                                <option value="" disabled>Select your query type</option>
                                                <option value="Request a Demo">Request a Demo</option>
                                                <option value="Need Brochure">Need Brochure</option>
                                                <option value="Collaboration Queries">Collaboration Queries</option>
                                                <option value="Event Queries">Event Queries</option>
                                                <option value="Media Queries">Media Queries</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                                <svg className="w-4 h-4" style={{ color: "#9CA3AF" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Details */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: "#111827" }}>
                                            Additional Details
                                        </label>
                                        <textarea
                                            id="message" name="message" rows={5} required
                                            placeholder="Tell us more about your requirements..."
                                            onFocus={handleFocus} onBlur={handleBlur}
                                            className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none transition-all duration-300"
                                            style={inputBase}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3.5 px-6 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        style={{ background: "linear-gradient(to right, #5D1F73, #1ABC9C)" }}
                                        onMouseEnter={e => {
                                            if (!isSubmitting) {
                                                (e.currentTarget as HTMLButtonElement).style.background = "#5D1F73";
                                                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 20px 40px rgba(93,31,115,0.4)";
                                            }
                                        }}
                                        onMouseLeave={e => {
                                            if (!isSubmitting) {
                                                (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(to right, #5D1F73, #1ABC9C)";
                                                (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
                                            }
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>

                                    {/* Result Message */}
                                    {result && (
                                        <div
                                            className="p-4 rounded-xl text-sm font-medium text-center border transition-all duration-300"
                                            style={
                                                result.includes("Successfully")
                                                    ? { background: "#E6F9F5", color: "#10B981", borderColor: "#10B981" }
                                                    : result.includes("Sending")
                                                        ? { background: "#F3EBF5", color: "#5D1F73", borderColor: "#5D1F73" }
                                                        : { background: "#FEF2F2", color: "#EF4444", borderColor: "#EF4444" }
                                            }
                                        >
                                            {result}
                                        </div>
                                    )}

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    );
};

/* ── Small reusable sub-components ── */

interface ContactCardProps {
    iconBg: string;
    iconColor: string;
    icon: React.ReactNode;
    label: string;
    title: string;
    sub: string;
}

const ContactCard = ({ iconBg, iconColor, icon, label, title, sub }: ContactCardProps) => (
    <div
        className="bg-white rounded-2xl p-6 shadow-xl border flex items-start gap-4 transition-all duration-300 hover:scale-105"
        style={{ borderColor: "#E5E7EB" }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "#1ABC9C")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "#E5E7EB")}
    >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: iconBg }}>
            <svg className="w-5 h-5" style={{ color: iconColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {icon}
            </svg>
        </div>
        <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#9CA3AF" }}>{label}</p>
            <p className="font-semibold" style={{ color: "#1A1A1A" }}>{title}</p>
            <p className="text-sm" style={{ color: "#6B7280" }}>{sub}</p>
        </div>
    </div>
);

const SocialBtn = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        style={{ background: "linear-gradient(135deg, #5D1F73, #1ABC9C)" }}
    >
        {children}
    </a>
);

export default Contact;