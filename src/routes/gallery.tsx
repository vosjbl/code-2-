import { createFileRoute } from "@tanstack/react-router";

import { salon, work } from "@/lib/salon";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Style Inspiration | Santosha Hair Salon" },
      {
        name: "description",
        content:
          "See hairstyle, lash, and salon photos from Santosha Hair Salon in Hilo.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="eyebrow">A little inspiration</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-tight text-primary md:text-7xl">
        Find a look you <em>love.</em>
      </h1>
      <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
        Real work and salon photos from Santosha. Call to discuss a look that
        suits your hair and style.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {work.map((item) => (
          <figure key={item.src}>
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <a
        href={salon.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex border-b border-primary pb-1 font-display text-xl italic text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        View Santosha on Google Maps
      </a>
    </main>
  );
}
