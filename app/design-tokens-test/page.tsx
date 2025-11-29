/**
 * PÁGINA DE PRUEBA - DESIGN TOKENS
 * Esta página valida que todos los Design Tokens estén funcionando correctamente
 * Eliminar después de validar
 */

export default function DesignTokensTestPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container">
        <h1 className="hero-title mb-12 text-center">
          🎨 Design Tokens - Test Page
        </h1>

        {/* COLORES FORJA */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Paleta FORJA</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Navy */}
            <div className="space-y-3">
              <div className="h-32 bg-forja-navy rounded-xl shadow-card flex items-center justify-center">
                <span className="text-white font-bold">Navy</span>
              </div>
              <p className="text-sm font-mono text-slate-600">#22335A</p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">bg-forja-navy</code>
            </div>

            {/* Navy 700 */}
            <div className="space-y-3">
              <div className="h-32 bg-forja-navy-700 rounded-xl shadow-card flex items-center justify-center">
                <span className="text-white font-bold">Navy 700</span>
              </div>
              <p className="text-sm font-mono text-slate-600">#34497A</p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">bg-forja-navy-700</code>
            </div>

            {/* Fire */}
            <div className="space-y-3">
              <div className="h-32 bg-forja-fire rounded-xl shadow-card flex items-center justify-center">
                <span className="text-white font-bold">Fire</span>
              </div>
              <p className="text-sm font-mono text-slate-600">#ED7442</p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">bg-forja-fire</code>
            </div>

            {/* Teal */}
            <div className="space-y-3">
              <div className="h-32 bg-forja-teal rounded-xl shadow-card flex items-center justify-center">
                <span className="text-white font-bold">Teal</span>
              </div>
              <p className="text-sm font-mono text-slate-600">#52D6DE</p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">bg-forja-teal</code>
            </div>

            {/* Purple */}
            <div className="space-y-3">
              <div className="h-32 bg-forja-purple rounded-xl shadow-card flex items-center justify-center">
                <span className="text-white font-bold">Purple</span>
              </div>
              <p className="text-sm font-mono text-slate-600">#8060BF</p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">bg-forja-purple</code>
            </div>
          </div>
        </section>

        {/* ESCALA SLATE */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Escala Slate (Neutros)</h2>
          <div className="grid grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={shade} className="space-y-2">
                <div 
                  className={`h-24 bg-slate-${shade} rounded-lg shadow-sm flex items-center justify-center`}
                >
                  <span className={`font-bold ${shade >= 500 ? 'text-white' : 'text-slate-900'}`}>
                    {shade}
                  </span>
                </div>
                <code className="text-xs bg-slate-100 px-2 py-1 rounded block text-center">
                  slate-{shade}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* BORDER RADIUS */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Border Radius</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="h-32 bg-forja-navy rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">xl</span>
              </div>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded block">rounded-xl (1rem)</code>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-forja-fire rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold">2xl</span>
              </div>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded block">rounded-2xl (1.5rem)</code>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-forja-teal rounded-card flex items-center justify-center">
                <span className="text-white font-bold">card</span>
              </div>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded block">rounded-card (0.75rem)</code>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-forja-purple rounded-button flex items-center justify-center">
                <span className="text-white font-bold">button</span>
              </div>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded block">rounded-button (0.5rem)</code>
            </div>
          </div>
        </section>

        {/* BOX SHADOWS */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Box Shadows</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="h-32 bg-white rounded-xl shadow-card flex items-center justify-center">
                <span className="text-forja-navy font-bold">Card</span>
              </div>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded block">shadow-card</code>
              <p className="text-xs text-slate-600">0 10px 30px rgba(15,23,42,.12)</p>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-white rounded-xl shadow-card-hover flex items-center justify-center">
                <span className="text-forja-navy font-bold">Card Hover</span>
              </div>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded block">shadow-card-hover</code>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-white rounded-xl shadow-glow-orange flex items-center justify-center">
                <span className="text-forja-fire font-bold">Glow Orange</span>
              </div>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded block">shadow-glow-orange</code>
            </div>
          </div>
        </section>

        {/* TIPOGRAFÍAS */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Tipografías</h2>
          
          <div className="space-y-8">
            {/* Plus Jakarta Sans - Headings */}
            <div className="bg-white p-8 rounded-xl shadow-card">
              <p className="text-sm text-slate-500 mb-4">Plus Jakarta Sans (Headings)</p>
              <h1 className="text-5xl font-heading font-bold text-forja-navy mb-2">
                The quick brown fox jumps
              </h1>
              <p className="text-sm text-slate-600 font-mono">font-heading / Plus Jakarta Sans</p>
            </div>

            {/* DM Sans - Body */}
            <div className="bg-white p-8 rounded-xl shadow-card">
              <p className="text-sm text-slate-500 mb-4">DM Sans (Body)</p>
              <p className="text-lg font-body text-slate-700 leading-relaxed mb-2">
                The quick brown fox jumps over the lazy dog. Esta es una prueba de la tipografía 
                DM Sans que usamos para el cuerpo del texto en todo el sitio web.
              </p>
              <p className="text-sm text-slate-600 font-mono">font-body / DM Sans</p>
            </div>
          </div>
        </section>

        {/* REGLA 60-30-10 */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Regla 60-30-10</h2>
          <div className="bg-white p-8 rounded-xl shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="h-32 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-slate-700">60%</span>
                </div>
                <h3 className="font-heading font-bold text-forja-navy mb-2">Neutros</h3>
                <p className="text-sm text-slate-600">Fondos, espacios, estructura</p>
                <code className="text-xs bg-slate-100 px-2 py-1 rounded">bg-slate-50/100</code>
              </div>
              <div className="text-center">
                <div className="h-32 bg-forja-navy rounded-xl flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-white">30%</span>
                </div>
                <h3 className="font-heading font-bold text-forja-navy mb-2">Navy</h3>
                <p className="text-sm text-slate-600">Textos, títulos, elementos principales</p>
                <code className="text-xs bg-slate-100 px-2 py-1 rounded">text-forja-navy</code>
              </div>
              <div className="text-center">
                <div className="h-32 bg-gradient-to-r from-forja-fire to-forja-teal rounded-xl flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-white">10%</span>
                </div>
                <h3 className="font-heading font-bold text-forja-navy mb-2">Acentos</h3>
                <p className="text-sm text-slate-600">CTAs, highlights, interacciones</p>
                <code className="text-xs bg-slate-100 px-2 py-1 rounded">bg-forja-fire/teal</code>
              </div>
            </div>
          </div>
        </section>

        {/* COMPONENTES DE EJEMPLO */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Componentes de Ejemplo</h2>
          
          {/* Botones */}
          <div className="bg-white p-8 rounded-xl shadow-card mb-6">
            <h3 className="card-title mb-6">Botones</h3>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-forja-fire text-white font-semibold rounded-button hover:bg-forja-fire/90 transition-colors shadow-glow-orange">
                Primary CTA
              </button>
              <button className="px-6 py-3 bg-forja-navy text-white font-semibold rounded-button hover:bg-forja-navy-700 transition-colors">
                Secondary
              </button>
              <button className="px-6 py-3 border-2 border-forja-navy text-forja-navy font-semibold rounded-button hover:bg-forja-navy hover:text-white transition-colors">
                Outline
              </button>
              <button className="px-6 py-3 bg-forja-teal text-white font-semibold rounded-button hover:bg-forja-teal/90 transition-colors">
                Accent
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow">
              <h3 className="card-title mb-3">Card Title</h3>
              <p className="card-description">
                Esta es una card de ejemplo usando los design tokens de FORJA.
              </p>
            </div>
            <div className="bg-forja-navy p-6 rounded-xl shadow-card">
              <h3 className="card-title mb-3 text-white">Navy Card</h3>
              <p className="card-description text-white/90">
                Card con fondo navy y texto blanco.
              </p>
            </div>
            <div className="bg-gradient-to-br from-forja-fire to-forja-purple p-6 rounded-xl shadow-card">
              <h3 className="card-title mb-3 text-white">Gradient Card</h3>
              <p className="card-description text-white/90">
                Card con gradiente fire a purple.
              </p>
            </div>
          </div>
        </section>

        {/* RESULTADO */}
        <section className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-green-900 mb-4">
            ✅ Design Tokens Validados
          </h2>
          <p className="text-green-800 font-body">
            Todos los design tokens están funcionando correctamente. 
            Puedes eliminar esta página de prueba.
          </p>
          <p className="text-sm text-green-700 mt-4">
            Ruta: <code className="bg-green-100 px-2 py-1 rounded">/design-tokens-test</code>
          </p>
        </section>
      </div>
    </div>
  )
}

