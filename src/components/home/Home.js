import React from 'react'
import Composition from './Composition'
import Features from './Features'
import Footer from './Footer'
import './Home.css'
const Home =(props) =>{
    console.log(props)
    return(
        <div className ="home">
            <div className = 'topb'></div>
            <div className="headerholder">
                <h3 className ="head3">Some text here</h3>
                <h1 className ="head1">Title of the webPage</h1>
            </div>
            <Features/>
            <Composition/>
           
            
            <Footer/> 
        </div>
    )

}
export default Home