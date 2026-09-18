/**
 * CONFIGURACIÓN DE SANITY CMS
 *
 * Obtén estos valores desde https://www.sanity.io/manage
 * 1. Crea una cuenta gratuita
 * 2. Crea un proyecto (ej: "portafolio-roger")
 * 3. Copia el Project ID
 * 4. El dataset por defecto es "production"
 *
 * Si dejas projectId vacío (''), el portafolio usará los datos locales
 * de data.js como fallback (funciona sin conexión ni servidor).
 */

const SANITY_CONFIG = {
  projectId: 's0278vrb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
}