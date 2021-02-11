//  this is the uncontrolled component part -1 Controlled Components:
//  In a controlled component, the form data is handled by the state within the component. The state within the component serves as
//  “the single source of truth” for the input elements that are rendered by the component. Let's look at a code example.


//this is the normal way to store the input value:


// import React from 'react';
// export default class uncontrolled extends React.Component
// {
//  constructor()
//  {
//      super();
//      this.state={
//          user : null,
//          password:null,
//      }
//  }
//  fun1()
//  {
//      console.log('submitted sucessfully',this.state)
//  }
//  render(){
//      return(
// <div>
//     <h1>this is uncontrolled part this used </h1>
//     <input type='text' onChange={(event)=>{this.setState({user:event.target.value})}} name='user' placeholder='enter the user name'/>
//     <input type='password' onChange={(event)=>{this.setState({password:event.target.value})}} name='password' placeholder='enter the user password'/>

//     <button onClick={()=>{this.fun1()}}>Submit</button>
// </div>

//      )
//  }
// }

// this is the uncontrolled method :

import React from 'react';
export default class Uncontrolled extends React.Component {
    constructor() {
        super();
        this.name = React.createRef();
        this.password = React.createRef();

    }

submitbtn(event)

{
    event.preventDefault();
    console.warn(this.name.current.value , this.password.current.value)


}
render()
{
    return (
        <div>
            <h1>this is the uncontrolled</h1>
            <form onSubmit={(event)=>{this.submitbtn(event)}}>
            <input type='text' ref={this.name} placeholder="Enter the name" />
            <input type='password' ref={this.password} placeholder="Enter the password" />
            <button type="submit">submit</button>
        </form>
        </div>

    );
} 
}
