import React from 'react'
import './Features.css'
const featureArray=[{title:"World wide company",icon:"global",text:"Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia"},


{title:"Open up the market to your company",icon:"key",text:"Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia"},
{title:"Expertly designed and maintained",icon:"presentation",text:"Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia"},
{title:"Safe and secure",icon:"lock",text:"Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia"}]
const featureDiv =()=>{
    
    const f=featureArray.map((feat)=>(
        <div className = "feature">
        <svg className="feature__icon">
        <use xlinkHref={`img/sprite.svg#icon-${feat.icon}`}></use>
        </svg>
        <h4 className ="heading-4 ">{feat.title}</h4>
        <p className = "feature-text">{feat.text}</p>
        </div>
    ))
    return f
}
const Features =()=>{
    return(
        <section className = "features">
            {featureDiv()}
        </section>
    )
}
export default Features