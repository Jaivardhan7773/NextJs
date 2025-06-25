'use client';

// this is how hydration error occurs
// when you use a client component in a server component and the client component has some dynamic content that changes on every render, it can cause a hydration error.
// so basically when client side html didnt match the server side html, it causes hydration error.
// in development mode, nextjs will throw an error if it detects a hydration error.
// in production mode, nextjs will not throw an error but it will make user experince bad . 

export default function Hydration() {

// if(typeof window === 'undefined'){
//     return <> this can cause hydration error</>
// }


// return <div>500 Comments {Math.random()}</div>;

// return <div>500 Comments {Date.now()}</div>;
  return (
    <div>how  hydration err occurs</div>
  )
}
