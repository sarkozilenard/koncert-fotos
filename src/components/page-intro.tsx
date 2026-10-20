export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="border-b border-line bg-white/70">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="animate-rise text-[11px] font-semibold tracking-[0.22em] text-blue uppercase">
          {eyebrow}
        </p>
        <h1 className="animate-rise mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-navy md:text-6xl" style={{ animationDelay: "80ms" }}>
          {title}
        </h1>
        <p className="animate-rise mt-6 max-w-2xl text-lg leading-8 text-muted" style={{ animationDelay: "160ms" }}>{text}</p>
      </div>
    </section>
  );
}
