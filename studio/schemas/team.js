export default {
    name: 'team',
    type: 'document',
    title: 'Team',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'position',
        type: 'string',
        title: 'Position'
      },
      {
        title: 'Profile Image',
        name: 'profile_image',
        type: 'image',
        options: {
          hotspot: true 
        },
      },
    ]
}