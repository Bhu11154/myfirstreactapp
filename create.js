import React, { useState, useEffect } from 'react'

const Sign = () =>{

    const [text, setText] = useState(true);

    const pop = () => {
        const popUp = document.querySelector(".pop");
        console.log("Targeted popUp");
        popUp.classList.add("effect");
    }

    const [chat, setChat] = useState(false);
    
    const nextSection = () => {
        setChat(true);
    }

    const nextPage = () => {
        setText(false);
    }

    return (
        <>  
            {/* <video autoPlay loop muted><source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></source></video> */}
            <div className="box">
                <div className="container">
                <div className="signup">
                    <h2>Sign Up for Whatschat</h2><br/>
                    <img src="https://accounts.snapchat.com/accounts/static/images/ghost/snapchat-app-icon.svg" width="60px"></img>
                </div>
                <div className="form">
                    <div className="fields"><p>Name</p><input type="text" /></div>
                    <div className="fields"><p>Email-ID</p><input type="text" /></div>
                    <div className="fields"><p>Mobile</p><input type="text" /></div>
                    <div className="fields"><p>Password</p><input type="password" /></div>
                    <div className="fields"><p>Confirm Password</p><input type="password" /></div><br/>
                    <button action="submit" className="btn" onClick = {pop}>Sign Up Now</button>
                </div>
                <div className="pop">
                    Account Created Successfully !!
                    <br />Click here to login<br/><button className="btn" onClick = {nextPage}>Login</button>
                </div>
            </div>
            </div>
        
        </>


    );
}

export default Sign;