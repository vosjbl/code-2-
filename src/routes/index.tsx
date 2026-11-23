import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Phone } from "lucide-react";

import { HoursList } from "@/components/site/HoursList";
import { Button } from "@/components/ui/button";
import { photos, salon, services, work } from "@/lib/salon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santosha Hair Salon | Hair Services in Hilo" },
      {
        name: "description",
        content:
          "Thoughtful hair services in downtown Hilo. Visit Santosha Hair Salon at 94 Ponahawai Street or call to book.",
      },
      {
        property: "og:title",
        content: "Santosha Hair Salon | Hair Services in Hilo",
      },
      {
        property: "og:description",
        content: "Thoughtful hair services in downtown Hilo, Hawaiʻi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const marqueeItems = [
  "Haircuts",
  "Color",
  "Root touch-ups",
  "Highlights",
  "Smoothing treatments",
  "Women's and men's cuts",
  "Custom foils",
];

function Home() {
  return (
    <>
      <main>
        {/* Hero */}
        <section
          aria-labelledby="home-heading"
          className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-12 md:grid-cols-12 md:pt-20"
        >
          <div className="md:col-span-6">
            <p className="eyebrow fade-up">
              Hair · Color · Smoothing — Downtown Hilo
            </p>

            <h1
              id="home-heading"
              className="fade-up mt-6 text-6xl leading-[0.98] text-primary md:text-[5.5rem]"
            >
              Leave the chair <em className="text-accent">content.</em>
            </h1>

            <p className="fade-up mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
              Good hair days start with feeling listened to. At Santosha, each
              cut, color, and smoothing service gets thoughtful attention, a
              personal touch, and time to get the details right.
            </p>

            <div className="fade-up mt-9 flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="xl">
                {salon.phoneHref ? (
                  <a
                    href={salon.phoneHref}
                    aria-label={`Call Santosha at ${salon.phoneDisplay} to book`}
                  >
                    <Phone aria-hidden="true" />
                    Call to book
                  </a>
                ) : (
                  <a href="#visit-heading">
                    <MapPin aria-hidden="true" />
                    Plan your visit
                  </a>
                )}
              </Button>

              <Button asChild variant="soft" size="xl">
                <Link to="/gallery">
                  Explore the gallery
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="fade-up mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
              <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
              <span>Independent salon · Downtown Hilo</span>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative">
              <div className="relative ml-auto w-[82%]">
                <img
                  src={photos.salonWork}
                  alt="Glossy dark hair styled in soft waves at Santosha Hair Salon"
                  fetchPriority="high"
                  className="arch aspect-[4/5] w-full object-cover shadow-lift"
                />
              </div>

              <div className="absolute -bottom-6 left-0 w-[38%] rounded-2xl border-8 border-background shadow-soft">
                <img
                  src={photos.hairFinish}
                  alt="Smooth, shoulder-length brown hair styled at Santosha Hair Salon"
                  className="aspect-square w-full rounded-lg object-cover"
                />
              </div>
            </div>

            <p className="ml-auto mt-8 max-w-[82%] font-display text-lg italic leading-snug text-primary">
              A look created at Santosha Hair Salon.
            </p>
          </div>
        </section>

        {/* Service marquee */}
        <div
          className="mt-16 overflow-hidden border-y border-border bg-card py-5"
          aria-hidden="true"
        >
          <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl italic text-primary/80">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-10">
                {item}
                <span className="text-lg not-italic text-accent">✺</span>
              </span>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <section
          aria-labelledby="portfolio-heading"
          className="mx-auto max-w-6xl px-6 py-24 md:py-32"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">A little inspiration</p>
              <h2
                id="portfolio-heading"
                className="mt-4 text-5xl leading-none text-primary md:text-6xl"
              >
                Made with <em>care.</em>
              </h2>
            </div>

            <p className="max-w-sm text-muted-foreground">
              A real look from Santosha. Call to talk through the style you have
              in mind and what will work for your hair.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5">
            {work.map((item, index) => (
              <figure
                key={item.src}
                className={
                  index === 0
                    ? "col-span-2 md:col-span-5 md:row-span-2"
                    : index === 1
                      ? "md:col-span-4"
                      : index === 2
                        ? "md:col-span-3"
                        : "col-span-2 md:col-span-7"
                }
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-2xl object-cover md:aspect-auto md:h-full"
                />
                <figcaption className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <Link
            to="/gallery"
            className="group mt-10 inline-flex items-center gap-2 border-b border-primary pb-1 font-display text-xl italic text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            See the full gallery
            <ArrowUpRight
              aria-hidden="true"
              className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </section>

        {/* Services */}
        <section
          aria-labelledby="services-heading"
          className="bg-card"
        >
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
            <div className="md:sticky md:top-32 md:self-start">
              <p className="eyebrow">The menu</p>
              <h2
                id="services-heading"
                className="mt-4 text-5xl leading-[1.02] text-primary"
              >
                Your kind of <em>self-care.</em>
              </h2>
              <p className="mt-6 max-w-sm text-muted-foreground">
                Every appointment starts with a conversation. Call us to talk
                through what you have in mind and get a quote tailored to your
                hair and goals.
              </p>

              <Button asChild variant="forest" size="xl" className="mt-8">
                <Link to="/services">
                  Explore all services
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <ol className="divide-y divide-border border-y border-border">
              {services.map((service) => (
                <li
                  key={service.n}
                  className="grid grid-cols-[3rem_1fr] gap-4 py-7"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-sm italic text-accent"
                  >
                    {service.n}
                  </span>
                  <div>
                    <h3 className="text-2xl text-primary md:text-3xl">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {service.price}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Salon approach */}
        <section
          aria-labelledby="approach-heading"
          className="bg-primary text-primary-foreground"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-end md:py-32">
            <div>
              <p className="eyebrow text-primary-foreground/75">A thoughtful visit</p>
              <h2
                id="approach-heading"
                className="mt-4 font-display text-4xl font-light leading-tight md:text-6xl"
              >
                Good hair days start with a conversation.
              </h2>
            </div>
            <p className="max-w-lg leading-relaxed text-primary-foreground/80">
              Bring your ideas, your questions, and what works for your day-to-day.
              Your appointment is a chance to talk through the details and find an
              approach that feels right for you.
            </p>
          </div>
        </section>

        {/* Visit */}
        <section
          aria-labelledby="visit-heading"
          className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32"
        >
          <img
            src={photos.salonInterior}
            alt="Santosha Hair Salon interior with styling stations and mirrors"
            loading="lazy"
            decoding="async"
            className="arch aspect-[4/5] w-full object-cover shadow-soft"
          />

          <div className="md:pt-8">
            <p className="eyebrow">Your Hilo salon</p>
            <h2
              id="visit-heading"
              className="mt-4 text-5xl leading-[1.02] text-primary"
            >
              A warm welcome on <em>Ponahawai Street.</em>
            </h2>

            <a
              href={salon.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-start gap-3 text-lg text-foreground hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <MapPin
                aria-hidden="true"
                className="mt-1 size-5 shrink-0 text-accent"
              />
              <span>
                {salon.street}
                <br />
                {salon.city}
              </span>
            </a>

            <div className="mt-8">
              <HoursList />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {salon.phoneHref && (
                <Button asChild variant="hero" size="xl">
                  <a
                    href={salon.phoneHref}
                    aria-label={`Call Santosha at ${salon.phoneDisplay}`}
                  >
                    <Phone aria-hidden="true" />
                    {salon.phoneDisplay}
                  </a>
                </Button>
              )}
              <Button asChild variant="soft" size="xl">
                <a
                  href={salon.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}