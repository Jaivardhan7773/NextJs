import Link from "next/link";

export const metadata = {
  title: "Blogs",
};

export default async function Blogs() {
  return (
    <>
      <h1>All Blogs</h1>
      <Link href={'/blogs/1'}><p>Blog 1</p></Link>
            <Link href={'/blogs/2'}><p>Blog 2</p></Link>
      <Link href={'/blogs/3'}><p>Blog 3</p></Link>

    </>
  );
}