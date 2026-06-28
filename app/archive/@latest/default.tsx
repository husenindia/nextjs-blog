import BlogList from "@/components/blog-list";
import { getLatestNews } from "@/lib/blog-helper"

export default function LatestBlogPage() {
    const latestBlog = getLatestNews();
    return (
        <>
            <section>
                <div className="mb-10 border-b border-gray-200 pb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9907A]">
                        New Stories
                    </p>
                    <h2 className="font-oswald text-5xl uppercase text-[#171710] lg:text-6xl">
                        Latest Blogs
                    </h2>
                </div>
                <BlogList blogList={latestBlog} />
            </section>
        </>
    )
}