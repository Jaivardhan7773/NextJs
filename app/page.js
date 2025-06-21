import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>this is home page</h1>
      <Link href='services/web-dev'> Web Service</Link><br/>
      <Link href='services/seo'> App Service</Link><br/> 
      <Link href={'/services'}> Services</Link><br/>


    </>
  );
}
