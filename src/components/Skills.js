import React from "react";
import ProgressBar from "./Progress";

export default function Skills (){
    return (
        <section id="skills" class="skills section-bg">
          <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>Skills</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div class="row skills-content">    
                  <div class="col-lg-6">
                    <ProgressBar skill= {"Html"} progress={90} />
                    <ProgressBar skill= {"CSS"} progress={75} />
                    <ProgressBar skill={"Bootstrap"} progress={60} />
                  </div>
                  <div class="col-lg-6">
                    <ProgressBar skill={"PHP"} progress={80} />
                    <ProgressBar skill={"WordPress/CMS"} progress={90} />
                    <ProgressBar skill={"Photoshop"} progress={55} />
                  </div>
                </div>
            </div>
        </section>
    );
    
}