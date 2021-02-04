import React, { Component} from "react";
import Axios from "axios";
import "./style.css";

export default class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "TBD",
            description: "Lorem Ipsom",
            date: "TBD" 
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mainForm">
                            <div className="btn-group float-left" id="myDropdown">
                            <a className="btn dropdown-toggle" datatoggle="dropdown" href="#">
                                Menu
                                <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Choice1</a></li>
                                <li><a href="#">Choice2</a></li>
                                <li><a href="#">Choice3</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Choice..</a></li>
                            </ul>
                            </div>
                            <div className="form-group">
                                <label> Title </label>
                                <input required type="text" name="title" id="title" className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label> How was the show? </label>
                                <textarea required type="text" name="description" id="description" className="form-control">     
                                </textarea>
                            </div>
                            <a href="/" className="btn btn-secondary">Cancel</a>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="postHolder col-md-12">
                        <div className="">
                            <h3 className="postTitle"> {this.state.title}  </h3>
                            <h3 className="postDescription">Description: </h3>
                            <p className="postBody">{this.state.description}</p>
                            <p className="postDate">Date Posted: {this.state.date} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


    


