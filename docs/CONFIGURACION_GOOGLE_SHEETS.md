# 📊 Configuración de Integración con Google Sheets

## 🎯 Objetivo
Conectar el formulario de contacto de la web con Google Sheets para guardar automáticamente los leads y enviar notificaciones por email.

---

## 📋 Paso 1: Actualizar Google Apps Script

1. Abre tu Google Sheet: **ForjaDigitalAE - BD - Leads**
2. Ve a **Extensiones → Apps Script**
3. **Reemplaza TODO el código** con el contenido del archivo:
   ```
   docs/google-apps-script-updated.js
   ```
4. Haz clic en **💾 Guardar** (Ctrl+S)
5. Haz clic en **▶️ Ejecutar** para autorizar permisos (primera vez)

---

## 📋 Paso 2: Verificar estructura de Google Sheets

Asegúrate de que tu hoja **"Leads_Formulario"** tenga EXACTAMENTE estas columnas en este orden:

```
A: Timestamp
B: ID_Lead
C: Fuente_Lead          ⭐ NUEVA COLUMNA
D: Nombre_Contacto
E: Email
F: Telefono
G: Cargo
H: Empresa
I: Sector
J: Num_Empleados
K: Años_Operacion
L: Ubicacion
M: Sitio_Web
N: Desafios
O: Objetivo
P: Plazo_Resultados
Q: Como_Conocio
R: Presupuesto
S: Equipo_Tecnico
T: Urgencia
U: Area_Dolor
V: Horario_Contacto
W: Estado_Lead
X: Notas
Y: Ultimo_Contacto
Z: Acepta_Politicas
AA: Fecha_Aceptacion
AB: IP_Usuario
AC: Version_Politica
AD: Evidencia_Consentimiento
```

### ⚠️ Importante:
- La columna **C: Fuente_Lead** es NUEVA
- Debe estar entre `ID_Lead` y `Nombre_Contacto`
- Si no existe, inserta una columna en la posición C

---

## 📋 Paso 3: Desplegar el Google Apps Script

1. En el editor de Apps Script, haz clic en **Implementar → Nueva implementación**
2. Selecciona **Aplicación web**
3. Configura:
   - **Descripción:** `v4.0 - Integración Contacto Web`
   - **Ejecutar como:** `Yo (tu email)`
   - **Quién tiene acceso:** `Cualquier persona`
4. Haz clic en **Implementar**
5. **Copia la URL** que te da (algo como: `https://script.google.com/macros/s/AKfycby.../exec`)

---

## 📋 Paso 4: Configurar variables de entorno en Vercel

### Opción A: Desde el Dashboard de Vercel (Recomendado)

1. Ve a tu proyecto en Vercel: https://vercel.com/dashboard
2. Selecciona tu proyecto **WebForja**
3. Ve a **Settings → Environment Variables**
4. Agrega una nueva variable:
   - **Name:** `GOOGLE_SCRIPT_URL`
   - **Value:** `https://script.google.com/macros/s/AKfycbzbnqizy8aR20Nm-OX3jPYLIKApgi6i2UCTg7rb9ysuaCrbqzw4cHzVUJNbsZEiovQ/exec`
   - **Environments:** Marca todas (Production, Preview, Development)
5. Haz clic en **Save**
6. **Redeploy** tu proyecto para que tome la variable

### Opción B: Desde la terminal (si tienes Vercel CLI)

```bash
vercel env add GOOGLE_SCRIPT_URL
# Pega la URL cuando te lo pida
```

---

## 📋 Paso 5: Configurar localmente (Desarrollo)

1. Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# .env.local
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzbnqizy8aR20Nm-OX3jPYLIKApgi6i2UCTg7rb9ysuaCrbqzw4cHzVUJNbsZEiovQ/exec
```

2. Reinicia el servidor de desarrollo:

```bash
npm run dev
```

---

## 🧪 Paso 6: Probar la integración

### Prueba Local:

1. Ve a: http://localhost:3003/contacto
2. Llena el formulario con datos de prueba
3. Envía el formulario
4. Verifica:
   - ✅ Mensaje de éxito en la web
   - ✅ Nuevo registro en Google Sheets con `Fuente_Lead = "Contacto Web"`
   - ✅ Email recibido en `forjadigitalae@gmail.com`
   - ✅ Email de confirmación al usuario

### Prueba en Producción:

1. Ve a: https://tu-dominio.com/contacto
2. Repite el proceso anterior

---

## 📧 Emails que se envían

### 1. Email a la empresa (forjadigitalae@gmail.com)

- **Asunto:** `💬 Nuevo Contacto Web - [Empresa o Nombre]`
- **Contenido:** Datos del lead en formato profesional
- **Diseño:** Naranja (brand color) con toda la información

### 2. Email al usuario

- **Asunto:** `✅ Mensaje recibido - ForjaDigitalAE`
- **Contenido:** Confirmación de recepción + tiempo de respuesta
- **Diseño:** Gradiente turquesa/navy con CTA a Rayos-X

---

## 🔍 Diferencias entre formularios

| Campo | Rayos-X Empresarial | Contacto Web |
|-------|---------------------|--------------|
| **Fuente_Lead** | "Rayos-X Empresarial" | "Contacto Web" |
| **Estado_Lead** | "Nuevo - Rayos-X" | "Nuevo - Contacto Web" |
| **Campos completos** | Todos (29 campos) | Solo 6 campos básicos |
| **Email color** | Azul navy | Naranja |
| **Icono email** | 🔬 | 💬 |

---

## ⚠️ Troubleshooting

### Error: "Script function not found: doGet"
- **Causa:** El script no tiene función `doGet` (es normal, solo usamos `doPost`)
- **Solución:** Ignora este error, es esperado

### Error: "No se recibieron datos"
- **Causa:** La URL del script no está configurada correctamente
- **Solución:** Verifica que `GOOGLE_SCRIPT_URL` esté bien configurada

### Los emails no llegan
- **Causa:** El script no tiene permisos
- **Solución:** Ve a Apps Script → Ejecutar → Autorizar permisos

### Los datos no se guardan
- **Causa:** La columna `Fuente_Lead` no existe
- **Solución:** Inserta la columna C con el nombre exacto `Fuente_Lead`

---

## 📊 Monitoreo

Para ver los logs del Google Apps Script:

1. Ve a **Apps Script → Ejecuciones**
2. Verás cada vez que se ejecuta el script
3. Si hay errores, aparecerán en rojo

---

## 🎉 ¡Listo!

Una vez completados todos los pasos, tu formulario de contacto estará:
- ✅ Guardando leads en Google Sheets
- ✅ Diferenciando entre Rayos-X y Contacto Web
- ✅ Enviando emails profesionales
- ✅ Capturando IP y datos legales
- ✅ Generando IDs únicos para cada lead

---

## 🔐 Seguridad

- ✅ La URL del script es pública (necesario para que funcione)
- ✅ Los datos se validan en el servidor (Next.js)
- ✅ Los emails se envían desde Google (confiable)
- ✅ Las IPs se capturan para compliance legal
- ✅ El consentimiento se registra automáticamente

---

**¿Necesitas ayuda?** Contacta al equipo de desarrollo.

