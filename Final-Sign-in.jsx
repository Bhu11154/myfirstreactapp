import React from 'react'
import {Link} from 'react-router-dom'
import {  FaFacebookSquare } from "react-icons/fa"
import './SignIn.css'

export default function SignIn() {


    return (
        <div className="container2">
            <div className="intro">
                <p className="logo">
                    <FaFacebookSquare size={60} color="blue"/>
                    <span className="nameC">Whatschat</span>
                </p>
                <img src="https://econsultancy.imgix.net/content/uploads/2018/09/04155306/social-media-image-.jpg" className="Img"/>
            </div>
            <div className="form">
                    <div className="fields"><p>Username</p><input type="text" /></div>
                    <div className="fields"><p>Password</p><input type="password" /></div>
                    <button className="btn3">
                        <Link to="./mainpage" style={{ textDecoration: 'none', color: "white"}}>Login</Link>
                    </button>
                    <p className="forgot">Forgot your password ?</p>
                    <hr className="line" />
                    <button className="btn2">
                        <Link to="/" style={{ textDecoration: 'none', color: "white"}}>Create a new account</Link>
                    </button>
            </div>
        </div>
    )
}
