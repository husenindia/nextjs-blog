export default function ArchiveListingLoading() {
  return (
    <main className="mx-auto max-w-7xl animate-pulse px-6 py-16">

      {/* Page Title */}
      <div className="mb-16 border-b border-gray-200 pb-8">
        <div className="mb-3 h-4 w-28 rounded bg-[#D9907A]/40" />
        <div className="h-14 w-96 rounded bg-gray-300" />
      </div>

      {/* Blog Cards */}
      {Array.from({ length: 3 }).map((_, index) => (
        <article
          key={index}
          className="border-b border-gray-200 py-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row">

            {/* Date */}
            <div className="flex w-24 flex-row items-end gap-3 lg:flex-col lg:items-center">

              <div className="h-5 w-12 rounded bg-gray-300" />

              <div className="h-20 w-16 rounded bg-gray-300" />

            </div>

            {/* Image */}
            <div className="h-72 w-full rounded bg-gray-200 lg:w-[420px]" />

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between">

              <div>

                {/* Title */}
                <div className="mb-6 h-10 w-3/4 rounded bg-gray-300" />

                {/* Location */}
                <div className="mb-8 h-4 w-1/2 rounded bg-gray-200" />

                {/* Description */}
                <div className="space-y-4">
                  <div className="h-4 w-full rounded bg-gray-200" />
                  <div className="h-4 w-full rounded bg-gray-200" />
                  <div className="h-4 w-5/6 rounded bg-gray-200" />
                </div>

              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-3">

                <div className="h-10 w-40 rounded bg-gray-200" />
                <div className="h-10 w-28 rounded bg-gray-200" />
                <div className="h-10 w-24 rounded bg-gray-200" />

              </div>

            </div>

          </div>
        </article>
      ))}

    </main>
  );
}