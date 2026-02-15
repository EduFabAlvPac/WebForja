# Auditoría de limpieza — WebForjaConsulting

**Fecha:** Febrero 2025  
**Objetivo:** Eliminar páginas huérfanas, documentación redundante y componentes no utilizados.

---

## Archivos eliminados

### Componentes no utilizados (8 archivos)
| Archivo | Motivo |
|---------|--------|
| `components/shared/FloatingActionWidget.tsx` | Solo usado por FeedbackTrigger, que tampoco se usa |
| `components/shared/FeedbackTrigger.tsx` | No importado en ningún lugar |
| `components/shared/FeedbackWidget.tsx` | No importado en ningún lugar |
| `components/shared/PageHero.tsx` | No importado en ningún lugar |
| `components/sections/ClientLogosSection.tsx` | No importado en ningún lugar |
| `components/sections/MetodologiaForja.tsx` | Duplicado; se usa `ui/metodologia-forja.tsx` |
| `components/layout/header/MegaMenu.tsx` | No importado (componente genérico sin uso) |
| `components/layout/header/MegaMenuIndustrias.tsx` | Industrias deshabilitadas; comentado en Navigation |

### Documentación consolidada/eliminada (14+ archivos)
| Archivo | Motivo |
|---------|--------|
| `00-INDICE-DOCUMENTACION.md` | Índice de docs eliminados |
| `docs/*` | Auditorías internas, plantillas técnicas |
| `CONFIGURACION-RAPIDA.md` | Redundante con INSTALACION.md |
| `INICIO-RAPIDO.md` | Redundante con GUIA-DESARROLLO-LOCAL |
| `NOTA-BUILD-LOCAL.md` | Info integrada en GUIA-DESARROLLO-LOCAL |
| `README.deploy.md` | Flujo en .cursor/rules y package.json |
| `DEPLOYMENT.md` | Redundante |
| `PROYECTO-RESUMEN.md` | No esencial para operación |
| README en `components/examples`, `components/pricing`, `public/*` | Documentación interna |

### Conservado
- `README.md` — Documentación principal
- `INSTALACION.md` — Guía de instalación
- `GUIA-DESARROLLO-LOCAL.md` — Flujo de trabajo local
- `VARIABLES-ENTORNO.md` — Configuración de variables
- `docs/google-apps-script*.js` — Scripts para formularios (Google Apps Script)

### Validación post-limpieza
- ✅ `npm run validate` — TypeScript + ESLint sin errores
