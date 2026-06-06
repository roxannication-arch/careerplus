# CareerPlus website

Multi-page Next.js website for CareerPlus, built with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Mobile-first responsive UI
- Vercel-ready project structure

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Site structure

- `/` — Home
- `/services` — CareerPlus DFY
- `/how-we-work` — Process
- `/courses` — Courses list
- `/courses/work-abroad` — First course page
- `/contact` — Contact
- `/en` — English placeholder route

## How to add a new course

1. Open `lib/courses.ts`.
2. Add a new object to the `courses` array:

```ts
{
  slug: "new-course",
  title: "Название курса",
  description: "Короткое описание",
  duration: "6 уроков",
  format: "видео + шаблоны",
  price: "от $99",
  href: "/courses/new-course"
}
```

3. Create a page at `app/courses/new-course/page.tsx`.
4. Reuse existing components (`Container`, `SectionHeader`, `PricingCard`, `FAQ`) to keep the design consistent.

## How to replace Whop links

Whop placeholder URLs live in `lib/site.ts`:

```ts
whop: {
  course: "...",
  review: "...",
  premium: "..."
}
```

Replace each URL with the final SKU URL. The course hero, pricing cards, and final CTA will update automatically.

## Contacts and social links

Email, Telegram, Instagram, Threads, and Calendly placeholder links are also in `lib/site.ts`.

## i18n notes

Russian is the default locale. The `lib/i18n.ts` file defines supported locales (`ru`, `en`), and `/en` is reserved as a placeholder route for future English pages. To add full English content, mirror the route structure with localized content modules and point the header language switcher to the translated route.
