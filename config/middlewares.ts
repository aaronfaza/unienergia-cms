module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://www.unienergia.pe',
        'https://panel.unienergia.pe',
        'http://localhost:5173'
      ],
      headers: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
