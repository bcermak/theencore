import React, { Component} from "react";
import axios from "axios";
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

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            title: this.state.title,
            body: this.state.body
        };

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
        .then(() => {
            console.log('Data has been sent to the server')
        })
        .catch(() => {
            console.log('Internal Server Error!')
        })
    }

    render() {
        console.log('State:', this.state)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form 
                            className="mainForm"
                            onSubmit={this.submit}>
                            <div className="form-input">
                                <input
                                required 
                                type="text" 
                                name="title"
                                placeholder="Enter Title" 
                                value={this.state.title}
                                onChange={this.handleChange}   
                                />
                            </div>
                            <div className="form-input">
                                <textarea 
                                required name="body" 
                                placeholder="How was the show?" 
                                cols="30" row="10" 
                                value={this.state.body}
                                onChange={this.handleChange}  
                                ></textarea>
                            </div>
                            <a href="/" className="btn btn-secondary">Cancel</a>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="postHolder col-md-12">
                        <div className="">
                            <h3 className="postTitle"> Title: </h3>
                            <h3 className="postDescription">Description: </h3>
                            <p className="postBody"></p>
                            <p className="postDate">Date Posted: </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


    


