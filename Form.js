import React from 'react';
export default class Form extends React.Component{
    constructor(){
        super()
        this.state={
            // fname:null,
            // password:null
            list :[
                {name:'rahul', Email:"rahul@gmail.com",phone :12345 },
                {name:'rahul', Email:"rahul@gmail.com", phone :34566 },
                {name:'rahul', Email:"rahul@gmail.com", phone :433467 }
            ]

        }

        
    }
    submit(){
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <input type='text' name='fname' placeholder="please enter your name" onChange={(e)=>{this.setState({fname:e.target.value})}}/> <br/><br/>
                <input type='password' name='password' placeholder='please enter your password' onChange={(e)=>{this.setState({password:e.target.value})}}/>
                <br/><br/>
                <button onClick={()=>{this.submit()}}>onclick</button>
            </div>

        )
    }
} 