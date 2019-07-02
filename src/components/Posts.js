import React, { useContext } from 'react';
import { mainContext } from './mainContext';
import EditControls from './EditControls'
import EditText from './EditText'
import './Posts.css'
const Posts = () => {
    const postContext = useContext(mainContext);
   const getDate=(d)=>{
       const dat = new Date(d)
       return dat.toLocaleDateString()
   }
	const makePosts = () => {
       
		return postContext.posts.map((p) => (
            postContext.current.id===p.id? <EditText key = {p.id}post ={p}/>:
			<div key={p.id} className = "cad">
                
				<h4 className = "heading-4">{p.title}</h4>
				<p className = 'cad__text'>{p.subject}</p>
                
             
                {postContext.user && postContext.user.uid ===p.user.uid ? <EditControls id={p.id}/>:console.log("Z")}
                <span className="cad-span">{` ${p.user.displayName}\u00A0\u00A0\u00A0\u00A0 ${getDate(p.date)}`}</span>
                
			</div>
		));
	};
   
        
	return(
        <section className = "cads">
            {makePosts()}
        </section>
    )
};
export default Posts;



 // const makeArray =(l,str)=>{
    //     let i=0
    //     let ma =[]
    //     while(i<str.length){
    //       ma.push(str.slice(i,l+i))
    //      i=i+l
         
    //     }
    //     return ma
    //     }