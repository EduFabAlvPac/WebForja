/**
 * FORJA DIGITAL - MDX Utilities
 * 
 * Utilidades para cargar y procesar contenido MDX.
 * 
 * @module lib/mdx
 */

import fs from 'fs';
import path from 'path';

const MDX_CONTENT_PATH = path.join(process.cwd(), 'content/interest/mdx');

/**
 * Verifica si existe contenido MDX para un slug.
 * 
 * @param slug - Slug del contenido
 * @returns true si existe el archivo MDX
 */
export function hasMdxContent(slug: string): boolean {
  const filePath = path.join(MDX_CONTENT_PATH, `${slug}.mdx`);
  return fs.existsSync(filePath);
}

/**
 * Obtiene el contenido MDX en bruto para un slug.
 * 
 * @param slug - Slug del contenido
 * @returns Contenido MDX como string o null si no existe
 */
export function getMdxContent(slug: string): string | null {
  const filePath = path.join(MDX_CONTENT_PATH, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Lista todos los slugs de contenido MDX disponibles.
 * 
 * @returns Array de slugs
 */
export function getAllMdxSlugs(): string[] {
  if (!fs.existsSync(MDX_CONTENT_PATH)) {
    return [];
  }
  
  const files = fs.readdirSync(MDX_CONTENT_PATH);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace('.mdx', ''));
}

