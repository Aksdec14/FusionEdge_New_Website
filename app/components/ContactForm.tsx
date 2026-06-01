"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, Phone, MapPin, Send, AlertCircle, Loader2, CheckCircle } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
    subject: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    message?: string;
}

// ---------------------------------------------------------------------------
// Toast
// ---------------------------------------------------------------------------
function Toast({
    show,
    success,
    message,
}: {
    show: boolean;
    success: boolean;
    message: string;
}) {
    return (
        <div
            className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border transition-all duration-500"
            style={{
                backgroundColor: success ? "#f0fdf4" : "#fef2f2",
                borderColor: success ? "#10B981" : "#ef4444",
                transform: show ? "translateX(0)" : "translateX(120%)",
                opacity: show ? 1 : 0,
                maxWidth: "360px",
            }}
        >
            {success ? (
                <CheckCircle size={22} color="#10B981" className="shrink-0" />
            ) : (
                <AlertCircle size={22} color="#ef4444" className="shrink-0" />
            )}
            <p
                className="text-sm font-medium"
                style={{ color: success ? "#065f46" : "#991b1b" }}
            >
                {message}
            </p>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Avatar Stack
// ---------------------------------------------------------------------------
const AVATAR_COLORS = ["#c9a87c", "#b07850", "#8b5e3c", "#6b4226", "#1a1a1a"];
const AVATAR_INITIALS = ["AJ", "KR", "ML", "TS", "★"];

function AvatarStack() {
    return (
        <div className="flex items-center gap-3 mt-10">
            <div className="flex -space-x-2.5">
                {AVATAR_COLORS.map((bg, i) => (
                    <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-[#e8e4dc] flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ backgroundColor: bg, zIndex: AVATAR_COLORS.length - i }}
                    >
                        {AVATAR_INITIALS[i]}
                    </div>
                ))}
            </div>
            <div>
                <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-[#e8a020]" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <p className="text-[12px] text-[#8a8278] font-medium">Grown over 176+ creators</p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Contact Info Row
// ---------------------------------------------------------------------------
function ContactItem({
    Icon,
    label,
}: {
    Icon: React.ElementType;
    label: string;
}) {
    return (
        <li className="flex items-center gap-3 group cursor-pointer">
            <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[#e2dfd8] border border-[#ccc8be] transition-all duration-200 group-hover:bg-[#5B2D8E] group-hover:border-[#5B2D8E]">
                <Icon
                    size={15}
                    className="text-[#5B2D8E] group-hover:text-white transition-colors duration-200"
                />
            </span>
            <span className="text-[14px] text-[#5a5550] group-hover:text-[#5B2D8E] transition-colors duration-200">
                {label}
            </span>
        </li>
    );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export default function ContactSection() {
    const MESSAGE_MAX = 500;

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        subject: "General Inquiry",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{
        show: boolean;
        success: boolean;
        message: string;
    }>({ show: false, success: true, message: "" });

    const validate = (data: FormData): FormErrors => {
        const e: FormErrors = {};
        if (!data.firstName.trim()) e.firstName = "First name is required";
        if (!data.lastName.trim()) e.lastName = "Last name is required";
        if (!data.phone.trim()) {
            e.phone = "Phone number is required";
        } else if (!/^[\d\s\-+()]{7,15}$/.test(data.phone)) {
            e.phone = "Enter a valid phone number";
        }
        if (!data.email.trim()) {
            e.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            e.email = "Enter a valid email";
        }
        if (!data.message.trim()) {
            e.message = "Message is required";
        } else if (data.message.length < 10) {
            e.message = "Message must be at least 10 characters";
        }
        return e;
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (touched[name]) {
            const newErrors = validate({ ...formData, [name]: value });
            setErrors((prev) => ({
                ...prev,
                [name]: newErrors[name as keyof FormErrors],
            }));
        }
    };

    const handleBlur = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const newErrors = validate(formData);
        setErrors((prev) => ({
            ...prev,
            [name]: newErrors[name as keyof FormErrors],
        }));
    };

    const showToast = (success: boolean, message: string) => {
        setToast({ show: true, success, message });
        setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const allTouched = Object.fromEntries(
            Object.keys(formData).map((k) => [k, true])
        );
        setTouched(allTouched);
        const validationErrors = validate(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "3f951b76-ae31-4fcf-9b95-c6c507352a96",
                    ...formData,
                }),
            });
            const result = await response.json();
            if (result.success) {
                showToast(true, "Message sent successfully! We'll get back to you soon.");
                setFormData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    message: "",
                    subject: "General Inquiry",
                });
                setErrors({});
                setTouched({});
            } else {
                showToast(false, "Submission failed. Please try again.");
            }
        } catch {
            showToast(false, "Network error. Please check your connection and retry.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass = (field: keyof FormErrors) =>
        [
            "w-full py-3 px-0 bg-transparent text-[15px] text-[#1a1a1a] placeholder-[#aaa8a2]",
            "border-0 border-b focus:outline-none transition-all duration-300",
            errors[field] && touched[field]
                ? "border-red-400 focus:border-red-500"
                : "border-[#ccc8c0] focus:border-[#5B2D8E]",
        ].join(" ");

    return (
        <>
            <Toast show={toast.show} success={toast.success} message={toast.message} />

            <section
                id="contact"
                className="min-h-screen bg-[#F9F6EE] flex items-center px-6 py-20"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif" }}
            >
                <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* ══ LEFT — Headline + Info ══ */}
                    <div className="lg:pt-4">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-1.5 border border-[#ccc8be] rounded-full bg-[#e2dfd8] text-[13px] text-[#5a5550] font-medium mb-8 tracking-wide">
                            Book a call
                        </div>

                        {/* Big headline — color changed to #5B2D8E */}
                        <h1
                            className="text-[68px] font-black leading-[0.95] tracking-[-0.03em] mb-6"
                            style={{ color: "#5B2D8E" }}
                        >
                            Let&apos;s get<br />started
                        </h1>

                        {/* Sub-copy */}
                        <p className="text-[17px] text-[#8a8278] leading-relaxed font-normal max-w-[300px] mb-10">
                            Have a big idea or brand to develop and need help? We&apos;d love to hear from you.
                        </p>

                        {/* Contact details */}
                        <ul className="space-y-4 mb-8">
                            <ContactItem Icon={Mail} label="info@fusionEdge.com" />
                            <ContactItem Icon={Phone} label="+91-9015122212" />
                            <ContactItem Icon={MapPin} label="Noida, India" />
                        </ul>

                        {/* Social links */}
                        <div className="flex gap-2.5">
                            {[
                                { Icon: FaFacebook, href: "#" },
                                { Icon: FaLinkedin, href: "#" },
                                { Icon: FaInstagram, href: "#" },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-9 h-9 rounded-full flex items-center justify-center bg-[#e2dfd8] border border-[#ccc8be] text-[#5a5550] hover:bg-[#5B2D8E] hover:text-white hover:border-[#5B2D8E] transition-all duration-200"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>

                        <AvatarStack />
                    </div>

                    {/* ══ RIGHT — Form ══ */}
                    <div>
                        <form onSubmit={handleSubmit} noValidate className="space-y-7">

                            {/* First + Last name */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name *"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={inputClass("firstName")}
                                    />
                                    {errors.firstName && touched.firstName && (
                                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                                            <AlertCircle size={11} /> {errors.firstName}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name *"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={inputClass("lastName")}
                                    />
                                    {errors.lastName && touched.lastName && (
                                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                                            <AlertCircle size={11} /> {errors.lastName}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Phone + Email */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone No. *"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={inputClass("phone")}
                                    />
                                    {errors.phone && touched.phone && (
                                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                                            <AlertCircle size={11} /> {errors.phone}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={inputClass("email")}
                                    />
                                    {errors.email && touched.email && (
                                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                                            <AlertCircle size={11} /> {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Subject — #5B2D8E for selected state */}
                            <div>
                                <p className="text-[13px] font-semibold text-[#1a1a1a] uppercase tracking-widest mb-3">
                                    Select Subject
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["General Inquiry", "Technical Support", "Website Feedback"].map((label) => (
                                        <label
                                            key={label}
                                            className={`
                                                inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[13px]
                                                font-medium cursor-pointer transition-all duration-150 select-none
                                                ${formData.subject === label
                                                    ? "text-white"
                                                    : "bg-transparent border-[#d4cfc6] text-[#5a5550] hover:border-[#9a9590]"
                                                }
                                            `}
                                            style={
                                                formData.subject === label
                                                    ? { backgroundColor: "#5B2D8E", borderColor: "#5B2D8E" }
                                                    : {}
                                            }
                                        >
                                            <input
                                                type="radio"
                                                name="subject"
                                                value={label}
                                                checked={formData.subject === label}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <span
                                                className="w-2 h-2 rounded-full flex-shrink-0 transition-colors"
                                                style={{
                                                    backgroundColor:
                                                        formData.subject === label ? "#7FFFD4" : "#c8c3ba",
                                                }}
                                            />
                                            {label}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Message + counter */}
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your business... *"
                                    rows={3}
                                    maxLength={MESSAGE_MAX}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`${inputClass("message")} resize-none`}
                                />
                                <div className="flex justify-between items-center mt-1.5">
                                    {errors.message && touched.message ? (
                                        <p className="text-red-500 text-xs flex items-center gap-1">
                                            <AlertCircle size={11} /> {errors.message}
                                        </p>
                                    ) : (
                                        <span />
                                    )}
                                    <span
                                        className="text-xs transition-colors duration-300"
                                        style={{
                                            color:
                                                formData.message.length > MESSAGE_MAX - 50 ? "#ef4444" : "#aaa8a2",
                                        }}
                                    >
                                        {formData.message.length}/{MESSAGE_MAX}
                                    </span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-[#ccc8c0]" />

                            {/* Submit — color changed to #5B2D8E */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="
                                    w-full flex items-center justify-center gap-2.5
                                    text-white text-[16px] font-semibold
                                    py-5 rounded-full tracking-tight
                                    active:scale-[0.99]
                                    transition-all duration-150
                                    disabled:opacity-60 disabled:cursor-not-allowed
                                "
                                style={{
                                    backgroundColor: "#5B2D8E",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#4a2275")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#5B2D8E")
                                }
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {/* Fine print */}
                            <p className="text-center text-[12px] text-[#aaa8a2]">
                                By submitting, you agree to our{" "}
                                <a href="#" className="underline hover:text-[#5a5550] transition-colors">
                                    terms &amp; conditions
                                </a>
                                .
                            </p>

                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}