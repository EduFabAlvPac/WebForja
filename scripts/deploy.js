#!/usr/bin/env node
/**
 * Deploy a Vercel (Git → GitHub → auto-deploy)
 *
 * Uso:
 *   npm run deploy
 *   npm run deploy -- "feat: descripción del cambio"
 *   DEPLOY_MSG="fix: algo" npm run deploy
 *
 * Requisitos (una sola vez):
 *   - gh auth login && gh auth setup-git
 *   - vercel link (o conectar repo en Vercel Dashboard)
 *   - remote origin → https://github.com/EduFabAlvPac/WebForja
 */

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..');
const DEFAULT_MSG = 'chore: deploy to Vercel';

// Usar PortableGit si existe (evita "versión no compatible" del Git de Programs)
const PORTABLE_GIT = path.join(
  process.env.USERPROFILE || process.env.HOME || '',
  'Downloads',
  'PortableGit',
  'bin',
  'git.exe'
);
const GIT_EXE = fs.existsSync(PORTABLE_GIT) ? PORTABLE_GIT : 'git';

function git(args, opts = {}) {
  const result = spawnSync(GIT_EXE, args, {
    cwd: ROOT,
    stdio: opts.silent ? 'pipe' : 'inherit',
    encoding: opts.silent ? 'utf8' : undefined,
    shell: false,
  });
  if (result.error) {
    const err = new Error(`No se pudo ejecutar Git: ${result.error.message}`);
    err.status = 1;
    throw err;
  }
  if (result.status !== 0 && result.status != null) {
    const err = new Error(`git ${args.join(' ')} failed`);
    err.status = result.status;
    throw err;
  }
  return opts.silent ? (result.stdout || '') : result;
}

function main() {
  const msg = process.env.DEPLOY_MSG || process.argv.slice(2).join(' ').trim() || DEFAULT_MSG;

  try {
    // 1. Add all
    git(['add', '-A']);

    // 2. Check if there's something to commit
    let status = '';
    try {
      status = git(['status', '--short'], { silent: true });
    } catch {
      status = '';
    }
    if (!status.trim()) {
      console.log('Nothing to commit. Working tree clean.');
      process.exit(0);
    }

    // 3. Commit (use -F file to avoid quoting issues on Windows)
    const msgFile = path.join(ROOT, '.deploy-msg.txt');
    fs.writeFileSync(msgFile, msg, 'utf8');
    try {
      git(['commit', '-F', '.deploy-msg.txt']);
    } finally {
      try {
        fs.unlinkSync(msgFile);
      } catch {}
    }

    // 4. Push
    git(['push', 'origin', 'main']);

    console.log('\n✅ Push done. Vercel will auto-deploy. Check https://vercel.com/dashboard');
  } catch (e) {
    if (e.status !== undefined) process.exit(e.status);
    throw e;
  }
}

main();
