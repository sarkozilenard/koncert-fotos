import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { services, site, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Szolgáltatások",
  description:
    "Koncertfotózás, eseményfotózás és zenekari promóciós fotózás Szegeden és környékén.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Szolgáltatások"
        title="Professzionális koncertfotózás Szegeden."
        text="Koncert- és eseményfotósként professzionális, hangulatot visszaadó képeket készítek koncertekről, fesztiválokról és privát rendezvényekről. Célom, hogy a pillanat energiáját és érzelmeit látványos, utómunka során finomhangolt fotókon adjam vissza."
      />

      <div>
        {services.map((service, index) => (
          <section
            key={service.num}
            className={index % 2 === 1 ? "bg-white" : undefined}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <p className="font-display text-4xl text-blue">{service.num}</p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-navy">
                  {service.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">{service.text}</p>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-navy">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-display text-4xl">Hogyan dolgozom</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.num}>
                <p className="text-sm font-semibold tracking-[0.2em] text-sky-300">
                  {step.num}
                </p>
                <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{step.text}</p>
              </article>
            ))}
          </div>
          <Button asChild variant="light" className="mt-12">
            <Link href="/kapcsolat">Időpontot egyeztetek</Link>
          </Button>
          <p className="mt-4 text-sm text-white/60">{site.email}</p>
        </div>
      </section>
    </>
  );
}
