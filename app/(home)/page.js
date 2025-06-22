import Link from "next/link";
import PrivateComponent from "../_component/page";
import PublicComponent from "../%5Fpubliccomponent/page";
import MostPrivate from "@/mostsecured/page";


export default function Home() {
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
      <h1>this is home page</h1>
      <PrivateComponent />
      <PublicComponent />
      <MostPrivate />
      <Link href='services/web-dev'> Web Service</Link><br />
      <Link href='services/seo'> App Service</Link><br />
      <Link href={'/services'}> Services</Link><br />


    </>
  );
}
