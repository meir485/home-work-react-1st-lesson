import React from 'react';

import './App.css';
import Header from './components/Header.js'
import Body from './components/Body.js'
import "bootstrap/dist/css/bootstrap.css"
import Post from './components/Post';

function App() {
  //could be coming from backend
  let num3=9
  let s ="dddddd"
  let posts=[{info:"ekdjdjfffs",title:"first post"},{info:"i loisjfg shittt",title:"second post"},{info:"no..... fuck u ya mother fuckerrrrr",title:"thid post"}]
  return (
    <div className="App">
      <Header/>
      { console.log(posts[0])}
 for(let i = 0 ; i <posts.length ; i++){   
    <Post posts={posts[i]} />
 })

  

     
        
    </div>
  );
}

export default App;
