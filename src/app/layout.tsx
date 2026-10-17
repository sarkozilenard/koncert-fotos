import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/content";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.photographer}, ${site.city}`,
    template: `%s · ${site.name}`,
  },
  description: site.lead,
  keywords: [
    "koncertfotós",
    "Szeged",
    "eseményfotózás",
    "zenekari fotózás",
    "fesztivál fotó",
    "Zénó Varga",
  ],
  openGraph: {
    title: `${site.name} · ${site.headline}`,
    description: site.lead,
    locale: "hu_HU",
    type: "website",
    siteName: site.name,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.lead,
  email: site.email,
  image: "/photos/byealex.jpg",
  areaServed: site.area,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: "HU",
  },
  founder: {
    "@type": "Person",
    name: site.fullName,
  },
  sameAs: [site.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <a
          href="#tartalom"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
        >
          Ugrás a tartalomra
        </a>
        <SiteHeader />
        <main id="tartalom">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
