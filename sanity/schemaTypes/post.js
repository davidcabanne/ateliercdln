import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'checkbox',
        list: [
          {title: 'COMMUNICATION 360', value: 'COMMUNICATION 360'},
          {title: 'DESIGN PRODUIT', value: 'DESIGN PRODUIT'},
          {title: 'IDENTITÉ VISUELLE', value: 'IDENTITÉ VISUELLE'},
          {title: 'LOGO DESIGN', value: 'LOGO DESIGN'},
          {title: 'SIGNALÉTIQUE', value: 'SIGNALÉTIQUE'},
          {title: 'WEB DESIGN', value: 'WEB DESIGN'},
        ],
      },
      validation: (Rule) => Rule.required().max(3).unique(),
    }),
    defineField({
      name: 'postDescription',
      title: 'Post Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              description: 'Describe the image for accessibility and SEO.',
              validation: (Rule) => Rule.required().error('Alt text is required'),
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: (Rule) =>
        Rule.min(8).max(8).error('You must upload exactly 8 images in the gallery.'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'gallery.0.asset',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
