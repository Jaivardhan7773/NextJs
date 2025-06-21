
export default function ServiceLayout({ children }) {
    return (
        <>
            <section>
                <header style={{ background: "aqua" }}>Header (Home)</header>


                {children}
                <footer style={{ background: "yellow" }}>Footer (Home)</footer>
            </section>
        </>
    )
}