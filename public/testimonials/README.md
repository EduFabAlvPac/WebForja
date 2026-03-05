# Imágenes de Testimonios y Casos de Éxito

Esta carpeta debe contener las imágenes para los testimonios, casos de éxito y casos de estudio destacados.

## 📸 Imágenes requeridas:

### Avatares de Testimonios (3 fotos):

#### 1. **roberto.jpg**
- **Persona**: Roberto Sánchez - CEO de TechRetail Solutions
- **Industria**: Retail
- **Dimensiones**: 200x200px (cuadrada)
- **Estilo**: Foto profesional, headshot
- **Uso**: Avatar en card de testimonial

#### 2. **carmen.jpg**
- **Persona**: Carmen Delgado - Directora de Operaciones de Manufactura del Norte
- **Industria**: Manufactura
- **Dimensiones**: 200x200px (cuadrada)
- **Estilo**: Foto profesional, headshot
- **Uso**: Avatar en card de testimonial

#### 3. **miguel.jpg**
- **Persona**: Miguel Ángel Torres - Gerente General de AgroTech Innovación
- **Industria**: Agroindustria
- **Dimensiones**: 200x200px (cuadrada)
- **Estilo**: Foto profesional, headshot
- **Uso**: Avatar en card de testimonial

### Imágenes de Casos de Estudio (2 fotos grandes):

#### 4. **caso-retail-omnicanal.jpg**
- **Descripción**: Imagen de tienda retail moderna con tecnología
- **Sugerencia**: 
  - Interior de tienda elegante con iluminación moderna
  - Estanterías con productos organizados
  - Ambiente tecnológico y limpio
  - Clientes interactuando con displays digitales
- **Dimensiones**: 1200x800px (proporción 3:2)
- **Mood**: Moderno, tecnológico, retail
- **Colores predominantes**: Naranja/blanco (matching con badge)

#### 5. **caso-manufactura-40.jpg**
- **Descripción**: Imagen de planta manufacturera con automatización
- **Sugerencia**: 
  - Línea de producción automatizada
  - Brazos robóticos naranjas
  - Ambiente industrial moderno
  - Tecnología IoT e Industria 4.0
- **Dimensiones**: 1200x800px (proporción 3:2)
- **Mood**: Tecnológico, automatizado, industrial
- **Colores predominantes**: Púrpura/naranja (matching con badge)

## Especificaciones técnicas:

### Avatares:
- **Formato**: JPG o PNG
- **Dimensiones**: 200x200px (perfectamente cuadrada)
- **Peso máximo**: 100KB
- **Calidad**: Alta resolución
- **Fondo**: Neutro o corporativo desenfocado
- **Expresión**: Profesional, sonrisa natural
- **Crop**: Centrado en el rostro, hombros visibles

### Casos de Estudio:
- **Formato**: JPG optimizado
- **Dimensiones**: 1200x800px
- **Peso máximo**: 500KB
- **Calidad**: Alta resolución, profesional
- **Iluminación**: Brillante, profesional
- **Composición**: Balanceada, espacio para badge superior

## 🎨 Guía de estilo:

### Avatares:
- ✅ Fondo uniforme o corporativo
- ✅ Iluminación profesional
- ✅ Vestimenta ejecutiva/profesional
- ✅ Mirada hacia la cámara
- ✅ Expresión amigable y confiable
- ✅ Sin accesorios distractores

### Casos de Estudio:
- ✅ Ambiente real, no stock genérico
- ✅ Tecnología visible
- ✅ Limpio y organizado
- ✅ Buena iluminación natural o artificial
- ✅ Perspectiva amplia
- ✅ Colores vibrantes pero profesionales

## 💡 Fuentes de imágenes sugeridas:

### Para avatares:
1. **Genera con IA**:
   - Midjourney: `/imagine professional headshot CEO retail, clean background`
   - DALL-E 3: "Professional corporate headshot"
   - Leonardo.ai

2. **Stock photos**:
   - Unsplash: https://unsplash.com/s/photos/professional-headshot
   - Pexels: https://pexels.com/search/business-portrait/
   - Generated Photos (AI faces): https://generated.photos

### Para casos de estudio:
1. **Retail**:
   - Unsplash: https://unsplash.com/s/photos/modern-retail-store
   - Pexels: https://pexels.com/search/retail-technology/

2. **Manufactura**:
   - Unsplash: https://unsplash.com/s/photos/manufacturing-robots
   - Pexels: https://pexels.com/search/industry-automation/

## 🔧 Actualización en el código:

Una vez que las imágenes estén listas, actualizar en `app/nosotros/testimonios/page.tsx`:

### Para avatares:
```typescript
// Buscar (línea ~200):
avatar: '/testimonials/roberto.jpg'

// Reemplazar placeholder con:
import Image from 'next/image'

// Y cambiar:
<div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
  <span className="text-xl font-bold text-gray-600">
    {testimonial.author.charAt(0)}
  </span>
</div>

// Por:
<div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
  <Image
    src={testimonial.avatar}
    alt={testimonial.author}
    width={48}
    height={48}
    className="object-cover"
  />
</div>
```

### Para casos de estudio:
```typescript
// Buscar (línea ~350):
<div className="relative h-64 bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden">
  <div className="absolute inset-0 flex items-center justify-center">
    <ShoppingBag className="w-32 h-32 text-orange-300" />
  </div>
</div>

// Reemplazar con:
<div className="relative h-64 overflow-hidden">
  <Image
    src="/testimonials/caso-retail-omnicanal.jpg"
    alt="Transformación Omnicanal en Retail"
    fill
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 50vw"
  />
</div>
```

## ✅ Checklist:

- [ ] Avatar Roberto Sánchez (CEO Retail)
- [ ] Avatar Carmen Delgado (Dir. Operaciones Manufactura)
- [ ] Avatar Miguel Ángel Torres (Gerente Agroindustria)
- [ ] Imagen caso retail omnicanal
- [ ] Imagen caso manufactura 4.0
- [ ] Optimizar todas las imágenes
- [ ] Colocar en `public/testimonials/`
- [ ] Actualizar código con componente Image
- [ ] Agregar import: `import Image from 'next/image'`
- [ ] Verificar responsive

