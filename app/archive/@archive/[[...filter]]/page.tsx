import BlogList from "@/components/blog-list";
import NoBlogsFound from "@/components/no-blog-found";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYearAndMonth } from "@/lib/blog-helper"
import { getNewsForYear } from "@/lib/blog-helper";
import Link from "next/link";

type YearPageProps = {
    params: Promise<{
        filter?: string[];
    }>
}
export default async function YearPage({ params }: YearPageProps) {
    const { filter } = await params;

    const selectedYear = filter?.[0] as string | number;
    const selectedMonth = filter?.[1] as string | number;
    let timeDurationLinks = await getAvailableNewsYears();
    let selectedBlog;
    let blogContent;
    if (selectedYear && !selectedMonth) {
        selectedBlog = await getNewsForYear(selectedYear);
        timeDurationLinks = await getAvailableNewsMonths(selectedYear)
    }
    if (selectedYear && selectedMonth) {
        selectedBlog = await getNewsForYearAndMonth(selectedYear, selectedMonth);
        timeDurationLinks = [];
    }

    if (selectedBlog && selectedBlog?.length > 0) {
        blogContent = <BlogList blogList={selectedBlog} />
    } else {
        blogContent = <NoBlogsFound />
    }
    const availableNewsYears = await getAvailableNewsYears();
    
    if(selectedYear && !availableNewsYears.includes(selectedYear) || selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth)) {
        console.log(selectedMonth);
        throw new Error("Invalid Year or Month");
    }
    return (
        <>
            <section className="mb-24">

                <div className="mb-10 flex flex-col gap-6 border-b border-gray-200 pb-8 lg:flex-row lg:items-end lg:justify-between">

                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9907A]">
                            Explore
                        </p>

                        <h2 className="font-oswald text-5xl uppercase text-[#171710] lg:text-6xl">
                            Archive Blogs
                        </h2>
                    </div>

                    <nav>
                        <ul className="flex flex-wrap gap-3">
                            {timeDurationLinks.map((link) => {

                                let href;
                                href = selectedYear ? 
                                `/archive/${selectedYear}/${link}` : 
                                `/archive/${link}`;
                                return (
                                    
                                <li key={link}>
                                    {selectedMonth}
                                    <Link
                                        href={href}
                                        className={`inline-block border px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${Number(selectedYear) === link
                                                ? "border-[#D9907A] bg-[#D9907A] text-white"
                                                : "border-gray-300 text-[#171710] hover:border-[#D9907A] hover:bg-[#D9907A] hover:text-white"
                                            }`}
                                    >
                                        {link}
                                    </Link>
                                </li>
                                )}
                            )}
                        </ul>
                    </nav>

                </div>
                
                {blogContent}

            </section>


        </>
    )
}