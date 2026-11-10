import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { COOKIE_NAME, verifySessionToken } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  try {
    // 1. Session verification
    const token = req.cookies.get(COOKIE_NAME)?.value;
    if (!verifySessionToken(token)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Please authenticate first." },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const siteFilter = searchParams.get("site")?.trim().toLowerCase() || "all";
    const gpsOnly = searchParams.get("gpsOnly") === "true";
    const search = searchParams.get("search")?.trim().toLowerCase() || "";
    const sortBy = searchParams.get("sortBy") || "last_visited_at";
    const sortOrder = searchParams.get("sortOrder") === "asc" ? "asc" : "desc";
    const limit = Math.min(parseInt(searchParams.get("limit") || "1000", 10), 2000);

    // 2. Fetch records based on site selection
    let alrahmaniahList: any[] = [];
    let babalList: any[] = [];
    let tajList: any[] = [];

    // Al Rahmaniah Auto records
    if (siteFilter === "all" || siteFilter === "alrahmaniah") {
      try {
        alrahmaniahList = await prisma.alRahmaniahVisitorLog.findMany({
          orderBy: {
            [sortBy === "visit_count" ? "visit_count" : "last_visited_at"]: sortOrder,
          },
          take: limit,
        });
      } catch (e) {
        console.error("Error loading Al Rahmaniah logs:", e);
      }
    }

    // Bab Al Bustan records
    if (siteFilter === "all" || siteFilter === "babalbustan") {
      try {
        babalList = await prisma.visitorLog.findMany({
          orderBy: {
            [sortBy === "visit_count" ? "visit_count" : "last_visited_at"]: sortOrder,
          },
          take: limit,
        });
      } catch (e) {
        console.error("Error loading Bab Al Bustan logs:", e);
      }
    }

    // Taj Al Rahmah records
    if (siteFilter === "all" || siteFilter === "tajalrahmah") {
      try {
        tajList = await prisma.tajVisitorLog.findMany({
          orderBy: {
            [sortBy === "visit_count" ? "visit_count" : "last_visited_at"]: sortOrder,
          },
          take: limit,
        });
      } catch (e) {
        console.error("Error loading Taj Al Rahmah logs:", e);
      }
    }

    // Helper to sanitize location to English
    const sanitizeEnglishLocation = (loc: string | null, city: string | null, country: string | null) => {
      if (!loc) return null;
      if (/[\u0600-\u06FF]/.test(loc)) {
        const cleanCity = city && !/[\u0600-\u06FF]/.test(city) ? city : "Sharjah";
        const cleanCountry = country && !/[\u0600-\u06FF]/.test(country) ? country : "United Arab Emirates";
        return `${cleanCity}, ${cleanCountry}`;
      }
      return loc;
    };

    const normalizedAlrahmaniah = alrahmaniahList.map((item) => ({
      ...item,
      exact_location: sanitizeEnglishLocation(item.exact_location, item.city, item.country),
      site: "alrahmaniah",
      site_name: "Al Rahmaniah Auto",
      site_badge_color: "red",
    }));

    const normalizedBabal = babalList.map((item) => ({
      ...item,
      exact_location: sanitizeEnglishLocation(item.exact_location, item.city, item.country),
      site: "babalbustan",
      site_name: "Bab Al Bustan",
      site_badge_color: "amber",
    }));

    const normalizedTaj = tajList.map((item) => ({
      ...item,
      exact_location: sanitizeEnglishLocation(item.exact_location, item.city, item.country),
      site: "tajalrahmah",
      site_name: "Taj Al Rahmah",
      site_badge_color: "emerald",
    }));

    // Merge lists
    let allVisitors = [...normalizedAlrahmaniah, ...normalizedBabal, ...normalizedTaj];

    // Sort combined list if "all" was requested
    allVisitors.sort((a, b) => {
      if (sortBy === "visit_count") {
        return sortOrder === "asc"
          ? a.visit_count - b.visit_count
          : b.visit_count - a.visit_count;
      } else {
        const timeA = new Date(a.last_visited_at).getTime();
        const timeB = new Date(b.last_visited_at).getTime();
        return sortOrder === "asc" ? timeA - timeB : timeB - timeA;
      }
    });

    // 3. Compute Summary Statistics
    const alrahmaniahCount = normalizedAlrahmaniah.length;
    const babalCount = normalizedBabal.length;
    const tajCount = normalizedTaj.length;
    const gpsCount = allVisitors.filter((v) => v.latitude != null && v.longitude != null).length;

    let totalVisits = 0;
    const countryMap = new Map<string, number>();
    const pathMap = new Map<string, number>();

    for (const v of allVisitors) {
      totalVisits += v.visit_count || 1;
      const c = v.country || "Unknown";
      countryMap.set(c, (countryMap.get(c) || 0) + (v.visit_count || 1));
      const p = v.path_visited || "/";
      pathMap.set(p, (pathMap.get(p) || 0) + (v.visit_count || 1));
    }

    const topCountries = Array.from(countryMap.entries())
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    const topPaths = Array.from(pathMap.entries())
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // 4. Client-side filtering if search query or GPS only requested
    let filteredVisitors = allVisitors;

    if (gpsOnly) {
      filteredVisitors = filteredVisitors.filter((v) => v.latitude != null && v.longitude != null);
    }

    if (search) {
      filteredVisitors = filteredVisitors.filter((v) => {
        const ip = v.ip_address?.toLowerCase() || "";
        const country = v.country?.toLowerCase() || "";
        const city = v.city?.toLowerCase() || "";
        const path = v.path_visited?.toLowerCase() || "";
        const os = v.os?.toLowerCase() || "";
        const browser = v.browser?.toLowerCase() || "";
        const exactLoc = v.exact_location?.toLowerCase() || "";
        const site = v.site_name?.toLowerCase() || "";

        return (
          ip.includes(search) ||
          country.includes(search) ||
          city.includes(search) ||
          path.includes(search) ||
          os.includes(search) ||
          browser.includes(search) ||
          exactLoc.includes(search) ||
          site.includes(search)
        );
      });
    }

    return NextResponse.json({
      success: true,
      visitors: filteredVisitors,
      stats: {
        totalVisits,
        uniqueVisitors: allVisitors.length,
        alrahmaniahCount,
        babalCount,
        tajCount,
        gpsCount,
        topCountries,
        topPaths,
      },
    });
  } catch (error: any) {
    console.error("Admin visitors error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to load visitors" },
      { status: 500 }
    );
  }
}

