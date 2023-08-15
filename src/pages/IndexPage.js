import { useEffect, useState } from "react";
import Post from "../Post";

const baseUrl = 'https://api-blog-beta.vercel.app'
export default function IndexPage(){
    const [posts,SetPosts] = useState([])
    useEffect(() =>{
        fetch(`${baseUrl}/post`).then(response =>{
            response.json().then(posts => {
                SetPosts(posts)
            })
        })
    }, [])
    return (
        <>
           {posts.length > 0 && posts.map(post => (
            <Post {...post} />
           ))}
        </>
    )
}