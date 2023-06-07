import React from "react";
import PortfolioItem from "./PortfolioItem";

export default function Desc(){
    return (
        <section id="portfolio" class="portfolio section-bg bg-light">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
            <h2>Portfolio</h2>
            <p>My portfolio encompasses a diverse range of projects in cybersecurity, software development, and mathematics. Overall, my portfolio showcases my multidisciplinary skills and my dedication to creating secure, efficient, and innovative solutions.</p>
            </div>
                <div class="row">
                <div class="col-lg-4 text-center">
                    <PortfolioItem Title="Cybersecurity" 
                            Desc="Cyber security credials and Projects."
                            Image="terminal"
                        />
                    </div>
                    <div class="col-lg-4 text-center">
                    <PortfolioItem Title="Software Development" 
                            Desc="Skills and Projects."
                            Image="code"
                        />
                    </div>
                    <div class="col-lg-4 text-center">
                    <PortfolioItem Title="Mathematics" 
                            Desc="Skills and classes."
                            Image="math"
                        />
                    </div>
                    
                </div>
            </div>
          </section>
    );
}