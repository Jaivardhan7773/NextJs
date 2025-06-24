'use client';
// In Next.js, Server Components are rendered on the server by default and do not include any client-side JavaScript, making them ideal for faster load times and better SEO. They can fetch data directly from a database or API without exposing sensitive logic to the browser. In contrast, Client Components are rendered on the client-side and support interactivity like state, effects, and event handlers (e.g., onClick). By default, all components in the `/app` directory are Server Components unless marked with `'use client'`. Use Server Components for static or data-driven UI and Client Components when you need interactivity.
// Next.js allows you to create both server and client components.


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





/**
 * 📌 Server Components vs Client Components in Next.js
 *
 * 🔹 Server Components:
 * - These are rendered on the server and sent to the browser as static HTML.
 * - They don’t include any JavaScript in the client bundle, making them lightweight and fast.
 * - Ideal for rendering data from databases or APIs securely, since the logic runs on the server.
 * - Can’t use hooks like useState, useEffect, or any browser-only APIs (e.g., localStorage).
 * - By default, components in the /app directory are Server Components unless marked otherwise.
 *
 * 🔹 Client Components:
 * - These run entirely on the client/browser after hydration.
 * - Required when using interactivity, like forms, modals, dropdowns, or animations.
 * - Must begin with a `'use client'` directive at the top of the file to be recognized as a client component.
 * - Can use React hooks (useState, useEffect, etc.) and have access to the DOM and browser APIs.
 *
 * ✅ Best Practice:
 * - Use Server Components for performance, static rendering, and secure data fetching.
 * - Use Client Components only when interactivity is needed.
 * - You can mix both: pass props from Server to Client Components as needed.
 */
