import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <header>
    <div className="logo">H&E</div>
    <nav>
      <div>
        {/* The navbar will show these links before you log in */}
        <Link className="nav-item" to="/login">Login</Link>
        <Link className="nav-item" to="/signup">Sign Up</Link>
      </div>
    </nav>
  </header>
)

export default connect(null, null)(Navbar)
