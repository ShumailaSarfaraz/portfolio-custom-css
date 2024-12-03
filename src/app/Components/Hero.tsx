import React from "react";
import Image from "next/image";
import Link from "next/link";
function Hero() {
    return (
        <div className="Hero">
            <div className="img-div" data-aos="zoom-in-up">
                <img src="profile.jpg" alt="img" width={200} height={200} className="img"/>
            </div>
            <div className="Info-div">
                <h1 className="name" data-aos="zoom-in-up">Hello <br/> I am <br/> Shumaila Sarfaraz</h1>
                <div className="btn2">
                <button className="bt1"><Link href="/" className='bt-li'>About Me</Link></button>
                <button className="bt1"><Link href="/contact" className='bt-li'>Contact Me</Link></button>
                </div>
            </div>
        </div>
    )
}
export default Hero;