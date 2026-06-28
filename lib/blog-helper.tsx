import sql from 'better-sqlite3';
import { BLOG } from "@/data/blog-data";
import { Blog } from "@/type/type";

const db = sql("data.db");

export async function getAllNews(): Promise<Blog[]> {
  const blog = db.prepare("SELECT * FROM news").all();
  await new Promise(resolve => setTimeout(resolve, 2500));
  return blog as Blog[];
}

export async function getNewsItem(slug: string): Promise<Blog> {
  const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return newsItem as Blog;
}

export async function getLatestNews(): Promise<Blog[]>  {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return latestNews as Blog[];
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






// export async function getAvailableNewsYears() {
//   const years = db
//     .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
//     .all()
//     .map((year) => year.year);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return years;
// }

// export function getAvailableNewsMonths(year) {
//   return db
//     .prepare(
//       "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
//     )
//     .all(year)
//     .map((month) => month.month);
// }

// export async function getNewsForYear(year) {
//   const news = db
//     .prepare(
//       "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
//     )
//     .all(year);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return news;
// }

// export async function getNewsForYearAndMonth(year, month) {
//   const news = db
//     .prepare(
//       "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
//     )
//     .all(year, month);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return news;
// }