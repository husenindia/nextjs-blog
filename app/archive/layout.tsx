type ArchiveLayoutPageProps = {
    archive: any,
    latest: any
}
export default function ArchiveLayoutPage({archive, latest}: ArchiveLayoutPageProps) {
    return (
        <>
            <section className="mx-auto max-w-7xl px-6 py-16">
                {archive}
                {latest}
            </section>
        </>
    )   
}