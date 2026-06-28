import { BLOG } from "@/data/blog-data";
import { Blog } from "@/type/type";



export function getAllNews(): Blog[] {
  return BLOG;
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