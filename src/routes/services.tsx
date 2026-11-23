import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { salon, services } from "@/lib/salon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Santosha Hair Salon" },
      {
        name: "description",
        content:
          "Explore hair services and prices at Santosha Hair Salon in downtown Hilo.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="eyebrow">The menu</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-tight text-primary md:text-7xl">
        Your kind of <em>self-care.</em>
      </h1>
      <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
        Call to discuss your goals, availability, and the final price for your
        service.
      </p>

      <ol className="mt-12 divide-y divide-border border-y border-border">
        {services.map((service) => (
          <li
            key={service.n}
            className="grid grid-cols-[3rem_1fr] gap-4 py-7 md:grid-cols-[4rem_1fr]"
          >
            <span className="font-display text-sm italic text-accent">
              {service.n}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-3xl text-primary">
                  {service.name}
                </h2>
                <p className="text-sm font-medium text-foreground">
                  {service.price}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <Button asChild variant="hero" size="xl" className="mt-10">
        <a href={salon.phoneHref}>
          <Phone aria-hidden="true" />
          Call to book · {salon.phoneDisplay}
        </a>
      </Button>
    </main>
  );
}
