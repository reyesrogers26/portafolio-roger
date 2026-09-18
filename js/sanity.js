/**
 * CLIENTE DE SANITY CMS PARA EL PORTAFOLIO
 * Carga todos los datos desde Sanity vía API CDN (GROQ query).
 * Si Sanity no está configurado o no responde, usa los datos locales
 * de data.js como respaldo para que el portafolio nunca falle.
 */

const GROQ_QUERY = `{
  "profile": *[_type == "profile"][0],
  "metrics": *[_type == "metric"] | order(order asc),
  "services": *[_type == "service"] | order(order asc),
  "methodology": *[_type == "methodology"] | order(order asc),
  "categories": *[_type == "category"] | order(order asc),
  "projects": *[_type == "project"] | order(order asc),
  "testimonials": *[_type == "testimonial"] | order(order asc)
}`

/**
 * Carga los datos del portafolio (desde Sanity o desde el fallback local).
 * @returns {Promise<object>} Estructura equivalente a la de data.js
 */
async function loadPortfolioData() {
  const hasSanity = SANITY_CONFIG && SANITY_CONFIG.projectId;

  if (!hasSanity) {
    return getLocalFallback();
  }

  try {
    const response = await fetch(buildQueryUrl(), { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Sanity API respondió con estado ${response.status}`);
    }

    const json = await response.json();
    const raw = json.result;

    if (!raw || !raw.profile) {
      throw new Error('No se encontró contenido en el dataset de Sanity');
    }

    return {
      profile: raw.profile,
      metrics: raw.metrics.map(normalizeDocument),
      services: raw.services.map(normalizeDocument),
      methodology: raw.methodology.map(normalizeDocument),
      categories: raw.categories.map(normalizeCategory),
      projects: raw.projects.map((p) => ({ id: p._id, ...p })),
      testimonials: raw.testimonials.map(normalizeDocument),
    };

  } catch (err) {
    console.warn('[Sanity] No se pudo cargar desde Sanity, usando datos locales.', err);
    return getLocalFallback();
  }
}

function buildQueryUrl() {
  const { projectId, dataset, apiVersion } = SANITY_CONFIG;
  const base = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`;
  return `${base}?query=${encodeURIComponent(GROQ_QUERY)}`;
}

function normalizeDocument(doc) {
  const { _id, _rev, _type, _createdAt, _updatedAt, ...rest } = doc;
  return { id: _id, ...rest };
}

function normalizeCategory(cat) {
  const { _id, _rev, _type, _createdAt, _updatedAt, ...rest } = cat;
  return { id: rest.id || _id, ...rest };
}

function getLocalFallback() {
  if (typeof portfolioData !== 'undefined') {
    return portfolioData;
  }
  throw new Error('No hay datos disponibles: ni Sanity ni data.js definidos');
}