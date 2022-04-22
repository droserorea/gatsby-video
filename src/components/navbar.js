import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const Navbar= ({path}) =>{
  return (
  <div>
    <li>
      <Link to="/">Dogs</Link>
    </li>
    <li>
      <Link to="/">Cats</Link>
    </li>
    <li>
      <Link to="/">Sheeps</Link>
    </li>
    <li>
      <Link to="/">Goats</Link>
    </li>
  </div>
  );
}

Navbar.propTypes = {
    path: PropTypes.string.isRequired,
}
export default Navbar;