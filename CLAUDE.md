# Landing Softerreno

Landing page moderna para Softerreno - plataforma de gestión de terrenos.

## Stack Técnico

- Next.js 16.2 con App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Turbopack

## Comandos

```bash
npm run dev   # Desarrollo en localhost:3000
npm run build # Build producción
npm start     # Servidor producción
npm run lint  # ESLint
```

## Estructura

- `/app` - App Router (layout.tsx, page.tsx)
- `/public` - Assets estáticos
- Tailwind CSS 4 para estilos

## Notas de Desarrollo

- Next.js 16 tiene cambios breaking vs versiones anteriores
- Revisar docs en `node_modules/next/dist/docs/` antes de código nuevo
- App Router usa Server Components por defecto
- Usar 'use client' solo cuando sea necesario (interactividad, hooks, eventos)

@AGENTS.md
