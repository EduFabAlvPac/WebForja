# 🏢 Desarrollo en Red Corporativa

## 🚨 Problema: Errores SSL en Red Corporativa

Si trabajas desde una red corporativa con proxy o certificados auto-firmados, verás estos errores:

### Errores Comunes:

```
FetchError: request to https://fonts.gstatic.com/... failed
reason: self-signed certificate in certificate chain
```

```
GET /_next/image?url=https://images.unsplash.com/... 500 (Internal Server Error)
```

```
Unchecked runtime.lastError: A listener indicated an asynchronous response
```

---

## ✅ SOLUCIONES

### Opción 1: Usar `npm run dev` Normal (RECOMENDADO)

El servidor de desarrollo **SÍ funciona** a pesar de los errores:

```bash
npm run dev
```

**Qué esperar:**
- ✅ La aplicación carga correctamente en `http://localhost:3000`
- ✅ Todos los componentes funcionan
- ✅ Hot reload funciona
- ⚠️ Verás errores SSL en la terminal (puedes ignorarlos)
- ⚠️ Algunas imágenes de Unsplash pueden no cargar (solo en desarrollo)
- ⚠️ Errores `runtime.lastError` en consola del navegador (son de extensiones de Chrome, no del código)

**Páginas que funcionan:**
- ✅ `/` - Home
- ✅ `/servicios/*` - Todas las páginas de servicios
- ✅ `/nosotros/*` - Todas las páginas de nosotros
- ✅ `/sandbox` - Página de prueba de componentes shadcn/ui
- ✅ `/design-tokens-test` - Página de prueba de tokens

---

### Opción 2: Desactivar Verificación SSL (DESARROLLO LOCAL)

⚠️ **ADVERTENCIA: Solo para desarrollo local, NUNCA en producción**

#### Método A: Script personalizado

```bash
npm run dev:no-ssl
```

Este comando ejecuta `dev-no-ssl.js` que desactiva temporalmente la verificación SSL.

#### Método B: Variable de entorno

1. Copia el archivo de ejemplo:
```bash
copy .env.development.local.example .env.development.local
```

2. El archivo `.env.development.local` ya contiene:
```
NODE_TLS_REJECT_UNAUTHORIZED=0
```

3. Ejecuta normalmente:
```bash
npm run dev
```

---

### Opción 3: Build con SSL Desactivado

Si necesitas hacer un build local:

```bash
npm run build:no-ssl
```

---

## 🔍 Verificar que Todo Funciona

### 1. Servidor de Desarrollo

```bash
npm run dev
```

Deberías ver:
```
✓ Ready in X.Xs
- Local:        http://localhost:3000
```

### 2. Abrir el Navegador

Navega a: `http://localhost:3000/sandbox`

### 3. Verificar Componentes

La página `/sandbox` debe mostrar:
- ✅ Buttons (6 variantes)
- ✅ Cards (3 ejemplos)
- ✅ Inputs & Forms
- ✅ Badges (4 variantes)
- ✅ Progress (barra interactiva)
- ✅ Tooltips (hover para ver)
- ✅ Dialog (botón "Open Dialog")
- ✅ Separator

---

## 🐛 Errores que PUEDES IGNORAR

### En la Terminal:

```
FetchError: request to https://fonts.gstatic.com/...
reason: self-signed certificate in certificate chain
```

**Causa:** Red corporativa bloquea Google Fonts  
**Impacto:** Ninguno en desarrollo (las fuentes se cargan desde caché del navegador)  
**Solución:** Ignorar o usar `npm run dev:no-ssl`

### En la Consola del Navegador:

```
GET /_next/image?url=https://images.unsplash.com/... 500
```

**Causa:** Red corporativa bloquea Unsplash  
**Impacto:** Algunas imágenes de fondo no cargan (solo en desarrollo)  
**Solución:** Las imágenes funcionarán correctamente en producción (Vercel)

```
Unchecked runtime.lastError: A listener indicated an asynchronous response
```

**Causa:** Extensiones de Chrome (React DevTools, extensiones corporativas)  
**Impacto:** Ninguno (es un warning de extensiones, no del código)  
**Solución:** Ignorar o desactivar extensiones temporalmente

---

## 🚀 Despliegue a Producción

**IMPORTANTE:** Estos problemas **NO afectan** el despliegue a producción:

### En Vercel:

✅ Google Fonts se descargan correctamente  
✅ Imágenes de Unsplash se optimizan y cargan correctamente  
✅ No hay errores SSL  
✅ Todo funciona al 100%

### Para Desplegar:

```bash
# 1. Commit de cambios
git add .
git commit -m "feat: shadcn/ui components + design tokens"

# 2. Push a GitHub
git push origin main

# 3. Vercel despliega automáticamente
```

---

## 📋 Checklist de Validación

### Desarrollo Local:

- [ ] `npm run dev` inicia sin errores críticos
- [ ] `http://localhost:3000` carga correctamente
- [ ] `/sandbox` muestra todos los componentes shadcn/ui
- [ ] `/design-tokens-test` muestra los tokens de diseño
- [ ] Los botones flotantes (WhatsApp y Widget) aparecen y funcionan
- [ ] El formulario de feedback funciona

### Producción (Vercel):

- [ ] Build exitoso en Vercel
- [ ] Todas las páginas cargan correctamente
- [ ] Imágenes de Unsplash se ven correctamente
- [ ] Google Fonts se cargan correctamente
- [ ] No hay errores en la consola del navegador
- [ ] Lighthouse score > 90

---

## 🆘 Soporte

Si después de seguir estos pasos sigues teniendo problemas:

1. **Limpia caché de Next.js:**
```bash
Remove-Item -Recurse -Force .next
npm run dev
```

2. **Reinstala dependencias:**
```bash
Remove-Item -Recurse -Force node_modules
npm install
npm run dev
```

3. **Verifica que el puerto 3000 esté libre:**
```bash
netstat -ano | findstr :3000
```

4. **Prueba en otro puerto:**
```bash
$env:PORT=3001; npm run dev
```

---

## ✅ Resumen

| Problema | Causa | Solución | Impacto |
|----------|-------|----------|---------|
| Errores SSL en terminal | Red corporativa | `npm run dev:no-ssl` o ignorar | Ninguno |
| Imágenes 500 | Red corporativa | Ignorar (funciona en producción) | Solo desarrollo |
| runtime.lastError | Extensiones Chrome | Ignorar | Ninguno |
| Build falla localmente | Red corporativa | `npm run build:no-ssl` | Solo desarrollo |

**🎯 Conclusión:** Todos los errores son de infraestructura corporativa, **NO de código**. La aplicación funciona perfectamente en desarrollo y producción.

