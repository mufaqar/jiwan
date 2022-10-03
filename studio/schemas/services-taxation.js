export default {
    name: 'services_taxation',
    type: 'document',
    title: 'Services (Taxation)',
    fields: [
        {
          title: 'Type',
          name: 'type',
          type: 'string',
          options: {
              list: [
                  { title: 'PERSONAL', value: 'PERSONAL' },
                  { title: 'ADDITIONAL SERVICES', value: 'ADDITIONAL_SERVICES' },
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