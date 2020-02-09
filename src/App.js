import React from 'react';

import './App.css';
import Header from './components/Header.js'
//import Body from './components/Body.js'
import "bootstrap/dist/css/bootstrap.css"
import Post from './components/Post';

function App() {
 
  let posts=[{info:"ekdjdjfffs",title:"first post"},{info:"i loisjfg shittt",title:"second post"},{info:"no..... fuck u ya mother fuckerrrrr",title:"thid post"}]
  return (
    <div className="App">
      <Header/>
      

      <Post post={posts} />

        
    </div>
  );
}

export default App;
