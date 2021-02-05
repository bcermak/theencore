import React, { Component} from "react";
import axios from "axios";
import "./style.css";

export default class PostForm extends Component {
    
        state = {
            title:'',
            body: '',
            posts: []
        };
    

    componentDidMount = () => {
        this.getBlogPost();
    }

    getBlogPost = () => {
        axios.get('/api')
          .then((response) => {
            const data = response.data;
            this.setState({ posts: data });
            console.log('Data has been received');
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
      }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
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
            console.log('Data has been sent to the server');
            this.resetUserInputs();
        })
        .catch(() => {
            console.log('Internal Server Error!');
        })
    }

    resetUserInputs = () => {
        this.setState({
            title: '',
            body: ''
        })
    };

    displayPost = (posts) => {
        if (!posts.length) return null;

        return posts.map((post, index) => {
            <div key={index}>
                <h4> {post.title}</h4>
                <p> {post.body}</p>
            </div>


        });

    };

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
                    <div className="col-md-12">
                        <div className="blog-">
                            {this.displayPost(this.state.posts)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


    


