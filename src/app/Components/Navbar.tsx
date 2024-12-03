import React from "react";
import Link from "next/link";
function Navbar() {
    return (
        <div className="main">
        <header className="Nav">
            <div className="logo">
                <h2 className="logo" data-aos="flip-left">Shumaila</h2>
            </div>
            <div className="navigate">
                <ul>
                    <li><Link href="/" className='link'>Home</Link></li>
                    <li><Link href="/about" className='link'>About</Link></li>
                    <li><Link href="/projects" className='link'>Projects</Link></li>
                    <li><Link href="/contact" className='link'>Contact</Link></li>
                </ul>
            </div>
            <div className="btn">
                <button className="bt" data-aos="flip-left">Download CV</button>
            </div>
        </header>
        </div>
    )
}
export default Navbar;