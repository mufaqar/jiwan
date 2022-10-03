export default {
    name: 'services_accounting',
    type: 'document',
    title: 'Services (Accounting)',
    fields: [
        {
          title: 'Type',
          name: 'type',
          type: 'string',
          options: {
              list: [
                  { title: 'I', value: 'I' },
                  { title: 'II', value: 'II' },
                  { title: 'III', value: 'III' },
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
        {
          title: "From",
          type: "string",
          name: 'from'
        },
    ]
}