# ForjaConsulting | Portal Web

Portal web de clase mundial para ForjaConsulting, consultora líder en transformación digital y arquitectura empresarial para PYMEs en Colombia y Latinoamérica.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.0+
- **Styling:** Tailwind CSS 3.4+
- **UI Components:** Shadcn/ui + Radix UI
- **Animations:** Framer Motion 11+
- **Forms:** React Hook Form + Zod
- **Deployment:** Vercel

## 📋 Características Principales

✨ **Experiencia de Usuario Excepcional**
- Hero Section con carrusel animado
- Animaciones fluidas con Framer Motion
- Micro-interacciones en toda la interfaz
- Diseño responsive mobile-first

🎯 **Funcionalidades Clave**
- **Rayos X Empresarial:** Quiz interactivo para diagnóstico de madurez digital
- **Mega Menús:** Navegación avanzada con categorías visuales
- **WhatsApp Float Button:** Contacto directo contextual
- **Metodología FORJA:** Timeline interactiva con fases detalladas

🎨 **Diseño Profesional**
- Sistema de design tokens personalizado
- Paleta de colores de marca integrada
- Tipografía optimizada (Inter + Montserrat)
- Componentes reutilizables con Shadcn/ui

⚡ **Performance Optimizada**
- Server-side rendering (SSR)
- Image optimization con Next.js Image
- Code splitting automático
- Lazy loading de componentes

🔍 **SEO Optimizado**
- Meta tags dinámicos por página
- Sitemap.xml generado
- Robots.txt configurado
- Open Graph tags

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 📁 Estructura del Proyecto

```
forja-digital-ae/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Homepage
│   ├── contacto/                # Página de contacto
│   ├── servicios/               # Página de servicios
│   ├── nosotros/                # Página sobre nosotros
│   ├── rayos-x-empresarial/     # Quiz interactivo
│   └── api/                     # API Routes
├── components/
│   ├── ui/                      # Componentes de Shadcn/ui
│   ├── layout/                  # Header, Footer, Navigation
│   ├── sections/                # Secciones del homepage
│   ├── shared/                  # Componentes compartidos
│   └── animations/              # Wrappers de animación
├── lib/
│   ├── utils.ts                 # Utilidades
│   └── constants/               # Constantes y datos
├── public/                      # Archivos estáticos
└── styles/                      # Estilos globales
```

## 🎨 Sistema de Diseño

### Colores de Marca

- **Navy:** `#2B3E5C` (Principal)
- **Orange:** `#F47D3B` (Acento primario)
- **Turquoise:** `#4DD0E1` (Acento secundario)
- **Purple:** `#7E57C2` (Complementario)
- **Coral:** `#E74C3C` (Destacado)

### Tipografía

- **Headings:** Montserrat (Bold, SemiBold)
- **Body:** Inter (Regular, Medium)

## 🚀 Deployment

### Vercel (Recomendado)

1. Conectar el repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push

```bash
# Deploy manual
vercel --prod
```

## 📊 Performance Targets

- ✅ Lighthouse Score: > 95
- ✅ LCP (Largest Contentful Paint): < 2.0s
- ✅ FID (First Input Delay): < 50ms
- ✅ CLS (Cumulative Layout Shift): < 0.05

## 🔒 Variables de Entorno

Crear archivo `.env.local`:

```env
# Sanity CMS (si se integra)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Email (para formularios)
EMAIL_SERVER=smtp.gmail.com
EMAIL_FROM=info@forjadigital.co

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
```

## 📝 Tareas Pendientes

- [ ] Integrar Sanity CMS para blog
- [ ] Implementar generación de PDF para Rayos X
- [ ] Configurar email automation (SendGrid/Resend)
- [ ] Agregar Google Analytics 4
- [ ] Implementar tests (Jest + React Testing Library)
- [ ] Agregar más páginas de servicios detalladas
- [ ] Crear sección de casos de éxito
- [ ] Implementar blog con filtros

## 🤝 Contribución

Este es un proyecto privado de ForjaConsulting.

## 📄 Licencia

© 2024 ForjaConsulting. Todos los derechos reservados.

---

**Desarrollado con ❤️ por el equipo de ForjaConsulting**

