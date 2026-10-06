# Nails By Rayma

A five-page luxury nail studio application built with Next.js 16, React 19, TypeScript, Tailwind CSS, GSAP and Radix UI.

Includes the three-second arrival screen, video hero, responsive pricing, a filterable lookbook, four-step appointment form, working mobile menu and WhatsApp enquiries at +91 9101035255.

## Run locally

Use Node.js 22.13+ and pnpm:

```
pnpm install
pnpm dev
```

For a production build, run `pnpm build`, then `pnpm start`.

## Deploy to Vercel

Import this repository using the **Next.js** framework preset. Root directory: repository root. Build command: `pnpm build`. Leave the output directory at the default `.next`. `vercel.json` supplies the build settings.

This version uses standard `next build --webpack`, producing `.next/routes-manifest.json` and Vercel-compatible output. The earlier Cloudflare/Vinext build remains in the original ChatGPT Site; it is no longer the default build in this GitHub repository.

## Appointment and contact requests

Without database credentials, validated requests prepare a WhatsApp message for the visitor to send to the studio. The UI does not claim the request was saved or sent until the relevant action is completed. Availability and final pricing require studio confirmation.

Optional durable storage uses the Cloudflare D1 REST API. Configure these server-only environment variables in Vercel:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_D1_DATABASE_ID`
- `CLOUDFLARE_D1_API_TOKEN` (restricted to D1 access for the intended account)

Apply the checked-in `drizzle/*.sql` migrations to that D1 database. With storage connected, appointment/contact/newsletter requests are saved. Without it, newsletter signup reports that it is not connected. No API credentials are committed or sent to the browser. Do not configure these variables with a `NEXT_PUBLIC_` prefix.

## Pages

- `/index.html`: Home
- `/services.html`: Services and pricing
- `/gallery.html`: Lookbook
- `/booking.html`: Appointment requests
- `/about.html`: Story and contact

Studio address, Instagram handle and confirmed rates still need updating. Testimonials are labelled as samples. Email/SMS notifications are not connected. Photo and video source records are in `asset-sources.json`.
