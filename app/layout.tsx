import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import ClickDontPrintPopup from "./components/ClickDontPrintPopup";

// ── Fonts ──────────────────────────────────────────────────────────────────

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

// ── SEO Metadata ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core ────────────────────────────────────────────────────────────────
  title: {
    default: "FusionEdge | AI-Powered Facility Management Platform",
    template: "%s | FusionEdge",
  },
  description:
    "FusionEdge is an AI-powered digital asset and integrated facility management platform. Purpose-built for enterprise FM — asset lifecycle, PPM, smart ticketing, compliance, ESG, and more. Cloud-native. Mobile-first. Deployed fast.",
  keywords: [
    "facility management software",
    "CAFM",
    "AI-powered FM platform",
    "digital asset management",
    "integrated facility management",
    "preventive maintenance software",
    "smart ticketing system",
    "ESG reporting software",
    "compliance management",
    "SaaS facility management",
    "FusionEdge",
    "FM tech",
    "enterprise facility operations",
    "digital transformation FM",
    "asset register software",
  ],
  authors: [{ name: "FusionEdge Services Pvt. Ltd.", url: "https://www.fusionedge.io" }],
  creator: "FusionEdge Services Pvt. Ltd.",
  publisher: "FusionEdge Services Pvt. Ltd.",
  category: "Software Development",

  // ── Canonical & Alternates ───────────────────────────────────────────────
  metadataBase: new URL("https://www.fusionedge.io"),
  alternates: {
    canonical: "/",
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: "https://www.fusionedge.io",
    siteName: "FusionEdge",
    title: "FusionEdge | AI-Powered Facility Management Platform",
    description:
      "Purpose-built for enterprise FM. Asset lifecycle, PPM, smart ticketing, compliance, ESG and more — in one cloud-native, mobile-first platform.",
    images: [
      {
        url: "/FusionEdge_logo.png",          // place a 1200×630 image in /public
        width: 1200,
        height: 630,
        alt: "FusionEdge — Intelligent Facility Management Platform",
      },
    ],
    locale: "en_IN",
  },

  // ── Twitter / X ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "FusionEdge | AI-Powered Facility Management Platform",
    description:
      "Purpose-built for enterprise FM. Asset lifecycle, PPM, smart ticketing, compliance, ESG and more — in one cloud-native, mobile-first platform.",
    images: ["/FusionEdge_logo.png"],
    site: "@fusionedge_io",
    creator: "@fusionedge_io",
  },

  // ── Robots ───────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification ─────────────────────────────────────────────────────────
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
  // },

  // ── App / PWA ─────────────────────────────────────────────────────────────
  applicationName: "FusionEdge",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/FusionEdge_logo.png" },
      { url: "/FusionEdge_logo.png", type: "image/png" },
      { url: "/FusionEdge_logo.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// ── JSON-LD Structured Data ────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FusionEdge Services Pvt. Ltd.",
  url: "https://www.fusionedge.io",
  logo: "https://www.fusionedge.io/FusionEdge_logo.png",
  description:
    "FusionEdge is an AI-powered digital asset management and integrated facility management platform headquartered across Singapore and India.",
  foundingDate: "2024",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 11, maxValue: 50 },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru East",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9015122212",
    contactType: "customer support",
    areaServed: ["IN", "SG"],
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/fusionedge",
  ],
  knowsAbout: [
    "Facility Management Software",
    "Digital Asset Management",
    "Preventive Maintenance",
    "ESG Reporting",
    "CAFM",
    "SaaS",
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FusionEdge Platform",
  url: "https://www.fusionedge.io",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Contact for enterprise pricing",
  },
  description:
    "AI-powered, cloud-native facility management platform covering asset lifecycle, PPM, smart ticketing, compliance, ESG data collection, and more.",
  featureList: [
    "AI-Powered Intelligence",
    "Digital Asset Register",
    "Preventive Maintenance (PPM)",
    "Smart Ticketing",
    "Digital Work Permit",
    "Visitor Management",
    "Compliance Module",
    "ESG Data Collection",
    "CXO Dashboard",
    "Open API Architecture",
    "QR-Centric Field Operations",
    "Mobile-First with Full Offline Support",
  ],
  provider: {
    "@type": "Organization",
    name: "FusionEdge Services Pvt. Ltd.",
    url: "https://www.fusionedge.io",
  },
};

// ── Root Layout ────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* JSON-LD — SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Chatbot />
        <ClickDontPrintPopup />
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H6PZ31BGJ2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H6PZ31BGJ2');
          `}
        </Script>
      </body>
    </html>
  );
}