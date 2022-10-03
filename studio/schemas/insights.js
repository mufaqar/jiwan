export default {
    name: 'insights',
    type: 'document',
      title: 'Insights',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'sub_title',
        type: 'string',
        title: 'Sub Title'
      },
      {
        name: 'excerpt',
        type: 'text',
        title: 'Excerpt'
      },
      {
        title: 'Feature Image',
        name: 'feature_image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
              isHighlighted: true // <-- make this field easily accessible
            }
          },
        ]
      },
      {
        name: 'date',
        type: 'string',
        title: 'Date'
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                options: {
                  isHighlighted: true
                }
              }
            ]
          }
        ]
      },
      {
        title: 'Related Project',
        name: 'related_project',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              { type: 'insights' } // replace with your own schema file
            ]
          }
        ]
      },
      

    ]
  }