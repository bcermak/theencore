import React from "react";
import "./style.css";



export default function PostForm() {
    return <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mainForm">
                            <div className="form-group">
                                <label for="title"> Title </label>
                                <input required type="text" name="title" id="title" class="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label for="description"> Description </label>
                                <textarea required type="text" name="description" id="description" class="form-control">     
                                </textarea>
                            </div>
                            <div class="form-group">
                                <label for="markdown"> Markdown </label>
                                <textarea required type="text" name="markdown" id="markdown" class="form-control">     
                                </textarea>
                            </div>
                            <a href="/" class="btn btn-secondary">Cancel</a>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mainForm">
                            <div className="form-group">
                                <label for="title"> Title </label>
                                <input required type="text" name="title" id="title" class="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label for="description"> Description </label>
                                <textarea required type="text" name="description" id="description" class="form-control">     
                                </textarea>
                            </div>
                            <div class="form-group">
                                <label for="markdown"> Markdown </label>
                                <textarea required type="text" name="markdown" id="markdown" class="form-control">     
                                </textarea>
                            </div>
                            <a href="/" class="btn btn-secondary">Cancel</a>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

    
}
