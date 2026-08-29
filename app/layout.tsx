import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import Analytics from "../src/components/Analytics";
import en from "../src/locales/en.json";
import pt from "../src/locales/pt.json";
import { resolveLocale } from "../src/lib/locale";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://henriqzimer.com.br";
const IS_STATIC_MODE = process.env.CF_BUILD_MODE === "static";

const localeDict = {
  pt,
  en,
} as const;

function seoContent(locale: "pt" | "en") {
  const dict = localeDict[locale];

  return {
    title: `Henrique Zimermann | ${dict.seo.specialty}`,
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    siteName: "Henrique Zimermann",
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = IS_STATIC_MODE
    ? "pt"
    : resolveLocale({
        cookieLocale: (await cookies()).get("i18next")?.value,
        acceptLanguage: (await headers()).get("accept-language"),
      });

  const seo = seoContent(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      shortcut: ["/icon.svg"],
      apple: [{ url: "/icon.svg" }],
    },
    keywords: seo.keywords,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: SITE_URL,
      siteName: seo.siteName,
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Henrique Zimermann",
  url: SITE_URL,
  image: "https://github.com/HenriqZimer.png",
  jobTitle: "DevSecOps e SRE",
  worksFor: {
    "@type": "Organization",
    name: "Fluid API",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade do Vale do Itajaí (UNIVALI)",
  },
  knowsAbout: [
    "AWS",
    "Kubernetes",
    "Terraform",
    "DevSecOps",
    "Site Reliability Engineering",
    "Cloud Computing",
    "Observabilidade",
  ],
  sameAs: [
    "https://github.com/HenriqZimer",
    "https://linkedin.com/in/henrique-zimermann",
    "https://www.youtube.com/@henriqzimer",
    "https://www.instagram.com/_henriqzimer/",
    "https://builder.aws.com/community/@henriqzimer",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localeFromHeader = IS_STATIC_MODE ? "pt" : (await headers()).get("x-locale");
  const locale = localeFromHeader === "en" ? "en" : "pt";

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
