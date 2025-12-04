/**
 * FORJA DIGITAL - Interest Base Content
 * 
 * Contenido base de interés que aplica a todos los países.
 * Este contenido se mergea con los overlays específicos de cada país.
 * 
 * @module content/interest/base
 */

import type { InterestItem } from '@/types/interest';

export const interestBase: InterestItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSFORMACIÓN DIGITAL - Contenido universal
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'base-transformacion-digital-pymes',
    slug: 'guia-transformacion-digital-pymes',
    title: 'Guía Completa de Transformación Digital para PYMEs',
    summary: 'Aprende los pasos fundamentales para digitalizar tu empresa: desde la evaluación inicial hasta la implementación de herramientas tecnológicas.',
    type: 'guia',
    category: 'Transformación Digital',
    tags: ['digitalización', 'pymes', 'tecnología', 'automatización'],
    countries: ['all'],
    featured: true,
    dateISO: '2024-11-15',
    image: {
      src: '/images/interest/transformacion-digital.jpg',
      alt: 'Transformación digital para PYMEs'
    },
    author: 'Forja Digital',
    readMins: 12,
  },
  {
    id: 'base-erp-vs-crm',
    slug: 'erp-vs-crm-cual-elegir',
    title: 'ERP vs CRM: ¿Cuál Necesita tu Empresa Primero?',
    summary: 'Análisis comparativo de sistemas ERP y CRM para ayudarte a decidir cuál implementar primero según el tamaño y necesidades de tu negocio.',
    type: 'articulo',
    category: 'Transformación Digital',
    tags: ['erp', 'crm', 'software empresarial', 'gestión'],
    countries: ['all'],
    dateISO: '2024-11-10',
    image: {
      src: '/images/interest/erp-vs-crm.jpg',
      alt: 'Comparación ERP vs CRM'
    },
    author: 'Forja Digital',
    readMins: 8,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // IA & AUTOMATIZACIÓN - Contenido universal
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'base-ia-atencion-cliente',
    slug: 'ia-atencion-cliente-pymes',
    title: 'IA para Atención al Cliente: Guía Práctica para PYMEs',
    summary: 'Cómo implementar chatbots e inteligencia artificial en tu servicio al cliente sin necesidad de grandes inversiones.',
    type: 'guia',
    category: 'IA & Automatización',
    tags: ['inteligencia artificial', 'chatbots', 'atención al cliente', 'automatización'],
    countries: ['all'],
    featured: true,
    dateISO: '2024-11-20',
    image: {
      src: '/images/interest/ia-atencion-cliente.jpg',
      alt: 'IA para atención al cliente'
    },
    author: 'Forja Digital',
    readMins: 10,
  },
  {
    id: 'base-automatizacion-procesos',
    slug: 'automatizacion-procesos-empresariales',
    title: '10 Procesos Empresariales que Deberías Automatizar Hoy',
    summary: 'Descubre qué tareas repetitivas están consumiendo el tiempo de tu equipo y cómo automatizarlas con herramientas accesibles.',
    type: 'articulo',
    category: 'IA & Automatización',
    tags: ['automatización', 'productividad', 'procesos', 'eficiencia'],
    countries: ['all'],
    dateISO: '2024-11-05',
    image: {
      src: '/images/interest/automatizacion-procesos.jpg',
      alt: 'Automatización de procesos empresariales'
    },
    author: 'Forja Digital',
    readMins: 7,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DATOS & SEGURIDAD - Contenido universal
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'base-ciberseguridad-pymes',
    slug: 'ciberseguridad-basica-pymes',
    title: 'Ciberseguridad Básica: Protege tu PYME en 2024',
    summary: 'Las amenazas más comunes y las medidas de seguridad esenciales que toda pequeña empresa debe implementar.',
    type: 'guia',
    category: 'Datos & Seguridad',
    tags: ['ciberseguridad', 'seguridad digital', 'protección datos', 'ransomware'],
    countries: ['all'],
    dateISO: '2024-10-28',
    image: {
      src: '/images/interest/ciberseguridad.jpg',
      alt: 'Ciberseguridad para PYMEs'
    },
    author: 'Forja Digital',
    readMins: 9,
  },
  {
    id: 'base-backup-nube',
    slug: 'estrategia-backup-nube-empresas',
    title: 'Estrategia de Backup en la Nube para Empresas',
    summary: 'Cómo diseñar una estrategia de respaldo de datos efectiva usando servicios en la nube sin comprometer el presupuesto.',
    type: 'articulo',
    category: 'Datos & Seguridad',
    tags: ['backup', 'nube', 'cloud', 'respaldo datos'],
    countries: ['all'],
    dateISO: '2024-10-20',
    image: {
      src: '/images/interest/backup-nube.jpg',
      alt: 'Backup en la nube'
    },
    author: 'Forja Digital',
    readMins: 6,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OPERACIONES - Contenido universal
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'base-gestion-inventarios',
    slug: 'gestion-inventarios-digital',
    title: 'Gestión de Inventarios Digital: Del Excel al Software',
    summary: 'Guía para migrar tu control de inventario desde hojas de cálculo a sistemas especializados que escalan con tu negocio.',
    type: 'guia',
    category: 'Operaciones',
    tags: ['inventarios', 'logística', 'software', 'gestión'],
    countries: ['all'],
    dateISO: '2024-10-15',
    image: {
      src: '/images/interest/gestion-inventarios.jpg',
      alt: 'Gestión de inventarios digital'
    },
    author: 'Forja Digital',
    readMins: 11,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DESCARGABLES - Templates y recursos
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'base-template-plan-digitalizacion',
    slug: 'template-plan-digitalizacion',
    title: 'Template: Plan de Digitalización para PYMEs',
    summary: 'Plantilla descargable en Excel para planificar la transformación digital de tu empresa paso a paso.',
    type: 'descargable',
    category: 'Transformación Digital',
    tags: ['template', 'plan', 'digitalización', 'excel'],
    countries: ['all'],
    dateISO: '2024-11-01',
    href: '/downloads/plan-digitalizacion-template.xlsx',
    image: {
      src: '/images/interest/template-digitalizacion.jpg',
      alt: 'Template plan de digitalización'
    },
    author: 'Forja Digital',
  },
  {
    id: 'base-checklist-seguridad',
    slug: 'checklist-seguridad-informatica',
    title: 'Checklist de Seguridad Informática para PYMEs',
    summary: 'Lista de verificación descargable con 50 puntos esenciales de ciberseguridad para tu empresa.',
    type: 'descargable',
    category: 'Datos & Seguridad',
    tags: ['checklist', 'seguridad', 'ciberseguridad', 'pdf'],
    countries: ['all'],
    dateISO: '2024-10-25',
    href: '/downloads/checklist-seguridad.pdf',
    image: {
      src: '/images/interest/checklist-seguridad.jpg',
      alt: 'Checklist de seguridad informática'
    },
    author: 'Forja Digital',
  },
];

export default interestBase;

