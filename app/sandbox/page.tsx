/**
 * SANDBOX - Prueba de Componentes shadcn/ui
 * Esta página valida que todos los componentes base estén funcionando
 * Eliminar después de validar
 */

'use client'

import { useState } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Badge,
  Progress,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  ProcessStepper,
  MetodologiaForja,
  DialogDescription,
  DialogFooter,
  Separator,
  KpiCard,
  StatBadge,
} from '@/components/ui'
import { TrendingUp, Users, DollarSign, ShoppingCart, Activity, Target } from 'lucide-react'

export default function SandboxPage() {
  const [progress, setProgress] = useState(45)

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container">
        <h1 className="hero-title mb-12 text-center">
          🧪 Sandbox - shadcn/ui Components
        </h1>

        {/* BUTTONS */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Buttons - FORJA Design System</h2>
          
          {/* Variants */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Variantes FORJA</CardTitle>
              <CardDescription>
                Primary (Fire), Secondary (Teal), y variantes adicionales
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Primary & Secondary</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary CTA</Button>
                  <Button variant="secondary">Secondary CTA</Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Otras Variantes</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sizes */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Tamaños (sm, md, lg)</CardTitle>
              <CardDescription>
                Tres tamaños para diferentes jerarquías visuales
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Primary</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium (Default)</Button>
                  <Button variant="primary" size="lg">Large</Button>
                  <Button variant="primary" size="icon" aria-label="Rocket icon">🚀</Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Secondary</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="secondary" size="sm">Small</Button>
                  <Button variant="secondary" size="md">Medium (Default)</Button>
                  <Button variant="secondary" size="lg">Large</Button>
                  <Button variant="secondary" size="icon" aria-label="Star icon">⭐</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* States */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Estados (Hover, Active, Disabled)</CardTitle>
              <CardDescription>
                Interacciones visuales claras para cada estado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Hover & Active</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Pasa el mouse sobre los botones para ver el efecto hover. Click para ver active state.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Hover Me</Button>
                  <Button variant="secondary">Hover Me</Button>
                  <Button variant="outline">Hover Me</Button>
                  <Button variant="ghost">Hover Me</Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Disabled State</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Botones deshabilitados con <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">disabled</code> y <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">aria-disabled=&quot;true&quot;</code>
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" disabled>Disabled Primary</Button>
                  <Button variant="secondary" disabled>Disabled Secondary</Button>
                  <Button variant="outline" disabled>Disabled Outline</Button>
                  <Button variant="ghost" disabled>Disabled Ghost</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Accesibilidad & Navegación por Teclado</CardTitle>
              <CardDescription>
                Focus rings visibles (WCAG 2.1), aria-disabled, navegación con Tab
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Focus Ring (outline-2, offset-2)</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Presiona <kbd className="px-2 py-1 text-xs bg-slate-100 border border-slate-300 rounded">Tab</kbd> para navegar entre botones. El focus ring es claramente visible.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Tab to Focus 1</Button>
                  <Button variant="secondary">Tab to Focus 2</Button>
                  <Button variant="outline">Tab to Focus 3</Button>
                  <Button variant="ghost">Tab to Focus 4</Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">aria-disabled</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Los botones deshabilitados incluyen <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">aria-disabled=&quot;true&quot;</code> para lectores de pantalla
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" disabled aria-label="Disabled primary button example">
                    With aria-disabled
                  </Button>
                  <Button variant="secondary" disabled aria-label="Disabled secondary button example">
                    With aria-disabled
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* asChild */}
          <Card>
            <CardHeader>
              <CardTitle>asChild (Radix Slot)</CardTitle>
              <CardDescription>
                Usa <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">asChild</code> para renderizar como Link u otro elemento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Ejemplo con Link</h4>
                <p className="text-sm text-slate-600 mb-3">
                  El botón se renderiza como un <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">&lt;a&gt;</code> pero mantiene todos los estilos
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" asChild>
                    <a href="#buttons">Link as Primary Button</a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href="#buttons">Link as Secondary Button</a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-xs text-slate-600 font-mono">
                  {`<Button variant="primary" asChild>`}<br />
                  {`  <Link href="/about">About</Link>`}<br />
                  {`</Button>`}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CARDS */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Cards</h2>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Card Base Component</CardTitle>
              <CardDescription>
                Border slate-200, shadow-card, hover sutil
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600">
                El componente Card base incluye:
              </p>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li><code className="text-xs bg-slate-100 px-1 py-0.5 rounded">border-slate-200</code> - Borde gris claro</li>
                <li><code className="text-xs bg-slate-100 px-1 py-0.5 rounded">shadow-card</code> - Sombra consistente</li>
                <li><code className="text-xs bg-slate-100 px-1 py-0.5 rounded">hover:shadow-lg</code> - Efecto hover sutil</li>
                <li><code className="text-xs bg-slate-100 px-1 py-0.5 rounded">hover:border-slate-300</code> - Borde más oscuro en hover</li>
              </ul>
              <p className="text-sm text-slate-600 mt-4">
                <strong>Prueba:</strong> Pasa el mouse sobre esta card para ver el efecto hover.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  This is the card content. You can put any content here.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Action</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Badge</CardTitle>
                <CardDescription>
                  <Badge>New</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Card with a badge in the description area.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Minimal card without footer.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* KPI CARDS */}
        <section className="mb-16">
          <h2 className="section-title mb-8">KPI Cards</h2>
          
          {/* Variants */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>KPI Card Variants</CardTitle>
              <CardDescription>
                Displays Key Performance Indicators with título, valor, y descripción
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Default Variant</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <KpiCard
                    title="Total Revenue"
                    value="$1.2M"
                    description="+12% from last month"
                    icon={DollarSign}
                    trend="up"
                  />
                  <KpiCard
                    title="Active Users"
                    value="8,234"
                    description="+5.2% this week"
                    icon={Users}
                    trend="up"
                  />
                  <KpiCard
                    title="Conversion Rate"
                    value="3.2%"
                    description="-0.5% from last week"
                    icon={Target}
                    trend="down"
                  />
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Primary Variant</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <KpiCard
                    variant="primary"
                    title="Monthly Sales"
                    value="$847K"
                    description="+18% vs last month"
                    icon={ShoppingCart}
                    trend="up"
                  />
                  <KpiCard
                    variant="primary"
                    title="Growth Rate"
                    value="24%"
                    description="Steady growth"
                    icon={TrendingUp}
                    trend="neutral"
                  />
                  <KpiCard
                    variant="primary"
                    title="Engagement"
                    value="92%"
                    description="+3% this month"
                    icon={Activity}
                    trend="up"
                  />
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Success, Warning & Danger Variants</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <KpiCard
                    variant="success"
                    title="Uptime"
                    value="99.9%"
                    description="All systems operational"
                    icon={Activity}
                    trend="up"
                  />
                  <KpiCard
                    variant="warning"
                    title="Response Time"
                    value="245ms"
                    description="Slightly above target"
                    icon={Activity}
                    trend="neutral"
                  />
                  <KpiCard
                    variant="danger"
                    title="Error Rate"
                    value="2.1%"
                    description="Above threshold"
                    icon={Activity}
                    trend="down"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Without Icons */}
          <Card>
            <CardHeader>
              <CardTitle>KPI Cards - Sin Iconos</CardTitle>
              <CardDescription>
                También funcionan sin iconos para un diseño más limpio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <KpiCard
                  title="Total Orders"
                  value="1,234"
                  description="+8% this week"
                  trend="up"
                />
                <KpiCard
                  title="Avg. Order Value"
                  value="$145"
                  description="+$12 vs last week"
                  trend="up"
                />
                <KpiCard
                  title="Customer Satisfaction"
                  value="4.8/5"
                  description="Based on 523 reviews"
                />
                <KpiCard
                  title="Return Rate"
                  value="1.2%"
                  description="-0.3% improvement"
                  trend="up"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* STAT BADGES */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Stat Badges</h2>
          
          {/* Variants */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>StatBadge Variants</CardTitle>
              <CardDescription>
                Small status badges with semantic colors (default, success, warning)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Basic Variants</h4>
                <div className="flex flex-wrap gap-3">
                  <StatBadge variant="default">Default</StatBadge>
                  <StatBadge variant="success">Success</StatBadge>
                  <StatBadge variant="warning">Warning</StatBadge>
                  <StatBadge variant="danger">Danger</StatBadge>
                  <StatBadge variant="info">Info</StatBadge>
                  <StatBadge variant="primary">Primary</StatBadge>
                  <StatBadge variant="secondary">Secondary</StatBadge>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">With Dot Indicator</h4>
                <div className="flex flex-wrap gap-3">
                  <StatBadge variant="success" dot>Active</StatBadge>
                  <StatBadge variant="warning" dot>Pending</StatBadge>
                  <StatBadge variant="danger" dot>Offline</StatBadge>
                  <StatBadge variant="info" dot>Processing</StatBadge>
                  <StatBadge variant="default" dot>Inactive</StatBadge>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Sizes</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <StatBadge variant="primary" size="sm">Small</StatBadge>
                  <StatBadge variant="primary" size="md">Medium (Default)</StatBadge>
                  <StatBadge variant="primary" size="lg">Large</StatBadge>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Use Cases - Metrics</h4>
                <div className="flex flex-wrap gap-3">
                  <StatBadge variant="success">+12.5%</StatBadge>
                  <StatBadge variant="danger">-3.2%</StatBadge>
                  <StatBadge variant="info">↑ 234</StatBadge>
                  <StatBadge variant="warning">⚠ Review</StatBadge>
                  <StatBadge variant="success" dot>✓ Completed</StatBadge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Combined Example */}
          <Card>
            <CardHeader>
              <CardTitle>Combined Example - KPI + StatBadge</CardTitle>
              <CardDescription>
                KPI Cards con StatBadges para contexto adicional
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <KpiCard
                    title="Website Traffic"
                    value="45.2K"
                    description="+18% this month"
                    icon={Activity}
                    trend="up"
                  />
                  <div className="flex gap-2">
                    <StatBadge variant="success" size="sm">High Performance</StatBadge>
                    <StatBadge variant="info" size="sm">Trending</StatBadge>
                  </div>
                </div>

                <div className="space-y-2">
                  <KpiCard
                    variant="primary"
                    title="Lead Generation"
                    value="1,847"
                    description="+5% vs target"
                    icon={Users}
                    trend="up"
                  />
                  <div className="flex gap-2">
                    <StatBadge variant="success" size="sm" dot>On Track</StatBadge>
                  </div>
                </div>

                <div className="space-y-2">
                  <KpiCard
                    variant="warning"
                    title="Server Load"
                    value="78%"
                    description="Approaching limit"
                    icon={Activity}
                    trend="neutral"
                  />
                  <div className="flex gap-2">
                    <StatBadge variant="warning" size="sm" dot>Monitor</StatBadge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* METODOLOGIA FORJA - OPCION A (ACCORDION) */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Metodología FORJA® - Opción A (Accordion Interactivo)</h2>
          
          {/* Example 1: Sin fase actual (exploración libre) */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Versión Completa - Exploración Libre</CardTitle>
              <CardDescription>
                El usuario puede hacer clic en cualquier fase para ver detalles completos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MetodologiaForja />
            </CardContent>
          </Card>

          {/* Example 2: Con fase actual (paso 3) */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Con Fase Actual - Paso 3 (Rediseñar)</CardTitle>
              <CardDescription>
                Muestra el progreso actual del proyecto, útil para dashboards de clientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MetodologiaForja currentPhase={3} />
            </CardContent>
          </Card>

          {/* Example 3: Fase inicial */}
          <Card>
            <CardHeader>
              <CardTitle>Inicio del Proyecto - Paso 1 (Fundamentar)</CardTitle>
              <CardDescription>
                Primera fase expandida por defecto para nuevos clientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MetodologiaForja currentPhase={1} />
            </CardContent>
          </Card>
        </section>

        {/* PROCESS STEPPER */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Process Stepper - Metodología FORJA® (Versión Simple)</h2>
          
          {/* Example 1: Current Step 1 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Paso 1 - Fundamentar</CardTitle>
              <CardDescription>
                Metodología FORJA® - El Sistema de 5 Fases que Elimina el Caos Digital
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProcessStepper
                currentStep={1}
                steps={[
                  { label: 'Fundamentar', description: 'No Puedes Mejorar lo que No Mides' },
                  { label: 'Orientar', description: 'Estrategia Clara, Ejecución Efectiva' },
                  { label: 'Rediseñar', description: 'Transformación en Acción' },
                  { label: 'Justificar', description: 'Los Números No Mienten' },
                  { label: 'Acompañar', description: 'El Cambio se Sostiene con Acompañamiento' },
                ]}
              />
            </CardContent>
          </Card>

          {/* Example 2: Current Step 3 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Paso 3 - Rediseñar</CardTitle>
              <CardDescription>
                Proyecto en fase de Transformación en Acción
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProcessStepper
                currentStep={3}
                steps={[
                  { label: 'Fundamentar', description: 'No Puedes Mejorar lo que No Mides' },
                  { label: 'Orientar', description: 'Estrategia Clara, Ejecución Efectiva' },
                  { label: 'Rediseñar', description: 'Transformación en Acción' },
                  { label: 'Justificar', description: 'Los Números No Mienten' },
                  { label: 'Acompañar', description: 'El Cambio se Sostiene con Acompañamiento' },
                ]}
              />
            </CardContent>
          </Card>

          {/* Example 3: Current Step 5 - Completed */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Paso 5 - Acompañar</CardTitle>
              <CardDescription>
                Todas las fases completadas, en acompañamiento continuo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProcessStepper
                currentStep={5}
                steps={[
                  { label: 'Fundamentar', description: 'No Puedes Mejorar lo que No Mides' },
                  { label: 'Orientar', description: 'Estrategia Clara, Ejecución Efectiva' },
                  { label: 'Rediseñar', description: 'Transformación en Acción' },
                  { label: 'Justificar', description: 'Los Números No Mienten' },
                  { label: 'Acompañar', description: 'El Cambio se Sostiene con Acompañamiento' },
                ]}
              />
            </CardContent>
          </Card>

          {/* Example 4: Custom Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Pasos Personalizados</CardTitle>
              <CardDescription>
                Stepper con pasos diferentes para otro proceso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProcessStepper
                currentStep={2}
                steps={[
                  { label: 'Contacto', description: 'Primera reunión' },
                  { label: 'Propuesta', description: 'Presentación de solución' },
                  { label: 'Contrato', description: 'Firma de acuerdo' },
                  { label: 'Kickoff', description: 'Inicio del proyecto' },
                  { label: 'Entrega', description: 'Proyecto finalizado' },
                ]}
              />
            </CardContent>
          </Card>

          {/* Example 5: Responsive - Vertical on Mobile */}
          <Card>
            <CardHeader>
              <CardTitle>Responsive Design</CardTitle>
              <CardDescription>
                El stepper se adapta automáticamente al tamaño de pantalla
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-sm text-slate-600 mb-4">
                  <strong>Desktop:</strong> Horizontal layout<br />
                  <strong>Mobile:</strong> Vertical layout (automático)
                </p>
                <ProcessStepper
                  currentStep={4}
                  steps={[
                    { label: 'Inicio' },
                    { label: 'Progreso' },
                    { label: 'Revisión' },
                    { label: 'Aprobación' },
                    { label: 'Finalizado' },
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* INPUTS */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Inputs & Forms</h2>
          <Card>
            <CardHeader>
              <CardTitle>Form Elements</CardTitle>
              <CardDescription>Input, Textarea y otros controles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="tu@email.com" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Escribe tu mensaje aquí..." 
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="disabled" className="text-sm font-medium">
                  Disabled Input
                </label>
                <Input 
                  id="disabled" 
                  placeholder="Disabled" 
                  disabled 
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Form</Button>
            </CardFooter>
          </Card>
        </section>

        {/* BADGES */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Badges</h2>
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* PROGRESS */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Progress</h2>
          <Card>
            <CardHeader>
              <CardTitle>Progress Bar</CardTitle>
              <CardDescription>
                Valor actual: {progress}%
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Progress value={progress} />
              
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                >
                  -10%
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                >
                  +10%
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setProgress(0)}
                >
                  Reset
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>25%</span>
                  </div>
                  <Progress value={25} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>50%</span>
                  </div>
                  <Progress value={50} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>75%</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>100%</span>
                  </div>
                  <Progress value={100} />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* TOOLTIP */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Tooltips</h2>
          <Card>
            <CardHeader>
              <CardTitle>Tooltip Examples</CardTitle>
              <CardDescription>
                Hover sobre los elementos para ver los tooltips
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TooltipProvider>
                <div className="flex flex-wrap gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button>Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Este es un tooltip</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Tooltip 2</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Información adicional aquí</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge>Badge con tooltip</Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Los badges también pueden tener tooltips</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </CardContent>
          </Card>
        </section>

        {/* DIALOG */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Dialogs</h2>
          <Card>
            <CardHeader>
              <CardTitle>Dialog / Modal</CardTitle>
              <CardDescription>
                Click en el botón para abrir el dialog
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>
                      Esta es la descripción del dialog. Puedes poner cualquier contenido aquí.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email-dialog" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email-dialog" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </section>

        {/* SEPARATOR */}
        <section className="mb-16">
          <h2 className="section-title mb-8">Separators</h2>
          <Card>
            <CardHeader>
              <CardTitle>Separator Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm text-slate-600">Contenido antes del separador</p>
                <Separator className="my-4" />
                <p className="text-sm text-slate-600">Contenido después del separador</p>
              </div>

              <div className="flex h-20 items-center space-x-4">
                <div className="text-sm">Izquierda</div>
                <Separator orientation="vertical" />
                <div className="text-sm">Centro</div>
                <Separator orientation="vertical" />
                <div className="text-sm">Derecha</div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* RESULTADO */}
        <section className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-green-900 mb-4">
            ✅ shadcn/ui Components Validados
          </h2>
          <p className="text-green-800 font-body mb-4">
            Todos los componentes base están funcionando correctamente con los Design Tokens de FORJA.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge>Button ✓</Badge>
            <Badge variant="secondary">Card ✓</Badge>
            <Badge variant="outline">Input ✓</Badge>
            <Badge>Textarea ✓</Badge>
            <Badge variant="secondary">Badge ✓</Badge>
            <Badge variant="outline">Progress ✓</Badge>
            <Badge>Tooltip ✓</Badge>
            <Badge variant="secondary">Dialog ✓</Badge>
            <Badge variant="outline">Toast ✓</Badge>
            <Badge>Separator ✓</Badge>
          </div>
          <p className="text-sm text-green-700">
            Ruta: <code className="bg-green-100 px-2 py-1 rounded">/sandbox</code>
          </p>
        </section>
      </div>
    </div>
  )
}

