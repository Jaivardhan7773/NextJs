import { cookies } from "next/headers";
import Link from "next/link";

export const metadata = {
  title: "Services",
};

//how to make a page dynamic 
// export const dynamic = "auto";
// export const dynamic = "force-dynamic";
// export const dynamic = "error";
// export const dynamic = "force-static";

export default async function Services({  searchParams}){
  //this is a example of how to make a static page dynamic with search params and cookies
    // const search = await searchParams;
  // console.log(search);
  // const myCookies = await cookies();
  // console.log(myCookies);
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