import React from 'react'
import { FaFacebook,FaUserFriends, FaPuzzlePiece} from "react-icons/fa"
import {CgProfile } from "react-icons/cg"
import {BsFillHouseFill} from "react-icons/bs"
import {MdOndemandVideo} from "react-icons/md"
import {AiOutlineShop} from "react-icons/ai"
import './HeadBar.css'

export default function HeadBar() {
    const size = 35;
    return (
        <>
            <div className="bar">
                <div className="left">
                    <FaFacebook  size={40} className="icon"/>
                    <input type="text" placeholder="Search Whatschat" className="se">
                    </input>
                </div>
                <div className="middle">
                    <BsFillHouseFill size={size} className="ic"/>
                    <FaUserFriends  size={size} className="ic"/>
                    <MdOndemandVideo  size={size} className="ic"/>
                    <AiOutlineShop  size={size} className="ic"/>
                    <FaPuzzlePiece  size={size} className="ic"/>
                </div>
                <div className="right">
                    <CgProfile size={size} className="ic"/>
                    <span className="name">CoronaVirus</span>
                </div>
                    
            </div>
        </>
    )
}
