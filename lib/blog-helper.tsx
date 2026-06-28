import sql from 'better-sqlite3';
import { BLOG } from "@/data/blog-data";
import { Blog } from "@/type/type";

const db = sql("data.db");

export async function getAllNews(): Promise<Blog[]> {
  const blog = db.prepare("SELECT * FROM news").all();
  await new Promise(resolve => setTimeout(resolve, 2000));
  return blog as Blog[];
}

export function getLatestNews(): Blog[] {
  return BLOG.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {

  return BLOG.reduce<number[]>((years, news) => {
    const year = new Date(news.date).getFullYear();

    if (!years.includes(year)) {
      years.push(year);
    }

    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number | string): number[] {
  return BLOG.reduce<number[]>((months, news) => {
    const newsYear = new Date(news.date).getFullYear();

    if (newsYear === Number(year)) {
      const month = new Date(news.date).getMonth() + 1;

      if (!months.includes(month)) {
        months.push(month);
      }
    }

    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: number | string): Blog[] {
  return BLOG.filter(
   
    (news) => new Date(news.date).getFullYear() === Number(year)
  );
}

export function getNewsForYearAndMonth(
  year: number | string,
  month: number | string
): Blog[] {
  return BLOG.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;

    return (
      newsYear === Number(year) &&
      newsMonth === Number(month)
    );
  });
}