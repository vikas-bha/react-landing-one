import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
const Header = () => {
  return (
    <nav>
        <h1>by vikas bhardwaj</h1>
        <main>
            <HashLink to={"/"}>Home</HashLink>
            <Link to={"/Contact"}>Contact</Link>

            <HashLink to={"/#about"}>about</HashLink>      
            <HashLink to={"/#brands"}>brands</HashLink>
            <Link to={"/services"}>services</Link>

        </main>
    </nav>
  )
} 
// #about is div on the same which when clicked scrolls to that div
export default Header