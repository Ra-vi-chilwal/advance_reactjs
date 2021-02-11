import React from "react";
class Toggle extends React.Component {
     func1(){
        alert("hello ")
        document.getElementsByClassName('this')
    }
    render(){
        return (
      <div>
          <h1>this is the file </h1>
          <button onClick={this.func1}>use me</button>
          <h1 className="this"> this is program file and now we are talking about </h1>
      </div>
        )

        
    }
}
export default Toggle; 