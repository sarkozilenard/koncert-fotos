import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { works } from "@/lib/content";

export const metadata: Metadata = {
  title: "Munkáim",
  description:
    "Nyári fesztiválok, klubkoncertek, szabadtéri esték és intim akusztikus fellépések Szegeden és környékén.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Munkáim"
        title="A szegedi zenei élet legintenzívebb pillanatai."
        text="Koncert- és eseményfotósként a szegedi zenei élet és rendezvények legintenzívebb pillanatait örökítem meg. Célom, hogy a fellépők és a közönség energiáját, hangulatát és érzelmeit látványos, profi képeken adjam vissza."
      />

      <div>
        {works.map((work, index) => (
          <section
            key={work.title}
            className="border-b border-line last:border-b-0"
          >
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-12">
              <div
                className={`relative aspect-[4/5] overflow-hidden bg-navy lg:col-span-6 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={work.image.src}
                  alt={work.image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-blue uppercase">
                  0{index + 1}
                </p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-navy">
                  {work.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">{work.text}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border border-line bg-white p-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-3xl text-navy">Nézd meg a képeket.</h2>
            <p className="mt-2 text-muted">
              Válogatás koncertekről, fesztiválokról és különleges eseményekről.
            </p>
          </div>
          <Button asChild>
            <Link href="/galeria">Galéria megnyitása</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
