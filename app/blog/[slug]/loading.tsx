export default function BlogDetailLoading() {
  return (
    <main className="animate-pulse">

      {/* Hero Image */}
      <div className="h-[550px] w-full bg-gray-200" />

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16">

        {/* Breadcrumb */}
        <div className="mb-8 h-3 w-48 rounded bg-gray-200" />

        {/* Category */}
        <div className="mb-6 h-4 w-28 rounded bg-[#D9907A]/40" />

        {/* Title */}
        <div className="space-y-4">
          <div className="h-10 w-full rounded bg-gray-300" />
          <div className="h-10 w-4/5 rounded bg-gray-300" />
        </div>

        {/* Meta */}
        <div className="mt-8 flex gap-6">
          <div className="h-4 w-28 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-4 w-24 rounded bg-gray-200" />
        </div>

        {/* Paragraph */}
        <div className="mt-14 space-y-4">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-11/12 rounded bg-gray-200" />
          <div className="h-4 w-4/5 rounded bg-gray-200" />
        </div>

        {/* Image */}
        <div className="my-16 h-[420px] w-full rounded bg-gray-200" />

        {/* Heading */}
        <div className="mb-8 h-8 w-72 rounded bg-gray-300" />

        {/* Paragraph */}
        <div className="space-y-4">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
        </div>

        {/* Quote */}
        <div className="my-16 border-l-4 border-[#D9907A] pl-6">
          <div className="h-6 w-full rounded bg-gray-200" />
          <div className="mt-3 h-6 w-3/4 rounded bg-gray-200" />
        </div>

        {/* Tags */}
        <div className="mt-16 flex gap-3">
          <div className="h-10 w-24 rounded bg-gray-200" />
          <div className="h-10 w-20 rounded bg-gray-200" />
          <div className="h-10 w-28 rounded bg-gray-200" />
          <div className="h-10 w-20 rounded bg-gray-200" />
        </div>

      </div>
    </main>
  );
}