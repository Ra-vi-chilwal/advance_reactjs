import React from 'react';
export default class Bootstrap extends React.Component {
    constructor(){
        super();
        this.this.state={
            show:false
        }
    }
    handleModal(){
    this.setState({show : true})
        }
    
    render(){
        return(
         <div>
             <Button onClick={()=>this.handleModal()}>close</Button>
             <Button onClick={()=>this.handleModal()}>Save</Button>
         </div>
        )
    }
}