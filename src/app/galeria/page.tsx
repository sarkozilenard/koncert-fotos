import type { Metadata } from "next";
import { GalleryBrowser } from "@/components/gallery-browser";
import { PageIntro } from "@/components/page-intro";
import { photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Galéria",
  description:
    "Válogatott képek Szeged és környéke koncertjeiről, fesztiváljairól és különleges eseményeiről.",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Fotógaléria"
        title="Koncertélmények képekben."
        text="Válogatott képeim Szeged és környéke koncertjeiről, fesztiváljairól és különleges eseményeiről. Kattints egy képre a nagyításhoz."
      />
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <GalleryBrowser photos={photos} />
      </section>
    </>
  );
}
