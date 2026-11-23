import { createRootRoute, HeadContent, Link, Outlet } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { salon } from "@/lib/salon";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f7f5ef" },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <HeadContent />
      <header className="border-b border-border">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5"
        >
          <Link to="/" className="font-display text-2xl font-semibold text-primary">
            Santosha <span className="font-normal italic">Hair Salon</span>
          </Link>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <Link to="/services" className="hover:text-primary">
              Services
            </Link>
            <Link to="/gallery" className="hover:text-primary">
              Gallery
            </Link>
            <a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-1 hover:text-primary sm:flex">
              Find us <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl">{salon.name}</p>
            <p className="mt-1 text-sm text-primary-foreground/75">
              {salon.street} · {salon.city}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {salon.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/85 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={salon.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary-foreground/85 hover:text-white"
            >
              View map <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
