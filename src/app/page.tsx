import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GalleryBrowser } from "@/components/gallery-browser";
import { Button } from "@/components/ui/button";
import {
  about,
  featuredPhotos,
  services,
  site,
  works,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="px-3 pt-3 md:px-6 md:pt-5">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[1.75rem] bg-navy text-white shadow-[0_24px_60px_-32px_rgba(18,26,51,0.7)] lg:min-h-[calc(100svh-6.5rem)] lg:grid-cols-2">
          <div className="flex min-w-0 flex-col justify-between px-5 py-12 md:px-8 lg:py-16 lg:pr-12">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-sky-200 uppercase">
              <span className="size-1.5 rounded-full bg-sky-300" />
              {site.city} · koncertfotós
            </p>
            <div className="mt-10 lg:mt-0">
              <h1 className="font-display text-[2rem] leading-[0.98] min-[400px]:text-[2.2rem] sm:text-[2.75rem] lg:text-[2.9rem] xl:text-[3.35rem]">
                Felejthetetlen
                <br />
                pillanatok,
                <br />
                örök
                <br />
                koncertemlékek.
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-white/75">
                {site.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="light" size="lg">
                  <Link href="/kapcsolat">Lépj velem kapcsolatba</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border border-white/25 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/galeria">Galéria</Link>
                </Button>
              </div>
            </div>
            <p className="mt-12 text-sm text-white/55">
              {site.photographer} · {site.role}
            </p>
          </div>
          <div className="relative min-h-[78vw] sm:min-h-[420px] lg:min-h-full">
            <Image
              src="/photos/byealex.jpg"
              alt="Énekes a színpadon, fehér fénycsóvák előtt."
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-[center_20%]"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-3 px-3 py-4 sm:grid-cols-3 md:px-6">
          {[
            ["Szeged és környéke", "Klubok, fesztiválok, szabadtéri esték"],
            ["Élő zene", "A színpad és a közönség egy képen"],
            ["Finomhangolt utómunka", "A hangulat megmarad, nem csak a dokumentum"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl bg-white px-5 py-7 shadow-sm md:px-7"
            >
              <p className="font-display text-2xl text-navy">{title}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
        <div className="relative lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-navy">
            <Image
              src="/photos/fesztival.jpg"
              alt="Fesztiválközönség a színpad előtt, alkonyati fényben."
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 hidden w-40 overflow-hidden rounded-3xl border-4 border-mist bg-navy sm:block md:w-48">
            <div className="relative aspect-[3/4]">
              <Image
                src="/photos/lila.jpg"
                alt="Klubkoncert lila fényben."
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 lg:pl-6">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-blue uppercase">
            Rólam röviden
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-navy">
            A pillanat energiája, ne csak a dokumentum.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">{about.short}</p>
          <Button asChild variant="link" className="mt-6">
            <Link href="/rolam">
              Rólam <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-blue uppercase">
                Szolgáltatások
              </p>
              <h2 className="mt-3 max-w-xl font-display text-4xl text-navy md:text-5xl">
                Professzionális koncertfotózás Szegeden.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/szolgaltatasok">Összes szolgáltatás</Link>
            </Button>
          </div>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <article
                key={service.num}
                className="grid gap-6 py-8 md:grid-cols-12 md:items-center"
              >
                <p className="font-display text-3xl text-blue md:col-span-1">
                  {service.num}
                </p>
                <h3 className="font-display text-3xl text-navy md:col-span-5">
                  {service.title}
                </h3>
                <p className="text-base leading-7 text-muted md:col-span-6">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-blue uppercase">
              Válogatás
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">
              Koncert- és eseményfotók
            </h2>
          </div>
          <Button asChild variant="link">
            <Link href="/galeria">
              Teljes galéria <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <GalleryBrowser photos={featuredPhotos} showFilters={false} />
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-300 uppercase">
            Munkáim
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">
            Négy hangulat, amiben otthon vagyok.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {works.map((work) => (
              <Link
                key={work.title}
                href="/munkaim"
                className="group overflow-hidden rounded-[1.75rem] bg-[#182240]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={work.image.src}
                    alt={work.image.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{work.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{work.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-8 rounded-[1.75rem] bg-blue px-6 py-12 text-white shadow-[0_20px_50px_-28px_rgba(47,107,255,0.9)] md:grid-cols-12 md:px-12">
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Ha szól a zene Szegeden, írj.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/80">
              Vedd fel velem a kapcsolatot, ha profi koncert- vagy eseményfotózásra van szükséged Szegeden vagy a környéken.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button asChild variant="light" size="lg">
              <Link href="/kapcsolat">Kapcsolat</Link>
            </Button>
            <p className="mt-4 text-sm text-white/80">{site.email}</p>
          </div>
        </div>
      </section>
    </>
  );
}
