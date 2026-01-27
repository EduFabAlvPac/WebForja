# Análisis completo: qué hace falta para que el deploy funcione

Este documento resume **todo** lo que tu equipo necesita para que `npm run deploy` suba cambios a GitHub y Vercel despliegue en **https://web-forja.vercel.app**.

---

## 1. Resumen del flujo

```
Tu PC → npm run deploy → git add / commit / push → GitHub (EduFabAlvPac/WebForja)
                                                           ↓
                                              Vercel detecta push → despliega
```

**Requisitos en tu máquina:** Git, autenticación con GitHub, repo apuntando a WebForja, y (opcional) Vercel link.

---

## 2. Checklist por ítem

### 2.1 Git (obligatorio)

| Qué | Estado en tu equipo | Acción si falta |
|-----|---------------------|------------------|
| **Git funcional** | Tienes **PortableGit** en `C:\Users\13176397\Downloads\PortableGit` y **Git de Programs** (incompatible con tu Windows). | Nada. Los scripts usan **solo PortableGit** cuando existe. |
| **Ruta de PortableGit** | `...\Downloads\PortableGit\bin\git.exe` | Si moviste la carpeta, hay que ajustar la ruta en `scripts/deploy.js` y `scripts/deploy-check.js`. |

**Importante:** Los scripts ya están configurados para usar **PortableGit** y ejecutar Git **sin shell** (evitan el Git de Programs que daba “versión no compatible”). No hace falta instalar otro Git ni modificar el PATH.

---

### 2.2 GitHub CLI y autenticación (obligatorio para push)

| Qué | Estado en tu equipo | Acción si falta |
|-----|---------------------|------------------|
| **GitHub CLI (`gh`)** | Instalado en `C:\Program Files\GitHub CLI\gh.exe`. | Instalar desde [cli.github.com](https://cli.github.com/). |
| **`gh auth login`** | Debe estar hecho al menos una vez. | Ejecutar `gh auth login`, elegir GitHub.com → HTTPS → “Login with a web browser” y autorizar. |
| **`gh auth setup-git`** | Configura Git para usar `gh` como credential helper. | Ejecutar `gh auth setup-git` **después** de `gh auth login`. Así el `git push` no pide usuario/contraseña. |

**Comprobar:** En PowerShell, `gh auth status`. Debe mostrar que estás logueado.

---

### 2.3 Repositorio Git (obligatorio)

| Qué | Estado en tu equipo | Acción si falta |
|-----|---------------------|------------------|
| **Carpeta del proyecto** | `c:\Users\13176397\Documents\GitHub\WebForja` | — |
| **Remote `origin`** | Debe apuntar a `https://github.com/EduFabAlvPac/WebForja` (o `.git`). | `git remote add origin https://github.com/EduFabAlvPac/WebForja.git` (o `git remote set-url origin ...` si ya existe). |
| **Rama `main`** | El deploy hace push a `main`. | Cambiar a `main`: `git checkout main`. |

**Comprobar:** `git remote -v` debe mostrar `origin` con WebForja.

---

### 2.4 Vercel (deploy automático)

| Qué | Estado en tu equipo | Acción si falta |
|-----|---------------------|------------------|
| **Repo conectado en Vercel** | El proyecto **web-forja** en Vercel está vinculado al repo de GitHub. | En Vercel Dashboard → proyecto → Settings → Git → Conectar el repo. |
| **`.vercel/project.json`** | Existe y tiene `projectName: "web-forja"`. | Si lo borraste: `npx vercel link` y elegir el proyecto **web-forja**. |

No hace falta Vercel CLI para el deploy diario: **push a GitHub** dispara el deploy. El link solo sirve para CLI o para que los scripts lo detecten.

---

### 2.5 Dónde ejecutar los comandos

| Dónde | ¿Funciona? |
|-------|------------|
| **Tu terminal** (PowerShell o CMD en tu PC) | Sí. Es donde debes ejecutar `npm run deploy` y `npm run deploy:check`. |
| **Terminal integrada de Cursor** | Debería, si tiene acceso a tu PATH y a la carpeta del proyecto. |
| **Terminal del agente de Cursor** | No. Ahí hay restricciones (sandbox) y pueden fallar Git / spawn. |

**Regla práctica:** Usa **tu** PowerShell o CMD para `npm run deploy` y `npm run deploy:check`.

---

## 3. Orden recomendado para dejar todo listo

1. **Comprobar PortableGit**  
   Que exista `C:\Users\13176397\Downloads\PortableGit\bin\git.exe`. Si no, descomprimir PortableGit ahí o actualizar la ruta en los scripts.

2. **Autenticación con GitHub**  
   ```powershell
   gh auth login
   gh auth setup-git
   gh auth status
   ```

3. **Remote y rama**  
   ```powershell
   cd "c:\Users\13176397\Documents\GitHub\WebForja"
   git remote -v
   git branch --show-current
   ```  
   Si `origin` no es WebForja, corregir con `git remote set-url` o `git remote add`. Si no estás en `main`, `git checkout main`.

4. **Verificación con el script**  
   ```powershell
   npm run deploy:check
   ```  
   Debe marcar Git, remote, branch y (si aplica) Vercel como correctos.

5. **Primer deploy de prueba**  
   ```powershell
   npm run deploy
   ```  
   O con mensaje: `npm run deploy -- "feat: primer deploy con scripts"`.

---

## 4. Si algo falla

| Síntoma | Causa probable | Qué hacer |
|--------|----------------|-----------|
| “versión de git no compatible con Windows” | Los scripts usaban el Git de Programs vía shell. | Actualizado: ahora usan PortableGit y `spawnSync` sin shell. Vuelve a ejecutar `npm run deploy` desde **tu** terminal. |
| “Permission denied” / EPERM al hacer deploy | Ejecutas desde el agente de Cursor (sandbox). | Ejecutar `npm run deploy` desde **tu** PowerShell o CMD. |
| “Push” pide usuario/contraseña o falla por auth | `gh auth` no configurado o Git sin credential helper. | `gh auth login` y luego `gh auth setup-git`. |
| “Remote origin no apunta a WebForja” | `origin` incorrecto o ausente. | `git remote set-url origin https://github.com/EduFabAlvPac/WebForja.git` (o `add` si no hay `origin`). |
| “Nothing to commit” | No hay cambios. | Hacer cambios, guardar, y volver a `npm run deploy`. |
| Deploy en Vercel no se dispara | Repo no conectado en Vercel. | Vercel Dashboard → proyecto → Settings → Git → conectar **EduFabAlvPac/WebForja**. |

---

## 5. Comandos útiles

```powershell
cd "c:\Users\13176397\Documents\GitHub\WebForja"

# Ver qué falta
npm run deploy:check

# Deploy (add + commit + push)
npm run deploy
npm run deploy -- "feat: descripción"
```

---

## 6. Resumen de “qué hace falta”

- **Git:** PortableGit en `Downloads\PortableGit` (ya usado por los scripts).  
- **GitHub:** `gh` instalado, `gh auth login` y `gh auth setup-git` hechos.  
- **Repo:** `origin` → WebForja, rama `main`.  
- **Vercel:** Repo conectado en el proyecto web-forja (y, si quieres, `npx vercel link` local).  
- **Ejecución:** `npm run deploy` y `npm run deploy:check` desde **tu** terminal (PowerShell/CMD), no desde el agente de Cursor.

Con esto, el deploy debería funcionar de punta a punta.
