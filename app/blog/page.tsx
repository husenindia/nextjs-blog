import BlogList from "@/components/blog-list";
import { getAllNews } from "@/lib/blog-helper";

export default async function BlogPage() {
    const blog = await getAllNews();
    return (
        <>
            <h1> </h1>
            <section className="mx-auto flex max-w-7xl items-center justify-between border-b border-gray-200 py-10">
                {/* Left */}
                <div className="flex items-end">
                    <h1 className="{`${oswald.className} text-8xl font-black uppercase tracking-tight text-[#171710]`} ">
                        A Music 
                    </h1>

                    <h1 className="ml-4 text-[90px] leading-none font-extralight uppercase tracking-tight text-[#171710]">
                        Blog
                    </h1>
                </div>

                {/* Right */}
                <p className="max-w-xl text-right text-[18px] font-medium uppercase tracking-wide text-[#303030]">
                    This is a good thing that will happen
                </p>
            </section>
           
            <BlogList blogList={blog}></BlogList>
            
        </>
    );
}