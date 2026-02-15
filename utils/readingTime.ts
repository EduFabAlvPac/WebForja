/**
 * FORJA DIGITAL - Reading Time Utility
 * 
 * Calcula el tiempo estimado de lectura basado en el contenido.
 * Promedio de lectura: 200-250 palabras por minuto en español.
 * 
 * @module utils/readingTime
 */

// Velocidad de lectura promedio en español (palabras por minuto)
const WORDS_PER_MINUTE = 220;

/**
 * Resultado del cálculo de tiempo de lectura
 */
export interface ReadingTimeResult {
  /** Tiempo en minutos (redondeado) */
  minutes: number;
  /** Número de palabras */
  words: number;
  /** Texto formateado (ej: "5 min de lectura") */
  text: string;
}

/**
 * Calcula el tiempo estimado de lectura para un texto.
 * 
 * @param content - Contenido en texto plano o markdown
 * @returns Objeto con minutos, palabras y texto formateado
 * 
 * @example
 * const result = calculateReadingTime(articleContent);
 * console.log(result.text); // "5 min de lectura"
 */
export function calculateReadingTime(content: string): ReadingTimeResult {
  // Limpiar el contenido de markdown/HTML
  const cleanContent = content
    // Eliminar bloques de código
    .replace(/```[\s\S]*?```/g, '')
    // Eliminar código inline
    .replace(/`[^`]*`/g, '')
    // Eliminar imágenes
    .replace(/!\[.*?\]\(.*?\)/g, '')
    // Eliminar links pero mantener texto
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // Eliminar headers markdown
    .replace(/#{1,6}\s*/g, '')
    // Eliminar emphasis
    .replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1')
    // Eliminar HTML tags
    .replace(/<[^>]*>/g, '')
    // Eliminar caracteres especiales de MDX/JSX
    .replace(/<\/?[A-Z][^>]*>/g, '')
    // Normalizar espacios
    .replace(/\s+/g, ' ')
    .trim();

  // Contar palabras
  const words = cleanContent.split(/\s+/).filter(word => word.length > 0).length;
  
  // Calcular minutos
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return {
    minutes,
    words,
    text: `${minutes} min de lectura`,
  };
}

/**
 * Formatea el tiempo de lectura para mostrar.
 * 
 * @param minutes - Minutos de lectura
 * @returns Texto formateado
 */
export function formatReadingTime(minutes: number): string {
  if (minutes < 1) return 'Menos de 1 min';
  if (minutes === 1) return '1 min de lectura';
  return `${minutes} min de lectura`;
}

/**
 * Estima tiempo de lectura desde número de palabras.
 * 
 * @param wordCount - Número de palabras
 * @returns Minutos estimados
 */
export function estimateReadingMinutes(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

export default calculateReadingTime;

