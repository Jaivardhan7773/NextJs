import Link from "next/link";


export const metadata = {
  title: "Web Dev",
};

export default function WebDev() {
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
            <Link href="/blogs" className="nav-link">
              blogs
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
    <div>This is Web Dev page</div>
    </>
  )
}
