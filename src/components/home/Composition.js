import React from 'react'
import h1 from '../../assets/h1.jpg'
import h2 from '../../assets/h2.jpg'
import h3 from '../../assets/h3.jpg'
import './composition.css'
const Composition =()=>{
    return(
         
<div className="composition">
        
        <img 
             alt="pic1"
            className="composition__photo composition__photo--p1"
             src={h2}/>

        <img 
             alt="Ppic 2"
            className="composition__photo composition__photo--p2"
            src={h3}/>

        <img 
             alt="pic 3"
            className="composition__photo composition__photo--p3"
            src={h1}/>
                 </div>
    )
}
export default Composition