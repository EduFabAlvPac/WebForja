# 📦 Guía de Instalación - Forja Digital - AE

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 18.0 o superior
- **npm** 9.0 o superior (o yarn/pnpm)
- **Git** para control de versiones

## 🚀 Instalación Paso a Paso

### 1. Clonar o Navegar al Proyecto

```bash
cd forja-digital-ae
```

### 2. Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias listadas en `package.json`, incluyendo:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn/ui components
- Y todas las demás librerías necesarias

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
cp .env.example .env.local
```

Edita `.env.local` y actualiza las variables:

```env
# WhatsApp (IMPORTANTE: Actualizar número real)
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Forja Digital - AE

# Email de contacto
CONTACT_EMAIL_TO=info@forjadigital.co
```

### 4. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

El servidor de desarrollo se iniciará en: **http://localhost:3000**

## 🎨 Estructura del Proyecto

```
forja-digital-ae/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Homepage
│   ├── contacto/          # Página de contacto
│   ├── servicios/         # Listado de servicios
│   ├── nosotros/          # Sobre nosotros
│   ├── rayos-x-empresarial/ # Quiz interactivo
│   └── api/               # API Routes
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── sections/          # Secciones del homepage
│   ├── shared/            # Componentes reutilizables
│   ├── animations/        # Wrappers de animación
│   └── ui/                # Componentes de Shadcn/ui
├── lib/
│   ├── utils.ts           # Utilidades
│   └── constants/         # Datos y configuración
└── public/                # Archivos estáticos
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm start            # Inicia servidor de producción

# Utilidades
npm run lint         # Ejecuta ESLint
```

## 🌐 Deployment a Vercel (Recomendado)

### Opción 1: Desde la UI de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Add New Project"
3. Importa tu repositorio de Git
4. Vercel detectará automáticamente Next.js
5. Configura las variables de entorno
6. Click en "Deploy"

### Opción 2: Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 📝 Configuración Inicial Personalizada

### 1. Actualizar Número de WhatsApp

Edita `components/shared/WhatsAppFloat.tsx`:

```typescript
const whatsappNumber = '573001234567' // Reemplazar con número real
```

### 2. Actualizar Información de Contacto

Edita `components/layout/footer/Footer.tsx` con:
- Dirección real
- Teléfono de contacto
- Email corporativo
- Redes sociales

### 3. Personalizar Metadata SEO

Edita `app/layout.tsx` para actualizar:
- Title
- Description
- Keywords
- Open Graph tags

### 4. Actualizar URLs del Sitemap

Edita `app/sitemap.ts` y `app/robots.ts`:

```typescript
const baseUrl = 'https://forjadigital.co' // URL de producción
```

## 🎨 Personalización del Diseño

### Colores de Marca

Los colores están definidos en `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    navy: '#2B3E5C',
    orange: '#F47D3B',
    turquoise: '#4DD0E1',
    purple: '#7E57C2',
    coral: '#E74C3C',
  }
}
```

### Tipografía

Las fuentes se configuran en `app/layout.tsx`:
- **Headings:** Montserrat
- **Body:** Inter

Para cambiarlas, edita las importaciones:

```typescript
import { TuFuentePersonalizada } from 'next/font/google'
```

## 🔌 Integraciones Opcionales

### Sanity CMS (Para Blog)

```bash
npm install @sanity/client next-sanity
```

### Email Service (SendGrid)

```bash
npm install @sendgrid/mail
```

### Analytics (Google Analytics)

Agrega el script en `app/layout.tsx` o usa `next/script`.

## 🐛 Troubleshooting

### Error: "Module not found"

```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error de TypeScript

```bash
# Regenerar tipos de Next.js
rm -rf .next
npm run dev
```

### Problemas con Tailwind

```bash
# Asegurar que Tailwind compile correctamente
npm run build
```

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn/ui](https://ui.shadcn.com)

## 🆘 Soporte

Para problemas o preguntas:
- Email: dev@forjadigital.co
- Documentación interna del proyecto

---

**¡Listo para transformar digitalmente! 🚀**

