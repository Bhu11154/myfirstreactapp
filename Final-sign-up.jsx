import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'

export default function SignUp() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Sign = ()=>{
        if(password===confirmPassword){
            const pop = document.querySelector('.pop');
            pop.classList.add('effect');
        }else{
            alert('Passwords do not match!');
        }
    }

    return (
        <>
        <div className="main">
                <div className="signup">
                    <h1>Sign Up for Whatschat</h1><br/>
                    <img src="https://accounts.snapchat.com/accounts/static/images/ghost/snapchat-app-icon.svg" width="60px"></img>
                </div>
                <div className="form">
                    <div className="fields"><p>Name</p><input type="text" /></div>
                    <div className="fields"><p>Email-ID</p><input type="text" /></div>
                    <div className="fields"><p>Mobile</p><input type="text" /></div>
                    <div className="fields"><p>Password</p><input type="password" 
                    onChange={(e) => {setPassword(e.target.value)}}/></div>
                    <div className="fields"><p>Confirm Password</p><input type="password" 
                    onChange={(e) => {setConfirmPassword(e.target.value)}}/></div>
                    <button className="btn5" onClick={Sign}>Sign Up Now</button>
                </div>
                <div className="pop">
                    Account Created Successfully !!
                    <br />
                    Click here to login<br/>
                    <button className="btn5">
                        <Link to="/signin" style={{ textDecoration: 'none', color: "white"}}>Login</Link>
                    </button>
                </div> 
        </div>
        </>
    )
}
