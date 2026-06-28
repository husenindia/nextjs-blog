import { Blog } from "@/type/type";
import Image from "next/image";
import Link from "next/link";
type BlogListProps = {
    blogList : Blog[]
}
export default function BlogList({blogList}: BlogListProps) {
    return (
        <>
            <ul className="blog-list">
            {
                blogList.map((blogItem) => {

                const date = new Date(blogItem.date);
                const month = date.toLocaleString("en-US", { month: "short" });
                const day = String(date.getDate()).padStart(2, "0");
                const year = date.getFullYear();
                
                return (
                <li key={blogItem.id}>
                    <article className="border-b border-gray-300 py-10">
                        <Link href={`/blog/${blogItem.slug}`}>
                        
                        <div className="flex gap-10">
                            <div className="flex w-24 flex-col items-center text-[#1A1A1A]">
                            <span className="text-xl font-medium uppercase tracking-widest">
                                {month}
                            </span>
                            <span className="mt-1 text-7xl font-extralight leading-none">
                                {day}
                            </span>
                            <span className="text-xl font-light uppercase tracking-widest">
                                {year}
                            </span>
                            </div>

                            <div className="relative h-56 w-[380px] shrink-0 overflow-hidden">
                            <Image
                                src={`/blog-post-image/${blogItem.image}`}
                                alt="Blog"
                                fill
                                className="object-cover"
                            />
                            </div>

                            <div className="flex flex-1 flex-col justify-between">
                                <div>
                                    <h2 className="font-oswald text-4xl uppercase tracking-wide text-[#171710] transition hover:text-[#D9907A]">
                                        {blogItem.title}
                                    </h2>
                                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
                                    {blogItem.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </article>

                </li>
                )
            } 
            )}
            </ul>
        </>
    )
}