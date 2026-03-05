# NOVA Studio — Agencia de Diseño Digital

Landing page profesional construida con **Astro 4 + Tailwind CSS**, lista para desplegar en Vercel.

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321)

## 📦 Estructura del proyecto

```
nova-studio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Marquee.astro
│   │   ├── Services.astro
│   │   ├── Work.astro
│   │   ├── Process.astro
│   │   ├── About.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── vercel.json
└── package.json
```

## ✉️ Activar formulario de contacto (EmailJS)

1. Crea cuenta gratis en [emailjs.com](https://www.emailjs.com)
2. **Email Services** → Conecta tu cuenta de Gmail o Outlook
3. **Email Templates** → Crea plantilla con estas variables:
   - `{{from_name}}` — nombre del remitente
   - `{{from_email}}` — email del remitente
   - `{{company}}` — empresa
   - `{{service}}` — servicio de interés
   - `{{message}}` — mensaje
4. Abre `src/components/Contact.astro` y reemplaza:
   ```js
   const EMAILJS_PUBLIC_KEY  = 'tu_public_key';   // Account > API Keys
   const EMAILJS_SERVICE_ID  = 'tu_service_id';   // Email Services
   const EMAILJS_TEMPLATE_ID = 'tu_template_id';  // Email Templates
   ```

## 🌐 Desplegar en Vercel

### Opción A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Opción B — GitHub + Vercel Dashboard
1. Sube el proyecto a GitHub
2. En [vercel.com](https://vercel.com), haz clic en **Add New Project**
3. Importa tu repositorio
4. Vercel detecta Astro automáticamente — haz clic en **Deploy**

## 🛠 Comandos

| Comando         | Acción                          |
|-----------------|----------------------------------|
| `npm run dev`   | Servidor de desarrollo en :4321 |
| `npm run build` | Build de producción en `./dist` |
| `npm run preview` | Preview del build local       |

## 🎨 Personalización

- **Colores**: edita `tailwind.config.mjs`
- **Contenido**: cada sección es un componente independiente en `/src/components/`
- **Fotos portfolio**: reemplaza las URLs de Unsplash en `Work.astro`
- **Información de contacto**: edita `Contact.astro` y `Footer.astro`
