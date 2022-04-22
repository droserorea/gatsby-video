import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'



const Navbar = () => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/gallery" className={navLinkText}>Gallery</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/images" className={navLinkText}>Image List</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/articles" className={navLinkText}>Articles</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}
export default Navbar;
