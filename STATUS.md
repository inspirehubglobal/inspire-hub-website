# Inspire Hub · STATUS

Última actualización: 15 may 2026, ~20:00 (final de sesión autónoma viernes noche)

## ✅ Lo que está funcionando

### Estructura
- Astro project en `/website/astro-site/` con build limpio (17 páginas, ~700ms)
- Git inicializado, 4 commits (todo limpio para push)
- Dev server corriendo en `http://localhost:4322/`

### Base
- `Base.astro` con SEO auto-generado (canonical, OG, Twitter, JSON-LD, hreflang)
- `Nav.astro` con dropdown de servicios
- `Footer.astro` con form newsletter + SVG circular
- `BlogPost.astro` que renderiza desde markdown + related posts auto

### Páginas con CMS activo (Mabel edita vía /admin)
| Página | Campos editables aproximados |
|---|---|
| **Inicio** (`/`) | ~55 fields: hero, marquees, manifesto, ECO, servicios, big quote, testimonios, vitamina, blog section, closing |
| **Sobre Mabel** (`/sobre-mabel`) | ~30 fields: hero historia, audiencia, método cards, credenciales, big quote, vitamina, closing |
| **Servicios overview** (`/servicios`) | ~25 fields: hero, 3 service cards, big quote, vitamina, closing |
| **Contacto** (`/contacto`) | ~30 fields: hero, form labels + opciones, info aside, big quote, vitamina |
| **Blog · 4 ensayos** (`/blog-*`) | título, lead, descripción, imagen, body markdown, fecha, draft |

### Decap CMS scaffolding
- `/public/admin/index.html` carga Decap + Netlify Identity widget
- `/public/admin/config.yml` con schemas detallados para las 5 páginas anteriores + blog collection
- Netlify Identity widget integrado en Base.astro (redirige a /admin tras login)

### Deployment ready
- `netlify.toml` con build command + redirects (pretty URLs, /admin)
- `.gitignore` para node_modules, .astro, .env, etc.
- `astro.config.mjs` con site URL + directory format

## ⏳ Pendiente

### Páginas todavía hardcoded (no editables vía CMS)
Para que Mabel pueda editar el copy, hay que extraer a markdown:

- `metodo-eco.astro` — método ECO detalle, complejo
- `servicios-individual.astro` — programa coaching 1a1, alta prioridad para Mabel (precios + sesiones)
- `servicios-empresas.astro` — coaching ejecutivo, alta prioridad
- `servicios-bmap.astro` — BMAP detalle, alta prioridad
- `vitamina-i.astro` — landing del podcast
- `recursos.astro` — blog hub (las cards ya son auto del collection, solo el hero + secciones cross-promo)
- `privacidad.astro` — legal, baja prioridad
- `terminos.astro` — legal, baja prioridad
- `404.astro` — trivial

Cada uno: ~15-30 min de extracción siguiendo el patrón establecido.

### Integraciones
- **Flodesk forms** — los 2 inputs de newsletter (footer + recursos) — necesito embed code de Mabel
- **Cal.com embed** — para `/contacto` — necesito URL de Cal.com de Mabel

### Deploy
1. **Push a GitHub:** repo de Mabel = `github.com/inspirehubglobal/inspire-hub-website` (Caro tiene acceso, ya creado)
2. **Conectar Netlify** a ese repo (email Mabel: `hola@caoticamentehermosa.com` ← ⚠️ Caro confirmar si es correcto, suena raro)
3. **Activar Netlify Identity** + **Git Gateway** en el panel Netlify
4. **Invitar a Mabel** por email vía Identity
5. **DNS cutover:** apuntar `inspirehubglobal.com` (Hostinger) → Netlify (cambio de NS o A record)
6. **Walkthrough Mabel** del `/admin`

## 🧪 Testing local

```bash
cd "Desktop/Projects/Ankaa Creative/Clients/Inspire Hub Global/website/astro-site"
npm run dev    # http://localhost:4321 (o 4322 si 4321 ocupado)
npm run build  # → dist/
```

## ✏️ Cómo extender el CMS a otra página

Patrón establecido (ej. para `metodo-eco`):

1. **Crear markdown:** `src/content/pages/metodo-eco.md` con frontmatter de todos los campos editables.
2. **Refactor del .astro:** En `src/pages/metodo-eco.astro`:
   ```typescript
   const entry = await getEntry("pages", "metodo-eco");
   const p = entry.data as any;
   ```
   Reemplazar strings hardcoded por `{p.fieldName}`.
3. **Añadir al admin:** En `public/admin/config.yml`, añadir un nuevo bloque dentro de `collections > files` con schema de campos.
4. **Build:** `npm run build` para verificar.

Hay 3 ejemplos completos para copiar (home, sobre-mabel, servicios).

## 🔐 Acceso a cuentas (lo que Caro confirmó hoy)

- **GitHub user:** `inspirehubglobal` (Mabel)
- **Netlify email:** `hola@caoticamentehermosa.com` (⚠️ verificar)
- **Hostinger:** Mabel tiene dominio + email
- **Flodesk:** Mabel tiene cuenta (necesito form embed)
- **Cal.com:** Mabel tiene cuenta (necesito URL)
- **Email `hola@inspirehubglobal.com`:** activo y recibiendo (Caro confirmó)

## 📊 Resumen ejecutivo

**Mabel ya puede editar:**
- Toda la home page (hero, manifesto, ECO, servicios, testimonios, closing)
- Su página "Sobre Mabel" completa
- La página overview de servicios
- La página de contacto
- Crear/editar/borrar blog posts ilimitados

**Para que pueda editar todo:** falta ~3-4 horas más de extracción (metodo-eco, 3 service pages, vitamina, recursos, legales). Sigue el patrón ya establecido.

**Próximo paso lógico:** push a GitHub + Netlify para que Mabel vea la web live mientras se completa el resto.

## Git log

```
dec36d0 Extract sobre-mabel page to content collection + Decap schema
75a3595 Extract home page to content collection
[earlier] Extract contacto page to content collection
[earlier] Extract servicios overview page to content collection
[earlier] Initial commit: Astro site with Decap CMS
```

Total: ~5 commits limpios, listo para push.
