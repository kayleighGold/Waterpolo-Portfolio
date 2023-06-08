import React from "react";

export default function About () {
    var profileImage = require("../assets/img/profile-img.jpg");
    return (
        <section id="about" class="about bg-light">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                <h2>About</h2>
                </div>

                <div class="row">
                <div class="col-lg-4">
                    <img src={profileImage} class="img-fluid" alt=""/>
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Computer Science Student &amp; Software Developer.</h3>
                    <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                    <div class="row">
                    <div class="col-lg-6">
                        <ul>
                        <li><i class="bi bi-chevron-right"></i> <strong>LinkedIn:</strong> <span><a class="link-offset-2 link-underline link-underline-opacity-0" href="https://www.linkedin.com/in/connor-goldschmidt/">connor-goldschmidt</a></span></li>
                        <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>cgoldschmidt04@gmail.com</span></li>
                        <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Spokane, WA</span></li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul>
                        <li><i class="bi bi-chevron-right"></i> <strong>University:</strong> <span>Gonzaga</span></li>
                        <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Computer Science (BS)</span></li>
                        <li><i class="bi bi-chevron-right"></i> <strong>Minor:</strong> <span>Mathematics</span></li>
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
