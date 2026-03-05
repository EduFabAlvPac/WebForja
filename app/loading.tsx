/**
 * Loading Component - Optimizado para CLS
 * 
 * Usa dimensiones fijas para evitar layout shift
 * Animación CSS pura (sin JS) para mejor TBT
 */
export default function Loading() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-slate-50"
      style={{ minHeight: '100vh' }} // Evita CLS
    >
      <div className="text-center">
        {/* Spinner CSS puro - mejor rendimiento que JS */}
        <div 
          className="inline-block rounded-full h-12 w-12 border-4 border-slate-200 border-t-forja-fire mb-4"
          style={{
            animation: 'spin 1s linear infinite',
          }}
          aria-label="Cargando contenido"
          role="status"
        />
        <p className="text-forja-navy font-medium">Cargando...</p>
      </div>
      
      {/* Keyframes inline para evitar dependencia de CSS externo */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

