import { BLOG } from "@/data/blog-data";
import { getNewsItem } from "@/lib/blog-helper";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogProps = {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogDetailPage({params}: BlogProps) {
    const { slug } = await params;
    const blogItem = await getNewsItem(slug);
    if(!blogItem) {
        notFound();
    }
    return (
        <>
          <main className="bg-white">
            {/* Hero Image */}
            <section className="relative h-[550px] w-full">
                <Link href={`/blog/${blogItem.slug}/image`}>
                  <Image
                    src={`/blog-post-image/${blogItem?.image}`}
                    alt="Blog Hero"
                    fill
                    priority
                    className="object-cover"
                  />
                </Link>
            </section>

            {/* Article */}
            <article className="mx-auto max-w-4xl px-6 py-16">
              {/* Breadcrumb */}
              <div className="mb-8 text-xs uppercase tracking-[0.25em] text-gray-500">
                <Link href="/">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/blog">Blog</Link>
                <span className="mx-2">/</span>
                <span>Rock</span>
              </div>
              {/* Category */}
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D9907A]">
                Featured
              </p>

              {/* Title */}
              <h1 className="font-oswald text-6xl uppercase leading-none tracking-wide text-[#171710] lg:text-8xl">
                {blogItem?.title}
              </h1>

              {/* Meta */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm uppercase tracking-wider text-gray-500">
                <span>{blogItem?.date}</span>
                <span>Music</span>
                <span>8 min read</span>
              </div>

              {/* Intro */}
              <div className="mt-14 space-y-8 text-lg leading-9 text-gray-700">
                <p className="first-letter:float-left first-letter:mr-4 first-letter:text-8xl first-letter:font-bold first-letter:leading-none first-letter:text-[#171710]">
                  {blogItem?.content}
                </p>

                <p>
                  Rock music has evolved dramatically over the decades, blending
                  influences from blues, jazz, folk, electronic music, and modern pop.
                  Today, artists continue pushing creative boundaries while honoring
                  the legends who defined the genre.
                </p>

              </div>

              {/* Image */}
              <div className="my-16">
                <Image
                  src={`/blog-post-image/${blogItem?.image}`}
                  alt="Band"
                  width={1200}
                  height={700}
                  className="w-full object-cover"
                />
              </div>

              {/* Heading */}
              <h2 className="mb-6 font-oswald text-5xl uppercase text-[#171710]">
                A New Era of Sound
              </h2>

              <div className="space-y-8 text-lg leading-9 text-gray-700">

                <p>
                  Streaming platforms have transformed how listeners discover music.
                  Independent artists can now reach global audiences without relying
                  on traditional record labels.
                </p>

                <p>
                  Live performances remain the heart of the music industry. Festivals,
                  intimate concerts, and acoustic sessions continue creating
                  unforgettable experiences that digital platforms cannot replace.
                </p>

              </div>

              {/* Quote */}

              <blockquote className="my-16 border-l-4 border-[#D9907A] pl-8 text-3xl italic font-light leading-relaxed text-[#171710]">
                "Music can change the world because it can change people."
              </blockquote>

              {/* Another Image */}

              <div className="my-16">
                <Image
                  src={`/blog-post-image/${blogItem?.image}`}
                  alt="Concert"
                  width={600}
                  height={300}
                  className="object-cover mx-auto"
                />
              </div>

              {/* Heading */}

              <h2 className="mb-6 font-oswald text-5xl uppercase text-[#171710]">
                Looking Ahead
              </h2>

              <div className="space-y-8 text-lg leading-9 text-gray-700">

                <p>
                  Artificial intelligence, immersive concerts, and virtual reality are
                  already beginning to redefine the future of music. Yet, despite
                  technological advances, storytelling and emotion remain at the core
                  of every memorable song.
                </p>

                <p>
                  As genres continue blending together, audiences can expect an even
                  richer musical landscape where creativity knows no boundaries.
                </p>

              </div>


              {/* Author */}

              <div className="mt-20 border-t border-b border-gray-200 py-10">

                <div className="flex items-center gap-6">

                  <Image
                    src="/ht.png"
                    alt="Author"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />

                  <div>

                    <h3 className="font-oswald text-3xl uppercase">
                      Husen Telwala
                    </h3>

                    <p className="mt-2 text-gray-600">
                      Music journalist passionate about rock, indie, live concerts and
                      artist stories from around the globe.
                    </p>

                  </div>

                </div>

              </div>

              {/* Previous / Next */}

              <div className="mt-16 grid gap-10 md:grid-cols-2">

                <Link
                  href="#"
                  className="border p-8 transition hover:border-[#D9907A]"
                >
                  <p className="mb-2 text-sm uppercase tracking-widest text-gray-500">
                    Previous Article
                  </p>

                  <h4 className="font-oswald text-3xl uppercase">
                    Top 10 Albums of 2026
                  </h4>
                </Link>

                <Link
                  href="#"
                  className="border p-8 text-right transition hover:border-[#D9907A]"
                >
                  <p className="mb-2 text-sm uppercase tracking-widest text-gray-500">
                    Next Article
                  </p>

                  <h4 className="font-oswald text-3xl uppercase">
                    Summer Music Festival Guide
                  </h4>
                </Link>

              </div>

            </article>

            {/* Related Posts */}

            <section className="bg-[#DEE2E0] py-20">

              <div className="mx-auto max-w-7xl px-6">

                <h2 className="mb-12 font-oswald text-6xl uppercase">
                  Related Articles
                </h2>

                <div className="grid gap-10 md:grid-cols-3">
                  {
                      BLOG.map((blogItem) => (
                      <article
                      key={blogItem.id}
                      className="bg-white"
                    >
                      <Image
                        src={`/blog-post-image/${blogItem.image}`}
                        alt=""
                        width={500}
                        height={350}
                        className="h-64 w-full object-cover"
                      />

                      <div className="p-6">
                        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D9907A]">
                          Music
                        </p>

                        <h3 className="font-oswald text-3xl uppercase">
                          {blogItem.title}
                        </h3>

                        <p className="mt-4 text-gray-600">
                          {blogItem.content}
                        </p>

                      </div>

                    </article>
                  ))}

                </div>

              </div>

            </section>

          </main>
        </>
    )
}