/**
 * GENERADOR DE ARCHIVO .ndjson PARA `sanity dataset import`
 * Alternativa al script import.mjs.
 *
 * Uso:
 *   node seeds/generateSeed.mjs         → genera seeds/seed.ndjson
 *   npx sanity dataset import seeds/seed.ndjson production
 */

import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {seedData, flattenSeedData} from './data.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docs = flattenSeedData(seedData)

const output = docs.map((doc) => JSON.stringify(doc)).join('\n') + '\n'
const outPath = path.join(__dirname, 'seed.ndjson')

fs.writeFileSync(outPath, output, 'utf-8')
console.log(`Archivo generado: ${outPath}`)
console.log('Para importarlo ejecuta:\n  npx sanity dataset import seeds/seed.ndjson production')