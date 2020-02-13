import React, { Component } from 'react'

export default class NewPost extends Component {
    ///make all the js we need
    //only objects in rcc ?!
    state = {
        title:'',
        info:'',
        backgroundColorTitle: 'white',
        backgroundColorInfo: 'white'
    }
    //element comes from onChange as a big object

    validTitle=(element)=>{
        //to get to the changes and eveything thats i the input
       //console.log(element.target.value)
        //set = set my obeject
       this.setState({title:element.target.value})
       if(element.target.value.length>5){
           this.setState({
              
                backgroundColorTitle:'green'
            })
           }
        else{
            this.setState({backgroundColorTitle:'white'})
        }   
       }
    validInfo=(element)=>{
        this.setState({title:element.target.value});
        if(element.target.value.length>10){
            this.setState({
                backgroundColorInfo:'red'
            })
         }   else{
            this.setState({backgroundColorTitle:'white'})
            }
        
    }
    buttonClick=()=>{
        alert('hhhhhh')
    }
    render() {
        return (
            <div>
                {/* onChange evey chenge and everthing written do{} */}
                <input type="text" onChange={this.validTitle} style={{backgroundColor:this.state.backgroundColorTitle}} placeholder='title'></input>
                <br></br>
                <input type="text" onChange={this.validInfo} style={{backgroundColor:this.state.backgroundColorInfo}} placeholder='info'></input>
                <br></br>
                <button onClick={this.buttonClick}>add post</button>
            </div>
        )
    }
}
