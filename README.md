# DigitalSeva

DigitalSeva is a production-ready Next.js marketing website for a prebuilt nonprofit and faith-based organization management platform. The site is designed for `digitalseva.us` and focuses on qualified demo requests for temples, churches, mosques, synagogues, community centers, cultural organizations, charities, and other nonprofits.

## Technology Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide icons
- Nodemailer for lead-form email delivery
- Vercel-ready deployment

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL shown by Next.js.

## Production Build

```bash
npm run build
npm run start
```

## Editable Content

Most marketing content is centralized in:

```text
lib/content.ts
```

Update this file to change:

- Brand details
- Navigation
- Homepage copy
- Organizations served
- Feature cards
- User-group content
- Solutions
- Process steps
- Annual service coverage
- Pricing language
- FAQs
- Lead-form options

## Brand Assets

Current project-local assets are stored in:

```text
public/images/digitalseva-logo.svg
public/images/digitalseva-og.svg
```

Replace these with final approved DigitalSeva logo and social-sharing artwork when available. Keep filenames the same unless you also update `app/layout.tsx`.

## Contact Form Configuration

Copy `.env.example` to `.env.local` for local development and fill in SMTP values:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user@example.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=sam@digitalseva.us
CONTACT_FROM_EMAIL=your-smtp-user@example.com
```

For Gmail or Google Workspace, use an App Password rather than the normal mailbox password.

The contact API lives at:

```text
app/api/contact/route.ts
```

The shared mail logic lives at:

```text
lib/contact.ts
```

## Vercel Deployment

1. Push this project to a Git repository.
2. Import the repository into Vercel.
3. Confirm the project root is the repository root that contains `package.json`.
4. Confirm Vercel detects the framework as Next.js.
5. Set the environment variables from `.env.example`.
6. Deploy the project.
7. Test the generated `*.vercel.app` deployment URL before connecting the custom domain.
8. Add `digitalseva.us` in Vercel project domains.
9. Update DNS records at the domain registrar using Vercel's instructions.
10. Confirm HTTPS is active.
11. Submit `https://digitalseva.us/sitemap.xml` in Google Search Console after launch.

If Vercel shows `404: NOT_FOUND`, first verify that the URL exists in the Vercel dashboard, the
deployment status is ready, the custom domain is assigned to this project, and the project root points
to this folder rather than a parent directory.

## SEO

Site-wide metadata is configured in:

```text
app/layout.tsx
```

Generated sitemap and robots routes:

```text
app/sitemap.ts
app/robots.ts
```

The canonical production domain is set in `lib/content.ts` as `https://digitalseva.us`.

## Legal Pages

Starter privacy and terms pages are included:

```text
app/privacy/page.tsx
app/terms/page.tsx
```

These are not final legal documents. Replace them with attorney-reviewed policies before launch.

## Testimonials

No fake testimonials are rendered. Add approved testimonials to the `testimonials` array in `lib/content.ts` and create a visible testimonial section only after real customer data is available.

## Launch Checklist

- Run `npm run build`.
- Test `/`, `/features`, `/solutions`, `/pricing`, `/demo`, `/about`, `/contact`, `/privacy`, `/terms`, and `/thank-you`.
- Confirm mobile navigation opens and closes.
- Confirm form validation displays errors.
- Confirm SMTP values are configured before production form testing.
- Confirm annual service charges are clearly explained.
- Confirm the site does not claim hosting, maintenance, or payment processing are free.
- Replace starter legal copy with approved policies.
- Replace placeholder email if a different inbox should receive leads.
- Replace project-local brand artwork with final DigitalSeva assets if available.
