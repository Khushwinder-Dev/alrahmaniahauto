import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Known scraper, ripper, and offline browser user-agent signatures
const BLOCKED_USER_AGENTS = [
  "httrack",
  "winhttrack",
  "teleport",
  "webcopy",
  "offline explorer",
  "cyotek",
  "wget",
  "curl",
  "scrapy",
  "python-requests",
  "python-urllib",
  "aiohttp",
  "go-http-client",
  "java/",
  "libwww-perl",
  "mechanize",
  "website rip",
  "ripper",
  "sitegrabber",
  "pagegrabber",
  "extractor",
  "siteextractor",
  "nikto",
  "sqlmap",
  "wprecon",
  "fiddler",
  "harvest",
  "masscan",
  "zgrab",
];

// Simple in-memory sliding window rate limiter for rapid automated scrapers
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 120; // 120 requests/minute per IP (well above normal browsing)

function cleanExpiredIps() {
  if (ipRequestCounts.size > 500) {
    const now = Date.now();
    for (const [ip, data] of ipRequestCounts.entries()) {
      if (now > data.resetTime) {
        ipRequestCounts.delete(ip);
      }
    }
  }
}

export function middleware(request: NextRequest) {
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  const pathname = request.nextUrl.pathname;

  // 1. Immediately Block WinHTTrack & known offline rippers/scrapers
  const isBlockedAgent = BLOCKED_USER_AGENTS.some((agent) =>
    userAgent.includes(agent)
  );

  if (isBlockedAgent) {
    return new NextResponse(
      JSON.stringify({
        error: "Access Denied: Automated site scraping and downloading tools are strictly forbidden.",
        status: 403,
      }),
      {
        status: 403,
        headers: {
          "Content-Type": "application/json",
          "X-Robots-Tag": "noindex, nofollow, noarchive",
        },
      }
    );
  }

  // 2. Reject empty user agents (often used by custom rip scripts) on non-static routes
  if (!userAgent && !pathname.startsWith("/_next") && !pathname.includes(".")) {
    return new NextResponse(
      JSON.stringify({ error: "Access Denied: Missing User-Agent header.", status: 403 }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }

  // 3. Rate limiting check (protects against rapid page-by-page crawler tools)
  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1";

  // Skip rate limiting for static Next.js assets
  if (!pathname.startsWith("/_next/static") && !pathname.startsWith("/images/")) {
    cleanExpiredIps();
    const now = Date.now();
    const clientData = ipRequestCounts.get(clientIp);

    if (!clientData || now > clientData.resetTime) {
      ipRequestCounts.set(clientIp, {
        count: 1,
        resetTime: now + RATE_LIMIT_WINDOW_MS,
      });
    } else {
      clientData.count += 1;
      if (clientData.count > MAX_REQUESTS_PER_WINDOW) {
        return new NextResponse(
          JSON.stringify({
            error: "Too Many Requests: Automated crawler rate limit exceeded.",
            status: 429,
          }),
          {
            status: 429,
            headers: {
              "Content-Type": "application/json",
              "Retry-After": "60",
            },
          }
        );
      }
    }
  }

  // 4. Continue with added anti-rip security headers
  const response = NextResponse.next();

  // Prevent framing/clickjacking & iframe embedding
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  // Prevent content sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");
  // Anti-archive headers
  response.headers.set("X-Robots-Tag", "noarchive");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes that might be webhooks
     * - favicon, robots.txt, sitemap
     */
    "/((?!api/track|_next/image|favicon.ico).*)",
  ],
};
