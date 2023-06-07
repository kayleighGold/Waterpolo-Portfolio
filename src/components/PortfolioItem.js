import React from "react";

export default function PortfolioItem(props){
    const {Title, Desc,Image} = props;
    return (
        <div>
            <div class="rounded-circle" alt="Generic placeholder image" width="140" height="140"><i class={"bx bx-lg bx-" + Image}></i></div>
            <h2><b>{Title}</b></h2>
            <p>{Desc}</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
    );
}