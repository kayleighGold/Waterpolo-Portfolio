import React from "react";

export default function About () {
    var profileImage = require("../assets/img/profile-img.jpg");
    return (
        <section id="about" className="about bg-light">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>About</h2>
                </div>

                <div className="row">
                <div className="col-lg-4">
                    <img src={profileImage} className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Computer Science Student &amp; Software Developer.</h3>
                    <p className="fst-italic">
                    Computer Science B.S. | Concentration in Software Security | Minor in Mathematics at Gonzaga University
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                            <li><i className="bi bi-chevron-right"></i> <strong>LinkedIn:</strong> <span><a className="link-offset-2 link-underline link-underline-opacity-0" href="https://www.linkedin.com/in/connor-goldschmidt/">connor-goldschmidt</a></span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>cgoldschmidt04@gmail.com</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Spokane, WA</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>University:</strong> <span>Gonzaga</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Computer Science (BS)</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Minor:</strong> <span>Mathematics</span></li>
                            </ul>
                        </div>
                    </div>
                    <p>
                    Hi! I’m Connor an enthusiastic computer science student and software developer with a passion for technology. My experiences with personal projects, academics, and industry, have cultivated my passion and my goal is to pursue a career in this ever-evolving field. Throughout my journey, I've gained expertise in data structures, algorithms, and programming languages. I enjoy collaborating with diverse teams to create innovative solutions that positively impact people's lives. My portfolio showcases a range of projects, from web and mobile applications to software tools. I take pride in writing clean, scalable code and have a keen interest in cybersecurity and mathematics. 
                    </p>
                </div>
                </div>
            </div>
        </section>
    );
}
