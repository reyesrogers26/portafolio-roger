import {defineType, defineField} from 'sanity'

const CATEGORY_OPTIONS = [
  {title: 'Emprendimiento & Negocios', value: 'emprendimiento'},
  {title: 'Ventas B2B & Corporativas', value: 'ventas-b2b'},
  {title: 'Estrategia Comercial & Funnels', value: 'estrategia'},
]

export default defineType({
  name: 'project',
  title: 'Caso de Éxito / Proyecto',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Orden (posición en pantalla)',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {list: CATEGORY_OPTIONS},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
    }),
    defineField({
      name: 'metric',
      title: 'Métrica Estrella',
      description: 'El número/porcentaje destacado (ej: +250% ROI).',
      type: 'string',
    }),
    defineField({
      name: 'metricLabel',
      title: 'Etiqueta de la Métrica',
      description: 'Ej: En los primeros 6 meses.',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Resumen',
      description: 'Resumen de una o dos frases para la tarjeta.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'challenge',
      title: 'El Desafío Comercial',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Estrategia y Solución Implementada',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'results',
      title: 'Resultados Clave Logrados',
      description: 'Cada línea es un resultado.',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'tags',
      title: 'Etiquetas (tags)',
      description: 'Etiquetas cortas (ej: B2B, CRM).',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      metric: 'metric',
      order: 'order',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${selection.subtitle ?? ''} · ${selection.metric ? selection.metric + ' · ' : ''}Orden: ${selection.order ?? 0}`,
      }
    },
  },
})