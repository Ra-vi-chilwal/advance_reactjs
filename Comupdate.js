// import React from "react";
// export default class Compupdate extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             active: null,
//             who: null
//         }


//     }
//     componentsDidupdate() {
//         console.warn("this is the updated components")
//     }
//     render() {
//         return (
//             <div>
//                 <h1>
//                     this is component Dis update file :{this.state.active}
//         </h1>
//                 <button onClick={() => { this.setState({ active: 'yes' }) }}>
//                     active
//         </button>
//             </div>
//         )
//     }
// }



// hooks ke help se hum functional components mai states ka use kr skte hai ....or ye 16.8 wale updates mai aaya tha..

// import React , {useState} from "react";

// function Comupdate() {
// const  [count,setCount]=useState(1)
// return(
// <div>
//     <h1>this is the value  : {count}</h1>
//     <button onClick={()=>{setCount(count+1)}}>click to kro</button>
// </div>
// )
// }
// export default Comupdate;

// import React , {useReact, useState} from "react";
// function Comupdate(){
//     const [count,setCount]=useState(10)
//     return(
//         <div>
//             <h1>this is the value of count:{count}</h1>
//             <button onClick={()=>{setCount(count-1)}}>use kro</button>
//         </div>
//     )
// }
// export default Comupdate;

import react ,{useEffect,useState} from "react";
function Compupdate (){
    const [count,setCount]=useState(3)
    useEffect(()=>{
        console.log(count)
    })
    return(
        <div>
            <h1>this is thwe update function useing useEffect..{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>use the effect</button>
        </div>
    )
}
export default Compupdate;
