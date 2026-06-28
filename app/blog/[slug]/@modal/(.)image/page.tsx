"use client";
import { BLOG } from "@/data/blog-data";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";

// type ImagePageProps = {
//     params: Promise<{
//         slug: string;
//     }>;
// }
export default function ImagePageInterceptor() { // { params }: ImagePageProps
    const params = useParams();
    const slug = params.slug as string;
    const router = useRouter();
    
    
    const blogItem = BLOG.find((blogItem) => blogItem.slug === slug);
    if (!blogItem) {
        notFound();
    }
    return <>

        <div
        onClick={router.back}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm">
            {/* Close Button */}
            <button                
                className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-[#D9907A]"
            >
                ×
            </button>

            {/* Image */}
            <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-lg shadow-2xl">
                <Image
                    src={`/blog-post-image/${blogItem.image}`}
                    alt={blogItem.title}
                    width={1200}
                    height={800}
                    className="max-h-[90vh] w-auto object-contain"
                />
            </div>
        </div>
    </>
}