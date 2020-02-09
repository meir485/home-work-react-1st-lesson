import React from 'react'



export default function Post(props) {

    //     for (let i = 0; i < this.props.post.length; i++) {
    //   x.push()
    // }
    const postslis = props.post.map(post =>
      <li>{<h2><b>{post.title}</b>: {post.info}</h2>}</li>
      );
    
    return (
        <ul>
           {postslis}
        </ul>
    )
}
