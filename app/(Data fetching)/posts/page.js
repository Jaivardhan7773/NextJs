'use client'
import { useEffect, useState } from 'react';
export default function page() {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        async function fetchPosts() {
            const res =  await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data);
        }
        fetchPosts();

    }, [])
  return (
    <>
        <h1>Posts</h1>
    <div className="post-container">
        {posts.map((post) => <div className="post-cards" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div> )}
        
    </div>
    </>
  )
}
