import React from "react";
import {Waypoint} from "react-waypoint";

export default function ProgressBar(props){
    
        const {progress, skill, timeFrame} = props;
        const el = React.useRef(null);

        return (
            <div class="progress">
            <span class="skill">{skill} <i class="val">{progress} {timeFrame}</i></span>
            <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={50} aria-valuemax={100} ref={el}> 
                <Waypoint
                    onEnter={() => el.current.style.width = String(progress) + "%"}
                />       
                </div>
            </div>
          </div>
        );  
    
}