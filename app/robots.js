
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://hotel-template-silk.vercel.app/sitemap.xml",
  };
}