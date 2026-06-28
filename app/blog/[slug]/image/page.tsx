import { BLOG } from "@/data/blog-data";
import Image from "next/image";
import { notFound } from "next/navigation";

type ImagePageProps = {
    params: Promise<{
        slug: string;
    }>;
}
export default async function ImagePage({params}: ImagePageProps) {
    const {slug } = await params;
    const blogItem = BLOG.find((blogItem)=> blogItem.slug === slug);
    if(!blogItem) {
        notFound();
    }
    return <div className="fullscreen-image">
        <Image 
        src={`/blog-post-image/${blogItem.image}`} 
        alt={blogItem.title}
        width={500}
        height={600}
        className="w-full object-cover"/>
    </div>
}