import "./global.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title :{
    template : "%s || Technical Agency",
    default: "Technical Agency",
  },
  description: "This is a technical agency website built with Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Navbar/>

        {children}
        {/* <footer style={{ background: "brown" }}>Footer</footer> */}

      </body>
    </html>
  );
}
