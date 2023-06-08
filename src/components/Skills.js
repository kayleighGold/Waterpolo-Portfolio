import React from "react";
import ProgressBar from "./Progress";

export default function Skills (){
    
    return (
        <section id="skills" class="skills section-bg bg-light">
          <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>Skills</h2>
                  <p>I do my best to stay on top of cybersecurity to keep digital spaces secure, and I enjoy dabbling in software development, creating programs that hopefully make a positive impact. I also have a decent grasp of mathematics, which comes in handy when tackling tricky problems.</p>
                </div>
                <div class="row skills-content">    
                  <div class="col-lg-6">
                    <ProgressBar skill= {"C++"} progress={3} timeFrame={"Years"}/>
                    <ProgressBar skill= {"Java"} progress={3} timeFrame={"Year"}/>
                    <ProgressBar skill={"Python"} progress={1} timeFrame={"Year"}/>
                    <ProgressBar skill={"Linux"} progress={3} timeFrame={"Years"}/>
                  </div>
                  <div class="col-lg-6">
                    <ProgressBar skill={"Bootstrap"} progress={6} timeFrame={"Months"}/>
                    <ProgressBar skill={"HTML"} progress={1} timeFrame={"Year"}/>
                    <ProgressBar skill={"CSS"} progress={1} timeFrame={"Years"}/>
                    <ProgressBar skill={"Javascript"} progress={6} timeFrame={"Months"}/>
                  </div>
                </div>
            </div>
        </section>
    );
    
}