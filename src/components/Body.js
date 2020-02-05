import React from 'react'

export default function body(props) {
    let num1=5;
    let num2=8
    
   
    const bigNum = (x,y)=>{
        if(x>y)
           return x
        return y
    }

    return (
        <div>
           <p>{bigNum(num1,num2)}</p>
        
        
            <div>
              {props.num3}
            </div>
            <div>
              {props.f}
            </div>
        </div>
    )
}
