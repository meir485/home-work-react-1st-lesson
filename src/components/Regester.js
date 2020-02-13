import React, { Component } from 'react'

export default class Regester extends Component {
    state = {
        username:'',
        password:'',
        Email:'',
        age:'',
        backgroundColorUsername: 'white',
        backgroundColorPass: 'white',
        backgroundColorEmail: 'white'
    }
    
    validUser=(element)=>{
        this.setState({username:element.target.value})
        if(element.target.value.length===0){
            this.setState({
                 backgroundColorUsername:'white'
             })
            }
        else if (element.target.value.length>=6 && element.target.value.length<=8){
            this.setState({
                backgroundColorUsername:'green'
            })
        }
        else{
            this.setState({
                backgroundColorUsername:'red'
            }) 
        }
    }

    validPass=(element)=>{
        this.setState({password:element.target.value})
        if(element.target.value.length===7){
            this.setState({
                 backgroundColorPass:'green'
             })
            }
        else if(element.target.value.length>7){
                this.setState({
                     backgroundColorPass:'red'
                 })
                }
        else{
            this.setState({
                backgroundColorPass:'white'
            })
          }
    }
    validEmail=(element)=>{
        this.setState({Email:element.target.value})
        if(element.target.value[3]==='@'){
            this.setState({
                 backgroundColorEmail:'green'
             })
            }
            else {
                this.setState({
                    backgroundColorEmail:'white'
                })
              }
    }
    submit = () =>{
        alert(`${this.state.username} had just submited`)
    }
    render() {

        return (
            <div>
                 <div>
                {/* onChange evey chenge and everthing written do{} */}
                <h1>Regester page</h1>
                <input type="text" onChange={this.validUser} style={{backgroundColor:this.state.backgroundColorUsername}} placeholder='username'></input>
                <br></br>
                <input type="text" onChange={this.validPass} style={{backgroundColor:this.state.backgroundColorPass}} placeholder='password'></input>
                <br></br>
                <input type="text" onChange={this.validEmail} style={{backgroundColor:this.state.backgroundColorEmail}} placeholder='Email'></input>
                <br></br>
                <input type="text"  placeholder='age'></input>
                <br></br>
                <button onClick={this.submit} >submit</button>
            </div>
            </div>
        )
    }
}
