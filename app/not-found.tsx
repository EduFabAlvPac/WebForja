import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-navy to-brand-purple">
      <div className="container-custom text-center">
        <h1 className="text-9xl font-bold text-brand-orange mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-4">Página no encontrada</h2>
        <p className="text-xl text-white/80 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Button size="lg" asChild>
          <Link href="/">
            Volver al Inicio
          </Link>
        </Button>
      </div>
    </div>
  )
}

