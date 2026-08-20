# MrBrown Portfolio — App Docs

A one-page portfolio site for an audiovisual producer. Everything runs on the
frontend: the copy lives in a single TypeScript file, and the images/videos
are served from Cloudinary. There's no backend, no database, nothing to break.

---

## 1. What this is

| | |
|---|---|
| App | MrBrown Portfolio |
| Type | Static frontend (Next.js SSG + client components) |
| Framework | Next.js 16.3 (App Router, Turbopack) |
| Language | TypeScript 5 |
| UI | React 19 + Tailwind CSS v4 |
| Animations | framer-motion |
| Media hosting | Cloudinary (images + videos) |
| Contact form | Formspree (plain POST) |

The whole site is static. All the text is edited in `lib/content.ts` and every
asset comes from Cloudinary as a transformed URL. This makes it dead simple to
host anywhere and keeps maintenance to almost zero.

---

## 2. Project layout

```
MrBrown-Portfolio/
└── frontend/
    ├── app/                        # Next.js App Router
    │   ├── layout.tsx              # Root layout: fonts, metadata, theme
    │   ├── page.tsx                # Single page — order of sections
    │   ├── globals.css             # Global styles / Tailwind theme
    │   └── favicon.ico
    ├── components/                 # UI components
    │   ├── Navbar.tsx              # Fixed top nav
    │   ├── Hero.tsx                # Hero with background video
    │   ├── ClientsMarquee.tsx      # Scrolling client logos
    │   ├── About.tsx               # "About me" section
    │   ├── Services.tsx            # Services list
    │   ├── SelectedWork.tsx        # Project grid (filters + videos)
    │   ├── Process.tsx             # Work process steps
    │   ├── ContactFooter.tsx       # Contact form + footer
    │   ├── Eyebrow.tsx             # Small label/eyebrow element
    │   ├── Reveal.tsx              # Scroll-reveal animation wrapper
    │   ├── CloudinaryImage.tsx     # Optimized Cloudinary image
    │   └── ProjectVideo.tsx        # Grid video (plays on hover)
    ├── lib/
    │   ├── content.ts              # ★ ALL editable content lives here
    │   └── cloudinary.ts           # Cloudinary URL helpers
    ├── types/
    │   └── index.ts                # TypeScript types (Project, Service, ...)
    └── public/                     # Static assets
```

---

## 3. Page sections

| Section | Component | Data it uses |
|---|---|---|
| Navbar | `Navbar.tsx` | `profile.name` (initials) |
| Hero | `Hero.tsx` | `profile`, `heroVideoPublicId` |
| Clients | `ClientsMarquee.tsx` | `clients` |
| About | `About.tsx` | `aboutImage`, `aboutBio`, `stats` |
| Services | `Services.tsx` | `services` |
| Work | `SelectedWork.tsx` | `projects` (category filter) |
| Process | `Process.tsx` | `processSteps` |
| Contact | `ContactFooter.tsx` | `profile`, form → Formspree |

The order of the sections is defined in `app/page.tsx`. To move a section up
or down, just reorder the components there.

---

## 4. Editing the content

> Everything you'd normally put in a CMS lives in `frontend/lib/content.ts`.

### 4.1 Profile and general copy

```ts
export const profile: Profile = {
  name: "MALTA ",
  role: "COLOMBIA",
  eyebrow: "PORTFOLIO 2026 · Direction & Production",
  tagline: "VIDEO | POST | AV | BROADCAST",
  presentedBy: "MALTA",
  email: "dilanviersack@gmail.com",
  phone: "+356 99727079",
  socials: [
    { label: "Instagram", href: "..." },
    { label: "WhatsApp", href: "..." },
  ],
};
```

### 4.2 Hero background video

```ts
export const heroImage = "https://res.cloudinary.com/.../video.mov";
export const heroVideoPublicId = "copy_70187F36-A565-461B-B47B-B23B25834C01";
```

The hero uses `heroVideoPublicId` (no file extension). If you remove it, the
hero falls back to `heroImage` as a plain image.

### 4.3 About section

```ts
export const aboutImage = "https://res.cloudinary.com/.../photo.jpg";
export const aboutBio = "Some text. \n\n New paragraph after the blank line.";
```

Use `\n\n` to separate paragraphs — the About component renders them as line
breaks (`whitespace-pre-line`).

### 4.4 Projects (Work Selected)

```ts
export const projects: Project[] = [
  {
    id: "1",
    slug: "new-era",
    title: "NEW ERA",
    category: "Advertising",   // Advertising | Music Video | Documentary | Campaign | Comercial
    client: "DR. JUICE",
    year: 2026,
    imageUrl: "https://res.cloudinary.com/.../video.mov",  // full URL, used as fallback
    videoPublicId: "copy_714ED858-...",  // video plays on hover
  },
];
```

Quick rules:
- **`videoPublicId`** — present means the project shows a video (plays on
  hover, poster generated from the video itself).
- **`publicId`** — present (and no video) means an optimized image is shown.
- **`imageUrl`** — only used as a last-resort fallback.

### 4.5 Services, process steps and clients

`services`, `processSteps` and `clients` are plain arrays — add, remove or
reorder objects and the UI follows the array order. That's the whole "admin
panel", basically.

---

## 5. Cloudinary

### 5.1 Environment variables (`.env.local`)

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="ujht2bsz"
NEXT_PUBLIC_CLOUDINARY_API_KEY="677121161266912"
CLOUDINARY_API_SECRET="tu_api_secret"
NEXT_PUBLIC_FORMSPREE_ENDPOINT="https://formspree.io/f/TU_FORM_ID"
```

`CLOUDINARY_API_SECRET` is server-only (never shipped to the browser). The
`NEXT_PUBLIC_*` ones are safe to expose — they're baked into the client bundle.

### 5.2 URL helpers (`lib/cloudinary.ts`)

| Function | What it does |
|---|---|
| `imageUrl()` | Optimized image URL (auto format + quality) |
| `videoUrl()` | **MP4** video URL (plays everywhere) |
| `posterUrl()` | Poster frame pulled from the video (`so_N.0,pg_1`) |
| `hlsUrl()` | Adaptive HLS streaming URL (`sp_auto`) |

One gotcha that's cost me time before: `videoUrl()` forces `format: "mp4"`.
With `format: "auto"` Cloudinary sometimes returns HLS (`.m3u8`), and a plain
`<video>` tag won't play that.

### 5.3 Components

- `CloudinaryImage` — optimized image via `<CldImage>`.
- `ProjectVideo` — grid video, plays on hover, with poster.
- (There used to be a `CloudinaryVideo` player component, but nothing used it,
  so it's gone.)

---

## 6. Contact form

`ContactFooter.tsx` POSTs the form to a Formspree endpoint:

```ts
const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
  method: "POST",
  headers: { Accept: "application/json" },
  body: JSON.stringify(form),
});
```

The button cycles through `idle → sending → sent`, and shows an error message
if the request fails.

**One-time setup:**
1. Create a free form at https://formspree.io
2. Copy your endpoint (`https://formspree.io/f/xxxx`)
3. Put it in `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local`
4. In the Formspree dashboard, turn on email notifications so messages reach
   your inbox

---

## 7. Local development

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

| Script | Command | What it does |
|---|---|---|
| Dev server | `npm run dev` | Hot reload, ready in a second |
| Production build | `npm run build` | Compiles and optimizes |
| Serve build | `npm start` | Runs the production build |
| Lint | `npm run lint` | ESLint |
| Typecheck | `npx tsc --noEmit` | TypeScript check |

---

## 8. Deploying

The site is static, so Vercel, Netlify or Cloudflare Pages all work fine.

### Vercel (easiest)

1. Import the repo `kevinbarrios22/MrBrown-Portfolio`.
2. Framework preset: **Next.js**. Build command: `npm run build`.
3. Add the environment variables (same as `.env.local`):
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - `NEXT_PUBLIC_CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
4. Hit deploy.

---

## 9. Common issues

| Symptom | Cause | Fix |
|---|---|---|
| Video won't play | URL uses `format: auto` (HLS) | Use `videoUrl()` which forces MP4 |
| Video doesn't start on hover | Overlay is catching mouse events | Overlays use `pointer-events-none` |
| Image says "Resource not found" | The `publicId` was deleted | Check your Cloudinary Media Library |
| Contact form does nothing | No Formspree endpoint set | Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` |