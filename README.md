# Landing Softerreno

Landing page moderna para Softerreno - plataforma de gestión de terrenos.

## Tecnologías

- **Next.js 16.2** - App Router con React 19
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utilitarios
- **Turbopack** - Build tool ultra-rápido

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm start

# Linting
npm run lint
```

El servidor de desarrollo inicia en [http://localhost:3000](http://localhost:3000)

## Estructura del Proyecto

```
landing-softerreno/
├── app/                # App Router de Next.js
│   ├── layout.tsx     # Layout principal
│   ├── page.tsx       # Página home
│   └── globals.css    # Estilos globales
├── public/            # Archivos estáticos
└── package.json       # Dependencias
```

## Características Planeadas

- Hero section con CTA
- Secciones de características/beneficios
- Testimonios
- Formulario de contacto
- Responsive design
- Optimización SEO
- Performance optimizada

## Deploy

El proyecto está optimizado para deploy en:
- Vercel (recomendado)
- Netlify
- AWS Amplify
- Cualquier servidor Node.js

---

Creado con ❤️ para Softerreno
