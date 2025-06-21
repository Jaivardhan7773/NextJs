import Link from "next/link";

export const metadata = {
  title: "Services",
};


export default function Services(){
    return (
        <>
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