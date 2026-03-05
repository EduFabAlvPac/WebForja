/**
 * Script de desarrollo que desactiva la verificación SSL
 * ⚠️ SOLO PARA DESARROLLO LOCAL - NUNCA EN PRODUCCIÓN
 * 
 * Uso: node dev-no-ssl.js
 */

// Desactivar verificación SSL (solo para desarrollo)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

console.log('🚀 Iniciando servidor de desarrollo (SSL desactivado)...')
console.log('⚠️  ADVERTENCIA: Verificación SSL desactivada - Solo para desarrollo local\n')

// Ejecutar el servidor de Next.js
require('child_process').spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
})

