import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-5 py-24 md:px-8">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-blue uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-5xl text-navy">Ez az oldal nincs a setlisten.</h1>
      <p className="mt-4 text-lg text-muted">
        A keresett cím nem létezik. A galéria és a kapcsolat oldal viszont igen.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/">Kezdőlap</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/galeria">Galéria</Link>
        </Button>
      </div>
    </section>
  );
}
