const headers = require('./headers');

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },

  reactStrictMode: true,
  swcMinify: true,
};
