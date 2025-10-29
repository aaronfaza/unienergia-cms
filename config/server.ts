module.exports = ({ env }) => ({
  host: '0.0.0.0',  // Permite conexiones externas
  port: env.int('PORT', 1337),
  url: 'https://panel.unienergia.pe', // Tu dominio
  proxy: true,
});

