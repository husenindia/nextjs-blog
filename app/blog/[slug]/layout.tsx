type BlogDetailLayoutPageProps = {
    children: any,
    modal: any
}
export default function BlogDetailLayoutPage({children, modal}: BlogDetailLayoutPageProps) {
    return (
        <>
            <section className="mx-auto max-w-7xl px-6 py-16">
                {children}
                {modal}
            </section>
        </>
    )   
}