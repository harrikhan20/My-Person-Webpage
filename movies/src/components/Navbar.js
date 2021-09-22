import React from "react"
import {Link } from 'react-router-dom'


function Navbar(props) {

return (
    <nav>
        
    <Link to="/">All Reviews</Link>
    <br/>
    <Link to="/reviews/new">Create A New Review</Link>
    
    </nav>
) 




}




export default Navbar