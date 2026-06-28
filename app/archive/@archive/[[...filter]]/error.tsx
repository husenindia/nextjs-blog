"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#F8F8F6] px-6">
      <section className="mx-auto max-w-2xl text-center">

        {/* Error Code */}
        <h1 className="font-oswald text-[110px] leading-none uppercase text-[#D9907A] md:text-[160px]">
          Oops!
        </h1>

        {/* Title */}
        <h2 className="mt-4 font-oswald text-5xl uppercase tracking-wide text-[#171710] md:text-6xl">
          Something Went Wrong
        </h2>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-24 bg-[#D9907A]" />

        {/* Description */}
        <p className="mx-auto max-w-lg text-lg leading-8 text-gray-600">
          Invalid Month or Year entered
        </p>

        {/* Optional error message (development only) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-12 rounded-md border border-red-200 bg-red-50 p-4 text-left">
            <p className="text-sm font-medium text-red-700">
              {error.message}
            </p>
          </div>
        )}

      </section>
    </main>
  );
}