# MrBrown Portfolio

A one-page portfolio site for an audiovisual producer, built with **Next.js 16 + React 19 + Tailwind CSS v4**. All the media lives on Cloudinary and the contact form goes through Formspree.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **Tailwind CSS v4**
- **framer-motion** for animations
- **Cloudinary** for images and videos
- **Formspree** for the contact form

## Running it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` file inside `frontend/`:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
NEXT_PUBLIC_CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
NEXT_PUBLIC_FORMSPREE_ENDPOINT="https://formspree.io/f/your_form_id"
```

The three Cloudinary values come from your Cloudinary dashboard (Product
Environment Credentials). The Formspree endpoint comes from the form you create
at formspree.io.

## Where things live

```
frontend/
├── app/               pages and layout (Next.js App Router)
├── components/        UI components (Hero, About, SelectedWork, ...)
├── lib/
│   ├── cloudinary.ts  Cloudinary URL helpers (imageUrl, videoUrl, posterUrl, hlsUrl)
│   └── content.ts     ALL the portfolio content (projects, profile, services)
└── types/             TypeScript types
```

All the text, projects and videos are edited in `lib/content.ts` — there's no
CMS or backend. Images and videos are served from Cloudinary.

For more detail, see [docs/APP.md](docs/APP.md).

## Scripts

| Action | Command |
|---|---|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Serve build | `npm start` |
| Lint | `npm run lint` |

## Deploying

The site is fully static, so it works on Vercel, Netlify or Cloudflare Pages
out of the box. Just configure the same environment variables on the platform
you pick and you're done.