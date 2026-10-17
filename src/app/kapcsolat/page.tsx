import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description:
    "Vedd fel a kapcsolatot, ha profi koncert- vagy eseményfotózásra van szükséged Szegeden vagy a környéken.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Kapcsolat"
        title="Írj, ha szól a zene."
        text="Vedd fel velem a kapcsolatot, ha profi koncert- vagy eseményfotózásra van szükséged Szegeden vagy a környéken."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-12">
        <aside className="space-y-8 lg:col-span-4">
          <ContactLine
            icon={<Mail className="size-4" />}
            label="E-mail"
            value={site.email}
            href={`mailto:${site.email}`}
          />
          <ContactLine
            icon={<InstagramMark />}
            label="Instagram"
            value={site.instagram}
            href={site.instagramUrl}
          />
          <ContactLine
            icon={<MapPin className="size-4" />}
            label="Helyszín"
            value={site.area}
          />
          <p className="text-sm leading-6 text-muted">
            Zenekaroknak, szervezőknek és magánügyfeleknek fotózom. Minél előbb írsz a dátumról és a helyszínről, annál biztosabban tudok ott lenni.
          </p>
        </aside>
        <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-sm md:p-8 lg:col-span-8">
          <h2 className="font-display text-3xl text-navy">Ajánlatkérés</h2>
          <p className="mt-2 mb-8 text-sm text-muted">
            A mezők kitöltése után a leveleződben nyílik meg a vázlat.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactLine({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const body = (
    <>
      <span className="mt-0.5 text-blue">{icon}</span>
      <span>
        <span className="block text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
          {label}
        </span>
        <span className="mt-1 block text-lg text-navy">{value}</span>
      </span>
    </>
  );

  if (!href) {
    return <div className="flex gap-3">{body}</div>;
  }

  return (
    <a href={href} className="flex gap-3 hover:text-blue" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {body}
    </a>
  );
}

function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
