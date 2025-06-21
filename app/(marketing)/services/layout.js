
export default function ServiceLayout({ children }) {
    return (
        <>
            <section>
                <header style={{ background: "orange" }}>Header (Marketing)</header>
                <h1>Service Layout Page</h1>

                {children}
                <footer style={{ background: "black", color: "#FFF" }}>Footer (Marketing)</footer>
            </section>
        </>
    )
}