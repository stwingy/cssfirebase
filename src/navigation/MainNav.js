import React,{useRef} from 'react'
import { NavLink} from 'react-router-dom';
import './MainNav.css'
const MainNav =()=>{
    const checkerRef =useRef()
    const navRoll =(e)=>{
        checkerRef.current.checked=false
        console.log(e.target)
    }
    
return(
    <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" ref={checkerRef}/>

    <label htmlFor="navi-toggle" className="navigation__button" >
        <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>

    <nav className="navigation__nav">
        
        <ul className="navigation__list" >
            <li className="navigation__item" ><NavLink  to ='/' className="navigation__link" onClick={navRoll.bind(this)}><span>05</span>Home</NavLink></li>
            <li   className="navigation__item"><NavLink  to ='/App' className="navigation__link" onClick={navRoll.bind(this)}>APP</NavLink></li>
           
            </ul>
    </nav>
   
    </div>
     

)
}
export default MainNav