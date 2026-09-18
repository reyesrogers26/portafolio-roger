import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Orden (posición en pantalla)',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'quote',
      title: 'Testimonio / Frase',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rol / Cargo',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Empresa / Sector',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Calificación',
      description: 'Número de estrellas (1 a 5).',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'role',
      rating: 'rating',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${selection.subtitle ?? ''} · ${selection.rating ? '★'.repeat(selection.rating) : ''}`,
      }
    },
  },
})