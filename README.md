# Inspire Hub Global · Website (Astro + Decap CMS)

Sitio nuevo para inspirehubglobal.com. Static site con Astro + CMS con Decap.

## Stack

- **Astro 6** · static site generator
- **Decap CMS** · admin en `/admin` para Mabel
- **Netlify** · hosting + Identity (auth) + Forms
- **Markdown content collections** · contenido editable separado del código

## Estructura

```
src/
├── pages/              ← Una .astro por ruta (17 páginas)
├── layouts/
│   ├── Base.astro      ← Wrapper con SEO, nav, footer (Mabel no toca)
│   └── BlogPost.astro  ← Template de blog post (lee del collection)
├── components/
│   ├── Nav.astro
│   └── Footer.astro
├── content/
│   └── blog/           ← Los 4 ensayos como markdown
└── content.config.ts   ← Schema del collection (Astro v6)

public/
├── admin/              ← Decap CMS
│   ├── index.html
│   └── config.yml
├── assets/             ← Imágenes (photos, logos, podcast, testimonials)
└── styles.css          ← CSS global
```

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/
```

## Estado actual (15 may 2026)

### Listo
- Astro project + 17 pages migrated from HTML
- Base layout con SEO automático (canonical, OG, Twitter, JSON-LD)
- Nav + Footer como componentes reutilizables
- BlogPost layout que renderiza desde markdown
- Los 4 blog posts editables vía CMS (en `src/content/blog/*.md`)
- Decap admin con schema de blog
- netlify.toml + .gitignore

### Pendiente

**Para Mabel editar contenido más allá de blog posts (home, sobre, services, etc):**
1. Extraer copy de cada página a markdown/YAML en `src/content/pages/`
2. Refactor de las páginas .astro para leer desde el collection
3. Añadir cada página al `public/admin/config.yml` con schema de campos

**Para deploy:**
1. Crear repo en GitHub de Mabel (`mabel/inspire-hub-website`)
2. Push del proyecto
3. Conectar repo a Netlify (su cuenta)
4. Habilitar Netlify Identity + Git Gateway
5. Invitar a Mabel por email
6. Apuntar DNS de Hostinger a Netlify
7. Walkthrough con Mabel del panel `/admin`

**Integraciones pendientes:**
- Flodesk forms (los 2 inputs de newsletter)
- Cal.com embed en `/contacto`

## Cómo edita Mabel

1. Va a `https://inspirehubglobal.com/admin`
2. Login con su email (Netlify Identity)
3. Ve lista de "Ensayos · Blog" (y otras colecciones cuando se añadan)
4. Edita: título, lead, imagen, cuerpo en markdown
5. Click "Publish" → commit a git → Netlify rebuild auto → site updated

## Qué NO puede tocar Mabel

- HTML estructural (queda en `.astro` files)
- SEO tags (auto-generados desde Base.astro)
- Navegación / Footer (componentes)
- Estilos (`styles.css`)
- Cualquier cosa fuera de `src/content/` y `public/assets/uploads/`

## Cómo extender el CMS (para Caro)

Para hacer otra página editable:

1. Crear `src/content/pages/[nombre].md` con frontmatter de campos
2. En `src/content.config.ts`, añadir un collection `pages` (o similar)
3. Refactor de `src/pages/[nombre].astro` para hacer `getEntry("pages", "nombre")`
4. En `public/admin/config.yml`, añadir un collection que apunte al folder/archivo

Ejemplo de single-file collection en config.yml:
```yaml
- name: "home"
  label: "Página · Inicio"
  files:
    - name: "home"
      label: "Inicio"
      file: "src/content/pages/home.md"
      fields:
        - { label: "Hero título", name: "heroTitle", widget: "string" }
        - { label: "Hero lead", name: "heroLead", widget: "text" }
```

## Acceso

- **GitHub repo:** pendiente (cuando Mabel cree GitHub, push aquí)
- **Netlify site:** pendiente
- **Dominio:** inspirehubglobal.com (Mabel tiene en Hostinger)
- **Admin URL:** `https://inspirehubglobal.com/admin` (post-deploy)
