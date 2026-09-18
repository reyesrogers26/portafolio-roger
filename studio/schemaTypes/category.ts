import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categoría de Proyectos',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Identificador',
      description: 'Identificador único (ej: todos, emprendimiento, ventas-b2b, estrategia).',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(/^[a-z0-9-_]+$/, 'Solo minúsculas, números, guiones. Sin espacios ni acentos.'),
    }),
    defineField({
      name: 'name',
      title: 'Nombre Visible',
      description: 'Texto que aparece en el filtro (ej: Emprendimiento & Negocios).',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'id',
      order: 'order',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${selection.subtitle} · Orden: ${selection.order ?? 0}`,
      }
    },
  },
})