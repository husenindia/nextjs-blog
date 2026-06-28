export default function NoBlogsFound() {
    return (
        <>
            <div className="rounded-lg border border-dashed border-gray-300 bg-[#F8F8F6] px-8 py-16 text-center">
                <h3 className="font-oswald text-4xl uppercase text-[#171710]">
                    No Blogs Found
                </h3>

                <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-gray-600">
                    We couldn't find any blog posts for the selected year. Try browsing a
                    different archive period or explore our latest articles below.
                </p>
            </div>;
        </>
    )
}