import React from 'react'
import { useEffect, useState } from 'react';

export default function GitHubUser({login}) {
    // an example of destructuring from the attribute
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    }, [login]);

    console.log(data);

    if (data) {
        return (
            <div>
                {/* {JSON.stringify(data)} */}
                <h1>Hi my name is {data.name}</h1>
                <img src={data.avatar_url} alt="user" width={100}/>
                <h2>My GitHub Username is {data.login}</h2>
                <p>{data.bio}</p>
            </div>
        )
    }
    return null;
}

