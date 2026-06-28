import Link from "next/link";

export default function BlogNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-oswald text-8xl uppercase text-[#D9907A]">
          Article Not Found
        </h1>

        <p className="mt-6 text-gray-600">
          Sorry, the article you're looking for doesn't exist or may have been removed.
        </p>

        <Link
          href="/blog"
          className="mt-8 inline-block border border-[#D9907A] bg-[#D9907A] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-transparent hover:text-[#D9907A]"
        >
          Back to Blog
        </Link>
      </div>
    </main>
  );
}