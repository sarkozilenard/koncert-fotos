import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { about, audiences, portrait, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rólam",
  description: about.short,
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Rólam"
        title="A színpadról és a közönség soraiból."
        text={about.short}
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12">
        <Reveal className="space-y-6 text-lg leading-8 text-navy/85 lg:col-span-6">
          <p>{about.story}</p>
          <p>{about.practice}</p>
          <blockquote className="border-l-2 border-blue py-1 pl-5 font-display text-3xl leading-snug text-navy">
            {about.quote}
          </blockquote>
        </Reveal>
        <Reveal className="lg:col-span-6" delay={100}>
          <div className="group relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-navy">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[center_38%] transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/40 to-transparent px-6 py-6 text-white">
              <p className="font-display text-3xl">{site.photographer}</p>
              <p className="mt-1 text-sm text-white/75">{site.role} · {site.city}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-display text-4xl text-navy">Kiknek fotózom</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {audiences.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
              <article className="border-t-2 border-blue pt-5">
                <h3 className="font-display text-2xl text-navy">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{item.text}</p>
              </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 rounded-[1.75rem] border border-line bg-mist p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-2xl text-navy">{site.fullName}</p>
              <p className="mt-1 text-sm text-muted">
                {site.area} · {site.instagram}
              </p>
            </div>
            <Button asChild>
              <Link href="/kapcsolat">Írj egy fellépésről</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
