# Imágenes de la Historia

Esta carpeta debe contener las imágenes para el timeline de la historia de ForjaConsulting.

## 📸 Imágenes requeridas:

### 1. **2015-comienzo.jpg**
- **Descripción**: Imagen representativa del inicio (2015) - "Nace una Visión"
- **Sugerencia**: 
  - Edificio moderno corporativo
  - Oficina startup con ambiente innovador
  - Grupo pequeño de consultores trabajando
  - Lluvia de ideas, pizarra estratégica
- **Dimensiones**: 1200x900px (proporción 4:3)
- **Mood**: Inspirador, emprendedor, visionario
- **Color predominante**: Cyan/turquesa (matching con badge)

### 2. **2017-expansion.jpg**
- **Descripción**: Imagen del crecimiento del equipo (2017-2019) - "Crecimiento Sostenido"
- **Sugerencia**: 
  - Equipo grande trabajando en reunión
  - Oficina moderna y espaciosa
  - Colaboración multidisciplinaria
  - Presentación de resultados, celebración de logros
- **Dimensiones**: 1200x900px (proporción 4:3)
- **Mood**: Profesional, dinámico, crecimiento
- **Color predominante**: Naranja (matching con badge)

### 3. **2020-innovacion.jpg**
- **Descripción**: Imagen de transformación digital e innovación (2020-2024) - "Líderes en Transformación"
- **Sugerencia**: 
  - Centro de comando tecnológico
  - Pantallas con dashboards y datos
  - IA, machine learning, analytics
  - Ambiente futurista, high-tech
- **Dimensiones**: 1200x900px (proporción 4:3)
- **Mood**: Tecnológico, innovador, líder
- **Color predominante**: Púrpura/violeta (matching con badge)

## Especificaciones técnicas:

- **Formato**: JPG optimizado o PNG
- **Peso máximo**: 800KB por imagen (idealmente < 500KB)
- **Calidad**: Alta resolución, profesional
- **Optimización**: Usar TinyPNG, Squoosh o ImageOptim
- **Aspecto**: Profesional, corporativo, tecnológico
- **Estilo**: Moderno, limpio, con buena iluminación

## 🎨 Fuentes de imágenes sugeridas:

- **Unsplash** (https://unsplash.com) - Gratis, alta calidad
- **Pexels** (https://pexels.com) - Gratis, buena selección
- **Freepik** (https://freepik.com) - Gratis/Premium
- **iStock** o **Shutterstock** - Premium, muy profesional

## 🔧 Actualización en el código:

Una vez que las imágenes estén listas, abrir `app/nosotros/historia/page.tsx` y reemplazar los placeholders:

### Ejemplo para 2015-comienzo.jpg:
```typescript
// Buscar (línea ~180):
<div className="aspect-[4/3] bg-gradient-to-br from-cyan-100 to-cyan-50">
  <div className="absolute inset-0 flex items-center justify-center">
    <Lightbulb className="w-32 h-32 text-cyan-300" />
  </div>
</div>

// Reemplazar con:
<Image
  src="/historia/2015-comienzo.jpg"
  alt="Inicio de ForjaConsulting en 2015"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
  priority
/>
```

### Repetir para las otras 2 imágenes con sus respectivos nombres y colores.

## ✅ Checklist:

- [ ] Descargar/crear imagen 2015-comienzo.jpg
- [ ] Descargar/crear imagen 2017-expansion.jpg
- [ ] Descargar/crear imagen 2020-innovacion.jpg
- [ ] Optimizar las 3 imágenes (peso < 500KB)
- [ ] Colocar imágenes en `public/historia/`
- [ ] Actualizar código en `app/nosotros/historia/page.tsx`
- [ ] Agregar import de Image: `import Image from 'next/image'`
- [ ] Verificar que se vean bien en mobile y desktop

