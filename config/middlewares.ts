module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://panel.unienergia.pe',      // dominio del backend (Strapi)
        'https://www.unienergia.pe',        // dominio del frontend (React)
        'http://localhost:5173'             // para desarrollo local
      ],
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