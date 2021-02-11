
import './App.css';
 import About from './About'
 import Profile from './Profile';
 import Toggle from './Toggle';
import Comupdate from "./Comupdate"
import Form from './Form'
import React from 'react'
import Api from "./Api"
import Ref from './Ref'
import JWT from './JWT'
import Uncontrolled from "./Uncontrolled"
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
export default class App extends React.Component{
  render(){
  
    return (
    <div className="App">
{/*     
    <Router>
    <Link to ='/'>Form</Link>
    <Link to ='/About'>About</Link>
    <Link to ='/Profile'>Profile</Link>
    <Link to ='/Toggle'>Toggle</Link>
      <h1>hello</h1>
      <h1>welcome to react js</h1>
      <Route extact path ='/' component={Form}/>
      <Route path ='/About' component={About}/>
      <Route path ='/Profile' component={Profile}/>
      <Route path ='/Toggle' component={Toggle}/> */}
       {/* <Form />
       <Comupdate />
       <About /> 
      <Profile />
      <Toggle />  */}
      {/* <Api />
      <Ref />
      <JWT /> */}
     
      {/* </Router> */}
      <Uncontrolled />
      <h1>welcome to the react tutorial</h1>
      
    </div>
  )
  }


}

