# 📊 Configuración del Sistema de Feedback de Usuarios

## 🎯 Descripción

Sistema de feedback que permite a los usuarios calificar su experiencia en el sitio web mediante emojis (1-5 estrellas) y proporcionar motivos específicos. Los datos se guardan automáticamente en Google Sheets para análisis.

## ✨ Características

- ✅ Widget modal elegante con diseño profesional
- ✅ Sistema de calificación con 5 emojis (😠 😕 😐 🙂 😍)
- ✅ Preguntas contextuales según la calificación
- ✅ Guardado automático en Google Sheets
- ✅ Aparece automáticamente después de 30 segundos
- ✅ Se muestra solo una vez por sesión
- ✅ Diseño responsive y accesible
- ✅ Animaciones suaves con Framer Motion

## 📋 Estructura de Datos en Google Sheets

### Pestaña "Feedback"

| Columna | Nombre | Descripción | Ejemplo |
|---------|--------|-------------|---------|
| A | Timestamp | Fecha y hora del feedback | 2024-01-15T10:30:00.000Z |
| B | Nivel_Satisfaccion | Nivel de 1 a 5 | 5 |
| C | Etiqueta_Satisfaccion | Texto descriptivo | Muy satisfecho |
| D | Motivo_ID | ID del motivo seleccionado | informacion-clara |
| E | Motivo_Texto | Texto completo del motivo | La información es clara y útil |
| F | URL_Pagina | URL completa | https://forjadigital.co/servicios |
| G | Ruta_Pagina | Ruta de la página | /servicios |
| H | User_Agent | Navegador del usuario | Mozilla/5.0... |
| I | Resolucion_Pantalla | Resolución de pantalla | 1920x1080 |
| J | IP_Usuario | Dirección IP | 192.168.1.1 |
| K | Referrer | Página de origen | https://google.com |

### Colores Automáticos por Satisfacción

- **Rojo claro** (#FEE2E2): Niveles 1-2 (Insatisfecho)
- **Amarillo claro** (#FEF3C7): Nivel 3 (Neutral)
- **Verde claro** (#D1FAE5): Niveles 4-5 (Satisfecho)

## 🔧 Configuración en Google Sheets

### Paso 1: Crear Pestaña de Feedback

1. Abre tu Google Sheet de Leads existente
2. Crea una nueva pestaña llamada **"Feedback"**
3. El script creará automáticamente los encabezados en el primer uso

### Paso 2: Actualizar Google Apps Script

1. En tu Google Sheet, ve a **Extensiones > Apps Script**
2. Abre el archivo `google-apps-script-feedback.js` de la carpeta `docs/`
3. **AGREGA** (no reemplaces) las siguientes funciones a tu script existente:
   - `handleFeedback(data)`
   - Actualiza `doPost(e)` para incluir el manejo de feedback
   - `generateFeedbackReport()` (opcional, para reportes automáticos)

### Paso 3: Código a Agregar en doPost

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // NUEVO: Detectar tipo de solicitud
    if (data.type === 'feedback') {
      const result = handleFeedback(data);
      return ContentService
        .createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Tu código existente para contacto...
    if (data.type === 'contacto' || !data.type) {
      return handleContactForm(data);
    }
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Paso 4: Desplegar el Script

1. Haz clic en **Implementar > Nueva implementación**
2. Tipo: **Aplicación web**
3. Ejecutar como: **Yo**
4. Quién tiene acceso: **Cualquier persona**
5. Copia la **URL de la aplicación web**

### Paso 5: Configurar Variable de Entorno

En tu archivo `.env.local`:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/TU_SCRIPT_ID/exec
```

## 📊 Motivos de Feedback

### Para Satisfechos (Niveles 4-5)

- ✅ La información es clara y útil
- ✅ Es fácil navegar por el sitio
- ✅ El diseño es atractivo y profesional
- ✅ El contenido me ayudó a resolver mis dudas
- ✅ El sitio carga rápidamente
- ✏️ Otro motivo (campo de texto libre)

### Para Insatisfechos (Niveles 1-3)

- ❌ La información no es clara
- ❌ Es difícil encontrar lo que busco
- ❌ El diseño podría mejorar
- ❌ Falta información importante
- ❌ El sitio es lento
- ✏️ Otro motivo (campo de texto libre)

## 📈 Reporte Automático

### Generar Reporte de Satisfacción

El script incluye una función `generateFeedbackReport()` que crea automáticamente:

- Total de respuestas
- % de satisfechos (4-5)
- % de neutrales (3)
- % de insatisfechos (1-2)
- Top 10 motivos más comunes

**Para ejecutar:**
1. Ve a Apps Script
2. Selecciona la función `generateFeedbackReport`
3. Haz clic en ▶️ Ejecutar

Se creará una pestaña **"Reporte_Feedback"** con las estadísticas.

### Automatizar Reportes

Para generar reportes automáticamente cada semana:

1. En Apps Script, ve a **⏰ Activadores**
2. Haz clic en **+ Agregar activador**
3. Función: `generateFeedbackReport`
4. Tipo de evento: **Basado en tiempo**
5. Tipo de activador: **Semanal**
6. Día: **Lunes**
7. Hora: **8:00 - 9:00**

## 🎨 Personalización del Widget

### Modificar Tiempo de Aparición

En `components/shared/FeedbackTrigger.tsx`:

```typescript
const timer = setTimeout(() => {
  setShowWidget(true)
}, 30000) // Cambiar 30000 (30 segundos) al tiempo deseado
```

### Modificar Emojis o Etiquetas

En `components/shared/FeedbackWidget.tsx`:

```typescript
const satisfactionEmojis = [
  { level: 1, emoji: '😠', label: 'Muy insatisfecho', color: 'red' },
  // Modificar según necesites
]
```

### Agregar Más Motivos

En `components/shared/FeedbackWidget.tsx`:

```typescript
const positiveReasons = [
  { id: 'nuevo-motivo', label: 'Nuevo motivo positivo' },
  // Agregar más...
]
```

## 🔍 Análisis de Datos

### Métricas Clave a Monitorear

1. **NPS (Net Promoter Score)**
   - Promotores (5): % de usuarios muy satisfechos
   - Pasivos (3-4): % de usuarios neutrales/satisfechos
   - Detractores (1-2): % de usuarios insatisfechos
   - NPS = % Promotores - % Detractores

2. **Satisfacción Promedio**
   - Suma de todos los niveles / Total de respuestas

3. **Motivos Más Comunes**
   - Identificar patrones en feedback negativo
   - Priorizar mejoras según frecuencia

4. **Páginas con Menor Satisfacción**
   - Filtrar por `Ruta_Pagina`
   - Identificar páginas problemáticas

### Fórmulas Útiles en Google Sheets

**NPS:**
```
=((COUNTIF(B:B,">=4")/COUNTA(B:B))-(COUNTIF(B:B,"<=2")/COUNTA(B:B)))*100
```

**Promedio de Satisfacción:**
```
=AVERAGE(B2:B)
```

**% Satisfechos:**
```
=(COUNTIF(B:B,">=4")/COUNTA(B:B))*100
```

## 🚀 Despliegue

El widget se activará automáticamente en todas las páginas del sitio después de:
- ✅ Configurar Google Apps Script
- ✅ Agregar variable de entorno `GOOGLE_APPS_SCRIPT_URL`
- ✅ Desplegar en Vercel

## 🐛 Troubleshooting

### El widget no aparece

1. Verifica que `GOOGLE_APPS_SCRIPT_URL` esté configurada
2. Abre la consola del navegador (F12) y busca errores
3. Verifica que no hayas cerrado el widget en esta sesión (sessionStorage)

### Los datos no se guardan

1. Verifica que el Google Apps Script esté desplegado correctamente
2. Revisa los logs en Apps Script (Ver > Registros)
3. Verifica que la URL del script sea correcta
4. Asegúrate de que el script tenga permisos de acceso

### El widget aparece demasiado pronto/tarde

Modifica el tiempo en `FeedbackTrigger.tsx` (línea 18)

## 📞 Soporte

Para dudas o problemas con la configuración, revisa:
- `docs/google-apps-script-feedback.js` - Código completo del script
- `components/shared/FeedbackWidget.tsx` - Componente del widget
- `app/api/feedback/route.ts` - API endpoint

---

**¡Tu sistema de feedback está listo para capturar insights valiosos de tus usuarios!** 🎉

