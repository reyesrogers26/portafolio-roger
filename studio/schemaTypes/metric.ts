import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'metric',
  title: 'Métrica de Resultados',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Orden (posición en pantalla)',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'value',
      title: 'Valor Numérico',
      description: 'Ej: 8, 150, 45, 12',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prefix',
      title: 'Prefijo (antes del número)',
      description: 'Ej: +, $, €',
      type: 'string',
    }),
    defineField({
      name: 'suffix',
      title: 'Sufijo (después del número)',
      description: 'Ej: %, k$, +',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      value: 'value',
      suffix: 'suffix',
      prefix: 'prefix',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${selection.prefix || ''}${selection.value}${selection.suffix || ''}`,
      }
    },
  },
})