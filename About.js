
import React from 'react'


class About extends React.Component {
  render (p){
      return(
           <div>
           <h1>this is the image part</h1>
           <img src="https://picsum.photos/200/300" alt='logo'/>
           <img src="https://picsum.photos/200/300" alt='logo'/>
           {this.props.text}
        
           

           </div>
      )
  }
}

export default About;
