import Link from "next/link";
import PrivateComponent from "../_component/page";
import PublicComponent from "../%5Fpubliccomponent/page";
import MostPrivate from "@/mostsecured/page";
import Hydration from "@/components/hydration";


export default function Home() {
  return (
    <>
      <h1>this is home page</h1>
      <PrivateComponent />
      <PublicComponent />
      <MostPrivate />
      <Link href='services/web-dev'> Web Service</Link><br />
      <Link href='services/seo'> App Service</Link><br />
      <Link href={'/services'}> Services</Link><br />


     {/* why  hydration error occurs */}
      <Hydration/>


    </>
  );
}
