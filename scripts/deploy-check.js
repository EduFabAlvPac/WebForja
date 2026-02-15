#!/usr/bin/env node
/**
 * Verificar que el entorno está listo para deploy (Git → GitHub → Vercel).
 *
 * Uso: npm run deploy:check
 */

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..');

// Usar PortableGit si existe (evita "versión no compatible" del Git de Programs)
const PORTABLE_GIT = path.join(
  process.env.USERPROFILE || process.env.HOME || '',
  'Downloads',
  'PortableGit',
  'bin',
  'git.exe'
);
const GIT_EXE = fs.existsSync(PORTABLE_GIT) ? PORTABLE_GIT : 'git';

function run(args, silent = true) {
  try {
    const r = spawnSync(GIT_EXE, args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: silent ? 'pipe' : 'inherit',
      shell: false,
    });
    if (r.error) return null;
    return r.status === 0 ? (r.stdout || '') : null;
  } catch {
    return null;
  }
}

function main() {
  console.log('Deploy check (Git → GitHub → Vercel)\n');

  let ok = true;

  // Git
  const gitVersion = run(['--version']);
  if (!gitVersion) {
    const isMac = process.platform === 'darwin';
    console.log('❌ Git no encontrado o no compatible.');
    if (isMac) {
      console.log('   En Mac: abre Terminal y ejecuta: xcode-select --install');
      console.log('   O instala Git desde: https://git-scm.com/download/mac');
    } else {
      console.log('   Windows: usa PortableGit en Downloads o instala Git desde git-scm.com');
    }
    ok = false;
  } else {
    console.log('✅ Git:', gitVersion.trim());
  }

  // Remote
  const remotes = run(['remote', '-v']);
  const hasOrigin = remotes && remotes.includes('origin') && remotes.includes('WebForja');
  if (!hasOrigin) {
    console.log('❌ Remote "origin" no apunta a WebForja. Configura: git remote add origin https://github.com/EduFabAlvPac/WebForja.git');
    ok = false;
  } else {
    console.log('✅ Remote origin → WebForja');
  }

  // Branch
  const branch = run(['branch', '--show-current']);
  if (!branch || !branch.trim().startsWith('main')) {
    console.log('⚠️  No estás en "main". Deploy se hace desde main.');
  } else {
    console.log('✅ Branch: main');
  }

  // Vercel link
  const vercelProject = path.join(ROOT, '.vercel', 'project.json');
  if (!fs.existsSync(vercelProject)) {
    console.log('⚠️  .vercel/project.json no existe. Ejecuta "npx vercel link" si usas CLI.');
  } else {
    const proj = JSON.parse(fs.readFileSync(vercelProject, 'utf8'));
    console.log('✅ Vercel linked:', proj.projectName || proj.projectId);
  }

  // Pending changes (solo si git está disponible)
  if (gitVersion) {
    const status = run(['status', '--short']);
    if (status && status.trim()) {
      console.log('\n📁 Cambios pendientes:');
      console.log(status.trim());
      console.log('\nEjecuta "npm run deploy" para hacer commit + push.');
    } else {
      console.log('\n📁 Sin cambios pendientes.');
    }
  }

  if (ok) {
    console.log('\n✅ Entorno listo para deploy.');
  } else {
    console.log('\n❌ Corrige los puntos anteriores y vuelve a ejecutar.');
    process.exit(1);
  }
}

main();
