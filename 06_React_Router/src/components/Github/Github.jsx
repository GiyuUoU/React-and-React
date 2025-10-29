import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data , setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/GiyuUoU')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Followers:', data);
    //         setData(data);
    //     })
    // }, []);

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 rounded-lg">Github followers - {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />    
        </div>
    );
}
export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/GiyuUoU');
    return response.json();
}