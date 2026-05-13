# PomoPivot Landing Page

A modern, responsive marketing landing page for PomoPivot, a minimalist Pomodoro timer focused on deep work. The page highlights product value, features, workflow, testimonials, and a clear CTA, with clean animations and a dark, cinematic aesthetic.

## Overview

This project is built with Next.js (App Router) and Tailwind CSS. It includes a fully responsive layout, animated hero, interactive cards, and a mobile-friendly navigation with a hamburger menu.

## Sections

- Hero: headline, supporting copy, CTA buttons, and product image
- Feature strip and feature cards
- Workflow timeline
- Testimonials carousel
- CTA section
- Footer with product/support/community links

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript

## Project Structure

- App entry point: [app/page.tsx](app/page.tsx)
- Global styles: [app/globals.css](app/globals.css)
- Layout and fonts: [app/layout.tsx](app/layout.tsx)
- UI sections: [components](components)

Key components:

- [components/NavBar.tsx](components/NavBar.tsx)
- [components/HeroSection.tsx](components/HeroSection.tsx)
- [components/FeatureSection.tsx](components/FeatureSection.tsx)
- [components/WorkFlow.tsx](components/WorkFlow.tsx)
- [components/TestimonialsSection.tsx](components/TestimonialsSection.tsx)
- [components/CTASection.tsx](components/CTASection.tsx)
- [components/Footer.tsx](components/Footer.tsx)

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - build for production
- `npm run start` - run the production build
- `npm run lint` - run linting

## Customization

- Update copy and layout in the components listed above.
- Replace the hero image in `public` and update the path in [components/HeroSection.tsx](components/HeroSection.tsx).
- Adjust global animation styles in [app/globals.css](app/globals.css).

## Deployment

Deploy on your preferred platform (Vercel, Netlify, or any Node.js host) after running `npm run build`.
