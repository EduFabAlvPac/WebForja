# Commit Message

## Title
feat: install shadcn/ui components + design tokens + SSL dev fixes

## Body

### ✨ Features

**shadcn/ui Components (10 components):**
- ✅ Button (6 variants: default, secondary, outline, ghost, link, destructive)
- ✅ Card (with Header, Title, Description, Content, Footer)
- ✅ Input (text, email, password, etc.)
- ✅ Textarea
- ✅ Badge (4 variants: default, secondary, outline, destructive)
- ✅ Progress (animated progress bar)
- ✅ Tooltip (with Provider, Trigger, Content)
- ✅ Dialog (modal with Header, Title, Description, Footer)
- ✅ Toast (notification system with Toaster, Provider)
- ✅ Separator (horizontal and vertical)

**Design Tokens Integration:**
- ✅ All components use FORJA color palette (navy, fire, teal, purple)
- ✅ Typography: Plus Jakarta Sans (headings) + DM Sans (body)
- ✅ Shadows: card shadow (0 10px 30px rgba(15,23,42,.12))
- ✅ Border radius: xl, 2xl

**Site Metrics Centralization:**
- ✅ Created `lib/site-metrics.ts` as single source of truth
- ✅ Updated HeroSection, CTASection, TestimoniosPage, StickyCTABar
- ✅ Prevents contradictions across the site

**CTA Unification:**
- ✅ Primary CTA: "Rayos-X Empresarial Gratis"
- ✅ Secondary CTA: "Habla con un Forjador"
- ✅ Consistent styling: primary (fire), secondary (outline teal)

### 🔧 Configuration

**shadcn/ui Setup:**
- ✅ `components.json` configuration
- ✅ `components/ui/index.ts` for centralized imports
- ✅ Tailwind config extended with FORJA tokens

**Development Tools:**
- ✅ `dev-no-ssl.js` script for corporate network SSL issues
- ✅ `.env.development.local.example` template
- ✅ New npm scripts: `dev:no-ssl`, `build:no-ssl`

### 📚 Documentation

- ✅ `docs/DESARROLLO_RED_CORPORATIVA.md` - Corporate network development guide
- ✅ `docs/ERRORES_SSL_SOLUCION.md` - SSL errors solution guide
- ✅ `docs/QA_VALIDATION.md` - QA validation checklist
- ✅ `docs/README_REFACTOR.md` - Code inventory
- ✅ `docs/REFACTOR_PLAN.md` - Refactor plan

### 🧪 Testing Pages

- ✅ `/sandbox` - shadcn/ui components showcase
- ✅ `/design-tokens-test` - Design tokens validation

### 📦 Dependencies

**New packages:**
- `@radix-ui/react-dialog`
- `@radix-ui/react-progress`
- `@radix-ui/react-separator`
- `@radix-ui/react-toast`
- `@radix-ui/react-tooltip`
- `class-variance-authority`

### 🐛 Fixes

- ✅ Fixed SSL certificate issues for corporate networks
- ✅ Resolved TypeScript errors in service pages
- ✅ Fixed linter errors across the codebase

### 📊 Impact

**Files changed:**
- Modified: 21 files
- New: 22 files
- Total: 43 files

**Key areas:**
- Components: 12 new UI components
- Configuration: 3 new config files
- Documentation: 5 new/updated docs
- Pages: 2 new test pages
- Data: Updated service data files
- Styles: Updated global.css, tailwind.config.ts

### ✅ Validation

- ✅ No TypeScript errors
- ✅ No linter errors
- ✅ All components render correctly
- ✅ Design tokens applied consistently
- ✅ Site metrics centralized
- ✅ CTAs unified

### 🚀 Next Steps

1. Validate in production (Vercel)
2. Remove test pages after validation
3. Continue with remaining shadcn/ui components as needed

---

**Breaking Changes:** None

**Backwards Compatibility:** ✅ Full

**Testing:** ✅ Manual testing completed on `/sandbox`

