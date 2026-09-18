# 🚀 Portafolio Profesional de Roger Joel Ramirez Reyes
### Emprendimiento &bull; Estrategia Comercial &bull; Ventas de Alto Impacto

Portafolio **100% dinámico** con panel de administración (CMS headless via Sanity). Edita tu contenido desde un panel web sin tocar una línea de código: textos, métricas, servicios, casos de éxito, testimonios y datos de contacto.

---

## 📁 Estructura del Proyecto

```
portafolio de roger Joel Ramirez Reyes/
│
├── index.html              # Estructura semántica principal y secciones
├── package.json            # Scripts generales del proyecto
├── css/
│   └── styles.css          # Estilos premium, animaciones, modo oscuro/claro y glassmorphism
├── js/
│   ├── data.js             # Datos de respaldo locales (fallback sin internet)
│   ├── config.js           # 🔑 CONFIGURACIÓN DE SANITY (Project ID y Dataset)
│   ├── sanity.js           # Cliente Sanity: carga el contenido vía GROQ
│   └── main.js             # Lógica interactiva (contadores, filtros, modales, WhatsApp y temas)
├── studio/                 # 🎛️ Sanity Studio / Panel de Administración
│   ├── sanity.config.ts    # Configuración del panel
│   ├── schemaTypes/        # Definición de los tipos de contenido (Perfil, Métricas, Casos...)
│   └── seeds/              # Migración de datos: convierte tu contenido actual a Sanity
└── assets/
    └── README.md           # Esta guía de uso y personalización
```

---

## ⚙️ Primeros Pasos: Conectar el Panel de Administración (una sola vez)

El panel de administración se aloja gratis en **Sanity Cloud**. Solo necesitas una cuenta gratuita.

### Paso 1 — Crear tu proyecto en Sanity (gratis)

1. Ve a **[https://www.sanity.io/manage](https://www.sanity.io/manage)** y crea una cuenta (Google o GitHub).
2. Crea un nuevo proyecto (ej: `portafolio-roger`).
3. Copia tu **Project ID** (ej: `abc123d4`).
4. El dataset por defecto se llama **`production`**.

### Paso 2 — Configurar las credenciales

Crea el archivo `.env` dentro de la carpeta `studio/`:

```
cd studio
copy .env.example .env
```

Abre `.env` y completa los tres valores:

```
# De https://www.sanity.io/manage → tu proyecto → Settings → API
SANITY_STUDIO_PROJECT_ID=abc123d4

# Nombre del dataset (por defecto production)
SANITY_STUDIO_DATASET=production

# Tokens de API → Add API token → Role Editor
SANITY_API_TOKEN=skXXXXXXXXXXXXXX
```

### Paso 3 — Subir tu contenido actual a Sanity

Desde la carpeta `studio/`:

```
npm run seed
```

Esto sube todo tu contenido actual (perfil, métricas, 6 casos de éxito, testimonios...) al panel. **No duplica datos**: puedes ejecutarlo las veces que quieras.

### Paso 4 — Desplegar el panel de administración (gratis)

Desde la carpeta `studio/`:

```
npm run deploy
```

Te pedirá escoger un nombre para la URL de tu panel, por ejemplo: `roger-portafolio.sanity.studio`.
Guarda esa URL: es **tu panel de administración** donde editarás todo el contenido.

### Paso 5 — Conectar el portafolio a tus datos

Abre `js/config.js` y pega tu Project ID:

```js
const SANITY_CONFIG = {
  projectId: 'abc123d4',      // ← Tu Project ID de Sanity
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
}
```

> ⚠️ **Importante (CORS)**: para que el navegador pueda leer los datos de Sanity desde tu sitio, ve a **Manage → tu proyecto → API → CORS origins** y añade las URLs donde vivirá tu portafolio:
> - Para pruebas locales: añade el origin `http://localhost:3333` (o activa **`*` / wildcard** para permitir cualquier origen, suficiente mientras desees).
> - Cuando publiques en Vercel/Netlify: añade la URL real de tu sitio (ej: `https://tuporfolio.dev`).

¡Listo! Tu portafolio ahora carga todo su contenido desde Sanity. Cada cambio que hagas en el panel se refleja en la web (puede tardar unos segundos en actualizarse).

---

## 🎛️ El Panel de Administración (Sanity Studio)

Accede a tu panel con la URL que desplegaste en el Paso 4 (`tu-nombre.sanity.studio`).

Desde ahí puedes editar, **sin tocar código**:

| Sección | Qué puedes editar |
|---|---|
| **Perfil** | Nombre, título, bio, ubicación, teléfono, WhatsApp, correo |
| **Métricas** | Fila de resultados animados (+8 años, +150k$, ...) |
| **Servicios** | Las 6 especialidades con icono, descripción y etiquetas |
| **Metodología** | Los 4 pasos del método |
| **Categorías** | Los filtros de casos de éxito |
| **Casos de Éxito** | Título, métrica estrella, desafío, solución, resultados y tags |
| **Testimonios** | Frase, autor, cargo, empresa y estrellas |

---

## 🌐 ¿Cómo Abrir el Portafolio?

- **Localmente**: doble clic en `index.html`. Sin conexión usa los datos de `data.js`; con `projectId` configurado carga desde Sanity.
- **En Internet (gratis)**: despliega la carpeta en **Vercel** o **Netlify** (arrastra y suelta en [Netlify Drop](https://app.netlify.com/drop)) o súbela a **GitHub Pages**.

> El portafolio carga desde el CDN público de Sanity: solo lectura, sin necesidad de token desde el navegador.

---

## 🛠️ ¿Cómo Personalizar tus Datos?

Tienes dos maneras:

1. **Panel web (recomendada)**: edita todo desde `tu-nombre.sanity.studio`. Los cambios se publican al instante.
2. **Directa (fallback local)**: edita `js/data.js` si quieres que el contenido de respaldo sea diferente cuando no hay conexión a Sanity.

---

## ✨ Características Incluidas

- **CMS Dinámico**: todo el contenido se administra desde un panel web gratuito.
- **Modo Oscuro / Claro**: selector integrado con detección de preferencias del sistema y memoria local.
- **Contadores de Impacto**: números animados que se activan al hacer scroll.
- **Filtro de Casos de Estudio**: clasificación por Emprendimiento, Ventas B2B y Estrategia Comercial.
- **Modal de Detalle**: ventana emergente con el desglose de reto, solución y resultados de cada caso.
- **Integración Directa con WhatsApp**: el formulario de contacto y los CTAs abren una conversación de WhatsApp con mensajes preformateados.
- **Respaldo Local**: si Sanity no responde, el portafolio sigue funcionando con datos locales.