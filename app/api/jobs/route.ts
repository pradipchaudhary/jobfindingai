import { scrapeAllJobs } from "@/lib/scraper";
import { NextResponse } from "next/server";

// Optionally define the response type
type ApiResponse = {
    success: boolean;
    jobs?: any[];
    error?: string;
};

export async function GET(): Promise<NextResponse<ApiResponse>> {
    try {
        const jobs = await scrapeAllJobs();
        console.log("Scraped jobs:", jobs);
        return NextResponse.json({ success: true, jobs });
    } catch (error: any) {
        console.error("Scraping error:", error?.message || error);
        return NextResponse.json(
            { success: false, error: "Scraping failed" },
            { status: 500 }
        );
    }
}
