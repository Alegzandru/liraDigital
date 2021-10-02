module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'src/components'],
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'localhost',
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['ro', 'ru', 'en'],
  },
}
