import React from 'react'

export default function Posts({post,loading}) {;
    if (loading){
        return ( <h2>Loading ...</h2>
        )
    }
    return (
        <div >
            {post.map(val => (
                <div key={val.id} >
                      {val.title}
                </div>
            ))}
        </div>
    )
}
