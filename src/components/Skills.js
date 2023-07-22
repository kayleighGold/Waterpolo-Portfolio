import React from "react";
import ProgressBar from "./Progress";

export default function Skills (){
    
    return (
        <section id="skills" class="skills section-bg bg-light">
          <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>Skills</h2>
                  <p>
                  Through experiences in industy, acedemics, and personal projects, I have acquired a variety of software development, cybersecurity, and math skills, honing my expertise in creating secure and efficient solutions.
                  </p>
                </div>
                <div class="row skills-content">    
                  <div class="col-lg-6">
                    <ProgressBar skill= {"Object Oriented Programming (OOP)"} progress={4} timeFrame={"Years"}/>
                    <ProgressBar skill= {"Web Development"} progress={2} timeFrame={"Years"}/>
                    <ProgressBar skill= {"DevSecOps"} progress={1} timeFrame={"Year"}/>
                  </div>
                  <div class="col-lg-6">
                    <ProgressBar skill= {"Abstract Algorithms and Data-structures"} progress={2} timeFrame={"Years"}/>  
                    <ProgressBar skill= {"Agile/Scrum Development"} progress={1} timeFrame={"Years"}/>
                    <ProgressBar skill= {"Penetation Testing"} progress={6} timeFrame={"Months"}/>
                  </div>
                </div>
            </div>
        </section>
    );
    
}