import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/visitors"],
      },
      {
        userAgent: [
          "HTTrack",
          "WinHTTrack",
          "Teleport",
          "TeleportPro",
          "WebCopy",
          "Offline Explorer",
          "Scrapy",
          "wget",
          "curl",
          "Go-http-client",
          "python-requests",
        ],
        disallow: ["/"],
      },
    ],
    sitemap: "https://alrahmaniahauto.ae/sitemap.xml",
  };
}
