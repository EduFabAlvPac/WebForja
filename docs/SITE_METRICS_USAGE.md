# 📊 Guía de Uso: Métricas Centralizadas

## 🎯 Objetivo

Este documento explica cómo usar el módulo `lib/site-metrics.ts`, la **única fuente de verdad** para todas las métricas, estadísticas y claims del sitio FORJA DIGITAL AE.

---

## 📁 Ubicación

```
lib/site-metrics.ts
```

---

## 🚀 Uso Básico

### 1️⃣ **Importar el módulo**

```typescript
import { siteMetrics, getHeroStats, getCTAClaim } from '@/lib/site-metrics'
```

### 2️⃣ **Acceder a métricas**

```typescript
// Acceso directo a métricas
const totalCompanies = siteMetrics.clients.totalCompanies // 150
const nps = siteMetrics.satisfaction.nps // 95
const yearsInBusiness = siteMetrics.company.yearsInBusiness // 11 (calculado automáticamente)

// Usar en JSX
<p>Más de {siteMetrics.clients.totalCompanies} empresas transformadas</p>
<p>NPS: {siteMetrics.satisfaction.nps}%</p>
```

### 3️⃣ **Usar funciones helper**

```typescript
// Funciones que retornan strings formateados
const heroStats = getHeroStats() // Array de 3 stats para Hero
const ctaClaim = getCTAClaim() // "Más de 200 CEOs han comenzado..."
const yearsLabel = getYearsInBusinessLabel() // "10+ Años"
```

---

## 📚 Estructura de Datos

### **Categorías Principales**

| Categoría | Descripción | Ejemplo de Uso |
|-----------|-------------|----------------|
| `company` | Info de la empresa | `siteMetrics.company.name` |
| `reach` | Alcance geográfico | `siteMetrics.reach.countries` |
| `clients` | Clientes y proyectos | `siteMetrics.clients.totalCompanies` |
| `satisfaction` | Satisfacción y NPS | `siteMetrics.satisfaction.nps` |
| `impact` | Impacto financiero | `siteMetrics.impact.totalValueGenerated` |
| `team` | Equipo y capacidades | `siteMetrics.team.totalMembers` |
| `digitalTransformation` | Stats de transformación | `siteMetrics.digitalTransformation.pymeFailureRate` |
| `rayosX` | Diagnóstico empresarial | `siteMetrics.rayosX.averageTime` |
| `methodology` | Metodología FORJA® | `siteMetrics.methodology.phases` |
| `services` | Servicios ofrecidos | `siteMetrics.services.totalServices` |
| `typicalResults` | Resultados típicos | `siteMetrics.typicalResults.talentManagement` |
| `idealClient` | Perfil de cliente ideal | `siteMetrics.idealClient.companySize` |
| `guarantees` | Garantías y compromisos | `siteMetrics.guarantees.confidentiality` |
| `contact` | Información de contacto | `siteMetrics.contact.email` |
| `social` | Redes sociales | `siteMetrics.social.linkedin` |
| `certifications` | Certificaciones | `siteMetrics.certifications.pmi` |

---

## 🛠️ Funciones Helper

### **getHeroStats()**

Retorna las 3 estadísticas para el Hero Section.

```typescript
const stats = getHeroStats()
// [
//   { value: "+150", label: "Empresas Transformadas" },
//   { value: "95%", label: "Tasa de Satisfacción NPS 9+" },
//   { value: "10+ Años", label: "Forjando Líderes Digitales" }
// ]
```

**Uso en componente:**

```tsx
<div className="stats-grid">
  {getHeroStats().map((stat, index) => (
    <div key={index}>
      <h3>{stat.value}</h3>
      <p>{stat.label}</p>
    </div>
  ))}
</div>
```

---

### **getTestimonialsStats()**

Retorna las 4 estadísticas para la página de Testimonios.

```typescript
const stats = getTestimonialsStats()
// [
//   { value: "200+", label: "Proyectos Exitosos", color: "text-cyan-500" },
//   { value: "95%", label: "Satisfacción Cliente", color: "text-orange-500" },
//   { value: "150+", label: "Empresas Transformadas", color: "text-purple-500" },
//   { value: "$50M+", label: "Valor Generado", color: "text-red-500" }
// ]
```

---

### **getCTAClaim()**

Retorna el claim completo para la sección CTA.

```typescript
const claim = getCTAClaim()
// "Más de 200 CEOs han comenzado su transformación con nuestro Rayos-X Empresarial Gratis. En solo 15 minutos descubres:"
```

---

### **getDigitalTransformationClaim()**

Retorna el claim de transformación digital para PYMEs.

```typescript
const claim = getDigitalTransformationClaim()
// "El 73% de las PYMEs colombianas fracasan en transformación digital por falta de estrategia"
```

---

### **Otras funciones:**

- `getYearsInBusinessLabel()` → `"10+ Años"`
- `getCompaniesTransformedLabel()` → `"150+ Empresas"`
- `getProjectsLabel()` → `"200+ Proyectos"`
- `getCEOsLabel()` → `"200 CEOs"`
- `getNPSLabel()` → `"95% Tasa de Satisfacción NPS 9+"`
- `getCountriesLabel()` → `"3 Países"`

---

## ✅ Ejemplos de Uso Real

### **Ejemplo 1: Hero Section**

```tsx
import { getDigitalTransformationClaim, getHeroStats } from '@/lib/site-metrics'

export function HeroSection() {
  return (
    <section>
      <h1>Arquitectura Empresarial</h1>
      <p>{getDigitalTransformationClaim()}</p>
      
      <div className="stats">
        {getHeroStats().map((stat, i) => (
          <div key={i}>
            <span>{stat.value}</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

### **Ejemplo 2: CTA Section**

```tsx
import { getCTAClaim, siteMetrics } from '@/lib/site-metrics'

export function CTASection() {
  return (
    <section>
      <h2>¿Listo para Descubrir el Verdadero Potencial de tu Empresa?</h2>
      <p>{getCTAClaim()}</p>
      
      <div className="trust-badges">
        <span>{siteMetrics.guarantees.confidentiality}</span>
        <span>Respuesta en {siteMetrics.rayosX.deliveryTime}h</span>
        <span>{siteMetrics.guarantees.noCommitment}</span>
      </div>
    </section>
  )
}
```

---

### **Ejemplo 3: Testimonios Page**

```tsx
import { getTestimonialsStats, siteMetrics } from '@/lib/site-metrics'

export function TestimoniosPage() {
  return (
    <div>
      <div className="stats-grid">
        {getTestimonialsStats().map((stat, i) => (
          <div key={i} className={stat.color}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      
      <p>
        Únete a las más de {siteMetrics.clients.totalCompanies} empresas 
        que han confiado en nosotros
      </p>
    </div>
  )
}
```

---

### **Ejemplo 4: Sticky CTA Bar**

```tsx
import { siteMetrics } from '@/lib/site-metrics'

export function StickyCTABar() {
  return (
    <div className="sticky-bar">
      <p>
        <strong>Rayos-X Empresarial Gratis:</strong>
        Descubre tu madurez digital en {siteMetrics.rayosX.averageTime} min.
      </p>
      <button>Rayos-X Gratis</button>
    </div>
  )
}
```

---

## 🔄 Actualizar Métricas

### **Proceso:**

1. **Editar `lib/site-metrics.ts`**
2. **Cambiar el valor deseado**
3. **Guardar el archivo**
4. **El cambio se refleja automáticamente en todo el sitio**

### **Ejemplo:**

```typescript
// ANTES
clients: {
  totalCompanies: 150,
  totalProjects: 200,
  // ...
}

// DESPUÉS
clients: {
  totalCompanies: 175, // ✅ Actualizado
  totalProjects: 225,  // ✅ Actualizado
  // ...
}
```

**Resultado:** Todos los lugares que usan `siteMetrics.clients.totalCompanies` mostrarán automáticamente `175`.

---

## ⚠️ Reglas Importantes

### ✅ **SÍ hacer:**

- ✅ Importar métricas desde `lib/site-metrics.ts`
- ✅ Usar funciones helper cuando estén disponibles
- ✅ Actualizar métricas en el archivo centralizado
- ✅ Documentar nuevas métricas si las agregas

### ❌ **NO hacer:**

- ❌ Hardcodear métricas en componentes
- ❌ Duplicar métricas en otros archivos
- ❌ Crear variables locales con valores hardcodeados
- ❌ Usar números mágicos en lugar de métricas

---

## 🧪 Validación

### **Verificar que no hay duplicados:**

```bash
# Buscar métricas hardcodeadas
grep -r "200 CEOs" --exclude-dir=node_modules
grep -r "150 empresas" --exclude-dir=node_modules
grep -r "95%" --exclude-dir=node_modules
grep -r "73%" --exclude-dir=node_modules
```

**Resultado esperado:** Solo deben aparecer en `lib/site-metrics.ts`.

---

## 📈 Beneficios

1. **Consistencia:** Todas las métricas son iguales en todo el sitio
2. **Mantenibilidad:** Un solo lugar para actualizar
3. **Escalabilidad:** Fácil agregar nuevas métricas
4. **Confiabilidad:** No hay riesgo de contradicciones
5. **Auditoría:** Fácil revisar todas las métricas del sitio

---

## 🆘 Soporte

Si necesitas agregar una nueva métrica o función helper:

1. Edita `lib/site-metrics.ts`
2. Agrega la métrica en la categoría correspondiente
3. Crea una función helper si es necesario
4. Documenta el uso en este archivo
5. Actualiza los componentes que la usen

---

## 📝 Changelog

| Fecha | Cambio | Autor |
|-------|--------|-------|
| 2025-11-27 | Creación inicial del módulo | AI Assistant |
| 2025-11-27 | Migración de HeroSection, CTASection, Testimonios, StickyCTABar | AI Assistant |

---

**✅ Última actualización:** 27 de noviembre de 2025

