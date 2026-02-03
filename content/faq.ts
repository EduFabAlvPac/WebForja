export type FaqItem = { q: string; a: string };

export type FaqCategory = { id: string; title: string; items: FaqItem[] };

export const faqData: FaqCategory[] = [
  {
    id: "servicios",
    title: "Servicios y Enfoque",
    items: [
      {
        q: "¿Qué es Arquitectura Estratégica y por qué la necesito?",
        a: "Es la disciplina que alinea estrategia, procesos, datos y tecnología para lograr objetivos de negocio medibles. Evita iniciativas sueltas y acelera el ROI digital al priorizar inversiones con mayor impacto."
      },
      {
        q: "¿En qué se diferencia Forja Digital AE de otras consultoras?",
        a: "Trabajamos con un framework propio basado en TOGAF+Zachman, métricas de éxito desde el día 1 y un delivery ágil. No vendemos software; diseñamos la arquitectura y operamos la ejecución con foco en resultados."
      },
      {
        q: "¿Qué tipos de proyectos realizan?",
        a: "Diagnóstico 'Evaluación de Madurez', hoja de ruta digital, rediseño de procesos, automatización/IA, gobierno de datos, modernización de aplicaciones y habilitación de comercio/operación digital."
      },
      {
        q: "¿Atienden solo PYMEs?",
        a: "Nuestro foco son PYMEs y medianas, aunque también apoyamos unidades de negocio en grandes empresas cuando buscan agilidad y resultados rápidos."
      }
    ]
  },
  {
    id: "proceso",
    title: "Proceso y Metodología FORJA",
    items: [
      {
        q: "¿Cómo inicia el acompañamiento?",
        a: "Con una sesión de comprensión y un 'Evaluación de Madurez' de 2–3 semanas. Entregamos mapa de capacidades, brechas y una hoja de ruta priorizada con quick wins."
      },
      {
        q: "¿Cuáles son las fases típicas?",
        a: "1) Descubrimiento y estrategia; 2) Arquitectura objetivo; 3) Portafolio de iniciativas; 4) Ejecución ágil y gobierno; 5) Medición de impacto."
      },
      {
        q: "¿Qué tan involucrado debe estar mi equipo?",
        a: "Claves del negocio participan en workshops breves. Forja se encarga del modelado, documentación, artefactos y PMO ágil."
      },
      {
        q: "¿Pueden trabajar remoto/híbrido?",
        a: "Sí. Usamos herramientas colaborativas y rituales semanales. Presencial para talleres clave si se requiere."
      }
    ]
  },
  {
    id: "resultados",
    title: "Resultados y ROI",
    items: [
      {
        q: "¿Cómo miden el éxito?",
        a: "Definimos KPIs antes de ejecutar (tiempo-al-valor, ahorro operativo, NPS, conversión, disponibilidad). Reportamos avance quincenal y ROI al cierre de cada hito."
      },
      {
        q: "¿Cuándo se ven resultados?",
        a: "Los primeros quick wins en 30–60 días (p. ej., automatizaciones o mejoras de funnel). Transformaciones mayores, 3–6 meses."
      },
      {
        q: "¿Entregan artefactos reutilizables?",
        a: "Sí: mapas de capacidades, catálogos de procesos, arquitectura de datos, estándares, backlogs y playbooks operativos."
      }
    ]
  },
  {
    id: "precio",
    title: "Alcance, Precios y Contratación",
    items: [
      {
        q: "¿Cómo cotizan los servicios?",
        a: "Por alcance y valor: paquetes de diagnóstico, sprints por resultados o acompañamiento mensual. Todo con hitos y entregables claros."
      },
      {
        q: "¿Pueden empezar con un piloto pequeño?",
        a: "Sí. Recomendamos iniciar con 'Evaluación de Madurez' y un quick win de alto ROI para validar la relación y el enfoque."
      },
      {
        q: "¿Ofrecen acuerdos de confidencialidad (NDA)?",
        a: "Sí. Firmamos NDA y cláusulas de confidencialidad bilaterales antes de acceder a información sensible."
      }
    ]
  },
  {
    id: "seguridad",
    title: "Seguridad y Cumplimiento",
    items: [
      {
        q: "¿Cómo protegen mis datos?",
        a: "Aplicamos principios de mínima exposición, control de accesos y cifrado en tránsito. Solo recopilamos lo necesario para prestar el servicio."
      },
      {
        q: "¿Cumplen la Ley 1581 de 2012 (Habeas Data)?",
        a: "Sí. Procesamos datos personales conforme a la Ley 1581 y a nuestra Política de Tratamiento. Puedes ejercer tus derechos de acceso, rectificación y eliminación."
      },
      {
        q: "¿Pueden trabajar con información regulada?",
        a: "Sí, siempre que el cliente provea lineamientos y accesos. Implementamos segregación por ambientes y registro de actividades."
      }
    ]
  },
  {
    id: "tecnico",
    title: "Tecnología y Entregables Técnicos",
    items: [
      {
        q: "¿Qué tecnologías recomiendan?",
        a: "Seleccionamos en función de objetivos y TCO. Priorizamos nubes/herramientas que reduzcan costo y tiempo-al-valor, y promovemos arquitectura basada en capacidades."
      },
      {
        q: "¿Incluyen automatización e IA?",
        a: "Sí. Identificamos procesos candidatos, calculamos ROI esperado y diseñamos automatizaciones/IA con monitoreo y control."
      },
      {
        q: "¿Documentan y transfieren conocimiento?",
        a: "Sí. Entregamos repositorio organizado, sesiones de handoff y guías de operación."
      }
    ]
  },
  {
    id: "contratacion",
    title: "Contratación y Facturación",
    items: [
      {
        q: "¿Quién es la entidad legal que presta los servicios?",
        a: "Todos los servicios son prestados por Forja Digital AE SAS, con NIT 900.XXX.XXX-1, domiciliada en Bogotá D.C., Colombia. Somos una única entidad legal que exporta servicios a toda Latinoamérica."
      },
      {
        q: "¿Cómo funciona la facturación desde Colombia?",
        a: "Emitimos facturas electrónicas validadas por la DIAN (Colombia). Son válidas internacionalmente para efectos contables y fiscales en tu país. Incluyen código CUFE único y se entregan en formato PDF + XML."
      },
      {
        q: "¿En qué moneda facturan?",
        a: "Facturamos en pesos colombianos (COP) para clientes en Colombia, y en dólares estadounidenses (USD) como moneda de exportación para clientes internacionales (Chile, Perú, Ecuador y otros países)."
      },
      {
        q: "¿Qué medios de pago aceptan?",
        a: "Aceptamos transferencia bancaria internacional (Wire Transfer), tarjetas de crédito/débito internacionales, PayPal, Wise, y transferencia local para Colombia (PSE, Bancolombia)."
      },
      {
        q: "¿Debo pagar impuestos adicionales en mi país?",
        a: "Como servicios exportados desde Colombia, generalmente no causan IVA. Sin embargo, según la legislación de tu país, podrías estar obligado a aplicar retenciones en la fuente o pagar IVA de importación de servicios. Te recomendamos consultar con tu contador local."
      },
      {
        q: "¿La factura colombiana es válida en mi país?",
        a: "Sí. Las facturas electrónicas colombianas son válidas internacionalmente para efectos contables y fiscales. Miles de empresas en Latinoamérica las utilizan sin problemas para sus registros contables y declaraciones fiscales."
      },
      {
        q: "¿Qué datos necesitan para facturar?",
        a: "Necesitamos: razón social completa, número de identificación fiscal (NIT/RUT/RUC según tu país), dirección fiscal completa, email de facturación y nombre del contacto responsable."
      },
      {
        q: "¿Cómo protegen mis datos personales?",
        a: "Cumplimos con la Ley 1581 de 2012 de Colombia (Habeas Data) y respetamos principios internacionales de protección de datos. Todos nuestros proyectos incluyen un acuerdo de confidencialidad (NDA) para proteger tu información estratégica y comercial."
      }
    ]
  },
  {
    id: "soporte",
    title: "Soporte y Contacto",
    items: [
      {
        q: "¿Qué canales de soporte ofrecen?",
        a: "Correo, WhatsApp y el widget de mensajes del sitio. Respuesta en 24h hábiles (SLA específicos por contrato)."
      },
      {
        q: "¿Cómo programo una reunión?",
        a: "Desde el CTA 'Evaluación de Madurez Empresarial', formulario de contacto o el botón flotante de WhatsApp."
      },
      {
        q: "¿Puedo solicitar referencias?",
        a: "Sí. Compartimos casos y contactos previa autorización de nuestros clientes."
      }
    ]
  }
];

