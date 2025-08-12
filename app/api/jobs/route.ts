import { connectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";
import { scrapeAllJobs } from "@/lib/scraper";
import Job from "@/models/Job";

type ApiResponse = {
  success: boolean;
  jobs?: any[];
  error?: string;
};

export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    // Connect to MongoDB first
    await connectToDatabase();

    // Scrape jobs
    const jobs = await scrapeAllJobs();
    console.log("Scraped jobs:", jobs);

    // Save each job with upsert to avoid duplicates
    for (const jobData of jobs) {
      await Job.updateOne(
        { title: jobData.title },  // Unique identifier, adjust if needed
        { $set: jobData },
        { upsert: true }
      );
    }

    // Return success with the jobs scraped and saved
    return NextResponse.json({ success: true, jobs });
  } catch (error: any) {
    console.error("Scraping or saving error:", error?.message || error);
    return NextResponse.json(
      { success: false, error: "Scraping or saving failed" },
      { status: 500 }
    );
  }
}
