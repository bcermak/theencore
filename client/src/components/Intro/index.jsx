import React, { Component} from "react";
import "./index.css"

class Intro extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h4 className="welcome"> Welcome Back </h4>
                    </div>
                </div>    
            </div>
        );
    };
};

export default Intro