import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Traveltimecomp() {
    const [posts, setPosts] = useState([])
    const fetchTraveltime = async (url) => {
        const response = await axios.get(url);
        const result = response.data;
        return result;
    }
    useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        const theposts = fetchTraveltime(url);
        console.log(theposts);
        theposts.then((data) => {
            console.log(data)
            setPosts((posts) => {
                return [...posts, ...data]
            })
            }).catch (() => {
                console.log("error has occurred");
        });
    }, [])

    return (
        <div>
            {JSON.stringify(posts)}
        </div>
    )
}

