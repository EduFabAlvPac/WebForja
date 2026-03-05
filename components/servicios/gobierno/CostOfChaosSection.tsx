'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

const SIN_GOBIERNO_ITEMS = [
  'Las decisiones importantes las toma una sola persona — y cuando no está, todo se detiene.',
  'Los roles son difusos: todos hacen de todo y nadie es responsable de nada concreto.',
  'Los conflictos entre socios o áreas se resuelven por poder, no por proceso.',
  'No hay claridad sobre cómo se distribuyen utilidades, se toman créditos o se gestionan riesgos.',
  'La empresa vale lo que vale su fundador — no puede venderse, capitalizarse ni heredarse fácilmente.',
]

const CON_GOBIERNO_ITEMS = [
  'Modelo de autoridad claro: cada persona sabe qué decide, qué aprueba y qué escala.',
  'Roles y perfiles definidos por diseño, no por urgencia. Estructura que escala contigo.',
  'Protocolos de gobierno para conflictos, acuerdos de socios y toma de decisiones estratégicas.',
  'Gobierno financiero: políticas de utilidades, inversión, riesgo y cumplimiento normativo.',
  'Empresa institucionalizada: con valor propio, transferible, escalable y atractiva para inversión.',
]

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setPosition(pct)
    },
    []
  )

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: MouseEvent) => updatePosition(e.clientX)
    const onUp = () => setDragging(false)
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length) {
        e.preventDefault()
        updatePosition(e.touches[0].clientX)
      }
    }
    const onTouchEnd = () => setDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [dragging, updatePosition])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-slate-200 min-h-[420px] md:min-h-[380px]"
    >
      {/* Panel izquierdo — Sin Gobierno (ancho = position%) */}
      <div
        className="absolute left-0 top-0 bottom-0 p-6 md:p-8 flex flex-col overflow-hidden"
        style={{ width: `${position}%`, backgroundColor: '#FEF2F2', minWidth: position > 0 ? 120 : 0 }}
      >
        <h3 className="text-lg font-bold mb-4 shrink-0" style={{ color: '#991B1B' }}>
          ⚠️ Tu empresa HOY
        </h3>
        <p className="text-sm mb-6 shrink-0" style={{ color: '#991B1B', opacity: 0.9 }}>
          (Sin estructura de gobierno)
        </p>
        <ul className="space-y-3 flex-1 overflow-y-auto">
          {SIN_GOBIERNO_ITEMS.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm" style={{ color: '#991B1B' }}>
              <span className="shrink-0">⚠️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Panel derecho — Con Gobierno (desde position% hasta 100%) */}
      <div
        className="absolute right-0 top-0 bottom-0 p-6 md:p-8 flex flex-col overflow-hidden"
        style={{ left: `${position}%`, width: `${100 - position}%`, backgroundColor: '#F0FDF4', minWidth: position < 100 ? 120 : 0 }}
      >
        <h3 className="text-lg font-bold mb-4 shrink-0" style={{ color: '#166534' }}>
          ✅ Tu empresa CON ForjaConsulting
        </h3>
        <p className="text-sm mb-6 shrink-0" style={{ color: '#166534', opacity: 0.9 }}>
          (Con estructura de gobierno)
        </p>
        <ul className="space-y-3 flex-1 overflow-y-auto">
          {CON_GOBIERNO_ITEMS.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm" style={{ color: '#166534' }}>
              <span className="shrink-0">✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Divisor central: línea 2px + handle arrastrable (área táctil amplia) */}
      <div
        role="slider"
        aria-valuenow={position}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        className="absolute top-0 bottom-0 z-20 flex items-center justify-center cursor-ew-resize select-none"
        style={{
          left: `${position}%`,
          transform: 'translateX(-50%)',
          width: 44,
          marginLeft: -22,
        }}
        onMouseDown={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onTouchStart={(e) => {
          if (e.touches.length) {
            updatePosition(e.touches[0].clientX)
            setDragging(true)
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 5))
          if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 5))
        }}
      >
        <div
          className="absolute top-0 bottom-0 w-0.5 left-1/2 -translate-x-px"
          style={{ backgroundColor: '#F97316', width: 2 }}
        />
        <div
          className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center border-2 border-white relative z-10 pointer-events-none"
          style={{ backgroundColor: '#F97316' }}
          aria-hidden
        >
          <span className="text-white text-xs font-bold">⟷</span>
        </div>
      </div>
    </div>
  )
}

function MobilePanels() {
  const [tab, setTab] = useState('sin')
  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-100">
        <TabsTrigger value="sin" className="data-[state=active]:bg-[#FEF2F2] data-[state=active]:text-[#991B1B]">
          ⚠️ Sin Gobierno
        </TabsTrigger>
        <TabsTrigger value="con" className="data-[state=active]:bg-[#F0FDF4] data-[state=active]:text-[#166534]">
          ✅ Con Gobierno
        </TabsTrigger>
      </TabsList>
      <TabsContent value="sin" className="mt-0">
        <div
          className="p-6 rounded-2xl border"
          style={{ backgroundColor: '#FEF2F2', borderColor: 'rgba(153,27,27,0.2)' }}
        >
          <h3 className="text-lg font-bold mb-2" style={{ color: '#991B1B' }}>
            Tu empresa HOY (Sin estructura de gobierno)
          </h3>
          <ul className="space-y-3">
            {SIN_GOBIERNO_ITEMS.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: '#991B1B' }}>
                <span className="shrink-0">⚠️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="con" className="mt-0">
        <div
          className="p-6 rounded-2xl border"
          style={{ backgroundColor: '#F0FDF4', borderColor: 'rgba(22,101,52,0.2)' }}
        >
          <h3 className="text-lg font-bold mb-2" style={{ color: '#166534' }}>
            Tu empresa CON ForjaConsulting (Con estructura de gobierno)
          </h3>
          <ul className="space-y-3">
            {CON_GOBIERNO_ITEMS.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: '#166534' }}>
                <span className="shrink-0">✅</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export function CostOfChaosSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="w-full" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Sub-bloque A — Título y contexto */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: '#1E3A5F' }}
        >
          El desorden organizacional tiene un precio.
          <br />
          Y lo estás pagando hoy.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: '#64748B' }}
        >
          Dos versiones de la misma empresa. La diferencia: una tiene gobierno corporativo, la otra
          no.
        </motion.p>
      </div>

      {/* Sub-bloque B — Comparador Before/After */}
      <div className="container mx-auto px-4 md:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="block md:hidden"
        >
          <MobilePanels />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <BeforeAfterSlider />
        </motion.div>
      </div>

      {/* Sub-bloque C — Card de dato de impacto */}
      <div className="container mx-auto px-4 md:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-[700px] mx-auto rounded-2xl p-8 md:p-10 text-center"
          style={{ backgroundColor: '#1E3A5F' }}
        >
          <p
            className="text-2xl md:text-3xl font-bold leading-snug mb-6"
            style={{ color: '#F97316' }}
          >
            Las empresas con gobierno corporativo formal tienen 2.5x más probabilidades de acceder a
            financiamiento externo.
          </p>
          <p className="text-white/80 text-sm mb-6">
            Fuente: IFC - International Finance Corporation · LATAM 2024
          </p>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/95"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <span>→</span>
            <span>
              Lo que esto significa para tu PYME: más acceso a capital, menor riesgo y mayor valor
              de tu empresa en cualquier escenario.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
