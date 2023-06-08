import React, { useState } from "react";
import PropTypes from 'prop-types';


export default function PortfolioItem({closeFunc, children}){
    return (
        <div>
            <button className="close" onClick={closeFunc}>            
                &times;          
            </button>
            {children}
        </div>
    );
}

PortfolioItem.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element), 
      PropTypes.element.isRequired
    ]),
}