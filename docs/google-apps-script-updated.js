/**
 * FORJADIGITALAE - GOOGLE APPS SCRIPT v4.0
 * Integración: Rayos-X Empresarial + Formulario de Contacto Web
 */

// ===== CONFIGURACIÓN =====
const HOJA_LEADS_NOMBRE = "Leads_Formulario";
const HOJA_RESPUESTAS_NOMBRE = "Rt/:Madurez";
const VERSION_POLITICA = "v1.0";
const EMAIL_NOTIFICACION = "forjadigitalae@gmail.com";
const HEADER_ID_LEAD = "ID_Lead";
const HEADER_FUENTE_LEAD = "Fuente_Lead";

// ===== FUNCIÓN PRINCIPAL DE ENTRADA (POST) =====
function doPost(e) {
  try {
    if (!e || !e.parameter) {
      throw new Error("No se recibieron datos en la solicitud.");
    }

    const datos = e.parameter;
    const action = datos.action || 'register';
    
    switch (action) {
      case 'register':
        return handleRegistration(datos);
      case 'contact_form':
        return handleContactForm(datos);
      case 'update_scores':
        return handleUpdateScores(datos);
      case 'save_evaluation':
        return handleSaveEvaluation(datos);
      default:
        throw new Error(`Acción desconocida: ${action}`);
    }
  } catch (error) {
    console.error("❌ ERROR GLOBAL en doPost: " + error.message + "\nStack: " + error.stack);
    return crearRespuesta(false, "Error en el servidor: " + error.message);
  }
}

// ===== MANEJADOR 1: REGISTRO DE NUEVO LEAD (RAYOS-X) =====
function handleRegistration(datos) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName(HOJA_LEADS_NOMBRE);
  if (!hoja) throw new Error(`No se encontró la hoja '${HOJA_LEADS_NOMBRE}'.`);

  const ahora = new Date();
  const ultimaFila = hoja.getLastRow();
  const idLead = `FORJA-${ahora.getFullYear()}${String(ahora.getMonth() + 1).padStart(2, '0')}${String(ahora.getDate()).padStart(2, '0')}-${String(ultimaFila).padStart(4, '0')}`;

  let desafios = procesarCampoMultiple(datos, 'desafio');
  
  const fila = [
    ahora,                                    // A: Timestamp
    idLead,                                   // B: ID_Lead
    "Rayos-X Empresarial",                   // C: Fuente_Lead ⭐ NUEVO
    datos.nombre_contacto || "",              // D: Nombre_Contacto
    datos.email || "",                        // E: Email
    datos.telefono || "",                     // F: Telefono
    datos.cargo || "",                        // G: Cargo
    datos.empresa || "",                      // H: Empresa
    datos.sector || "",                       // I: Sector
    datos.empleados || "",                    // J: Num_Empleados
    datos.tiempo_operacion || "",             // K: Años_Operacion
    datos.ubicacion || "",                    // L: Ubicacion
    datos.sitio_web || "",                    // M: Sitio_Web
    desafios,                                 // N: Desafios
    datos.objetivo || "",                     // O: Objetivo
    datos.plazo_resultados || "",             // P: Plazo_Resultados
    datos.como_conocio || "",                 // Q: Como_Conocio
    datos.presupuesto || "",                  // R: Presupuesto
    datos.equipo_tecnico || "",               // S: Equipo_Tecnico
    datos.urgencia || "",                     // T: Urgencia
    datos.area_dolor || "",                   // U: Area_Dolor
    datos.horario_contacto || "",             // V: Horario_Contacto
    "Nuevo - Rayos-X",                        // W: Estado_Lead
    "",                                       // X: Notas
    "",                                       // Y: Ultimo_Contacto
    "Sí",                                     // Z: Acepta_Politicas
    ahora,                                    // AA: Fecha_Aceptacion
    "Privado (Apps Script)",                  // AB: IP_Usuario
    VERSION_POLITICA,                         // AC: Version_Politica
    "Acepto la Política de Privacidad y autorizo el tratamiento de mis datos personales de acuerdo con la Ley 1581 de 2012." // AD: Evidencia_Consentimiento
  ];
  
  hoja.appendRow(fila);

  try {
    enviarEmailRayosX(datos, ss.getUrl(), desafios, idLead);
    enviarEmailConfirmacionRayosX(datos);
  } catch(e) {
    console.warn("⚠️ Error al enviar emails: " + e.toString());
  }

  return crearRespuesta(true, "¡Formulario enviado con éxito!", { id_lead: idLead });
}

// ===== MANEJADOR 2: FORMULARIO DE CONTACTO WEB ⭐ NUEVO =====
function handleContactForm(datos) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName(HOJA_LEADS_NOMBRE);
  if (!hoja) throw new Error(`No se encontró la hoja '${HOJA_LEADS_NOMBRE}'.`);

  const ahora = new Date();
  const ultimaFila = hoja.getLastRow();
  const idLead = `FORJA-${ahora.getFullYear()}${String(ahora.getMonth() + 1).padStart(2, '0')}${String(ahora.getDate()).padStart(2, '0')}-${String(ultimaFila).padStart(4, '0')}`;

  const fila = [
    ahora,                                    // A: Timestamp
    idLead,                                   // B: ID_Lead
    "Contacto Web",                          // C: Fuente_Lead ⭐ NUEVO
    datos.nombre || "",                       // D: Nombre_Contacto
    datos.email || "",                        // E: Email
    datos.telefono || "",                     // F: Telefono
    "",                                       // G: Cargo (vacío)
    datos.empresa || "",                      // H: Empresa
    "",                                       // I: Sector (vacío)
    "",                                       // J: Num_Empleados (vacío)
    "",                                       // K: Años_Operacion (vacío)
    "",                                       // L: Ubicacion (vacío)
    "",                                       // M: Sitio_Web (vacío)
    "",                                       // N: Desafios (vacío)
    "",                                       // O: Objetivo (vacío)
    "",                                       // P: Plazo_Resultados (vacío)
    "Formulario Contacto Web",                // Q: Como_Conocio
    "",                                       // R: Presupuesto (vacío)
    "",                                       // S: Equipo_Tecnico (vacío)
    "Media",                                  // T: Urgencia (default)
    datos.servicio || "",                     // U: Area_Dolor (servicio de interés)
    "",                                       // V: Horario_Contacto (vacío)
    "Nuevo - Contacto Web",                   // W: Estado_Lead
    datos.mensaje || "",                      // X: Notas
    "",                                       // Y: Ultimo_Contacto
    "Sí",                                     // Z: Acepta_Politicas
    ahora,                                    // AA: Fecha_Aceptacion
    datos.ip || "No capturada",               // AB: IP_Usuario
    VERSION_POLITICA,                         // AC: Version_Politica
    "Formulario Contacto Web - Aceptación implícita" // AD: Evidencia_Consentimiento
  ];
  
  hoja.appendRow(fila);

  try {
    enviarEmailContactoWeb(datos, ss.getUrl(), idLead);
    enviarEmailConfirmacionContactoWeb(datos);
  } catch(e) {
    console.warn("⚠️ Error al enviar emails: " + e.toString());
  }

  return crearRespuesta(true, "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.", { id_lead: idLead });
}

// ===== MANEJADOR 3: ACTUALIZACIÓN DE PUNTAJES =====
function handleUpdateScores(datos) {
  const idLead = datos.id_lead;
  if (!idLead) throw new Error("No se proporcionó un 'id_lead' para actualizar.");

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName(HOJA_LEADS_NOMBRE);
  if (!hoja) throw new Error(`No se encontró la hoja '${HOJA_LEADS_NOMBRE}'.`);

  const headers = hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0];
  const idLeadColIndex = headers.indexOf(HEADER_ID_LEAD);
  if (idLeadColIndex === -1) throw new Error(`No se encontró la columna '${HEADER_ID_LEAD}'.`);
  
  const idLeadList = hoja.getRange(2, idLeadColIndex + 1, hoja.getLastRow() - 1, 1).getValues().flat();
  const rowIndex = idLeadList.indexOf(idLead);
  if (rowIndex === -1) throw new Error(`No se encontró ningún lead con el ID '${idLead}'.`);
  
  const filaAActualizar = rowIndex + 2;
  const scoresMap = {
    'Score_General': datos.score_general,
    'Score_Vision_Estrategia': datos.score_vision_estrategia,
    'Score_Gobierno_Empresarial': datos.score_gobierno_empresarial,
    'Score_Procesos_Operaciones': datos.score_procesos_operaciones,
    'Score_Talento_Cultura': datos.score_talento_cultura,
    'Score_Innovacion_Agilidad': datos.score_innovacion_agilidad,
    'Score_Estrategia_Tecnologica': datos.score_estrategia_tecnologica,
    'Score_Inteligencia_Negocio': datos.score_inteligencia_negocio,
    'Score_Experiencia_Cliente': datos.score_experiencia_cliente,
    'Score_Sostenibilidad': datos.score_sostenibilidad,
    'Score_Finanzas': datos.score_finanzas,
    'Benchmark_Score_Promedio_PYME': datos.benchmark_pyme,
    'Benchmark_Score_Lider': datos.benchmark_lider,
    'Benchmark_Percentil': datos.benchmark_percentil
  };

  headers.forEach((header, index) => {
    if (scoresMap[header] !== undefined) {
      hoja.getRange(filaAActualizar, index + 1).setValue(scoresMap[header]);
    }
  });

  return crearRespuesta(true, "Scores actualizados correctamente.");
}

// ===== MANEJADOR 4: GUARDADO DE EVALUACIÓN DETALLADA =====
function handleSaveEvaluation(datos) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName(HOJA_RESPUESTAS_NOMBRE);
  if (!hoja) throw new Error(`No se encontró la hoja '${HOJA_RESPUESTAS_NOMBRE}'.`);
  
  const evaluationData = JSON.parse(datos.data);
  if (!Array.isArray(evaluationData) || evaluationData.length === 0) {
    throw new Error("Datos de evaluación vacíos o en formato incorrecto.");
  }

  const rowsToAppend = evaluationData.map(d => [
    d.timestamp, d.id_evaluacion, d.empresa, d.id_pregunta, d.pregunta,
    d.categoria, d.respuesta, d.puntuacion_categoria, d.nivel_categoria,
    d.puntuacion_final, d.nivel_madurez
  ]);

  hoja.getRange(hoja.getLastRow() + 1, 1, rowsToAppend.length, rowsToAppend[0].length).setValues(rowsToAppend);
  return crearRespuesta(true, "Detalle de la evaluación guardado correctamente.");
}

// ===== FUNCIÓN CLAVE: CREAR RESPUESTA JSON =====
function crearRespuesta(success, message, data) {
  const respuesta = { success: success, message: message, data: data || {} };
  return ContentService
    .createTextOutput(JSON.stringify(respuesta))
    .setMimeType(ContentService.MimeType.JSON);
}

// ===== FUNCIONES AUXILIARES =====
function procesarCampoMultiple(datos, prefijo) {
  const valores = [];
  if (datos[`${prefijo}s_total`]) return datos[`${prefijo}s_total`].replace(/\s*\|\s*/g, ", ");
  
  let index = 0;
  while (datos[`${prefijo}_${index}`]) {
    if (datos[`${prefijo}_${index}`]) valores.push(datos[`${prefijo}_${index}`]);
    index++;
  }
  
  if (valores.length === 0) {
    for (let key in datos) {
      if (key.includes(prefijo) && !key.includes('total') && datos[key]) valores.push(datos[key]);
    }
  }
  
  return [...new Set(valores)].join(", ");
}

// ===== EMAILS PARA RAYOS-X EMPRESARIAL =====
function enviarEmailRayosX(datos, sheetUrl, desafios, idLead) {
  const asunto = "🔬 Nuevo Lead Rayos-X - " + (datos.empresa || "Sin empresa");
  const htmlBody = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;margin:0;padding:0;background-color:#f4f4f4}.container{max-width:600px;margin:20px auto;background:white;border-radius:10px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#27325A 0%,#152E57 100%);color:white;padding:30px 20px;text-align:center}.header h1{margin:0;font-size:24px}.header .badge{display:inline-block;background:rgba(76,206,213,.2);color:#4CCED5;padding:5px 15px;border-radius:20px;font-size:12px;margin-top:10px;font-weight:700}.content{padding:30px 20px}.section{margin-bottom:25px}.section-title{color:#27325A;font-size:16px;font-weight:700;margin-bottom:15px;padding-bottom:8px;border-bottom:2px solid #4CCED5;display:flex;align-items:center}.section-title .icon{margin-right:10px;font-size:20px}.info-grid{display:grid;grid-template-columns:140px 1fr;gap:10px}.info-label{color:#666;font-weight:600}.info-value{color:#333}.objetivo-box{background:#f8f9fa;border-left:4px solid #4CCED5;padding:15px;border-radius:4px;margin-top:10px}.urgencia{display:inline-block;padding:5px 15px;border-radius:20px;font-weight:700;font-size:14px}.urgencia-alta{background:#fee;color:#c00}.urgencia-media{background:#ffeaa7;color:#d63031}.urgencia-baja{background:#dfe6e9;color:#2d3436}.footer{background:#f8f9fa;padding:20px;text-align:center}.btn{display:inline-block;padding:12px 30px;background:#4CCED5;color:white;text-decoration:none;border-radius:5px;font-weight:700;margin:10px 0}.divider{height:1px;background:#e0e0e0;margin:20px 0}</style></head><body><div class="container"><div class="header"><h1>🔬 Nuevo Lead: Rayos-X Empresarial</h1><span class="badge">ID: ${idLead}</span></div><div class="content"><div class="section"><div class="section-title"><span class="icon">👤</span>DATOS DEL CONTACTO</div><div class="info-grid"><div class="info-label">Nombre:</div><div class="info-value">${datos.nombre_contacto||"N/A"}</div><div class="info-label">Email:</div><div class="info-value"><a href="mailto:${datos.email}" style="color:#4CCED5">${datos.email||"N/A"}</a></div><div class="info-label">Teléfono:</div><div class="info-value"><a href="https://wa.me/${(datos.telefono||"").replace(/[^0-9]/g,"")}" style="color:#4CCED5">${datos.telefono||"N/A"}</a></div><div class="info-label">Cargo:</div><div class="info-value">${datos.cargo||"N/A"}</div></div></div><div class="divider"></div><div class="section"><div class="section-title"><span class="icon">🏢</span>DATOS DE LA EMPRESA</div><div class="info-grid"><div class="info-label">Empresa:</div><div class="info-value"><strong>${datos.empresa||"N/A"}</strong></div><div class="info-label">Sector:</div><div class="info-value">${datos.sector||"N/A"}</div><div class="info-label">Empleados:</div><div class="info-value">${datos.empleados||"N/A"}</div><div class="info-label">Ubicación:</div><div class="info-value">${datos.ubicacion||"N/A"}</div></div></div><div class="divider"></div><div class="section"><div class="section-title"><span class="icon">🎯</span>OBJETIVO Y NECESIDADES</div><div class="objetivo-box">${datos.objetivo||"No especificado"}</div><div style="margin-top:15px"><div class="info-grid"><div class="info-label">Desafíos:</div><div class="info-value"><strong>${desafios||"N/A"}</strong></div><div class="info-label">Área crítica:</div><div class="info-value">${datos.area_dolor||"N/A"}</div><div class="info-label">Presupuesto:</div><div class="info-value">${datos.presupuesto||"N/A"}</div></div></div></div><div class="divider"></div><div class="section"><div class="section-title"><span class="icon">⚡</span>NIVEL DE URGENCIA</div><span class="urgencia ${datos.urgencia>=4?"urgencia-alta":datos.urgencia==3?"urgencia-media":"urgencia-baja"}">${datos.urgencia?"⭐".repeat(parseInt(datos.urgencia))+" ("+datos.urgencia+"/5)":"No especificado"}</span></div></div><div class="footer"><a href="${sheetUrl}" class="btn">📊 Ver en Google Sheets</a><p style="margin-top:15px;color:#666;font-size:12px">ForjaDigitalAE - Sistema Automático de Leads<br>${new Date().toLocaleString("es-CO",{timeZone:"America/Bogota"})}</p></div></div></body></html>`;
  
  MailApp.sendEmail({ to: EMAIL_NOTIFICACION, subject: asunto, htmlBody: htmlBody });
}

function enviarEmailConfirmacionRayosX(datos) {
  if (!datos.email || !datos.email.includes('@')) {
    console.warn("Email del usuario inválido para confirmación: " + datos.email);
    return;
  }

  const asunto = "✅ Hemos recibido tu solicitud - ForjaDigitalAE";
  const htmlBody = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;margin:0;padding:0;background-color:#f4f4f4}.container{max-width:600px;margin:20px auto;background:white;border-radius:10px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#4CCED5 0%,#8560C0 100%);color:white;padding:40px 20px;text-align:center}.header h1{margin:0;font-size:28px}.content{padding:40px 30px}.greeting{font-size:18px;color:#27325A;margin-bottom:20px}.message{color:#333;line-height:1.8;font-size:15px}.highlight-box{background:#f0f9ff;border-left:4px solid #4CCED5;padding:20px;margin:25px 0;border-radius:4px}.info-section{background:#f8f9fa;padding:20px;border-radius:8px;margin:20px 0}.contact-info{display:flex;align-items:center;margin:10px 0;color:#555}.contact-info .icon{margin-right:10px;font-size:18px}.footer{background:#27325A;color:white;padding:30px 20px;text-align:center}</style></head><body><div class="container"><div class="header"><h1>✅ ¡Solicitud Recibida!</h1><p>Gracias por confiar en ForjaDigitalAE</p></div><div class="content"><div class="greeting">Hola <strong>${datos.nombre_contacto||"estimado/a"}</strong>,</div><div class="message"><p>¡Excelente noticia! Hemos recibido exitosamente tu solicitud y estamos emocionados de conocer más sobre <strong>${datos.empresa||"tu empresa"}</strong>.</p><div class="highlight-box"><strong>🚀 ¿Qué sigue ahora?</strong><br>Un <strong>Forjador experto</strong> de nuestro equipo revisará tu información y se pondrá en contacto contigo en un máximo de <strong>24 horas hábiles</strong>.</div><p>Si necesitas comunicarte con nosotros de inmediato:</p></div><div class="info-section"><div class="contact-info"><span class="icon">📱</span><strong>WhatsApp:</strong>&nbsp;<a href="https://wa.me/573142365590" style="color:#4CCED5">+57 314 236 5590</a></div><div class="contact-info"><span class="icon">📧</span><strong>Email:</strong>&nbsp;<a href="mailto:forjadigitalae@gmail.com" style="color:#4CCED5">forjadigitalae@gmail.com</a></div></div></div><div class="footer"><p style="font-size:18px;margin-bottom:15px"><strong>ForjaDigitalAE</strong></p><p style="font-size:14px">Arquitectos del Crecimiento PYME</p><p style="font-size:12px;margin-top:20px;opacity:.8">&quot;El futuro no se espera, se forja&quot; 🔨</p></div></div></body></html>`;
  
  MailApp.sendEmail({ to: datos.email, subject: asunto, htmlBody: htmlBody });
}

// ===== EMAILS PARA FORMULARIO DE CONTACTO WEB ⭐ NUEVOS =====
function enviarEmailContactoWeb(datos, sheetUrl, idLead) {
  const asunto = "💬 Nuevo Contacto Web - " + (datos.empresa || datos.nombre || "Sin identificar");
  const htmlBody = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;margin:0;padding:0;background-color:#f4f4f4}.container{max-width:600px;margin:20px auto;background:white;border-radius:10px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#EE8028 0%,#D96A1A 100%);color:white;padding:30px 20px;text-align:center}.header h1{margin:0;font-size:24px}.header .badge{display:inline-block;background:rgba(255,255,255,.2);color:white;padding:5px 15px;border-radius:20px;font-size:12px;margin-top:10px;font-weight:700}.content{padding:30px 20px}.section{margin-bottom:25px}.section-title{color:#27325A;font-size:16px;font-weight:700;margin-bottom:15px;padding-bottom:8px;border-bottom:2px solid #EE8028;display:flex;align-items:center}.section-title .icon{margin-right:10px;font-size:20px}.info-grid{display:grid;grid-template-columns:140px 1fr;gap:10px}.info-label{color:#666;font-weight:600}.info-value{color:#333}.mensaje-box{background:#fff8f0;border-left:4px solid #EE8028;padding:15px;border-radius:4px;margin-top:10px;font-style:italic;color:#555}.servicio-badge{display:inline-block;background:#4CCED5;color:white;padding:8px 16px;border-radius:20px;font-weight:700;font-size:14px}.footer{background:#f8f9fa;padding:20px;text-align:center}.btn{display:inline-block;padding:12px 30px;background:#EE8028;color:white;text-decoration:none;border-radius:5px;font-weight:700;margin:10px 0}.divider{height:1px;background:#e0e0e0;margin:20px 0}</style></head><body><div class="container"><div class="header"><h1>💬 Nuevo Contacto desde Web</h1><span class="badge">ID: ${idLead}</span></div><div class="content"><div class="section"><div class="section-title"><span class="icon">👤</span>DATOS DEL CONTACTO</div><div class="info-grid"><div class="info-label">Nombre:</div><div class="info-value"><strong>${datos.nombre||"N/A"}</strong></div><div class="info-label">Email:</div><div class="info-value"><a href="mailto:${datos.email}" style="color:#EE8028">${datos.email||"N/A"}</a></div><div class="info-label">Teléfono:</div><div class="info-value"><a href="https://wa.me/${(datos.telefono||"").replace(/[^0-9]/g,"")}" style="color:#EE8028">${datos.telefono||"N/A"}</a></div><div class="info-label">Empresa:</div><div class="info-value">${datos.empresa||"No especificada"}</div></div></div><div class="divider"></div><div class="section"><div class="section-title"><span class="icon">🎯</span>SERVICIO DE INTERÉS</div><span class="servicio-badge">${datos.servicio||"No especificado"}</span></div><div class="divider"></div><div class="section"><div class="section-title"><span class="icon">💬</span>MENSAJE</div><div class="mensaje-box">${datos.mensaje||"No dejó mensaje adicional"}</div></div><div class="divider"></div><div class="section"><div class="section-title"><span class="icon">📊</span>INFORMACIÓN ADICIONAL</div><div class="info-grid"><div class="info-label">Fuente:</div><div class="info-value"><strong>Formulario Contacto Web</strong></div><div class="info-label">Fecha:</div><div class="info-value">${new Date().toLocaleString("es-CO",{timeZone:"America/Bogota"})}</div><div class="info-label">Estado:</div><div class="info-value"><span style="background:#ffeaa7;color:#d63031;padding:3px 10px;border-radius:12px;font-size:12px;font-weight:700">NUEVO - CONTACTO WEB</span></div></div></div></div><div class="footer"><a href="${sheetUrl}" class="btn">📊 Ver en Google Sheets</a><p style="margin-top:15px;color:#666;font-size:12px">ForjaDigitalAE - Sistema Automático de Leads<br>Responder en máximo 24 horas</p></div></div></body></html>`;
  
  MailApp.sendEmail({ to: EMAIL_NOTIFICACION, subject: asunto, htmlBody: htmlBody });
}

function enviarEmailConfirmacionContactoWeb(datos) {
  if (!datos.email || !datos.email.includes('@')) {
    console.warn("Email del usuario inválido para confirmación: " + datos.email);
    return;
  }

  const asunto = "✅ Mensaje recibido - ForjaDigitalAE";
  const htmlBody = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;margin:0;padding:0;background-color:#f4f4f4}.container{max-width:600px;margin:20px auto;background:white;border-radius:10px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#27325A 0%,#4CCED5 100%);color:white;padding:40px 20px;text-align:center}.header h1{margin:0;font-size:28px}.header p{margin:10px 0 0;opacity:.9}.content{padding:40px 30px}.greeting{font-size:18px;color:#27325A;margin-bottom:20px}.message{color:#333;line-height:1.8;font-size:15px}.highlight-box{background:linear-gradient(135deg,#fff8f0 0%,#f0f9ff 100%);border-left:4px solid #EE8028;padding:20px;margin:25px 0;border-radius:8px}.highlight-box strong{color:#EE8028}.info-section{background:#f8f9fa;padding:20px;border-radius:8px;margin:20px 0}.contact-info{display:flex;align-items:center;margin:10px 0;color:#555}.contact-info .icon{margin-right:10px;font-size:18px}.cta-box{background:linear-gradient(135deg,#4CCED5 0%,#8560C0 100%);color:white;padding:25px;border-radius:8px;text-align:center;margin:25px 0}.cta-box h3{margin:0 0 10px;font-size:20px}.cta-box p{margin:0;opacity:.9}.footer{background:#27325A;color:white;padding:30px 20px;text-align:center}.footer-logo{font-size:24px;font-weight:700;margin-bottom:10px}</style></head><body><div class="container"><div class="header"><h1>✅ ¡Mensaje Recibido!</h1><p>Gracias por contactarnos</p></div><div class="content"><div class="greeting">Hola <strong>${datos.nombre||"estimado/a"}</strong>,</div><div class="message"><p>¡Gracias por ponerte en contacto con <strong>ForjaDigitalAE</strong>!</p><p>Hemos recibido tu mensaje correctamente y queremos que sepas que es muy importante para nosotros.</p><div class="highlight-box"><strong>⏰ Tiempo de respuesta:</strong><br>Un miembro de nuestro equipo revisará tu solicitud y se comunicará contigo en un máximo de <strong>24 horas hábiles</strong>.</div>${datos.servicio?`<p>Hemos registrado tu interés en: <strong style="color:#EE8028">${datos.servicio}</strong></p>`:""}<p>Mientras tanto, si tu consulta es urgente o prefieres hablar directamente con nosotros:</p></div><div class="info-section"><div class="contact-info"><span class="icon">📱</span><strong>WhatsApp:</strong>&nbsp;<a href="https://wa.me/573142365590" style="color:#4CCED5;text-decoration:none">+57 314 236 5590</a></div><div class="contact-info"><span class="icon">📧</span><strong>Email:</strong>&nbsp;<a href="mailto:forjadigitalae@gmail.com" style="color:#4CCED5;text-decoration:none">forjadigitalae@gmail.com</a></div><div class="contact-info"><span class="icon">🌐</span><strong>Web:</strong>&nbsp;<a href="https://forjadigitalae.com" style="color:#4CCED5;text-decoration:none">forjadigitalae.com</a></div></div><div class="cta-box"><h3>🔬 ¿Conoces nuestro Rayos-X Empresarial?</h3><p>Descubre el nivel de madurez de tu empresa con nuestro diagnóstico gratuito</p><a href="https://forjadigitalae.com/rayos-x" style="display:inline-block;margin-top:15px;padding:12px 30px;background:white;color:#27325A;text-decoration:none;border-radius:25px;font-weight:700">Hacer Diagnóstico Gratis</a></div></div><div class="footer"><div class="footer-logo">ForjaDigitalAE</div><p style="font-size:14px;margin:10px 0">Arquitectos del Crecimiento PYME</p><p style="font-size:12px;margin-top:20px;opacity:.8">&quot;El futuro no se espera, se forja&quot; 🔨</p></div></div></body></html>`;
  
  MailApp.sendEmail({ to: datos.email, subject: asunto, htmlBody: htmlBody });
}

