import { useEffect, useState } from "react";
import Post from "../Post";

const baseUrl = 'https://apibloggui.vercel.app'
export default function IndexPage(){
    const [posts,SetPosts] = useState([])
    useEffect(() =>{
        fetch(`${baseUrl}/post`).then(response =>{
            response.json().header('Access-Control-Allow-Origin : https://blogpessoal-devgui.vercel.app').then(posts => {
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