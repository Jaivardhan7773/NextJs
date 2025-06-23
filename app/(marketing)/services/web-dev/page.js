import Comments from "@/components/comments";
import Likes from "@/components/likes";
import Views from "@/components/views";
import Link from "next/link";
import { Suspense } from "react";


export const metadata = {
  title: "Web Dev",
};

export default function WebDev() {
  return (
    <>
   
    <div>This is Web Dev page</div>
    <Suspense fallback={<div>Loading likes...</div>}>

    <Likes />
    </Suspense>
    <Suspense fallback={<div>Loading comments...</div>}>

    <Comments/>
  </Suspense>
  <Suspense fallback={<div>Loading views...</div>}>
    <Views/>
  </Suspense>
    </>
  )
}
