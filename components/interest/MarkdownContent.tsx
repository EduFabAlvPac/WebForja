/**
 * FORJA DIGITAL - Markdown Content Component
 * 
 * Renderiza contenido Markdown/MDX a HTML con estilos apropiados.
 * Incluye procesamiento de headings para ToC.
 * 
 * @module components/interest/MarkdownContent
 */

'use client';

import { useMemo } from 'react';

interface MarkdownContentProps {
  content: string;
}

/**
 * Convierte markdown básico a HTML.
 * Solución simple sin dependencias externas.
 */
function parseMarkdown(markdown: string): string {
  let html = markdown;

  // Escapar HTML
  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Revertir para markdown válido
  html = html
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

  // Code blocks (```code```)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre class="language-${lang || 'text'}"><code>${code.trim()}</code></pre>`;
  });

  // Inline code (`code`)
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headers con IDs para ToC
  html = html.replace(/^### (.+)$/gm, (_, text) => {
    const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
    return `<h3 id="${id}">${text}</h3>`;
  });
  html = html.replace(/^## (.+)$/gm, (_, text) => {
    const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
    return `<h2 id="${id}">${text}</h2>`;
  });
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Bold (**text** or __text__)
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');

  // Italic (*text* or _text_)
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/_([^_]+)_/g, '<em>$1</em>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>');
  
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr />');
  html = html.replace(/^\*\*\*$/gm, '<hr />');

  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Images ![alt](src)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" />');

  // Tables
  html = html.replace(/^\|(.+)\|$/gm, (match) => {
    const cells = match.slice(1, -1).split('|').map(c => c.trim());
    return `<tr>${cells.map(c => `<td>${c}</td>`).join('')}</tr>`;
  });
  
  // Wrap table rows
  html = html.replace(/(<tr>[\s\S]*?<\/tr>)\n(<tr>[\s\S]*?<\/tr>)/g, (_, first, rest) => {
    // Check if first row is header (contains ---)
    if (rest.includes('---')) {
      return first.replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>') + '\n' + rest;
    }
    return first + '\n' + rest;
  });
  
  // Remove separator rows and wrap in table
  html = html.replace(/<tr>(<td>-+<\/td>)+<\/tr>/g, '');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^\* (.+)$/gm, '<li>$1</li>');
  
  // Wrap consecutive li in ul
  html = html.replace(/(<li>[\s\S]*?<\/li>)\n(?=<li>)/g, '$1');
  html = html.replace(/(<li>[\s\S]*?<\/li>)+/g, '<ul>$&</ul>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

  // Paragraphs (lines that aren't already wrapped)
  const lines = html.split('\n');
  const processed = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<')) return line;
    return `<p>${line}</p>`;
  });
  html = processed.join('\n');

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');
  
  // Clean up nested paragraphs
  html = html.replace(/<p>(<h[1-6])/g, '$1');
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul|<ol|<blockquote|<pre|<hr|<table)/g, '$1');
  html = html.replace(/(<\/ul>|<\/ol>|<\/blockquote>|<\/pre>|<\/table>)<\/p>/g, '$1');

  return html;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const html = useMemo(() => parseMarkdown(content), [content]);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: html }}
      className="markdown-content"
    />
  );
}

export default MarkdownContent;

