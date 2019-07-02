import React from 'react'
import "./Footer.css"
const Footer = ()=>{
    return(
        <div className ='footer'>
 <ul className="nav">
                    <li className="nav__item"><a href="#" className="nav__link">Find your dream home</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Request proposal</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Download home planner</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Contact us</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Submit your property</a></li>
                  
            </ul>
            <p className="copyright">
                &copy; Copyright 2017 by John Lawley.
            </p>
        </div>
    )

}
export default Footer