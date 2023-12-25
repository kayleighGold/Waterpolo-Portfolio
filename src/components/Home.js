import React, { Component , useEffect} from "react";
import Typed from 'typed.js';

export default function Home(){
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Rocky Mountain Neptunes", "Menziehill Whitehall", "Computer Science Student"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
            });
            return () => {
                // Destroy Typed instance during cleanup to stop animation
                typed.destroy();
              };
            }, []);

        return (
            <section id="home" className="d-flex flex-column justify-content-center">
                <div className="container">
                    <h1>Kayleigh Goldschmidt</h1>
                    <p><span className="typed" ref={el}></span></p>
                    <div class="social-links">
                        <a href="mailto:cgoldschmidt04@gmail.com" class="gmail"><i className="bx bxl-gmail"></i></a>
                        <a href="https://www.linkedin.com/in/connor-goldschmidt/" className="linkedin" target="_blank"><i className="bx bxl-linkedin"></i></a>
                        <a href="https://github.com/cgold264" class="github" target="_blank"><i className="bx bxl-github"></i></a>
                    </div>
                </div>
            </section>
        );
}