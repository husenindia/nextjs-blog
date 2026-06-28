import ModalBackDrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/blog-helper";
import Image from "next/image";
import { notFound } from "next/navigation";

type ImagePageInterceptorProps = {
  params: Promise<{
    slug: string;
  }>;
}
export default async function ImagePageInterceptor({params}: ImagePageInterceptorProps) { 
    const { slug } = await params;
    const blogItem = await getNewsItem(slug);
    if (!blogItem) {
        notFound();
    }
    return <>
        <ModalBackDrop>
            <Image
                src={`/blog-post-image/${blogItem.image}`}
                alt={blogItem.title}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
            />
        </ModalBackDrop>
            
    </>
}