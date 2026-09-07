"use client";
import React, { useState } from "react";

const PURPLE = "#5D1F73";
const DARK = "#0F0F0F";

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [queryType, setQueryType] = useState("");

    // ── Strict validation patterns ──
    const NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]{1,49}$/; // letters, spaces, . ' - only, 2-50 chars
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PHONE_REGEX = /^[+]?[0-9\s-]{10,15}$/; // 10-15 digits, optional +, spaces/dashes allowed

    const validateForm = (form: HTMLFormElement): string | null => {
        const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim() || "";
        const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim() || "";
        const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim() || "";
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim() || "";
        const query = (form.elements.namedItem("queryType") as HTMLSelectElement)?.value || "";

        if (!name) return "Please enter your full name.";
        if (!NAME_REGEX.test(name)) return "Please enter a valid name (letters only, min 2 characters).";

        if (!email) return "Please enter your email address.";
        if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address.";

        if (!phone) return "Please enter your phone number.";
        if (!PHONE_REGEX.test(phone) || phone.replace(/\D/g, "").length < 10) {
            return "Please enter a valid phone number (at least 10 digits).";
        }

        if (!query) return "Please select a subject.";
        if (!message) return "Please add a short message.";

        return null;
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // ✅ FIX: Capture form reference BEFORE the async call.
        // event.currentTarget becomes null after await due to React's
        // synthetic event pooling — always save it first.
        const form = event.currentTarget;

        // ── Strict validation gate: block submission until name, email,
        // phone (and other required fields) pass the checks above ──
        const validationError = validateForm(form);
        if (validationError) {
            setResult(validationError);
            return;
        }

        setIsSubmitting(true);
        setResult("Sending....");

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
                setQueryType("");
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

    // Underline-style focus/blur handlers to match the reference design
    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        e.target.style.borderBottomColor = PURPLE;
    };
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        e.target.style.borderBottomColor = "#D6D3D1";
    };

    const underlineInput: React.CSSProperties = {
        borderBottom: "1px solid #D6D3D1",
        color: DARK,
        background: "transparent",
    };

    return (
        <>
            {/* ── Outfit Font ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        body, * { font-family: 'Outfit', system-ui, -apple-system, sans-serif; }
      `}</style>

            <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

                        {/* ── Left — Heading + Info ── */}
                        <div>
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: PURPLE }}>
                                / get in touch /
                            </p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4 sm:mb-6" style={{ color: DARK }}>
                                We are always ready to help you and{" "}
                                <span style={{ color: PURPLE }}>answer your questions</span>
                            </h1>
                            <p className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 max-w-md" style={{ color: "#6B6B6B" }}>
                                Have questions about FusionEdge? We&apos;re here to help. Reach out to our team
                                and let&apos;s transform your facility management together.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10">
                                <div>
                                    <h4 className="font-semibold mb-3" style={{ color: DARK }}>Call Center</h4>
                                    <p className="text-sm" style={{ color: "#6B6B6B" }}>+91-9015122212</p>
                                    <p className="text-sm" style={{ color: "#6B6B6B" }}>Mon–Fri 9AM – 6PM IST</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-3" style={{ color: DARK }}>Our Location</h4>
                                    <p className="text-sm" style={{ color: "#6B6B6B" }}>3rd Floor, C33, Sector 62, Noida, UP 201309</p>
                                    <p className="text-sm mt-1" style={{ color: "#6B6B6B" }}>
                                        Brigade Tech Park, Tower B, Whitefield, Bengaluru, KA 560066
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-3" style={{ color: DARK }}>Email</h4>
                                    <p className="text-sm" style={{ color: "#6B6B6B" }}>rana@fusionedge.io</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-3" style={{ color: DARK }}>Social Network</h4>
                                    <div className="flex gap-3">
                                        <SocialBtn href="https://www.linkedin.com/company/fusionedgeservices/">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </SocialBtn>
                                        <SocialBtn href="#">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </SocialBtn>
                                        <SocialBtn href="https://www.instagram.com/fusionedgeofficial">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                            </svg>
                                        </SocialBtn>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Right — Form Card ── */}
                        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 w-full" style={{ background: "#F5F4F2" }}>
                            <h2 className="text-xl sm:text-2xl font-semibold mb-2" style={{ color: DARK }}>Get in Touch</h2>
                            <p className="text-xs sm:text-sm mb-6 sm:mb-8" style={{ color: "#6B6B6B" }}>
                                Define your goals and identify areas where AI can add value to your business
                            </p>

                            <form onSubmit={onSubmit} className="space-y-5 sm:space-y-7">
                                <div>
                                    <label htmlFor="name" className="sr-only">Full Name</label>
                                    <input
                                        type="text" id="name" name="name" required
                                        minLength={2}
                                        maxLength={50}
                                        pattern="[A-Za-z\s.'-]+"
                                        title="Letters only, minimum 2 characters"
                                        placeholder="Full name"
                                        onFocus={handleFocus} onBlur={handleBlur}
                                        className="w-full pb-2 text-sm outline-none transition-colors duration-300 bg-transparent placeholder:text-gray-400"
                                        style={underlineInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        type="email" id="email" name="email" required
                                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                        title="Enter a valid email address"
                                        placeholder="Email"
                                        onFocus={handleFocus} onBlur={handleBlur}
                                        className="w-full pb-2 text-sm outline-none transition-colors duration-300 bg-transparent placeholder:text-gray-400"
                                        style={underlineInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                                    <input
                                        type="tel" id="phone" name="phone" required
                                        minLength={10}
                                        maxLength={15}
                                        pattern="[+]?[0-9\s-]{10,15}"
                                        title="Enter a valid phone number (at least 10 digits)"
                                        placeholder="Phone number"
                                        onFocus={handleFocus} onBlur={handleBlur}
                                        className="w-full pb-2 text-sm outline-none transition-colors duration-300 bg-transparent placeholder:text-gray-400"
                                        style={underlineInput}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium mb-3" style={{ color: "#6B6B6B" }}>
                                        Preferred Contact Method
                                    </label>
                                    <div className="flex gap-6">
                                        {["Email", "Phone"].map((m) => (
                                            <label key={m} className="flex items-center gap-2.5 cursor-pointer">
                                                <input
                                                    type="radio" name="contactMethod" value={m.toLowerCase()}
                                                    defaultChecked={m === "Email"}
                                                    className="w-4 h-4"
                                                    style={{ accentColor: PURPLE }}
                                                />
                                                <span className="text-sm" style={{ color: DARK }}>{m}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="queryType" className="sr-only">Subject</label>
                                    <div className="relative">
                                        <select
                                            id="queryType" name="queryType" required
                                            value={queryType}
                                            onChange={(e) => setQueryType(e.target.value)}
                                            onFocus={handleFocus} onBlur={handleBlur}
                                            className="w-full pb-2 text-sm outline-none appearance-none cursor-pointer transition-colors duration-300 bg-transparent"
                                            style={{ ...underlineInput, color: queryType ? DARK : "#9CA3AF" }}
                                        >
                                            <option value="" disabled>Subject — how can we help?</option>
                                            <option value="Request a Demo">Request a Demo</option>
                                            <option value="Need Brochure">Need Brochure</option>
                                            <option value="Collaboration Queries">Collaboration Queries</option>
                                            <option value="Event Queries">Event Queries</option>
                                            <option value="Media Queries">Media Queries</option>
                                        </select>
                                        <div className="absolute right-0 bottom-2 pointer-events-none">
                                            <svg className="w-4 h-4" style={{ color: "#9CA3AF" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Brochure download appears when this subject is selected */}
                                    {queryType === "Need Brochure" && (
                                        <a
                                            href="/brochure/fusionedge-brochure.pdf"
                                            download
                                            className="mt-4 w-full sm:w-auto justify-center sm:justify-start inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-transform duration-300 hover:scale-105"
                                            style={{ background: "#FFFFFF", color: PURPLE, border: `1px solid ${PURPLE}` }}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                                            </svg>
                                            Download our Brochure (PDF)
                                        </a>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea
                                        id="message" name="message" rows={3} required
                                        placeholder="Message"
                                        onFocus={handleFocus} onBlur={handleBlur}
                                        className="w-full pb-2 text-sm outline-none resize-none transition-colors duration-300 bg-transparent placeholder:text-gray-400"
                                        style={underlineInput}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    style={{ background: PURPLE }}
                                    onMouseEnter={e => {
                                        if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.background = DARK;
                                    }}
                                    onMouseLeave={e => {
                                        if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.background = PURPLE;
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
                                            <span>&gt;</span> Send a message
                                        </>
                                    )}
                                </button>

                                {result && (
                                    <div
                                        className="p-3 sm:p-4 rounded-xl text-xs sm:text-sm font-medium text-center border transition-all duration-300"
                                        style={
                                            result.includes("Successfully")
                                                ? { background: "#F0FDF4", color: "#10B981", borderColor: "#10B981" }
                                                : result.includes("Sending")
                                                    ? { background: "#F3EBF5", color: PURPLE, borderColor: PURPLE }
                                                    // Anything else (validation errors, API errors) renders as red
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
            </section>
        </>
    );
};

const SocialBtn = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
        style={{ background: PURPLE, color: "#FFFFFF" }}
    >
        {children}
    </a>
);

export default Contact;