//these will only works in production mode, not in development mode


import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
}




export const dynamicParams = false; //this disables dynamic params for this route, meaning it will not generate pages for every possible blogID;

//this is incremental static regeneration (ISR) which allows you to generate static pages for dynamic routes
export const revalidate = 60; //this sets the revalidation time for this route to 60 seconds, meaning it will regenerate the page every 60 seconds if there are changes in the data




//this uses static site generation (SSG) to generate static pages for each blog post
// This function generates static parameters for the dynamic route
// It allows Next.js to pre-render pages for specific blog IDs
// This is useful for SEO and performance, as it avoids server-side rendering for every request
// Instead, it generates static pages for the specified blog IDs
// The function returns an array of objects, each containing a blogID
// This is useful for blogs that have a fixed number of posts or for testing purposes
// export function generateStaticParams(){
//   return [
//     { blogID: "1" },
//     { blogID: "2" },
//     { blogID: "3" },
//     { blogID: "4" },
//     { blogID: "5" },
//     { blogID: "6" },
//     { blogID: "7" },
//     { blogID: "8" },
//     { blogID: "9" },
//     { blogID: "10" }
//   ]
// }



//this uses incremental static regeneration (ISR) to generate static pages for each blog post
// This function fetches blog data from an external API
// It retrieves a list of blog posts and generates static parameters based on the post IDs
// This is useful for blogs that have a dynamic number of posts or for fetching real-time data
// The function returns an array of objects, each containing a blogID
// This is useful for blogs that have a dynamic number of posts or for fetching real-time data
// It allows Next.js to pre-render pages for specific blog IDs
// This is useful for SEO and performance, as it avoids server-side rendering for every request 
//this is uses 
export async function generateStaticParams(){
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await response.json();

  return data.map(({id}) => ({blogID: `${id}`}))

}


export default async function Blog({ params }) {
  const { blogID } = await params;
const response = await fetch("https://jsonplaceholder.typicode.com/posts" , {
  next: {
    revalidate: 60, // This will revalidate the page every 60 seconds , means refetch data every 60 seconds
  }
});
const data = await response.json();

  if (!/^\d+$/.test(blogID)) {
    notFound();
  }
  return <div>Blogs folder slug is  {blogID}</div>;
}