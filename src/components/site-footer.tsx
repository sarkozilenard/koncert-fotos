import Link from "next/link";
import { nav, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-serif text-4xl">{site.photographer}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Szegedi koncert- és eseményfotós. Élő fellépések, fesztiválok és
            rendezvények, amelyek később is átélhetők.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-300 uppercase">
            Oldalak
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-300 uppercase">
            Kapcsolat
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-sky-200" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="hover:text-sky-200"
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Instagram {site.instagram}
              </a>
            </li>
            <li className="text-white/70">{site.area}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/50 md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {site.name}. Minden jog fenntartva.</p>
          <p>{site.fullName} · {site.city}</p>
        </div>
      </div>
    </footer>
  );
}
