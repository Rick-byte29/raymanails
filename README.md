# Nails By Rayma

Luxury five-page nail studio application with responsive layouts, a three-second loading screen, video hero, pricing calculator, filtered lookbook, multi-step appointment requests, and WhatsApp enquiries (+91 9101035255).

## Stack
React 19, TypeScript, Tailwind CSS, GSAP, Radix UI, and Vinext. Hosted on Cloudflare Workers through ChatGPT Sites, with D1 for appointment, contact and newsletter requests.

## Development
Use Node.js 22.13 or later and pnpm. Run `pnpm install`, then `pnpm dev`. Generate schema migrations with `pnpm db:generate`, and build with `pnpm build`.

The project uses Cloudflare runtime bindings. Provision a D1 binding named `DB` and apply the checked-in Drizzle migrations when deploying outside Sites. This is a Worker application; it needs runtime adaptation before deploying to a different host such as Vercel.

## Content
Studio address, Instagram handle and confirmed rates still need updating. Testimonials are labelled as samples. Appointment submissions are requests, not confirmed reservations. Email/SMS notifications are not connected.

## Pages
- `/index.html`: Home
- `/services.html`: Services and pricing
- `/gallery.html`: Lookbook
- `/booking.html`: Appointment requests
- `/about.html`: Story and contact

Photo and video source records are in `asset-sources.json`.
