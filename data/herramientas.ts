/**
 * Herramientas descargables del Centro de Conocimiento ForjaConsulting
 * @module data/herramientas
 */

import type { Herramienta } from '@/types/conocimiento'

export const HERRAMIENTAS: Herramienta[] = [
  {
    id: 'kpis-operativos',
    nombre: 'Tablero de KPIs Operativos para PYMEs',
    descripcion: '12 indicadores preconfigurados',
    categoria: 'operaciones',
    formato: 'xlsx',
    archivoUrl: '/herramientas/plantilla-kpis-operativos.xlsx',
    icono: 'ClipboardList',
  },
  {
    id: 'punto-equilibrio',
    nombre: 'Calculadora de Punto de Equilibrio PYME',
    descripcion: 'Ingresas datos, te calcula todo',
    categoria: 'finanzas',
    formato: 'xlsx',
    archivoUrl: '/herramientas/calculadora-punto-equilibrio.xlsx',
    icono: 'DollarSign',
  },
  {
    id: 'test-madurez',
    nombre: 'Test de Madurez Empresarial: 20 preguntas, resultado inmediato sobre el nivel de tu empresa',
    descripcion: 'Versión simplificada del evaluador web',
    categoria: 'estrategia',
    formato: 'pdf',
    archivoUrl: '/herramientas/test-madurez-empresarial.pdf',
    icono: 'Target',
  },
  {
    id: 'perfil-cargo-kpis',
    nombre: 'Perfil de Cargo con KPIs — Template editable',
    descripcion: 'Estructura para cualquier rol',
    categoria: 'talento',
    formato: 'docx',
    archivoUrl: '/herramientas/perfil-cargo-kpis.docx',
    icono: 'Users',
  },
  {
    id: 'guia-okrs-pymes',
    nombre: 'Guía de OKRs para PYMEs: del concepto al primer trimestre implementado',
    descripcion: '18 páginas · Nivel básico',
    categoria: 'estrategia',
    formato: 'pdf',
    archivoUrl: '/herramientas/guia-okrs-pymes.pdf',
    icono: 'BarChart3',
  },
  {
    id: 'checklist-automatizacion',
    nombre: 'Checklist de Automatización PYME 2026: ¿Qué puedes automatizar hoy mismo?',
    descripcion: '40 procesos evaluados',
    categoria: 'ia-automatizacion',
    formato: 'pdf',
    archivoUrl: '/herramientas/checklist-automatizacion-pyme.pdf',
    icono: 'Bot',
  },
  {
    id: 'proyeccion-flujo-caja',
    nombre: 'Proyección de Flujo de Caja 12 meses',
    descripcion: 'Plantilla con fórmulas listas',
    categoria: 'finanzas',
    formato: 'xlsx',
    archivoUrl: '/herramientas/proyeccion-flujo-caja.xlsx',
    icono: 'Wallet',
  },
  {
    id: 'canvas-propuesta-valor',
    nombre: 'Canvas de Propuesta de Valor PYME (adaptación del Business Model Canvas)',
    descripcion: 'Una página · Imprimible',
    categoria: 'estrategia',
    formato: 'pdf',
    archivoUrl: '/herramientas/canvas-propuesta-valor.pdf',
    icono: 'Map',
  },
]
