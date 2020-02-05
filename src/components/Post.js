import React from 'react'



export default function Post(props) {
    return (
        <div>
    
   {     console.log(props.posts.info+"6") }
 
            <h2><b>{props.posts.title}</b>: {props.posts.info}</h2>
     
                
      
           
          
        </div>
    )
}
