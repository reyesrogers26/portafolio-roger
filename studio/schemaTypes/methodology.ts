import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'methodology',
  title: 'Paso de Metodología',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Orden (posición en pantalla)',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'step',
      title: 'Número de Paso',
      description: 'Texto del paso (ej: 01, 02, 03, 04).',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      step: 'step',
    },
    prepare(selection) {
      return {
        title: `${selection.step ? selection.step + ' — ' : ''}${selection.title}`,
      }
    },
  },
})