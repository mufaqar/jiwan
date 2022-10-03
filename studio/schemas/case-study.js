export default {
    name: 'casestudy',
    type: 'document',
      title: 'Case Study',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'short_info',
        type: 'text',
        title: 'Short Info'
      },
      {
        name: 'profit',
        title: 'Profit',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              { type: 'profit' } 
            ]
          }
        ]
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
    ]
}