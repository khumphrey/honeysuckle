import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <header>
    <div className="logo">H&E</div>
    <nav>
        {/* The navbar will show these links before you log in */}
        <Link className="nav-item" to="/login">Login</Link>
        <Link className="nav-item" to="/signup">Sign Up</Link>
    </nav>
  </header>
)

export default Navbar
