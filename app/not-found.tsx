import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#F8F8F6] px-6">
      <section className="mx-auto max-w-3xl text-center">

        {/* 404 */}
        <h1 className="font-oswald text-[120px] leading-none uppercase text-[#D9907A] md:text-[180px]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 font-oswald text-5xl uppercase tracking-wide text-[#171710] md:text-7xl">
          Page Not Found
        </h2>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-24 bg-[#D9907A]" />

        {/* Description */}
        <p className="mx-auto max-w-xl text-lg leading-8 text-gray-600">
          The page you're looking for doesn't exist, has been moved,
          or the URL may be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="border border-[#D9907A] bg-[#D9907A] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-transparent hover:text-[#D9907A]"
          >
            Back Home
          </Link>

          <Link
            href="/blog"
            className="border border-[#171710] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#171710] transition hover:bg-[#171710] hover:text-white"
          >
            Browse Articles
          </Link>

        </div>

        {/* Footer Text */}
        <p className="mt-16 text-xs uppercase tracking-[0.35em] text-gray-400">
          A Music Blog
        </p>

      </section>
    </main>
  );
}