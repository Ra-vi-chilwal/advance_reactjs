import React from "react";
export default class JWT extends React.Component
{
    constructor(){
        super();
        this.state=
        {
            user:null,
            password:null,
            email:null,
    }
}
login(){
    // console.warn("this is th login" , this.state)
    fetch('http://127.0.0.1:5000/api/login',{
        method : 'POST',
        body : JSON.stringify(this.state)
    }).then((resp)=>{
        resp.json().then((result)=>{
            console.warn('result',result)
        })
    })
}
    render()
    {
        return(
            <div>
                <h1>This is the JWT tutorial</h1>
                <input type="text"  onChange={(event)=>{this.setState({user:event.target.value})}}  placeholder='enter your name'/><br/><br/>
                <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}  placeholder='enter your Password'/><br/><br/>
                <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}}  placeholder='enter your Email'/>
                <button onClick={()=>{this.login()}}>Submit</button>
            </div>
        );
    }


}