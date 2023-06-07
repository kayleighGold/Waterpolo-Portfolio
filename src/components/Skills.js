import React from "react";
import ProgressBar from "./Progress";

export default function Skills (){
    
    return (
        <section id="skills" class="skills section-bg bg-light">
          <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>Skills</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
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