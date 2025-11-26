# 📊 Estructura de Google Sheets - Pestaña FEEDBACK

## 🎯 Propósito

Capturar y analizar el feedback de satisfacción de los usuarios del sitio web para identificar áreas de mejora y medir la experiencia del usuario.

## 💡 Comportamiento del Widget

El widget de feedback aparece como un **botón flotante** en la esquina inferior derecha de todas las páginas:

- **Siempre visible**: El usuario puede dar feedback en cualquier momento después de navegar
- **No intrusivo**: Solo se abre cuando el usuario hace clic voluntariamente
- **Diseño atractivo**: Botón naranja con efecto pulse y tooltip informativo
- **Experiencia fluida**: Modal elegante con 3 pasos (calificación → motivo → confirmación)

## 📋 Estructura de la Pestaña "Feedback"

### Encabezados (Fila 1)

| Columna | Campo | Tipo | Descripción |
|---------|-------|------|-------------|
| **A** | `Timestamp` | Fecha/Hora | Fecha y hora exacta del feedback |
| **B** | `Nivel_Satisfaccion` | Número (1-5) | 1=Muy insatisfecho, 5=Muy satisfecho |
| **C** | `Etiqueta_Satisfaccion` | Texto | Descripción del nivel (ej: "Muy satisfecho") |
| **D** | `Motivo_ID` | Texto | ID del motivo seleccionado |
| **E** | `Motivo_Texto` | Texto | Descripción completa del motivo |
| **F** | `URL_Pagina` | URL | URL completa donde se dio el feedback |
| **G** | `Ruta_Pagina` | Texto | Ruta de la página (ej: /servicios) |
| **H** | `User_Agent` | Texto | Navegador y sistema operativo |
| **I** | `Resolucion_Pantalla` | Texto | Resolución de pantalla (ej: 1920x1080) |
| **J** | `IP_Usuario` | Texto | Dirección IP del usuario |
| **K** | `Referrer` | URL | Página de origen del usuario |

## 🎨 Formato Visual Automático

El script aplica colores automáticamente según el nivel de satisfacción:

- **🔴 Rojo claro** (#FEE2E2): Niveles 1-2 (Muy insatisfecho/Insatisfecho)
- **🟡 Amarillo claro** (#FEF3C7): Nivel 3 (Neutral)
- **🟢 Verde claro** (#D1FAE5): Niveles 4-5 (Satisfecho/Muy satisfecho)

## 📊 Valores de Ejemplo

```
Timestamp: 2024-11-26T15:30:45.123Z
Nivel_Satisfaccion: 5
Etiqueta_Satisfaccion: Muy satisfecho
Motivo_ID: informacion-clara
Motivo_Texto: La información es clara y útil
URL_Pagina: https://forjadigital.co/servicios/talento-finanzas
Ruta_Pagina: /servicios/talento-finanzas
User_Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)...
Resolucion_Pantalla: 1920x1080
IP_Usuario: 192.168.1.100
Referrer: https://google.com
```

## 🔢 Niveles de Satisfacción

| Nivel | Emoji | Etiqueta | Color |
|-------|-------|----------|-------|
| 1 | 😠 | Muy insatisfecho | Rojo |
| 2 | 😕 | Insatisfecho | Naranja |
| 3 | 😐 | Neutral | Amarillo |
| 4 | 🙂 | Satisfecho | Lima |
| 5 | 😍 | Muy satisfecho | Verde |

## 📝 Motivos Posibles

### Motivos Positivos (Niveles 4-5)

- `informacion-clara` - La información es clara y útil
- `navegacion-facil` - Es fácil navegar por el sitio
- `diseno-atractivo` - El diseño es atractivo y profesional
- `contenido-util` - El contenido me ayudó a resolver mis dudas
- `carga-rapida` - El sitio carga rápidamente
- `otro` - Otro motivo (texto libre)

### Motivos Negativos (Niveles 1-3)

- `informacion-confusa` - La información no es clara
- `dificil-navegar` - Es difícil encontrar lo que busco
- `diseno-mejorable` - El diseño podría mejorar
- `contenido-insuficiente` - Falta información importante
- `carga-lenta` - El sitio es lento
- `otro` - Otro motivo (texto libre)

## 📈 Análisis Recomendado

### 1. NPS (Net Promoter Score)

Fórmula en Google Sheets:
```
=((COUNTIF(B:B,5)/COUNTA(B:B))-(COUNTIF(B:B,"<=2")/COUNTA(B:B)))*100
```

**Interpretación:**
- **NPS > 50**: Excelente
- **NPS 30-50**: Bueno
- **NPS 0-30**: Mejorable
- **NPS < 0**: Crítico

### 2. Satisfacción Promedio

Fórmula:
```
=AVERAGE(B2:B)
```

**Meta:** ≥ 4.0 (80% de satisfacción)

### 3. % de Satisfechos

Fórmula:
```
=(COUNTIF(B:B,">=4")/COUNTA(B:B))*100
```

**Meta:** ≥ 80%

### 4. Páginas con Menor Satisfacción

1. Crear tabla dinámica con `Ruta_Pagina` y promedio de `Nivel_Satisfaccion`
2. Ordenar de menor a mayor
3. Priorizar mejoras en páginas con promedio < 3.5

### 5. Motivos Más Frecuentes

Fórmula para contar motivos:
```
=COUNTIF(D:D,"informacion-confusa")
```

## 🔄 Integración con Pestaña de Leads

### Relación entre Feedback y Conversión

Puedes cruzar datos de feedback con leads para entender:

1. **¿Los usuarios satisfechos convierten más?**
   - Comparar IPs o timestamps entre "Feedback" y "Leads"

2. **¿Qué páginas generan más leads?**
   - Filtrar feedback por `Ruta_Pagina` de servicios específicos

3. **¿Qué motivos positivos correlacionan con conversión?**
   - Analizar motivos de usuarios que luego se convirtieron en leads

### Fórmula de Correlación (Ejemplo)

En una nueva pestaña "Análisis":
```
=QUERY(Feedback!A:K, "SELECT G, AVG(B), COUNT(B) GROUP BY G ORDER BY AVG(B) DESC")
```

Esto muestra:
- Ruta de página
- Satisfacción promedio
- Número de feedbacks

## 🎯 KPIs Recomendados

### Dashboard de Feedback (Crear en pestaña separada)

1. **NPS Global**: [Fórmula arriba]
2. **Satisfacción Promedio**: [Fórmula arriba]
3. **% Satisfechos**: [Fórmula arriba]
4. **Total de Respuestas**: `=COUNTA(Feedback!B:B)-1`
5. **Respuestas Última Semana**: `=COUNTIFS(Feedback!A:A,">="&TODAY()-7)`

### Gráficos Recomendados

1. **Gráfico de Barras**: Distribución de niveles (1-5)
2. **Gráfico de Pastel**: % Satisfechos vs Neutrales vs Insatisfechos
3. **Gráfico de Líneas**: Evolución de satisfacción en el tiempo
4. **Gráfico de Barras**: Top 10 motivos más frecuentes

## ⚙️ Automatización Recomendada

### Trigger para Alertas

Crear un trigger en Apps Script que envíe email cuando:
- Se recibe feedback con nivel 1 o 2 (insatisfecho)
- Se acumulan 5+ feedbacks negativos en un día
- NPS cae por debajo de 30

```javascript
function checkNegativeFeedback() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Feedback');
  const data = sheet.getDataRange().getValues();
  
  // Obtener últimas 24 horas
  const yesterday = new Date(Date.now() - 24*60*60*1000);
  const recentNegative = data.filter(row => {
    const timestamp = new Date(row[0]);
    const level = row[1];
    return timestamp > yesterday && level <= 2;
  });
  
  if (recentNegative.length >= 5) {
    // Enviar email de alerta
    MailApp.sendEmail({
      to: 'tu-email@forjadigital.co',
      subject: '⚠️ ALERTA: Múltiples feedbacks negativos',
      body: `Se han recibido ${recentNegative.length} feedbacks negativos en las últimas 24 horas.`
    });
  }
}
```

## 📱 Datos de Contexto Capturados

### User Agent
Permite identificar:
- Navegador (Chrome, Firefox, Safari, etc.)
- Sistema operativo (Windows, Mac, iOS, Android)
- Dispositivo (Desktop, Mobile, Tablet)

### Resolución de Pantalla
Ayuda a:
- Identificar problemas en resoluciones específicas
- Optimizar diseño responsive
- Detectar patrones de uso por dispositivo

### Referrer
Indica:
- De dónde vienen los usuarios (Google, redes sociales, directo)
- Qué campañas generan usuarios más satisfechos
- Fuentes de tráfico de calidad

## 🚀 Próximos Pasos

1. ✅ Configurar pestaña "Feedback" en Google Sheets
2. ✅ Actualizar Google Apps Script con función `handleFeedback`
3. ✅ Desplegar script y obtener URL
4. ✅ Configurar variable de entorno `GOOGLE_APPS_SCRIPT_URL`
5. ✅ Probar el widget en localhost
6. ✅ Desplegar en Vercel
7. 📊 Crear dashboard de análisis en Google Sheets
8. 🔔 Configurar alertas automáticas (opcional)

---

**¡Tu sistema de feedback está listo para capturar insights valiosos de tus usuarios!** 🎉

