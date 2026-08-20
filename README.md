# MrBrown Portfolio — Frontend

Portafolio de productor audiovisual construido con **Next.js 16 + React 19 + Tailwind CSS v4**.

## Stack

| Capa            | Tecnología                              |
|-----------------|-----------------------------------------|
| Framework       | Next.js 16 (App Router, Turbopack)      |
| UI              | React 19 + Tailwind CSS v4              |
| Animaciones     | framer-motion                           |
| Medios          | Cloudinary (imágenes y videos)          |

## Cómo levantar el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Crea un archivo `.env.local` en la raíz de `frontend/`:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="tu_cloud_name"
NEXT_PUBLIC_CLOUDINARY_API_KEY="tu_api_key"
CLOUDINARY_API_SECRET="tu_api_secret"
```

Los tres valores se obtienen del Dashboard de Cloudinary (Product Environment Credentials).

## Estructura

```
frontend/
├── app/               páginas y layout (Next.js App Router)
├── components/        componentes de UI (Hero, About, SelectedWork, ...)
├── lib/
│   ├── cloudinary.ts  helpers de URLs de Cloudinary (imageUrl, videoUrl, posterUrl, hlsUrl)
│   └── mock-data.ts   contenido del portafolio (proyectos, perfil, servicios)
└── types/             tipos TypeScript
```

> Todo el contenido del portafolio (textos, proyectos, videos) se edita en
> `lib/mock-data.ts`. Las imágenes y videos se sirven desde Cloudinary.

## Scripts

| Acción      | Comando          |
|-------------|------------------|
| Desarrollo  | `npm run dev`    |
| Build       | `npm run build`  |
| Producción  | `npm start`      |
| Lint        | `npm run lint`   |

## Despliegue

El proyecto es un frontend estático, compatible con cualquier plataforma
(Vercel, Netlify, Cloudflare Pages). Solo requiere configurar las variables de
entorno de Cloudinary en la plataforma elegida.