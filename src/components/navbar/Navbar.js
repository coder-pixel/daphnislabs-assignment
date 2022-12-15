import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbarContainer">
                <div className="logoDiv">
                    <div className="logo">
                        {/* <img src="" alt="" /> */}
                    </div>
                    <span>Medical Darpan</span>
                </div>

                <nav className="menuDiv">
                    <span>Home</span>
                    <span>Products</span>
                    <span>Distributors</span>
                    <span>Manufacturers</span>
                    <span>About Us</span>
                    <span>Blog</span>
                </nav>

                <div className="loginDiv">
                    <span>Login</span>
                    <span className="material-symbols-outlined">account_circle</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar