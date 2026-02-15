# 🏠 Guía de Desarrollo Local — WebForjaConsulting

**Objetivo:** Validar todos tus cambios en tu computadora antes de subirlos a GitHub y Vercel.

---

## 🎯 Flujo de trabajo profesional (mejor práctica)

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  1. HACER       │ ──► │  2. VALIDAR     │ ──► │  3. DESPLEGAR   │
│  cambios en     │     │  localmente     │     │  (push + Vercel) │
│  tu código      │     │  que todo OK    │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

**Regla de oro:** Nunca subas a GitHub/Vercel algo que no hayas probado primero en tu máquina.

---

## 📋 Requisitos previos (una sola vez)

### 1. Node.js instalado

Verifica que tienes Node.js 18 o superior:

```bash
node -v
```

Si sale un número (ej: `v20.10.0`), estás listo. Si no, descarga e instala desde: https://nodejs.org

### 2. Instalar dependencias del proyecto

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
cd /Users/eduard/Documents/WebForjaConsulting
npm install
```

Solo necesitas hacerlo cuando clonas el proyecto o cuando se agregan nuevas dependencias.

---

## 🚀 Paso 1: Iniciar el servidor local

### Opción A: Conexión normal (recomendada)

```bash
npm run dev
```

Verás algo como:

```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
```

**Abre tu navegador en:** http://localhost:3000

### Opción B: Si aparece error de certificados SSL

Si ves un error como *"self-signed certificate in certificate chain"* o *"Failed to fetch fonts"*:

```bash
npm run dev:no-ssl
```

O en Mac/Linux:

```bash
NODE_TLS_REJECT_UNAUTHORIZED=0 npm run dev
```

---

## ✅ Paso 2: Validar tus cambios (checklist antes de subir)

Antes de hacer `git push` o `npm run deploy`, ejecuta estas validaciones:

### Checklist mínimo (5 minutos)

| Paso | Comando | Qué valida |
|------|---------|------------|
| 1 | `npm run dev` (dejar corriendo) | Que el sitio funcione en local |
| 2 | Revisar manualmente en http://localhost:3000 | Navegación, formularios, enlaces |
| 3 | `npm run validate` | TypeScript + estilo de código |
| 4 | `npm run build` | Que el build de producción funcione |

### Validación completa (opcional, 10 minutos)

Si quieres estar 100% seguro:

```bash
# Terminal 1: deja el servidor corriendo
npm run dev

# Terminal 2: ejecuta estas validaciones
npm run validate
npm run qa:links
```

Luego **detén el servidor** (Ctrl+C en la Terminal 1) y ejecuta:

```bash
npm run build
npm start
```

Abre http://localhost:3000 y revisa que todo funcione igual que en modo desarrollo. Después detén con Ctrl+C.

---

## 📁 Dónde probar en local

| Página | URL local |
|--------|-----------|
| Inicio | http://localhost:3000 |
| Inicio (Colombia) | http://localhost:3000/es-co |
| Contacto | http://localhost:3000/es-co/contacto |
| Servicios | http://localhost:3000/es-co/servicios |
| Nosotros | http://localhost:3000/es-co/nosotros |
| Legal | http://localhost:3000/es-co/legal/terminos |

---

## 🔄 Flujo diario recomendado

### Cuando hagas cambios:

1. **Inicia el servidor** (si no está corriendo):
   ```bash
   npm run dev
   ```

2. **Edita** tu código en Cursor/VS Code.

3. **Revisa en el navegador** — Next.js recarga solo al guardar (hot reload).

4. **Antes de subir**, ejecuta:
   ```bash
   npm run validate
   ```
   (Ejecuta typecheck + lint en un solo comando)

5. **Si todo pasa**, despliega:
   ```bash
   npm run deploy
   ```
   O con mensaje personalizado:
   ```bash
   npm run deploy -- "feat: descripción de tus cambios"
   ```

---

## 🛠 Solución de problemas

### "Cannot find module" o errores raros

```bash
rm -rf node_modules .next
npm install
npm run dev
```

### "Port 3000 already in use"

Otro proceso usa el puerto. Opciones:

- Cierra la otra instancia de `npm run dev`.
- O usa otro puerto: `npm run dev -- -p 3001` y abre http://localhost:3001

### Build falla con error de SSL

Tu red (ej: corporativa) puede interceptar tráfico. Para build local:

**Mac/Linux:**
```bash
NODE_TLS_REJECT_UNAUTHORIZED=0 npm run build
```

**Windows PowerShell:**
```powershell
$env:NODE_TLS_REJECT_UNAUTHORIZED="0"
npm run build
```

No uses esto en producción; Vercel no tiene ese problema.

### El formulario de contacto no envía en local

Es normal. En desarrollo sin `EMAIL_SERVICE` configurado, los emails se registran en la consola del servidor. En Vercel, configuras las variables y sí se enviarán.

---

## 📊 Resumen de comandos útiles

| Comando | Cuándo usarlo |
|---------|----------------|
| `npm run dev` | Desarrollo diario; ver cambios en vivo |
| `npm run validate` | Validar antes de subir (typecheck + lint) |
| `npm run validate:full` | Validación completa incluyendo build |
| `npm run dev:no-ssl` | Si hay problemas de certificados SSL |
| `npm run build` | Simular build de producción antes de desplegar |
| `npm start` | Probar el build local (ejecutar después de `npm run build`) |
| `npm run typecheck` | Verificar que no haya errores de TypeScript |
| `npm run lint` | Verificar estilo y buenas prácticas |
| `npm run qa:links` | Verificar enlaces (con servidor local corriendo) |
| `npm run deploy` | Subir a GitHub y desplegar en Vercel |

---

## 🎓 Buenas prácticas (talla mundial)

1. **Desarrollo local primero** — Siempre prueba en `localhost` antes de subir.
2. **Typecheck y lint** — Ejecútalos antes de cada deploy.
3. **Commits pequeños** — Cambios agrupados por funcionalidad o corrección.
4. **Mensajes de commit claros** — `feat:`, `fix:`, `style:` ayudan a entender el historial.
5. **Variables de entorno** — No subas `.env.local` a Git; en Vercel configúralas en el Dashboard.
6. **Branch `main`** — Mantén `main` estable; tu regla de deploy ya apunta ahí.

---

## 📞 Próximos pasos

Una vez validado localmente:

1. `npm run deploy` (o `npm run deploy -- "tu mensaje"`).
2. Vercel desplegará automáticamente en https://web-forja.vercel.app
3. Revisa el sitio en producción para confirmar que todo está bien.

---

*Guía creada para WebForjaConsulting — Flujo local → GitHub → Vercel*
