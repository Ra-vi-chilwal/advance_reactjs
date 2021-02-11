import React, { Component } from "react";
export default class Api extends React.Component {
constructor()
{
    super();
    this.state={
        users: null
    }
}
componentDidMount()
{
    fetch('https://reqres.in/api/users').then(
        (resp=>{
        resp.json().then((result)=>{
            console.warn(result)
            // this.setState({user:result.data})
        })
    }))



}
 render(){
     return(
 <div>
 <h1>this is the Api fetch File</h1>
 
 
 </div>
   );
     }
 }