/**
 * SCRIPT DE IMPORTACIÓN DE DATOS A SANITY
 * Importa todos los datos semilla del portafolio al dataset de Sanity.
 *
 * Uso: desde la carpeta /studio
 *   1. Crea el archivo .env a partir de .env.example y completa los valores
 *   2. Ejecuta: npm run seed
 *
 * El script es idempotente: si se ejecuta dos veces no duplica el contenido
 * (usa createIfNotExists).
 */

import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {createClient} from '@sanity/client'
import {seedData, flattenSeedData} from './data.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env')
  if (!fs.existsSync(envPath)) {
    console.error(
      '\n[ERROR] No existe el archivo .env en la carpeta /studio.\n' +
        'Ejecuta:  copy .env.example .env\n' +
        'y completa SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET y SANITY_API_TOKEN.\n',
    )
    process.exit(1)
  }

  const env = {}
  const content = fs.readFileSync(envPath, 'utf-8')
  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq > 0) {
      env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim()
    }
  }
  return env
}

const env = loadEnv()

const projectId = env.SANITY_STUDIO_PROJECT_ID
const dataset = env.SANITY_STUDIO_DATASET || 'production'
const token = env.SANITY_API_TOKEN

if (!projectId || projectId === 'TU_PROJECT_ID') {
  console.error('[ERROR] Falta el project id en el archivo .env')
  process.exit(1)
}
if (!token || token === 'TU_TOKEN_DE_API') {
  console.error('[ERROR] Falta el token de API en el archivo .env')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const docs = flattenSeedData(seedData)

console.log(`\nImportando ${docs.length} documentos al dataset "${dataset}"...`)

let ok = 0
let fail = 0

for (const doc of docs) {
  try {
    await client.createIfNotExists(doc)
    console.log(`  ✓ ${doc._type} — ${doc._id}`)
    ok++
  } catch (err) {
    console.error(`  ✗ Error en ${doc._id}: ${err.message}`)
    fail++
  }
}

console.log('\n=== Resultado de la importación ===')
console.log(`${ok} documentos importados correctamente.`)
if (fail > 0) {
  console.log(`${fail} documentos con errores. Revisa los mensajes anteriores.`)
  process.exit(1)
} else {
  console.log('Tus datos están listos en Sanity. Abre el estudio con: npm run dev')
}