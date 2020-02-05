import React from 'react'



export default function Post(props) {
    return (
        <div>
    
   {     console.log(props+"6") }
        
                <h2><b>{props.title}</b>: {props.info}</h2>
      
           
          
        </div>
    )
}
