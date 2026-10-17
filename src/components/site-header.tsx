"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-mist">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display text-lg leading-none text-navy sm:text-2xl">
            {site.photographer}
          </span>
          <span className="hidden text-[11px] font-semibold tracking-[0.22em] text-blue uppercase sm:inline">
            Koncertfotós
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Főmenü">
          {nav
            .filter((item) => item.href !== "/" && item.href !== "/kapcsolat")
            .map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-navy/80 transition-colors hover:text-blue",
                    active && "text-blue",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/kapcsolat"
            className="hidden h-10 items-center rounded-full bg-blue px-4 text-sm font-semibold text-white transition-colors hover:bg-[#2458e6] lg:inline-flex"
          >
            Kapcsolat
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobil-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Menü bezárása" : "Menü megnyitása"}</span>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobil-menu"
          className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-navy text-white lg:hidden"
        >
          <nav className="flex flex-col px-6 py-8" aria-label="Mobil menü">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b border-white/10 py-4 font-display text-3xl",
                  pathname === item.href && "text-sky-200",
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="mt-8 text-sm tracking-wide text-sky-200"
            >
              {site.email}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
