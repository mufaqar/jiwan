export default {
    name: 'services_assurance',
    type: 'document',
    title: 'Services (Assurance)',
    fields: [
        {
          title: 'Type',
          name: 'type',
          type: 'string',
          options: {
              list: [
                  { title: 'AUDIT', value: 'AUDIT' },
              ], // <-- predefined values
              layout: 'radio'
          }
        },
        {
          title: "Name",
          type: "string",
          name: 'name'
        },
        {
          title: "Price",
          type: "string",
          name: 'price'
        },
        
    ]
}