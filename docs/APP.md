# Documentación de la App — MrBrown Portfolio

Portafolio de productor audiovisual. Aplicación web de una sola página (SPA) de
contenido gestionado por datos locales + medios alojados en Cloudinary.

---

## 1. Descripción general

| Dato             | Valor                                    |
|------------------|------------------------------------------|
| Nombre           | MrBrown Portfolio                        |
| Tipo             | Frontend estático (SSG + cliente)        |
| Framework        | Next.js 16.3 (App Router, Turbopack)     |
| Lenguaje         | TypeScript 5                             |
| UI               | React 19 + Tailwind CSS v4               |
| Animaciones      | framer-motion                            |
| Alojamiento de medios | Cloudinary (imágenes + videos)       |
| Formulario       | Formspree (POST directo)                 |

El sitio es **estático**: no hay backend, ni base de datos, ni API propia.
Todo el texto se edita en `lib/content.ts` y todo el contenido multimedia se
sirve desde Cloudinary mediante URLs transformadas.

---

## 2. Estructura del proyecto

```
MrBrown-Portfolio/
└── frontend/
    ├── app/                        # App Router de Next.js
    │   ├── layout.tsx              # Layout raíz, fuentes, metadata
    │   ├── page.tsx                # Página principal (una sola página)
    │   ├── globals.css             # Estilos globales y tema Tailwind
    │   └── favicon.ico
    ├── components/                 # Componentes de UI
    │   ├── Navbar.tsx              # Barra de navegación fija
    │   ├── Hero.tsx                # Hero con video de fondo
    │   ├── ClientsMarquee.tsx      # Marquee de clientes
    │   ├── About.tsx               # Sección "About me"
    │   ├── Services.tsx            # Sección de servicios
    │   ├── SelectedWork.tsx        # Grid de proyectos (filtros + videos)
    │   ├── Process.tsx             # Proceso de trabajo
    │   ├── ContactFooter.tsx       # Formulario de contacto + pie
    │   ├── Eyebrow.tsx             # Etiqueta pequeña decorativa
    │   ├── Reveal.tsx              # Animación al hacer scroll
    │   ├── CloudinaryImage.tsx     # Imagen optimizada desde Cloudinary
    │   ├── CloudinaryVideo.tsx     # Reproductor de video Cloudinary
    │   └── ProjectVideo.tsx        # Video del grid (reproduce al hover)
    ├── lib/
    │   ├── content.ts              # ★ TODO el contenido editable
    │   └── cloudinary.ts           # Helpers de URLs de Cloudinary
    ├── types/
    │   └── index.ts                # Tipos TypeScript (Project, Service, ...)
    └── public/                     # Assets estáticos
```

---

## 3. Secciones de la página

| Sección          | Componente          | Dato que consume                    |
|------------------|---------------------|-------------------------------------|
| Navbar           | `Navbar.tsx`        | `profile.name` (iniciales)          |
| Hero             | `Hero.tsx`          | `profile`, `heroVideoPublicId`      |
| Clientes         | `ClientsMarquee.tsx`| `clients`                           |
| About            | `About.tsx`         | `aboutImage`, `aboutBio`, `stats`   |
| Servicios        | `Services.tsx`      | `services`                          |
| Trabajo          | `SelectedWork.tsx`  | `projects` (filtro por categoría)   |
| Proceso          | `Process.tsx`       | `processSteps`                      |
| Contacto         | `ContactFooter.tsx` | `profile`, formulario → Formspree   |

El orden de las secciones se define en `app/page.tsx`.

---

## 4. Cómo editar el contenido

> **Todo el contenido se edita en `frontend/lib/content.ts`.**

### 4.1 Perfil y textos generales

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

### 4.2 Video del Hero

```ts
export const heroImage = "https://res.cloudinary.com/.../video.mov";
export const heroVideoPublicId = "copy_70187F36-A565-461B-B47B-B23B25834C01";
```

El video del fondo se toma del `publicId` (sin extensión). Si se borra
`heroVideoPublicId`, el Hero vuelve a usar `heroImage` como imagen.

### 4.3 About me

```ts
export const aboutImage = "https://res.cloudinary.com/.../foto.jpg";
export const aboutBio = "Texto... \n\n Salto de línea entre párrafos.";
```

> Para un salto de línea usa `\n\n`. Los párrafos se separan con líneas vacías.

### 4.4 Proyectos (Work Selected)

```ts
export const projects: Project[] = [
  {
    id: "1",
    slug: "new-era",
    title: "NEW ERA",
    category: "Advertising",          // Advertising | Music Video | Documentary | Campaign | Comercial
    client: "DR. JUICE",
    year: 2026,
    imageUrl: "https://res.cloudinary.com/.../video.mov",  // URL completa (fallback)
    videoPublicId: "copy_714ED858-...",  // publicId del video (reproduce al hover)
  },
];
```

- **`videoPublicId`** — si existe, el proyecto muestra el video (se reproduce al
  pasar el mouse) con poster generado desde el propio video.
- **`publicId`** — si existe (y no hay video), muestra la imagen optimizada.
- Si no hay ninguno, usa `imageUrl` como fallback.

### 4.5 Servicios, proceso y clientes

Los arrays `services`, `processSteps` y `clients` se editan igual: agregar,
quitar o reordenar objetos. La UI los renderiza en el orden del array.

---

## 5. Cloudinary

### 5.1 Variables de entorno (`.env.local`)

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="ujht2bsz"
NEXT_PUBLIC_CLOUDINARY_API_KEY="677121161266912"
CLOUDINARY_API_SECRET="tu_api_secret"
NEXT_PUBLIC_FORMSPREE_ENDPOINT="https://formspree.io/f/TU_FORM_ID"
```

> `CLOUDINARY_API_SECRET` solo se usa en el servidor (nunca se expone al
> navegador). El resto se expone vía `NEXT_PUBLIC_*`.

### 5.2 Helpers (`lib/cloudinary.ts`)

| Función        | Descripción                                            |
|----------------|--------------------------------------------------------|
| `imageUrl()`   | URL de imagen optimizada (format/quality automático)   |
| `videoUrl()`   | URL de video en **MP4** (compatible con navegadores)   |
| `posterUrl()`  | Poster extraído del video (`so_N.0,pg_1`)              |
| `hlsUrl()`     | URL de streaming adaptativo HLS (`sp_auto`)            |

> Importante: `videoUrl()` fuerza `format: "mp4"`. Con `format: "auto"`
> Cloudinary puede devolver HLS (`.m3u8`) que el `<video>` nativo no reproduce.

### 5.3 Componentes

- `CloudinaryImage` — imagen optimizada (`<CldImage>`).
- `CloudinaryVideo` — reproductor con controles (`<CldVideoPlayer>`).
- `ProjectVideo` — video del grid, reproduce al hacer hover, con poster.

---

## 6. Formulario de contacto

`ContactFooter.tsx` envía los datos del formulario por **POST** al endpoint de
Formspree:

```ts
const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
  method: "POST",
  headers: { Accept: "application/json" },
  body: JSON.stringify(form),
});
```

Estados de la UI: `idle` → `sending` → `sent` | `error`.

**Configuración (una vez):**
1. Crear un formulario gratis en https://formspree.io
2. Copiar el endpoint (`https://formspree.io/f/xxxx`)
3. Ponerlo en `NEXT_PUBLIC_FORMSPREE_ENDPOINT` de `.env.local`
4. En el panel de Formspree, habilitar notificaciones por email a tu correo

---

## 7. Desarrollo

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

| Script           | Comando          | Descripción                     |
|------------------|------------------|---------------------------------|
| Desarrollo       | `npm run dev`    | Servidor con hot reload         |
| Build producción | `npm run build`  | Compila y optimiza              |
| Ejecutar build   | `npm start`      | Sirve el build en producción    |
| Lint             | `npm run lint`   | ESLint                          |
| Typecheck        | `npx tsc --noEmit` | Verifica tipos TypeScript     |

---

## 8. Despliegue

El sitio es estático y compatible con Vercel, Netlify o Cloudflare Pages.

### En Vercel (recomendado)

1. Importar el repo `kevinbarrios22/MrBrown-Portfolio`.
2. Framework preset: **Next.js**. Build command: `npm run build`.
3. Configurar las **Environment Variables** (mismas que `.env.local`):
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - `NEXT_PUBLIC_CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
4. Deploy.

---

## 9. Troubleshooting

| Problema                              | Causa                              | Solución                                  |
|---------------------------------------|------------------------------------|-------------------------------------------|
| El video no reproduce                 | URL con `format: auto` (HLS)       | Usar `videoUrl()` que fuerza MP4          |
| El video no arranca al hacer hover    | Overlay bloqueando eventos         | Los overlays tienen `pointer-events-none` |
| Imagen no carga (Resource not found)  | `publicId` ya no existe            | Verificar en la Media Library de Cloudinary |
| El formulario no envía                 | Falta endpoint de Formspree        | Configurar `NEXT_PUBLIC_FORMSPREE_ENDPOINT` |
| Build falla en Maven                  | JAVA_HOME apunta a JDK 26          | (backend eliminado — ya no aplica)        |