
export default function ServiceLayout({ children }) {
    return (
        <>
            <section>
                <header style={{ background: "black" , color:"Highlight" }}>Header (File)</header>
                <h1>File Path  Page</h1>

                {children}
                <footer style={{ background: "grey"}}>Footer (File)</footer>
            </section>
        </>
    )
}