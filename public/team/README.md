# Imágenes del Equipo

Esta carpeta debe contener las fotos profesionales del equipo de ForjaConsulting.

## 📸 Imágenes requeridas:

### Equipo de Liderazgo (4 fotos individuales):

#### 1. **maria-fernandez.jpg**
- **Persona**: María Fernández - CEO & Fundadora
- **Especialidad**: Estrategia Empresarial
- **Dimensiones**: 600x800px (proporción 3:4)
- **Estilo**: Foto profesional corporativa, fondo de oficina moderna
- **Ropa**: Traje ejecutivo, pose confiada y amigable

#### 2. **carlos-rodriguez.jpg**
- **Persona**: Carlos Rodríguez - Director de Transformación Digital
- **Especialidad**: Tecnología e Innovación
- **Dimensiones**: 600x800px (proporción 3:4)
- **Estilo**: Foto profesional corporativa, ambiente tecnológico
- **Ropa**: Camisa formal o business casual

#### 3. **ana-martinez.jpg**
- **Persona**: Ana Martínez - Directora de Talento
- **Especialidad**: Desarrollo Organizacional
- **Dimensiones**: 600x800px (proporción 3:4)
- **Estilo**: Foto profesional corporativa, ambiente colaborativo
- **Ropa**: Outfit profesional, pose accesible

#### 4. **roberto-silva.jpg**
- **Persona**: Roberto Silva - Director de Operaciones
- **Especialidad**: Excelencia Operacional
- **Dimensiones**: 600x800px (proporción 3:4)
- **Estilo**: Foto profesional corporativa, fondo de oficina
- **Ropa**: Traje ejecutivo

### Foto Grupal:

#### 5. **equipo-completo.jpg**
- **Descripción**: Foto del equipo completo (8+ personas)
- **Uso**: Sección "Talento de Clase Mundial"
- **Dimensiones**: 1200x900px (proporción 4:3)
- **Estilo**: Equipo diverso, profesional, en oficina moderna
- **Mood**: Colaborativo, dinámico, profesional
- **Ambiente**: Oficina con ventanas grandes, luz natural

## Especificaciones técnicas:

- **Formato**: JPG optimizado
- **Peso máximo**: 300-500KB por imagen
- **Calidad**: Alta resolución, profesional
- **Iluminación**: Natural o profesional, sin sombras duras
- **Fondo**: Oficina moderna, desenfocado (bokeh) si es posible
- **Expresión**: Sonrisa natural, mirada confiada
- **Encuadre**: Plano medio (cintura hacia arriba) para individuales

## 🎨 Guía de estilo fotográfico:

### Para fotos individuales:
- ✅ Fondo corporativo pero no genérico
- ✅ Iluminación profesional (3 puntos idealmente)
- ✅ Poses naturales, no rígidas
- ✅ Contacto visual directo con la cámara
- ✅ Ropa profesional acorde al rol
- ✅ Expresión amigable y accesible

### Para foto grupal:
- ✅ Diversidad visible (género, edad)
- ✅ Interacción natural entre miembros
- ✅ Ambiente de oficina moderna
- ✅ Algunos con laptops, tablets o documentos
- ✅ Mix de personas de pie y sentadas
- ✅ Luz natural abundante

## 🔧 Actualización en el código:

Una vez que las fotos estén listas, actualizar en `app/nosotros/equipo/page.tsx`:

### Para fotos de liderazgo:
```typescript
// Buscar en el array de líderes (línea ~90):
image: '/team/maria-fernandez.jpg',

// Reemplazar el placeholder con:
import Image from 'next/image'

// Y cambiar:
<div className="absolute inset-0 flex items-center justify-center">
  <Users className="w-20 h-20 text-gray-300" />
</div>

// Por:
<Image
  src={member.image}
  alt={member.name}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
/>
```

### Para foto grupal:
```typescript
// Buscar (línea ~120):
<div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-50">
  <div className="absolute inset-0 flex items-center justify-center">
    <Users className="w-32 h-32 text-purple-300" />
  </div>
</div>

// Reemplazar con:
<Image
  src="/team/equipo-completo.jpg"
  alt="Equipo completo de ForjaConsulting"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
  priority
/>
```

## 💡 Fuentes de imágenes sugeridas:

Si no tienes fotos corporativas aún:

1. **Genera con IA** (más realista):
   - Midjourney
   - DALL-E 3
   - Leonardo.ai

2. **Stock photos profesionales**:
   - Unsplash (gratis): https://unsplash.com/s/photos/business-professional
   - Pexels (gratis): https://pexels.com/search/corporate/
   - iStock (premium)

3. **Sesión fotográfica profesional**:
   - Fotógrafo corporativo local
   - Estudio con experiencia en retratos ejecutivos

## ✅ Checklist:

- [ ] Foto María Fernández (CEO)
- [ ] Foto Carlos Rodríguez (CTO)
- [ ] Foto Ana Martínez (Directora Talento)
- [ ] Foto Roberto Silva (COO)
- [ ] Foto grupal del equipo
- [ ] Optimizar todas las imágenes (< 500KB)
- [ ] Colocar en `public/team/`
- [ ] Actualizar código con componente Image
- [ ] Agregar import: `import Image from 'next/image'`
- [ ] Verificar responsive en mobile y desktop

