/**
 * FORJA DIGITAL - News and Alerts Content
 * 
 * Noticias gubernamentales y alertas filtradas por país.
 * Enfocadas en información relevante para PYMEs.
 * 
 * @module content/news
 */

export type CountryCode = 'co' | 'cl' | 'pe' | 'ec' | 'all';

export interface NewsItem {
  /** ID único de la noticia */
  id: string;
  /** Título de la noticia */
  title: string;
  /** Descripción corta */
  description: string;
  /** Países donde se muestra la noticia */
  countries: CountryCode[];
  /** Si es featured, se muestra en el rail */
  featured?: boolean;
  /** Tipo de alerta */
  type?: 'info' | 'warning' | 'success' | 'announcement';
  /** Link de la noticia (opcional) */
  link?: string;
  /** Texto del botón (si hay link) */
  linkText?: string;
  /** Fecha de publicación */
  publishedAt: string;
  /** Fecha de expiración (opcional) */
  expiresAt?: string;
  /** Fuente de la noticia */
  source?: string;
  /** Logo o icono de la fuente */
  sourceIcon?: string;
}

/**
 * Noticias gubernamentales y de interés para PYMEs
 * 
 * Fuentes por país:
 * - Colombia: MinCIT, iNNpulsa, Bancóldex, DIAN
 * - Chile: CORFO, SERCOTEC, SII
 * - Perú: PRODUCE, SUNAT, Mi Empresa
 * - Ecuador: MIPRO, SRI, BanEcuador
 */
export const newsData: NewsItem[] = [
  // ========================================
  // COLOMBIA 🇨🇴
  // ========================================
  {
    id: 'co-mincit-formalizacion-2024',
    title: 'Programa de Formalización Empresarial',
    description: 'MinCIT lanza nuevo programa de apoyo a la formalización de micro y pequeñas empresas con beneficios tributarios.',
    countries: ['co'],
    featured: true,
    type: 'announcement',
    link: 'https://www.mincit.gov.co/mipymes',
    linkText: 'Ver Programa',
    publishedAt: '2024-12-01',
    source: 'MinCIT',
    sourceIcon: '🏛️',
  },
  {
    id: 'co-innpulsa-creditos-2024',
    title: 'Líneas de Crédito para Innovación',
    description: 'iNNpulsa Colombia abre convocatoria de créditos blandos para PYMEs que implementen proyectos de innovación.',
    countries: ['co'],
    featured: false,
    type: 'info',
    link: 'https://www.innpulsacolombia.com/',
    linkText: 'Aplicar Ahora',
    publishedAt: '2024-11-28',
    source: 'iNNpulsa',
    sourceIcon: '🚀',
  },
  {
    id: 'co-dian-facturacion-electronica',
    title: 'Actualización Facturación Electrónica',
    description: 'DIAN recuerda que todas las PYMEs deben implementar facturación electrónica. Conozca los plazos y requisitos.',
    countries: ['co'],
    featured: false,
    type: 'warning',
    link: 'https://www.dian.gov.co/',
    linkText: 'Ver Requisitos',
    publishedAt: '2024-11-25',
    source: 'DIAN',
    sourceIcon: '📋',
  },
  {
    id: 'co-bancoldex-financiamiento',
    title: 'Financiamiento para Crecimiento PYME',
    description: 'Bancóldex ofrece tasas preferenciales para capital de trabajo y expansión de pequeñas y medianas empresas.',
    countries: ['co'],
    featured: false,
    type: 'success',
    link: 'https://www.bancoldex.com/',
    linkText: 'Conocer Más',
    publishedAt: '2024-11-20',
    source: 'Bancóldex',
    sourceIcon: '💰',
  },

  // ========================================
  // CHILE 🇨🇱
  // ========================================
  {
    id: 'cl-corfo-capital-semilla-2024',
    title: 'Capital Semilla CORFO 2024',
    description: 'CORFO abre postulaciones para Capital Semilla Emprende. Hasta $25 millones para proyectos innovadores.',
    countries: ['cl'],
    featured: true,
    type: 'announcement',
    link: 'https://www.corfo.cl/',
    linkText: 'Postular',
    publishedAt: '2024-12-01',
    source: 'CORFO',
    sourceIcon: '🏛️',
  },
  {
    id: 'cl-sercotec-digitaliza-tu-pyme',
    title: 'Digitaliza tu PYME - Fondos Disponibles',
    description: 'SERCOTEC entrega subsidios de hasta $5 millones para digitalización de micro y pequeñas empresas.',
    countries: ['cl'],
    featured: false,
    type: 'info',
    link: 'https://www.sercotec.cl/',
    linkText: 'Aplicar',
    publishedAt: '2024-11-27',
    source: 'SERCOTEC',
    sourceIcon: '💻',
  },
  {
    id: 'cl-sii-pyme-facil',
    title: 'Régimen PYME Fácil - Beneficios Tributarios',
    description: 'SII recuerda los beneficios del Régimen Pro PYME: tasa reducida del 25% y pago de IVA simplificado.',
    countries: ['cl'],
    featured: false,
    type: 'success',
    link: 'https://www.sii.cl/',
    linkText: 'Ver Beneficios',
    publishedAt: '2024-11-22',
    source: 'SII',
    sourceIcon: '📊',
  },
  {
    id: 'cl-economia-reactivacion',
    title: 'Plan de Reactivación Económica',
    description: 'Ministerio de Economía presenta medidas de apoyo para PYMEs afectadas. Incluye refinanciamiento y capacitación.',
    countries: ['cl'],
    featured: false,
    type: 'info',
    link: 'https://www.economia.gob.cl/',
    linkText: 'Conocer Plan',
    publishedAt: '2024-11-18',
    source: 'Min. Economía',
    sourceIcon: '📈',
  },

  // ========================================
  // PERÚ 🇵🇪
  // ========================================
  {
    id: 'pe-produce-fondo-mipyme-2024',
    title: 'Fondo MIPYME - Nueva Convocatoria',
    description: 'PRODUCE lanza convocatoria del Fondo MIPYME con financiamiento no reembolsable para innovación productiva.',
    countries: ['pe'],
    featured: true,
    type: 'announcement',
    link: 'https://www.gob.pe/produce',
    linkText: 'Postular',
    publishedAt: '2024-12-01',
    source: 'PRODUCE',
    sourceIcon: '🏛️',
  },
  {
    id: 'pe-sunat-regimen-mype',
    title: 'Beneficios Régimen MYPE Tributario',
    description: 'SUNAT detalla los beneficios del RMT: tasa del 10% sobre las primeras 15 UIT y libros electrónicos simplificados.',
    countries: ['pe'],
    featured: false,
    type: 'info',
    link: 'https://www.sunat.gob.pe/',
    linkText: 'Ver Beneficios',
    publishedAt: '2024-11-26',
    source: 'SUNAT',
    sourceIcon: '📋',
  },
  {
    id: 'pe-cofide-reactiva-pyme',
    title: 'Programa Reactiva PYME',
    description: 'COFIDE ofrece créditos con garantía estatal para capital de trabajo de micro y pequeñas empresas.',
    countries: ['pe'],
    featured: false,
    type: 'success',
    link: 'https://www.cofide.com.pe/',
    linkText: 'Solicitar',
    publishedAt: '2024-11-21',
    source: 'COFIDE',
    sourceIcon: '💰',
  },
  {
    id: 'pe-promperu-exporta-facil',
    title: 'Exporta Fácil - Capacitación Gratuita',
    description: 'PROMPERÚ ofrece programa de capacitación gratuita para PYMEs que desean iniciar exportaciones.',
    countries: ['pe'],
    featured: false,
    type: 'info',
    link: 'https://www.promperu.gob.pe/',
    linkText: 'Inscribirse',
    publishedAt: '2024-11-15',
    source: 'PROMPERÚ',
    sourceIcon: '🌍',
  },

  // ========================================
  // ECUADOR 🇪🇨
  // ========================================
  {
    id: 'ec-mipro-impulso-pyme-2024',
    title: 'Programa Impulso PYME Ecuador',
    description: 'MIPRO presenta programa de fortalecimiento productivo con asistencia técnica y acceso a mercados.',
    countries: ['ec'],
    featured: true,
    type: 'announcement',
    link: 'https://www.produccion.gob.ec/',
    linkText: 'Aplicar',
    publishedAt: '2024-12-01',
    source: 'MIPRO',
    sourceIcon: '🏛️',
  },
  {
    id: 'ec-sri-rimpe-beneficios',
    title: 'RIMPE: Régimen para Emprendedores',
    description: 'SRI recuerda los beneficios del RIMPE: tarifa del 0% al 2% según ingresos para microempresas.',
    countries: ['ec'],
    featured: false,
    type: 'success',
    link: 'https://www.sri.gob.ec/',
    linkText: 'Conocer RIMPE',
    publishedAt: '2024-11-24',
    source: 'SRI',
    sourceIcon: '📊',
  },
  {
    id: 'ec-banecuador-creditos-pyme',
    title: 'Créditos Preferenciales para PYMEs',
    description: 'BanEcuador ofrece líneas de crédito con tasas desde el 9.76% para micro y pequeños empresarios.',
    countries: ['ec'],
    featured: false,
    type: 'info',
    link: 'https://www.banecuador.fin.ec/',
    linkText: 'Solicitar',
    publishedAt: '2024-11-19',
    source: 'BanEcuador',
    sourceIcon: '💰',
  },
  {
    id: 'ec-cfn-financiamiento-productivo',
    title: 'CFN: Financiamiento Productivo',
    description: 'Corporación Financiera Nacional ofrece créditos para activos fijos y capital de trabajo con plazos flexibles.',
    countries: ['ec'],
    featured: false,
    type: 'info',
    link: 'https://www.cfn.fin.ec/',
    linkText: 'Ver Opciones',
    publishedAt: '2024-11-12',
    source: 'CFN',
    sourceIcon: '🏦',
  },

  // ========================================
  // TODOS LOS PAÍSES - Contenido de fuentes externas
  // ========================================
  {
    id: 'all-cepal-pymes-latam-2024',
    title: 'Informe CEPAL: PYMEs en América Latina',
    description: 'La CEPAL presenta su informe anual sobre el estado de las micro, pequeñas y medianas empresas en la región.',
    countries: ['all'],
    featured: false,
    type: 'info',
    link: 'https://www.cepal.org/es/temas/pymes',
    linkText: 'Ver Informe',
    publishedAt: '2024-11-29',
    source: 'CEPAL',
    sourceIcon: '🌎',
  },
  {
    id: 'all-bid-digitalizacion-pymes',
    title: 'BID: Digitalización de PYMEs en Latinoamérica',
    description: 'El Banco Interamericano de Desarrollo presenta recursos y programas para la transformación digital de las PYMEs.',
    countries: ['all'],
    featured: false,
    type: 'info',
    link: 'https://www.iadb.org/es/sectores/comercio/pymes',
    linkText: 'Ver Recursos',
    publishedAt: '2024-11-25',
    source: 'BID',
    sourceIcon: '🏦',
  },
];

/**
 * Obtiene noticias filtradas por país
 * 
 * @param countryCode - Código del país (co, cl, pe, ec)
 * @param onlyFeatured - Si true, solo devuelve noticias featured
 * @returns Lista de noticias filtradas y ordenadas por fecha
 */
export function getNewsByCountry(
  countryCode: 'co' | 'cl' | 'pe' | 'ec',
  onlyFeatured: boolean = false
): NewsItem[] {
  const now = new Date();
  
  return newsData
    .filter((news) => {
      // Verificar si está expirada
      if (news.expiresAt && new Date(news.expiresAt) < now) {
        return false;
      }
      
      // Verificar si aplica al país
      const appliesToCountry = 
        news.countries.includes('all') || 
        news.countries.includes(countryCode);
      
      if (!appliesToCountry) {
        return false;
      }
      
      // Si solo featured, filtrar
      if (onlyFeatured && !news.featured) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      // Ordenar por fecha de publicación (más reciente primero)
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
}

/**
 * Obtiene la noticia featured para un país
 * Retorna la más reciente si hay varias
 * 
 * @param countryCode - Código del país
 * @returns Noticia featured o undefined
 */
export function getFeaturedNews(
  countryCode: 'co' | 'cl' | 'pe' | 'ec'
): NewsItem | undefined {
  const featured = getNewsByCountry(countryCode, true);
  return featured.length > 0 ? featured[0] : undefined;
}

/**
 * Verifica si hay noticias featured activas para un país
 */
export function hasFeaturedNews(countryCode: 'co' | 'cl' | 'pe' | 'ec'): boolean {
  return getFeaturedNews(countryCode) !== undefined;
}

/**
 * Obtiene las fuentes gubernamentales por país
 */
export const governmentSources = {
  co: [
    { name: 'MinCIT', url: 'https://www.mincit.gov.co/', description: 'Ministerio de Comercio, Industria y Turismo' },
    { name: 'iNNpulsa', url: 'https://www.innpulsacolombia.com/', description: 'Agencia de Emprendimiento e Innovación' },
    { name: 'Bancóldex', url: 'https://www.bancoldex.com/', description: 'Banco de Desarrollo Empresarial' },
    { name: 'DIAN', url: 'https://www.dian.gov.co/', description: 'Dirección de Impuestos y Aduanas' },
  ],
  cl: [
    { name: 'CORFO', url: 'https://www.corfo.cl/', description: 'Corporación de Fomento de la Producción' },
    { name: 'SERCOTEC', url: 'https://www.sercotec.cl/', description: 'Servicio de Cooperación Técnica' },
    { name: 'SII', url: 'https://www.sii.cl/', description: 'Servicio de Impuestos Internos' },
  ],
  pe: [
    { name: 'PRODUCE', url: 'https://www.gob.pe/produce', description: 'Ministerio de la Producción' },
    { name: 'SUNAT', url: 'https://www.sunat.gob.pe/', description: 'Superintendencia de Administración Tributaria' },
    { name: 'COFIDE', url: 'https://www.cofide.com.pe/', description: 'Banco de Desarrollo del Perú' },
    { name: 'PROMPERÚ', url: 'https://www.promperu.gob.pe/', description: 'Comisión de Promoción del Perú' },
  ],
  ec: [
    { name: 'MIPRO', url: 'https://www.produccion.gob.ec/', description: 'Ministerio de Producción' },
    { name: 'SRI', url: 'https://www.sri.gob.ec/', description: 'Servicio de Rentas Internas' },
    { name: 'BanEcuador', url: 'https://www.banecuador.fin.ec/', description: 'Banco Público de Fomento' },
    { name: 'CFN', url: 'https://www.cfn.fin.ec/', description: 'Corporación Financiera Nacional' },
  ],
};
