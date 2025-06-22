import Link from "next/link";


export const metadata = {
  title: "Seo ",
};

export default function Seo() {
  return (
    <><nav>
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
    <div>This is Seo Dev page</div>
      </>
  )
}
