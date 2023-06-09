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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
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
                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                    </p>
                </div>
                </div>
            </div>
        </section>
    );
}
