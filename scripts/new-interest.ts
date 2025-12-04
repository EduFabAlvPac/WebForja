#!/usr/bin/env node
/**
 * FORJA DIGITAL - New Interest Item Generator
 * 
 * Script CLI para generar nuevos items de contenido de interés.
 * Crea plantillas en el archivo correcto con todos los campos necesarios.
 * 
 * Uso: npm run new:interest
 * 
 * @module scripts/new-interest
 */

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

type CountryCode = 'co' | 'cl' | 'pe' | 'ec';
type InterestType = 'articulo' | 'guia' | 'programa' | 'descargable' | 'evento';
type InterestCategory = 
  | 'Regulación'
  | 'Financiamiento'
  | 'Programas'
  | 'Transformación Digital'
  | 'IA & Automatización'
  | 'Operaciones'
  | 'Datos & Seguridad';

interface InterestItemInput {
  country: CountryCode;
  type: InterestType;
  category: InterestCategory;
  title: string;
  summary: string;
  slug: string;
  tags: string[];
  href?: string;
  source?: string;
  featured?: boolean;
}

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const COUNTRIES: { code: CountryCode; name: string; file: string }[] = [
  { code: 'co', name: 'Colombia', file: 'co.ts' },
  { code: 'cl', name: 'Chile', file: 'cl.ts' },
  { code: 'pe', name: 'Perú', file: 'pe.ts' },
  { code: 'ec', name: 'Ecuador', file: 'ec.ts' },
];

const TYPES: { value: InterestType; label: string }[] = [
  { value: 'articulo', label: 'Artículo' },
  { value: 'guia', label: 'Guía' },
  { value: 'programa', label: 'Programa gubernamental' },
  { value: 'descargable', label: 'Descargable (PDF/Excel)' },
  { value: 'evento', label: 'Evento/Webinar' },
];

const CATEGORIES: InterestCategory[] = [
  'Regulación',
  'Financiamiento',
  'Programas',
  'Transformación Digital',
  'IA & Automatización',
  'Operaciones',
  'Datos & Seguridad',
];

const CONTENT_DIR = path.join(process.cwd(), 'content', 'interest', 'by-country');
const IMAGES_DIR = '/images/interest';

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Spaces to hyphens
    .replace(/-+/g, '-') // Multiple hyphens to single
    .replace(/^-|-$/g, ''); // Trim hyphens
}

function generateId(country: CountryCode, slug: string): string {
  return `${country}-${slug}`;
}

function getCurrentDate(): string {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

function getSourceIcon(type: InterestType): string {
  const icons: Record<InterestType, string> = {
    articulo: '📰',
    guia: '📘',
    programa: '🏛️',
    descargable: '📄',
    evento: '📅',
  };
  return icons[type] || '📋';
}

// ═══════════════════════════════════════════════════════════════════════════
// CLI INTERFACE
// ═══════════════════════════════════════════════════════════════════════════

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

function askChoice<T extends string>(question: string, choices: { value: T; label: string }[]): Promise<T> {
  return new Promise((resolve) => {
    console.log(`\n${question}`);
    choices.forEach((choice, index) => {
      console.log(`  ${index + 1}) ${choice.label}`);
    });
    
    rl.question('\n> Selecciona (número): ', (answer) => {
      const index = parseInt(answer.trim(), 10) - 1;
      if (index >= 0 && index < choices.length) {
        resolve(choices[index].value);
      } else {
        console.log('❌ Opción inválida, selecciona de nuevo.');
        resolve(askChoice(question, choices));
      }
    });
  });
}

function askYesNo(question: string): Promise<boolean> {
  return new Promise((resolve) => {
    rl.question(`${question} (s/n): `, (answer) => {
      resolve(answer.trim().toLowerCase() === 's');
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// TEMPLATE GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

function generateItemCode(input: InterestItemInput): string {
  const id = generateId(input.country, input.slug);
  const dateISO = getCurrentDate();
  const imagePath = `${IMAGES_DIR}/${input.country}-${input.slug}.jpg`;
  const sourceIcon = input.source ? getSourceIcon(input.type) : '';
  
  const tagsStr = input.tags.map(t => `'${t}'`).join(', ');
  
  let code = `  {
    id: '${id}',
    slug: '${input.slug}',
    title: '${input.title.replace(/'/g, "\\'")}',
    summary: '${input.summary.replace(/'/g, "\\'")}',
    type: '${input.type}',
    category: '${input.category}',
    tags: [${tagsStr}],
    countries: ['${input.country}'],`;

  if (input.featured) {
    code += `
    featured: true,`;
  }

  code += `
    dateISO: '${dateISO}',`;

  if (input.href) {
    code += `
    href: '${input.href}',`;
  }

  code += `
    image: {
      src: '${imagePath}',
      alt: '${input.title.replace(/'/g, "\\'")}'
    },`;

  if (input.source) {
    code += `
    source: '${input.source}',
    sourceIcon: '${sourceIcon}',`;
  }

  code += `
    readMins: 10,
  },`;

  return code;
}

function getFileVariableName(country: CountryCode): string {
  const names: Record<CountryCode, string> = {
    co: 'interestCO',
    cl: 'interestCL',
    pe: 'interestPE',
    ec: 'interestEC',
  };
  return names[country];
}

function appendToFile(country: CountryCode, itemCode: string): void {
  const countryInfo = COUNTRIES.find(c => c.code === country);
  if (!countryInfo) throw new Error(`País no encontrado: ${country}`);

  const filePath = path.join(CONTENT_DIR, countryInfo.file);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Archivo no encontrado: ${filePath}`);
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find the last closing bracket of the array
  const variableName = getFileVariableName(country);
  const arrayPattern = new RegExp(`export const ${variableName}: InterestItem\\[\\] = \\[`);
  
  if (!arrayPattern.test(content)) {
    throw new Error(`No se encontró el array ${variableName} en ${filePath}`);
  }

  // Find the position to insert (before the last ];)
  const lastBracketIndex = content.lastIndexOf('];');
  
  if (lastBracketIndex === -1) {
    throw new Error('No se encontró el cierre del array en el archivo');
  }

  // Check if we need a comma before the new item
  const beforeBracket = content.substring(0, lastBracketIndex).trimEnd();
  const needsComma = !beforeBracket.endsWith(',') && !beforeBracket.endsWith('[');
  
  // Insert the new item
  const newContent = 
    content.substring(0, lastBracketIndex) +
    (needsComma ? ',' : '') +
    '\n' + itemCode + '\n' +
    content.substring(lastBracketIndex);

  fs.writeFileSync(filePath, newContent, 'utf-8');
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════

async function main(): Promise<void> {
  console.log('\n' + '═'.repeat(60));
  console.log('  🔥 FORJA DIGITAL - Nuevo Item de Interés');
  console.log('═'.repeat(60) + '\n');

  try {
    // 1. País
    const country = await askChoice<CountryCode>(
      '¿Para qué país es este contenido?',
      COUNTRIES.map(c => ({ value: c.code, label: c.name }))
    );
    console.log(`✓ País: ${COUNTRIES.find(c => c.code === country)?.name}`);

    // 2. Tipo
    const type = await askChoice<InterestType>(
      '¿Qué tipo de contenido es?',
      TYPES
    );
    console.log(`✓ Tipo: ${TYPES.find(t => t.value === type)?.label}`);

    // 3. Categoría
    const category = await askChoice<InterestCategory>(
      '¿A qué categoría pertenece?',
      CATEGORIES.map(c => ({ value: c, label: c }))
    );
    console.log(`✓ Categoría: ${category}`);

    // 4. Título
    const title = await ask('\n📝 Título del recurso:\n> ');
    if (!title) {
      console.log('❌ El título es obligatorio.');
      process.exit(1);
    }
    console.log(`✓ Título: ${title}`);

    // 5. Slug (auto-generado con opción de editar)
    const suggestedSlug = slugify(title);
    const slugInput = await ask(`\n🔗 Slug (Enter para usar "${suggestedSlug}"):\n> `);
    const slug = slugInput || suggestedSlug;
    console.log(`✓ Slug: ${slug}`);

    // 6. Resumen
    const summary = await ask('\n📄 Resumen (2-3 oraciones):\n> ');
    if (!summary) {
      console.log('❌ El resumen es obligatorio.');
      process.exit(1);
    }
    console.log(`✓ Resumen: ${summary.substring(0, 50)}...`);

    // 7. Tags
    const tagsInput = await ask('\n🏷️  Tags (separados por coma):\n> ');
    const tags = tagsInput.split(',').map(t => t.trim().toLowerCase()).filter(Boolean);
    console.log(`✓ Tags: ${tags.join(', ')}`);

    // 8. URL externa (opcional)
    const href = await ask('\n🔗 URL externa (Enter para omitir):\n> ');
    if (href) {
      console.log(`✓ URL: ${href}`);
    }

    // 9. Fuente (opcional)
    const source = await ask('\n📰 Fuente (ej: DIAN, CORFO, MinCIT) (Enter para omitir):\n> ');
    if (source) {
      console.log(`✓ Fuente: ${source}`);
    }

    // 10. Featured
    const featured = await askYesNo('\n⭐ ¿Marcar como destacado?');
    console.log(`✓ Destacado: ${featured ? 'Sí' : 'No'}`);

    // Generar código
    const input: InterestItemInput = {
      country,
      type,
      category,
      title,
      summary,
      slug,
      tags,
      href: href || undefined,
      source: source || undefined,
      featured,
    };

    const itemCode = generateItemCode(input);

    console.log('\n' + '─'.repeat(60));
    console.log('📋 CÓDIGO GENERADO:');
    console.log('─'.repeat(60));
    console.log(itemCode);
    console.log('─'.repeat(60));

    // Confirmar
    const confirm = await askYesNo('\n¿Agregar al archivo?');

    if (confirm) {
      appendToFile(country, itemCode);
      
      const countryInfo = COUNTRIES.find(c => c.code === country);
      const imagePath = `public/images/interest/${country}-${slug}.jpg`;
      
      console.log('\n' + '═'.repeat(60));
      console.log('  ✅ ITEM CREADO EXITOSAMENTE');
      console.log('═'.repeat(60));
      console.log(`\n📁 Archivo actualizado:`);
      console.log(`   content/interest/by-country/${countryInfo?.file}`);
      console.log(`\n🖼️  Ruta esperada para la miniatura:`);
      console.log(`   ${imagePath}`);
      console.log(`\n📐 Tamaño recomendado: 800x600px o 16:9`);
      console.log('\n💡 Próximos pasos:');
      console.log('   1. Agrega la imagen en la ruta indicada');
      console.log('   2. Revisa el contenido generado');
      console.log('   3. Ajusta readMins según la extensión del contenido');
      if (!href) {
        console.log('   4. Crea el archivo MDX en content/interest/mdx/');
      }
      console.log('\n');
    } else {
      console.log('\n❌ Operación cancelada.\n');
    }

  } catch (error) {
    console.error('\n❌ Error:', error instanceof Error ? error.message : error);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run
main();

