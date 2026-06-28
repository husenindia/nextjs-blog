import BlogList from "@/components/blog-list";
import Image from "next/image";
import Link from "next/link";
import { getLatestNews } from "@/lib/blog-helper"

export default async function HomePage() {
  const latestBlog = await getLatestNews();
  return (
    <main className="py-10">

      {/* Hero */}

      <section className="bg-[#DEE2E0] mb-20">
        <div className="mx-auto max-w-7xl items-center gap-6 flex">

          <div className="px-8">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D9907A]">
              Featured Story
            </p>

            <h1 className="font-oswald text-6xl uppercase leading-none text-[#171710] lg:text-7xl">
              Discover
              <br />
              The Sound
              <br />
              Behind Every Story
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              Dive into artist interviews, album reviews, concert coverage,
              music news and behind-the-scenes stories from around the world.
            </p>

            <Link
              href="/blog/how-music-affects-your-mood"
              className="mt-10 inline-block border border-[#D9907A] bg-[#D9907A] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-transparent hover:text-[#D9907A]"
            >
              Read Story
            </Link>

          </div>

          <div>
            <Image
            
              src="/hero.webp"
              alt="Featured Story"
              width={500}
              height={600}
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Categories */}


      {/* Latest Blogs */}

      <section className="mx-auto max-w-7xl px-6 pb-10">

        <div className="mb-12">

          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9907A]">
            Fresh Content
          </p>

          <h2 className="font-oswald text-6xl uppercase">
            Latest Articles
          </h2>

        </div>

        <BlogList blogList={latestBlog} />

      </section>

      {/* Popular */}

      <section className="bg-[#F8F8F6] py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12">

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9907A]">
              Reader Favorites
            </p>

            <h2 className="font-oswald text-6xl uppercase">
              Popular Stories
            </h2>

          </div>

          <BlogList blogList={latestBlog} />

        </div>

      </section>

      {/* Newsletter */}

      <section className="bg-[#DEE2E0] py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D9907A]">
            Stay Updated
          </p>

          <h2 className="font-oswald text-6xl uppercase">
            Never Miss A Beat
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Subscribe to receive the latest music news, artist interviews,
            album reviews and exclusive stories directly in your inbox.
          </p>

          <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 bg-white px-5 py-4 outline-none focus:border-[#D9907A]"
            />

            <button
              className="bg-[#D9907A] px-8 py-4 font-semibold uppercase tracking-[0.15em] text-white transition hover:opacity-90"
            >
              Subscribe
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}