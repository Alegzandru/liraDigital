/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.lira.md", // ← no trailing slash
  generateRobotsTxt: true, // creates /robots.txt
  sitemapSize: 7000, // split sitemaps if needed
  exclude: ["/api/*"], // don’t include API routes

  // Optional: multilingual support
  alternateRefs: [
    { href: "https://www.lira.md", hreflang: "ro" },
    { href: "https://www.lira.md/en", hreflang: "en" },
  ],

  // Add your dynamic pages (projects)
  additionalPaths: async () => {
    // Fetch your project slugs
    const res = await fetch(
      "https://lira-digital-admin-c79dc1fbfc46.herokuapp.com/projects"
    );
    const projects = await res.json();

    return projects.flatMap((p) => [
      {
        loc: `/project/${p.slug}`, // Romanian version
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: `/en/project/${p.slug}`, // English version
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.8,
      },
    ]);
  },

  // Optional: custom robots.txt rules
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "BadBot", disallow: "/" },
    ],
    additionalSitemaps: ["https://www.lira.md/sitemap.xml"],
  },
};
