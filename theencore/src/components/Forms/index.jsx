import React from "react";
import "./style.css";
import "./script"



export default function PostForm() {
    return <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mainForm">
                            <div className="btn-group float-left" id="myDropdown">
                            <a class="btn dropdown-toggle" dataToggle="dropdown" href="#">
                                Menu
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Choice1</a></li>
                                <li><a href="#">Choice2</a></li>
                                <li><a href="#">Choice3</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Choice..</a></li>
                            </ul>
                            </div>
                            <div className="form-group">
                                <label for="title"> Title </label>
                                <input required type="text" name="title" id="title" class="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label for="description"> How was the show? </label>
                                <textarea required type="text" name="description" id="description" class="form-control">     
                                </textarea>
                            </div>
                            <a href="/" class="btn btn-secondary">Cancel</a>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="postHolder col-md-12">
                        <div className="">
                            <h3 className="postTitle">Title: </h3>
                            <h3 className="postDescription">Description: </h3>
                            <p className="postBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, exercitationem architecto. Saepe sapiente nulla accusantium doloremque nobis architecto distinctio, in, officiis sit eaque commodi illum reprehenderit iure quod dicta molestias.</p>
                            <p className="postDate">Date Posted: </p>
                        </div>
                    </div>
                </div>
            </div>

    
}
