"use client";

import React, { useState } from "react";
import Link from "next/link";
import Featuressection from "./Featuressection";

/* ═══════════════════════════════════════════════════════════
   DASHBOARD DATA
═══════════════════════════════════════════════════════════ */

const kpis = [
    { label: "Assets Tracked", value: "4,832", change: "+18%", up: true },
    { label: "PPM Tasks", value: "1,240", change: "+23%", up: true },
    { label: "Open Tickets", value: "847", change: "-12%", up: false },
    { label: "ESG Score", value: "91.4", change: "+5%", up: true },
];

const barData = [35, 70, 110, 85, 175, 80, 195, 140, 100, 55];
const lineData = [70, 75, 68, 80, 85, 78, 88, 82, 90, 87];

const allRows = [
    { site: "Prestige Tower A", date: "12/05/2025", cat: "PPM", status: "Completed" },
    { site: "Manipal H Block", date: "12/05/2025", cat: "Ticketing", status: "In Progress" },
    { site: "CapitaLand Site 3", date: "12/05/2025", cat: "Compliance", status: "Pending" },
    { site: "Embassy REIT", date: "12/05/2025", cat: "ESG", status: "Cancelled" },
];

const STATUS: Record<string, { color: string; bg: string }> = {
    Completed: { color: "#16a34a", bg: "#f0fdf4" },
    "In Progress": { color: "#2563eb", bg: "#eff6ff" },
    Pending: { color: "#d97706", bg: "#fffbeb" },
    Cancelled: { color: "#dc2626", bg: "#fef2f2" },
};

const TABS = ["All Tasks", "Completed", "In Progress", "Pending", "Cancelled"];

/* ═══════════════════════════════════════════════════════════
   SVG CHARTS
═══════════════════════════════════════════════════════════ */

function BarChart() {
    const max = Math.max(...barData);
    const BW = 16, GAP = 10, CH = 64;
    const W = barData.length * (BW + GAP) - GAP;
    return (
        <svg viewBox={`0 0 ${W} ${CH}`} width="100%" height="100%" preserveAspectRatio="none">
            {barData.map((v, i) => {
                const h = (v / max) * CH;
                const isTop = v === max;
                return (
                    <rect
                        key={i}
                        x={i * (BW + GAP)} y={CH - h}
                        width={BW} height={h} rx="3"
                        fill={isTop ? "#5B2D8E" : "#ddd6fe"}
                    />
                );
            })}
        </svg>
    );
}

function LineChart() {
    const mn = 60, mx = 95, W = 160, H = 52;
    const pts = lineData.map((v, i) => [
        (i / (lineData.length - 1)) * W,
        H - ((v - mn) / (mx - mn)) * H,
    ]);
    const line = pts.map(([x, y]) => `${x},${y}`).join(" ");
    const area = `0,${H} ` + line + ` ${W},${H}`;
    return (
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" preserveAspectRatio="none">
            <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5B2D8E" stopOpacity=".16" />
                    <stop offset="100%" stopColor="#5B2D8E" stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon points={area} fill="url(#lg)" />
            <polyline points={line} fill="none" stroke="#5B2D8E" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" />
            {pts.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="2.2"
                    fill="#fff" stroke="#5B2D8E" strokeWidth="1.4" />
            ))}
        </svg>
    );
}

/* ═══════════════════════════════════════════════════════════
   SIDEBAR NAV ITEMS
═══════════════════════════════════════════════════════════ */

function NavItem({
    icon, label, active, badge,
}: {
    icon: React.ReactNode; label: string; active?: boolean; badge?: number;
}) {
    return (
        <div className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg cursor-pointer transition-colors ${active ? "bg-[#5B2D8E]/10" : "hover:bg-gray-50"
            }`}>
            <span style={{ color: active ? "#5B2D8E" : "#9CA3AF" }}>{icon}</span>
            <span className={`text-[10px] font-semibold flex-1 ${active ? "text-[#5B2D8E]" : "text-gray-500"}`}>
                {label}
            </span>
            {badge != null && (
                <span className="text-[8px] font-bold bg-gray-100 text-gray-500 rounded-full px-1.5 py-0.5">
                    {badge}
                </span>
            )}
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   INLINE SVG ICONS
═══════════════════════════════════════════════════════════ */

const IC = {
    dashboard: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
    assets: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>,
    tickets: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /></svg>,
    compliance: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    esg: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h20M6 20V10l6-6 6 6v10" /></svg>,
    messages: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    settings: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
    logout: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>,
    search: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
    bell: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
};

/* ═══════════════════════════════════════════════════════════
   FM DASHBOARD
═══════════════════════════════════════════════════════════ */

function FMDashboard() {
    const [activeTab, setActiveTab] = useState("All Tasks");
    const rows = activeTab === "All Tasks" ? allRows : allRows.filter(r => r.status === activeTab);

    return (
        <div
            className="w-full flex rounded-2xl overflow-hidden border border-gray-100"
            style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.10)", fontFamily: "var(--font-dm-sans,'DM Sans',sans-serif)" }}
        >

            {/* ── Sidebar ─────────────────────────────────────── */}
            <div className="w-[118px] shrink-0 bg-white border-r border-gray-100 flex flex-col justify-between py-3 px-2">

                {/* Logo */}
                <div>
                    <div className="flex items-center gap-1.5 px-2 mb-4">
                        <div className="w-6 h-6 rounded-lg bg-[#5B2D8E] flex items-center justify-center">
                            <span className="text-white text-[9px] font-black">FE</span>
                        </div>
                        <span className="text-[11px] font-black text-gray-800 tracking-tight">FusionEdge</span>
                    </div>

                    {/* Store pill */}
                    <div className="mx-1 mb-3 flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1.5 border border-gray-100">
                        <div className="w-4 h-4 rounded bg-[#1fa279] flex items-center justify-center">
                            <span className="text-white text-[7px] font-bold">C</span>
                        </div>
                        <span className="text-[9px] font-semibold text-gray-700 flex-1 truncate">Capstone</span>
                        <span className="text-gray-300 text-[8px]">▾</span>
                    </div>

                    <p className="text-[8px] font-bold uppercase tracking-widest text-gray-300 px-2 mb-1">General</p>
                    <NavItem icon={IC.dashboard} label="Dashboard" active />
                    <NavItem icon={IC.assets} label="Assets" />
                    <NavItem icon={IC.tickets} label="Tickets" badge={5} />
                    <NavItem icon={IC.compliance} label="Compliance" />
                    <NavItem icon={IC.esg} label="ESG" />

                    <div className="my-2 mx-2 h-px bg-gray-100" />
                    <p className="text-[8px] font-bold uppercase tracking-widest text-gray-300 px-2 mb-1">Tools</p>
                    <NavItem icon={IC.esg} label="Analytics" />
                    <NavItem icon={IC.messages} label="Messages" badge={2} />
                    <NavItem icon={IC.settings} label="Settings" />
                </div>

                {/* User */}
                <div>
                    <div className="my-2 mx-2 h-px bg-gray-100" />
                    <NavItem icon={IC.logout} label="Log out" />
                    <div className="flex items-center gap-1.5 px-2 pt-2">
                        <div className="w-5 h-5 rounded-full bg-[#5B2D8E]/20 flex items-center justify-center shrink-0">
                            <span className="text-[7px] font-bold text-[#5B2D8E]">FM</span>
                        </div>
                        <div className="min-w-0">
                            <p className="text-[9px] font-bold text-gray-700 truncate">FM Admin</p>
                            <p className="text-[8px] text-gray-400 truncate">admin@fe.io</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Content ─────────────────────────────────── */}
            <div className="flex-1 bg-[#F8F8FB] flex flex-col min-w-0">

                {/* Top bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-gray-100 gap-2">
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                        <span>Pages</span>
                        <span className="mx-0.5">/</span>
                        <span className="font-semibold text-gray-700">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2 flex-1 justify-end">
                        <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-1 border border-gray-100 flex-1 max-w-[140px]">
                            {IC.search}
                            <span className="text-[9px] text-gray-300">Search items…</span>
                        </div>
                        {IC.bell}
                        <div className="w-6 h-6 rounded-full bg-[#5B2D8E] flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">A</span>
                        </div>
                    </div>
                </div>

                {/* Scrollable body */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3">

                    {/* Promo banner */}
                    <div
                        className="rounded-xl px-4 py-3 flex items-center justify-between gap-2"
                        style={{ background: "linear-gradient(135deg,#5B2D8E 0%,#7c3aed 100%)" }}
                    >
                        <div>
                            <p className="text-[9px] font-black text-[#7FFFD4] uppercase tracking-widest mb-0.5">
                                ✦ AI-Powered Insights
                            </p>
                            <p className="text-[10px] text-white/80 leading-snug">
                                Upgrade to Pro for predictive maintenance &amp; ESG analytics
                            </p>
                        </div>
                        <button className="shrink-0 bg-white text-[#5B2D8E] text-[9px] font-black px-3 py-1.5 rounded-lg whitespace-nowrap hover:bg-gray-50 transition-colors">
                            Upgrade Now
                        </button>
                    </div>

                    {/* Overview header */}
                    <div className="flex items-center justify-between">
                        <span className="text-[12px] font-bold text-gray-800">Overview</span>
                        <div className="flex items-center gap-2">
                            <span className="text-[8px] text-gray-400 bg-white border border-gray-100 rounded px-2 py-1">
                                06 Oct 2025 – 07 Oct 2025
                            </span>
                            <span className="text-[8px] text-gray-400 bg-white border border-gray-100 rounded px-2 py-1">
                                Last 30 days
                            </span>
                            <span className="text-[8px] text-[#5B2D8E] font-semibold cursor-pointer">↑ Export</span>
                        </div>
                    </div>

                    {/* KPI cards */}
                    <div className="grid grid-cols-4 gap-2">
                        {kpis.map((k) => (
                            <div key={k.label} className="bg-white rounded-xl p-2.5 border border-gray-100">
                                <div className="flex items-center justify-between mb-1.5">
                                    <p className="text-[8px] text-gray-400 leading-tight">{k.label}</p>
                                    <span className="text-gray-200">
                                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-[15px] font-bold text-gray-900 leading-none mb-1">{k.value}</p>
                                <p className={`text-[8px] font-semibold ${k.up ? "text-green-500" : "text-red-400"}`}>
                                    {k.change}{" "}
                                    <span className="text-gray-400 font-normal">from last month</span>
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-5 gap-2">
                        {/* Bar chart card */}
                        <div className="col-span-3 bg-white rounded-xl p-3 border border-gray-100">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <p className="text-[8px] text-gray-400 mb-0.5">Total PPM Tasks</p>
                                    <p className="text-[14px] font-bold text-gray-900 leading-none">
                                        1,525{" "}
                                        <span className="text-[8px] text-green-500 font-semibold">+20.1%</span>
                                    </p>
                                    <p className="text-[7px] text-gray-400 mt-0.5">from last month</p>
                                </div>
                                <span className="text-[8px] text-gray-400 bg-gray-50 border border-gray-100 rounded px-1.5 py-0.5">
                                    Last 30 days
                                </span>
                            </div>
                            <div style={{ height: "68px" }}><BarChart /></div>
                        </div>

                        {/* Line chart card */}
                        <div className="col-span-2 bg-white rounded-xl p-3 border border-gray-100">
                            <p className="text-[8px] text-gray-400 mb-0.5">Compliance Rate</p>
                            <p className="text-[14px] font-bold text-gray-900 leading-none mb-0.5">
                                91.4%{" "}
                                <span className="text-[8px] text-green-500 font-semibold">+5.2%</span>
                            </p>
                            <p className="text-[7px] text-gray-400 mb-2">from last month</p>
                            <div style={{ height: "52px" }}><LineChart /></div>
                        </div>
                    </div>

                    {/* Table section */}
                    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                        {/* Table header */}
                        <div className="flex items-center justify-between px-3 pt-3 pb-1">
                            <span className="text-[11px] font-bold text-gray-800">Recent Work Orders</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[8px] text-[#5B2D8E] font-semibold cursor-pointer">⊙ View all</span>
                                <span className="text-[8px] text-gray-400 bg-gray-50 border border-gray-100 rounded px-1.5 py-0.5">
                                    Last 30 days
                                </span>
                                <span className="text-[8px] text-[#5B2D8E] font-semibold cursor-pointer">↑ Export</span>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-0 px-3 border-b border-gray-100">
                            {TABS.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className="flex items-center gap-1 text-[9px] font-semibold pb-2 pt-1 px-2 whitespace-nowrap transition-colors"
                                    style={{
                                        color: activeTab === tab ? "#5B2D8E" : "#9CA3AF",
                                        borderBottom: activeTab === tab ? "2px solid #5B2D8E" : "2px solid transparent",
                                    }}
                                >
                                    {tab}
                                    {tab === "Pending" && (
                                        <span className="bg-[#5B2D8E] text-white rounded-full px-1 text-[7px] font-bold">2</span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Table head */}
                        <div
                            className="grid px-3 py-1.5 text-[8px] font-bold text-gray-400 uppercase tracking-wide border-b border-gray-50"
                            style={{ gridTemplateColumns: "2fr 1.2fr 1fr 1.2fr 1fr" }}
                        >
                            <span>Site Name</span>
                            <span>Date</span>
                            <span>Price</span>
                            <span>Category</span>
                            <span>Status</span>
                        </div>

                        {/* Rows */}
                        {rows.length === 0 ? (
                            <p className="text-[9px] text-gray-400 text-center py-4">No records</p>
                        ) : (
                            rows.map((row, i) => {
                                const st = STATUS[row.status];
                                return (
                                    <div
                                        key={i}
                                        className="grid items-center px-3 py-2 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                                        style={{ gridTemplateColumns: "2fr 1.2fr 1fr 1.2fr 1fr" }}
                                    >
                                        <span className="text-[9px] font-semibold text-gray-700 truncate pr-1">
                                            {row.site}
                                        </span>
                                        <span className="text-[9px] text-gray-400">{row.date}</span>
                                        <span className="text-[9px] text-gray-600 font-medium">$25.00</span>
                                        <span className="text-[9px] text-gray-500">{row.cat}</span>
                                        <span
                                            className="inline-flex items-center gap-1 text-[8px] font-bold rounded-full px-1.5 py-0.5 w-fit"
                                            style={{ color: st.color, backgroundColor: st.bg }}
                                        >
                                            <span
                                                className="w-1 h-1 rounded-full shrink-0"
                                                style={{ backgroundColor: st.color }}
                                            />
                                            {row.status}
                                        </span>
                                    </div>
                                );
                            })
                        )}

                        {/* Pagination */}
                        <div className="flex justify-end gap-1 px-3 py-2">
                            {["«", "‹", "›", "»"].map((ch) => (
                                <button
                                    key={ch}
                                    className="w-5 h-5 rounded text-[10px] text-gray-400 hover:bg-gray-100 flex items-center justify-center transition-colors"
                                >
                                    {ch}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>{/* end scrollable body */}
            </div>{/* end main content */}
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   ARROW ICON
═══════════════════════════════════════════════════════════ */

function ArrowIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

/* ═══════════════════════════════════════════════════════════
   WHO WE ARE — PAGE SECTION
═══════════════════════════════════════════════════════════ */

export default function WhoWeAre() {
    return (
        <div style={{ fontFamily: "var(--font-dm-sans,'DM Sans',sans-serif)" }} className="bg-white">

            <section className="border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">

                        {/* ── LEFT: copy ─────────────────────────────── */}
                        <div className="lg:sticky lg:top-28">
                            <div className="flex items-center gap-2 mb-5">
                                <span className="h-px w-6 bg-[#1fa279]" />
                                <span className="text-sm font-bold tracking-wide uppercase text-[#1fa279]">
                                    Who We Are
                                </span>
                            </div>

                            <h2
                                className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl mb-6"
                                style={{
                                    color: "#5B2D8E",
                                    fontFamily: "var(--font-dm-serif,'DM Serif Display',serif)",
                                }}
                            >
                                Built for FM,{" "}
                                <span style={{ color: "#1fa279" }}>Not Retrofitted</span>{" "}
                                for It
                            </h2>

                            <p className="text-sm leading-6 text-[#33363c] max-w-[480px] mb-4 md:text-base md:leading-7">
                                <span className="font-semibold text-[#202126]">FusionEdge Services Pvt. Ltd.</span> is an
                                AI-powered digital asset management ecosystem headquartered across Singapore and India.
                            </p>
                            <p className="text-sm leading-6 text-[#33363c] max-w-[480px] mb-4 md:text-base md:leading-7">
                                Unlike horizontal enterprise platforms retrofitted for facility management, every FusionEdge
                                module is architected from the ground up for the realities of integrated FM operations. Each
                                module works independently while sharing a common data layer — enabling organisations to
                                deploy what they need today and expand seamlessly as priorities evolve.
                            </p>
                            <p className="text-sm leading-6 text-[#33363c] max-w-[460px] mb-9 md:text-base md:leading-7">
                                We serve enterprise clients across corporate campuses, commercial real estate, healthcare
                                facilities, hospitality, and critical infrastructure — delivering measurable operational
                                outcomes quickly and without disruption.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <Link
                                    href="/request-demo"
                                    className="inline-flex items-center gap-2 px-5 py-[11px] bg-[#5B2D8E] text-white text-[13px] font-semibold rounded-[6px] no-underline transition-all duration-200 hover:bg-[#1fa279] hover:shadow-lg hover:shadow-[#1fa279]/25 hover:-translate-y-0.5"
                                >
                                    Request a Demo <ArrowIcon />
                                </Link>
                                <Link
                                    href="/platform"
                                    className="inline-flex items-center gap-2 px-5 py-[11px] text-gray-700 text-[13px] font-semibold rounded-[6px] border border-gray-200 no-underline transition-all duration-200 hover:border-gray-400 hover:text-gray-900 hover:-translate-y-0.5"
                                >
                                    Explore the Platform
                                </Link>
                            </div>
                        </div>

                        {/* ── RIGHT: FM Dashboard ─────────────────────── */}
                        <div className="w-full">
                            <FMDashboard />
                        </div>

                    </div>
                </div>
            </section>

            <Featuressection />
        </div>
    );
}