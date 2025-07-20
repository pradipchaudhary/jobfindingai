import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeAllJobs() {
  const allJobs: any[] = [];

  // --- JobSniper ---
  try {
    const sniperRes = await axios.get("https://www.jobssniper.com/");
    const $ = cheerio.load(sniperRes.data);

    console.log("Data:", $)

    $(".job-title").each((_, el) => {
      const title = $(el).text().trim();
      const href = $(el).find("a").attr("href");

      if (title && href) {
        const link = "https://www.jobssniper.com" + href;
        allJobs.push({
          title,
          company: "JobsSniper",
          location: "Nepal",
          link,
        });
      }
    });
  } catch (err: any) {
    console.error("JobSniper scraping error:", err?.message || err);
  }

  return allJobs;
}
