import Link from "next/link";


export default function notfound() {
  return (
    <>
    <div style={{textAlign : "center" , height: "100vh" , justifyContent: "center" , paddingTop:"10vh" , backgroundColor: "lightgray"}}>
        <h1 style={{color : "teal"}}>This Blog didn't exists</h1>
        <p><i>Check the URL or go back to the homepage.</i></p>
        <Link href="/" style={{textDecoration:"none" , color : "red"}}>Go to Homepage</Link>
        <p>Or check the blogs list</p>
        <Link href="/blogs" style={{textDecoration:"none" , color :"brown"}}>Go to Blogs</Link>
        <h1 style={{color:"red"}}>404 not found</h1>
    </div>
    </>
  )
}
