import axios from "axios";
import * as cheerio from "cheerio";

export interface Job {
  title: string;
  company: string;
  location: string;
  link: string;
  logo?: string;
}

export async function scrapeAllJobs(): Promise<Job[]> {
  const jobs: Job[] = [];

  try {
    const response = await axios.get("https://www.jobssniper.com/");
    const $ = cheerio.load(response.data);

    $(".jobcard_home").each((_, el) => {
      const company = $(el)
        .find('[data-baseweb="typo-labelsmall"]')
        .text()
        .trim();

      const logoRaw = $(el).find("img").last().attr("src");
      const logo = logoRaw
        ? logoRaw.startsWith("http")
          ? logoRaw
          : `https://www.jobssniper.com${logoRaw}`
        : undefined;

      $(el)
        .find("ul li a")
        .each((_, jobAnchor) => {
          const title = $(jobAnchor).text().trim();
          const href = $(jobAnchor).attr("href");
          const link = href?.startsWith("http")
            ? href
            : `https://www.jobssniper.com${href}`;

          if (title && link) {
            jobs.push({
              title,
              company,
              location: "Nepal",
              link,
              logo,
            });
          }
        });
    });
  } catch (error: any) {
    console.error("❌ Failed to scrape JobSniper:", error?.message || error);
  }

  return jobs;
}
