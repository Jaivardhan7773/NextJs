'use client';

//we should always use 'use client' at the top of the file to make it a client component
//this will make the component a client component and it will be rendered on the client side
//and we can also import it to the parent component
//if we don't use 'use client' at the top of the file, it will be treated as a server component by default

import Link from "next/link";
import { use, useState } from "react";

// export const metadata = {
//   title: "Blogs",
// };

export default function Blogs() {
const [viewCount , setViewCount] =  useState(0)

  {/* client components vs server components */ }
  // server components are rendered on the server and sent to the client as HTML
  // client components are rendered on the client and serve as interactive components

  //as we know client components are rendered on both client and server side so directly using localstorage in console can gave errror 
  //because localstorage is not available on server side
  // so we can check if localstorage is available or not before using it
  //  if(typeof localStorage !== 'undefined'){
  //   console.log(localStorage)
  //  }

  //and the same goes for window object
  //   if(typeof window !== 'undefined'){
  //   console.log(window)
  //  }


  console.log('Blogs page rendered on the client side');
  return (
    <>
      <h1>All Blogs</h1>
      <Link href={'/blogs/1'}><p>Blog 1</p></Link>
      <Link href={'/blogs/2'}><p>Blog 2</p></Link>
      <Link href={'/blogs/3'}><p>Blog 3</p></Link>


      {/* client components vs server components */}



      <div onClick={() => {
        setViewCount(viewCount + 1);
      }}>
        How many Views do you have boy
        {viewCount}
      </div>

    </>
  );
}