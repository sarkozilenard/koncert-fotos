"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { categories, type CategoryId, type Photo } from "@/lib/content";
import { cn } from "@/lib/utils";

export function GalleryBrowser({
  photos,
  showFilters = true,
}: {
  photos: Photo[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<"osszes" | CategoryId>("osszes");
  const [active, setActive] = useState<number | null>(null);

  const visible =
    filter === "osszes"
      ? photos
      : photos.filter((photo) => photo.category === filter);

  const current = active === null ? null : visible[active];

  useEffect(() => {
    setActive(null);
  }, [filter]);

  function move(step: number) {
    setActive((index) => {
      if (index === null) return index;
      return (index + step + visible.length) % visible.length;
    });
  }

  return (
    <div>
      {showFilters ? (
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="toolbar"
          aria-label="Galéria szűrők"
        >
          {categories.map((category) => {
            const selected = filter === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(category.id)}
                className={cn(
                  "h-10 rounded-full border px-4 text-sm font-semibold transition-colors",
                  selected
                    ? "border-blue bg-blue text-white"
                    : "border-line bg-white text-navy hover:border-blue hover:text-blue",
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      ) : null}

      {visible.length === 0 ? (
        <p className="rounded-md border border-dashed border-line bg-white px-6 py-16 text-center text-muted">
          Ebben a kategóriában még nincs kép.
        </p>
      ) : (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((photo, index) => (
            <figure key={photo.src} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative block w-full overflow-hidden bg-navy text-left"
                aria-label={`${photo.title}. Nagyítás.`}
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </button>
              <figcaption className="mt-2 flex items-baseline justify-between gap-3 px-0.5">
                <span className="text-sm font-semibold text-navy">{photo.title}</span>
                <span className="text-xs tracking-wide text-muted uppercase">
                  {categories.find((item) => item.id === photo.category)?.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <Dialog.Root
        open={current !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[80] bg-[#06101d]" />
          <Dialog.Content
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 outline-none md:p-10"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") move(1);
              if (event.key === "ArrowLeft") move(-1);
            }}
          >
            {current ? (
              <div className="flex w-full max-w-5xl flex-col items-center">
                <Dialog.Title className="sr-only">{current.title}</Dialog.Title>
                <Dialog.Description className="sr-only">
                  {current.caption}
                </Dialog.Description>
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  className="max-h-[74vh] w-auto max-w-full object-contain"
                />
                <div className="mt-4 flex w-full max-w-3xl items-end justify-between gap-4 text-white">
                  <div>
                    <p className="font-serif text-2xl">{current.title}</p>
                    <p className="mt-1 text-sm text-white/70">{current.caption}</p>
                  </div>
                  <p className="text-sm text-white/60">
                    {(active ?? 0) + 1} / {visible.length}
                  </p>
                </div>
              </div>
            ) : null}

            <Dialog.Close className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X />
              <span className="sr-only">Bezárás</span>
            </Dialog.Close>
            <button
              type="button"
              onClick={() => move(-1)}
              className="absolute top-1/2 left-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-6"
            >
              <ChevronLeft />
              <span className="sr-only">Előző kép</span>
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="absolute top-1/2 right-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-6"
            >
              <ChevronRight />
              <span className="sr-only">Következő kép</span>
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
