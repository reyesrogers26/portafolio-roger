import {defineType, defineField} from 'sanity'

const LUCIDE_ICONS = [
  {title: 'Tendencia (trending-up)', value: 'trending-up'},
  {title: 'Cohete (rocket)', value: 'rocket'},
  {title: 'Diana (target)', value: 'target'},
  {title: 'Usuarios (users)', value: 'users'},
  {title: 'Brújula (compass)', value: 'compass'},
  {title: 'Trofeo (award)', value: 'award'},
  {title: 'Relámpago (zap)', value: 'zap'},
  {title: 'Candado (lock)', value: 'lock'},
  {title: 'Ojo (eye)', value: 'eye'},
  {title: 'Lupa (search)', value: 'search'},
  {title: 'Gráfico de barras (bar-chart)', value: 'bar-chart'},
  {title: 'Flash (flash)', value: 'flash'},
  {title: 'Estrella (star)', value: 'star'},
  {title: 'Corazón (heart)', value: 'heart'},
  {title: 'Agenda (calendar)', value: 'calendar'},
  {title: 'Caja (package)', value: 'package'},
  {title: 'Chequeo (check-circle)', value: 'check-circle'},
  {title: 'Herramienta (settings)', value: 'settings'},
  {title: 'Teléfono (phone)', value: 'phone'},
  {title: 'Correo (mail)', value: 'mail'},
]

export default defineType({
  name: 'service',
  title: 'Servicio / Especialidad',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Orden (posición en pantalla)',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'icon',
      title: 'Icono',
      description: 'Ícono de Lucide que acompaña al servicio.',
      type: 'string',
      options: {list: LUCIDE_ICONS},
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
    defineField({
      name: 'highlights',
      title: 'Destacados',
      description: 'Etiquetas cortas que resumen los beneficios (ej: Ventas B2B).',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon',
      order: 'order',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `Orden: ${selection.order ?? 0} · Icono: ${selection.icon ?? ''}`,
      }
    },
  },
})