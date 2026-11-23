# Santosha Hair Salon

Website for Santosha Hair Salon in Hilo, Hawaiʻi, built with React, TanStack
Router, TypeScript, and Vite.

## Run locally

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The production files are written to `dist/`.

## Deploy with Vercel

The project is configured for Vercel in `vercel.json`. Import this repository
in Vercel and use the repository root as the project root. Vercel builds with
`npm run build` and publishes `dist/`; the rewrite keeps the client-side routes
working on direct visits.

## Update salon details and photos

Edit contact information, hours, services, and photo references in
`src/lib/salon.ts`. Place replacement image files in `public/images/`.
