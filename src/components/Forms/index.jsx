import React, { Component} from "react";
import Axios from "axios";
import "./style.css";

export default class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            body: "",
            date: "" 
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mainForm">
                            <div className="form-input">
                                <input
                                required 
                                type="text" 
                                name="title"
                                placeholder="Enter Title" 
                                value={this.state.title}
                                // onChange={2}    
                                />
                            </div>
                            <div className="form-input">
                                <textarea 
                                required name="body" 
                                placeholder="How was the show?" 
                                cols="30" row="10" 
                                value={this.state.body}
                                // onChange={2}
                                ></textarea>
                            </div>
                            <a href="/" className="btn btn-secondary">Cancel</a>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="postHolder col-md-12">
                        <div className="">
                            <h3 className="postTitle">{this.state.title}  </h3>
                            <h3 className="postDescription">Description: </h3>
                            <p className="postBody">{this.state.body}</p>
                            <p className="postDate">Date Posted: {this.state.date} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


    


