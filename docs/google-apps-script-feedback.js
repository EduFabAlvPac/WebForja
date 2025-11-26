/**
 * GOOGLE APPS SCRIPT - FEEDBACK DE USUARIOS
 * 
 * INSTRUCCIONES DE CONFIGURACIÓN:
 * 
 * 1. Abre tu Google Sheet de Leads
 * 2. Crea una nueva pestaña llamada "Feedback"
 * 3. Agrega estos encabezados en la fila 1:
 *    A: Timestamp
 *    B: Nivel_Satisfaccion (1-5)
 *    C: Etiqueta_Satisfaccion
 *    D: Motivo_ID
 *    E: Motivo_Texto
 *    F: URL_Pagina
 *    G: Ruta_Pagina
 *    H: User_Agent
 *    I: Resolucion_Pantalla
 *    J: IP_Usuario
 *    K: Referrer
 * 
 * 4. Ve a Extensiones > Apps Script
 * 5. Agrega esta función al script existente (no reemplaces, AGREGA)
 * 6. Guarda y despliega
 */

function handleFeedback(data) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let feedbackSheet = ss.getSheetByName('Feedback');
    
    // Si no existe la hoja, crearla
    if (!feedbackSheet) {
      feedbackSheet = ss.insertSheet('Feedback');
      
      // Agregar encabezados
      const headers = [
        'Timestamp',
        'Nivel_Satisfaccion',
        'Etiqueta_Satisfaccion',
        'Motivo_ID',
        'Motivo_Texto',
        'URL_Pagina',
        'Ruta_Pagina',
        'User_Agent',
        'Resolucion_Pantalla',
        'IP_Usuario',
        'Referrer'
      ];
      
      feedbackSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Formatear encabezados
      feedbackSheet.getRange(1, 1, 1, headers.length)
        .setBackground('#27325A')
        .setFontColor('#FFFFFF')
        .setFontWeight('bold')
        .setHorizontalAlignment('center');
      
      // Congelar fila de encabezados
      feedbackSheet.setFrozenRows(1);
      
      // Ajustar anchos de columna
      feedbackSheet.setColumnWidth(1, 180); // Timestamp
      feedbackSheet.setColumnWidth(2, 120); // Nivel
      feedbackSheet.setColumnWidth(3, 150); // Etiqueta
      feedbackSheet.setColumnWidth(4, 180); // Motivo ID
      feedbackSheet.setColumnWidth(5, 300); // Motivo Texto
      feedbackSheet.setColumnWidth(6, 400); // URL
      feedbackSheet.setColumnWidth(7, 200); // Ruta
      feedbackSheet.setColumnWidth(8, 300); // User Agent
      feedbackSheet.setColumnWidth(9, 120); // Resolución
      feedbackSheet.setColumnWidth(10, 120); // IP
      feedbackSheet.setColumnWidth(11, 300); // Referrer
    }
    
    // Preparar fila de datos
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.satisfaction_level || '',
      data.satisfaction_label || '',
      data.reason || '',
      data.reason_text || '',
      data.page_url || '',
      data.page_path || '',
      data.user_agent || '',
      data.screen_resolution || '',
      data.ip_address || '',
      data.referrer || ''
    ];
    
    // Agregar fila
    feedbackSheet.appendRow(rowData);
    
    // Formatear la nueva fila
    const lastRow = feedbackSheet.getLastRow();
    
    // Color de fondo según nivel de satisfacción
    let bgColor = '#FFFFFF';
    if (data.satisfaction_level <= 2) {
      bgColor = '#FEE2E2'; // Rojo claro
    } else if (data.satisfaction_level === 3) {
      bgColor = '#FEF3C7'; // Amarillo claro
    } else if (data.satisfaction_level >= 4) {
      bgColor = '#D1FAE5'; // Verde claro
    }
    
    feedbackSheet.getRange(lastRow, 1, 1, rowData.length)
      .setBackground(bgColor)
      .setBorder(true, true, true, true, false, false);
    
    Logger.log('Feedback guardado exitosamente en fila ' + lastRow);
    
    return {
      success: true,
      message: 'Feedback guardado exitosamente',
      row: lastRow
    };
    
  } catch (error) {
    Logger.log('Error al guardar feedback: ' + error.toString());
    throw new Error('Error al guardar feedback: ' + error.toString());
  }
}

/**
 * ACTUALIZAR LA FUNCIÓN doPost EXISTENTE
 * 
 * Agrega este bloque dentro de tu función doPost existente:
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Detectar tipo de solicitud
    if (data.type === 'feedback') {
      // NUEVO: Manejar feedback
      const result = handleFeedback(data);
      return ContentService
        .createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Código existente para contacto...
    if (data.type === 'contacto' || !data.type) {
      return handleContactForm(data);
    }
    
    // Si no coincide con ningún tipo
    throw new Error('Tipo de solicitud no reconocido');
    
  } catch (error) {
    Logger.log('Error en doPost: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * FUNCIÓN ADICIONAL: Generar reporte de satisfacción
 * 
 * Esta función genera estadísticas automáticas del feedback
 */

function generateFeedbackReport() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const feedbackSheet = ss.getSheetByName('Feedback');
  
  if (!feedbackSheet) {
    Logger.log('No existe la hoja de Feedback');
    return;
  }
  
  const data = feedbackSheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);
  
  // Calcular estadísticas
  let total = rows.length;
  let satisfechos = 0; // 4 y 5
  let neutrales = 0;   // 3
  let insatisfechos = 0; // 1 y 2
  
  const motivosCounts = {};
  
  rows.forEach(row => {
    const nivel = row[1]; // Nivel_Satisfaccion
    const motivo = row[4]; // Motivo_Texto
    
    if (nivel >= 4) satisfechos++;
    else if (nivel === 3) neutrales++;
    else if (nivel <= 2) insatisfechos++;
    
    if (motivo) {
      motivosCounts[motivo] = (motivosCounts[motivo] || 0) + 1;
    }
  });
  
  // Crear o actualizar hoja de reporte
  let reportSheet = ss.getSheetByName('Reporte_Feedback');
  if (!reportSheet) {
    reportSheet = ss.insertSheet('Reporte_Feedback');
  } else {
    reportSheet.clear();
  }
  
  // Escribir reporte
  reportSheet.getRange('A1').setValue('REPORTE DE SATISFACCIÓN');
  reportSheet.getRange('A1').setFontSize(16).setFontWeight('bold');
  
  reportSheet.getRange('A3').setValue('Total de respuestas:');
  reportSheet.getRange('B3').setValue(total);
  
  reportSheet.getRange('A4').setValue('Satisfechos (4-5):');
  reportSheet.getRange('B4').setValue(satisfechos);
  reportSheet.getRange('C4').setValue(total > 0 ? ((satisfechos / total) * 100).toFixed(1) + '%' : '0%');
  
  reportSheet.getRange('A5').setValue('Neutrales (3):');
  reportSheet.getRange('B5').setValue(neutrales);
  reportSheet.getRange('C5').setValue(total > 0 ? ((neutrales / total) * 100).toFixed(1) + '%' : '0%');
  
  reportSheet.getRange('A6').setValue('Insatisfechos (1-2):');
  reportSheet.getRange('B6').setValue(insatisfechos);
  reportSheet.getRange('C6').setValue(total > 0 ? ((insatisfechos / total) * 100).toFixed(1) + '%' : '0%');
  
  // Motivos más comunes
  reportSheet.getRange('A8').setValue('MOTIVOS MÁS COMUNES:');
  reportSheet.getRange('A8').setFontWeight('bold');
  
  const sortedMotivos = Object.entries(motivosCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  
  let row = 9;
  sortedMotivos.forEach(([motivo, count]) => {
    reportSheet.getRange(row, 1).setValue(motivo);
    reportSheet.getRange(row, 2).setValue(count);
    row++;
  });
  
  Logger.log('Reporte generado exitosamente');
}

