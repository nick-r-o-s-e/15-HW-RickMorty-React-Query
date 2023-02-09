import { NavLink } from "react-router-dom"
import "./Navbar.scss" 

function Navbar() {
  return (
    <nav className="navbar">

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/characters/?page=1">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar