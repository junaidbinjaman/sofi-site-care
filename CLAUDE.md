# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Next.js dev server
npm run build     # Production build
npm run start     # Start production server
npm test          # Run all tests with Vitest (watch mode)
npx vitest run    # Run tests once (CI mode)
npx vitest run components/dashboardNavItem/DashboardNavItem.test.tsx  # Run a single test file
```

## Architecture

**Sofi Site-Care** is a Next.js App Router dashboard for agencies to manage client web projects. It has a fixed sidebar layout with pages for dashboard, blogs, author, reviews, and contact.

### Routing & Layout

- Uses Next.js App Router (`app/` directory) with file-based routing
- All routes share the `AppSidebar` layout component (fixed left sidebar + header + footer)
- Page-specific content lives in `app/_components/` (e.g., `HeroAreaSection`, `MetaCardsSection`, `ActivitySection`)
- Navigation structure is centrally defined in `lib/navigation.ts` with a `NavItem` type (name, href, icon, description)

### Component Organization

- `components/ui/` — shadcn/ui primitives (button, card, dropdown-menu)
- `components/layout/` — `AppSidebar`, `Header`, `Footer`
- `components/typography/` — typed wrappers (`TypographyH1`–`TypographyH4`, `TypographyP`, etc.)
- Feature components live in their own folders alongside their test files (e.g., `components/dashboardNavItem/`)

### Styling

- Tailwind CSS v4 via `@tailwindcss/postcss`
- Theme colors use oklch CSS variables defined in `styles/globals.css`; dark mode is supported
- Class merging uses `cn()` from `lib/utils.ts` (tailwind-merge + clsx)
- Component variants use Class Variance Authority (CVA)

### Key Libraries

- **Motion** (`motion`) — spring animations on nav items and interactive elements
- **shadcn/ui** + **Radix UI** — accessible UI primitives; configured in `components.json` (style: `radix-nova`, base: `neutral`)
- **React Icons** (`react-icons/tb`, `react-icons/io5`) and `lucide-react` / `@heroicons/react` — icons are passed as React components through props

### Testing

- Vitest + React Testing Library + jsdom
- Setup file: `vitest.setup.ts` (imports `@testing-library/jest-dom`)
- Tests live alongside components, not in `__tests__/`
- Tests cover rendering, active/inactive states, dark mode, and accessibility attributes (`aria-hidden`, `role`)
