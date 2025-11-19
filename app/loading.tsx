export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-navy to-brand-purple">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-orange mb-4"></div>
        <p className="text-white text-xl">Cargando...</p>
      </div>
    </div>
  )
}

