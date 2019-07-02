import React, {useContext} from 'react'
import {signInWithGoogle,signOut} from '../firebase'
import { mainContext } from './mainContext';
import './Signin.css'



const SignIn =()=>{

    const userContext =useContext(mainContext)
   
    const gSign = ()=>{
        signInWithGoogle()

    }
 
return (
    <div >
{userContext.user ? <div className ="user-nav">
     <img src={userContext.user.photoURL} alt="user" className="user-nav__user-photo"/>
                        <span className = "span2">{userContext.user.displayName}</span>
    <button className ="btn btn-sign" onClick ={signOut}>Signout</button>
    </div>
:<div className ="user-nav">
<button className ="btn btn-sign" onClick ={gSign } ><span className = "span1">GOOGLE</span>  Sign In </button>
</div>
}
    </div>
)
}

export default SignIn