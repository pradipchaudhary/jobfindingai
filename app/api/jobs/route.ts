import { scrapeAllJobs } from "@/lib/scraper";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const jobs = await scrapeAllJobs();
         return NextResponse.json({ success: true, jobs });
    } catch (error) {
         return NextResponse.json({ success: false, error: "Scraping failed" }, { status: 500 });
    }
}