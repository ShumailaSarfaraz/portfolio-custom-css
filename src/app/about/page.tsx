import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Skills } from "../components/Skills";

function About() {
    return (
        <div>
            <h1 className='heading' data-aos="zoom-in-up">About Me</h1>
            <img src="profile.jpg" alt="my-image" width={200} height={200} className='img1' data-aos="zoom-in-down"/>
            <h2 data-aos="fade-down-left">Microdosing synth tattooed vexillologist</h2>
            <p data-aos="flip-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestiae iusto ex tempore, illo veritatis repellendus dolores, optio officiis possimus ipsa et accusamus magni veniam cumque. Vel quos natus placeat nisi ea recusandae aliquam pariatur. Tenetur perspiciatis distinctio excepturi id!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est deserunt necessitatibus ad sed quia distinctio laborum et ea quos?</p>
            <div className="btn3">
            <button data-aos="flip-left"><FaLinkedin className="icon"/></button>
            <button data-aos="flip-left"><FaGithub className="icon1"/></button>
            <button data-aos="flip-left"><FaYoutube className="icon2"/></button>
            <button data-aos="flip-left"><FaFacebook className="icon3"/></button>
            <button data-aos="flip-left"><FaInstagram className="icon4"/></button>
            </div>
            <Skills />
        </div>
    )
}
export default About;
