"use client";

import BlogList from "@/components/blog-list";
import { useEffect, useState } from "react";

export default function BlogPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            const response = await fetch("http://localhost:8080/news");
            if(!response.ok) {
                setError("Failed to load");
                setIsLoading(false);
            }
            const blogData = await response.json();
            setData(blogData);
            setIsLoading(false);
        }
        fetchNews();
    }, []);

    if(isLoading) {
        return <p>Loading</p>;
    }
    if(error) {
        return <p>{error}</p>
    }
    let blogContent;
    if(data) {
        blogContent = <BlogList blogList={data}></BlogList>;
    }
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
           
            {blogContent}
            
        </>
    );
}