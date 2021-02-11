import React from "react";
export default class Ref extends React.Component {
    constructor() {
        super();
       this.userRef=React.createRef();

    }
    editVal(){
        console.warn(this.userRef)
        this.userRef.current.value='10020w'
    }
    render() {
        return (
            <div>
            <input type='text' name='user' ref={this.userRef}/>
            <button onClick={()=>this.editVal()}>what </button>
            </div>
         
    );

    }
}
