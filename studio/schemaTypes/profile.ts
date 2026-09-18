import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Perfil Personal',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre Completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortName',
      title: 'Nombre Corto',
      type: 'string',
    }),
    defineField({
      name: 'initials',
      title: 'Iniciales (logo)',
      type: 'string',
      validation: (Rule) => Rule.required().max(4),
    }),
    defineField({
      name: 'headline',
      title: 'Título Principal (Hero)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Frase de Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bio',
      title: 'Biografía',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono (formato visible)',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp (solo números, con código de país)',
      description: 'Ej: 50588888888 (sin +, sin espacios, sin guiones)',
      type: 'string',
      validation: (Rule) => Rule.required().regex(/^\d+$/, 'Solo números, sin el signo +'),
    }),
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'linkedin',
      title: 'URL de LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'statusBadge',
      title: 'Estado / Disponibilidad',
      description: 'Texto del badge que aparece en el hero (ej: Disponible para nuevos retos).',
      type: 'string',
    }),
    defineField({
      name: 'cvDownloadUrl',
      title: 'URL de CV / Descarga',
      type: 'url',
    }),
  ],
})