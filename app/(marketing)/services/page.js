import Link from "next/link";

export const metadata = {
  title: "Services",
};


export default function Services(){
    return (
        <>
        <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services/seo" className="nav-link">
              seo
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/services/web-dev" className="nav-link">
              web-dev
            </Link>
          </li>
        </ul>
      </nav>
        <h1>Service Page</h1>
         <p>
        <Link href="/services/web-dev">Web Development</Link>
      </p>
      <p>
        <Link href="/services/seo">SEO</Link>
        </p>
        </>
    )
}