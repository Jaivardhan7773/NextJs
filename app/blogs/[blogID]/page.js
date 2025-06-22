import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
}


// This function generates static parameters for the dynamic route
// It allows Next.js to pre-render pages for specific blog IDs
// This is useful for SEO and performance, as it avoids server-side rendering for every request
// Instead, it generates static pages for the specified blog IDs
// The function returns an array of objects, each containing a blogID
// This is useful for blogs that have a fixed number of posts or for testing purposes
export function generateStaticParams(){
  return [
    { blogID: "1" },
    { blogID: "2" },
    { blogID: "3" },
    { blogID: "4" },
    { blogID: "5" },
    { blogID: "6" },
    { blogID: "7" },
    { blogID: "8" },
    { blogID: "9" },
    { blogID: "10" }
  ]
}


export default async function Blog({ params }) {
  const { blogID } = await params;

  if (!/^\d+$/.test(blogID)) {
    notFound();
  }
  return <div>Blogs folder slug is  {blogID}</div>;
}