# ⚡ Inicio Rápido - Forja Digital - AE

## 🚀 Empezar en 5 Minutos

### 1. Navegar al Proyecto
```bash
cd forja-digital-ae
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Iniciar Servidor de Desarrollo
```bash
npm run dev
```

### 4. Abrir en Navegador
```
http://localhost:3000
```

¡Listo! El portal está funcionando. 🎉

---

## 🎯 Páginas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage con Hero, Servicios y Metodología FORJA |
| `/nosotros` | Sobre la empresa, misión, visión, valores |
| `/servicios` | Listado completo de servicios |
| `/contacto` | Formulario de contacto |
| `/rayos-x-empresarial` | Quiz interactivo de madurez digital |

---

## 🎨 Personalización Rápida

### Cambiar Colores de Marca

Edita `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    navy: '#TuColor',      // Color principal
    orange: '#TuColor',    // CTA primario
    turquoise: '#TuColor', // CTA secundario
  }
}
```

### Actualizar Contenido del Hero

Edita `components/sections/HeroSection.tsx`:

```typescript
const HERO_SLIDES = [
  {
    headline: "Tu Headline",
    subheadline: "Tu Subheadline",
    description: "Tu descripción"
  }
]
```

### Cambiar Número de WhatsApp

Edita `components/shared/WhatsAppFloat.tsx`:

```typescript
const whatsappNumber = '573XXXXXXXXX' // Tu número
```

---

## 📝 Tareas Iniciales Recomendadas

### Configuración Básica (15 min)
- [ ] Actualizar número de WhatsApp
- [ ] Cambiar emails de contacto en Footer
- [ ] Personalizar metadata en `app/layout.tsx`
- [ ] Agregar logo real en `public/`

### Contenido (30 min)
- [ ] Revisar textos del Hero
- [ ] Personalizar servicios en `lib/constants/services.ts`
- [ ] Agregar información real en página Nosotros
- [ ] Actualizar información de contacto

### Deployment (15 min)
- [ ] Conectar con Vercel/Netlify
- [ ] Configurar variables de entorno
- [ ] Deploy inicial
- [ ] Probar en producción

---

## 🔧 Comandos Esenciales

```bash
# Desarrollo
npm run dev          # Puerto 3000

# Build
npm run build        # Generar build producción
npm start           # Ejecutar build

# Deploy (Vercel)
vercel              # Preview
vercel --prod      # Producción
```

---

## 🆘 Problemas Comunes

### Puerto 3000 Ocupado
```bash
# Usar otro puerto
PORT=3001 npm run dev
```

### Errores de Instalación
```bash
# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Build Falla
```bash
# Limpiar caché
rm -rf .next
npm run build
```

---

## 📚 Documentación Completa

- **Instalación Detallada:** Ver `INSTALACION.md`
- **Deployment:** Ver `DEPLOYMENT.md`
- **Resumen del Proyecto:** Ver `PROYECTO-RESUMEN.md`
- **README Principal:** Ver `README.md`

---

## 🎓 Recursos de Aprendizaje

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

## ✅ Checklist Primera Ejecución

- [ ] Dependencias instaladas (`npm install`)
- [ ] Servidor corriendo (`npm run dev`)
- [ ] Sitio visible en localhost:3000
- [ ] Navegación funciona
- [ ] Mega menús se abren
- [ ] Quiz Rayos X funciona
- [ ] WhatsApp button aparece
- [ ] Responsive funciona en móvil

---

**¡Todo listo para empezar a personalizar! 🚀**

Para soporte: consulta la documentación completa en los archivos .md del proyecto.

