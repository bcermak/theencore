const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Setting up Mongoose connection
mongoose.connect('mongodb://localhost/encore_posts',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', ()=>{
    console.log("Mongoose is connected to DB")
})

// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
   title: String,
   body: String,
   date: {
       type: String,
       default: Date.now()
   } 
});

// Model
const BlogPost = mongoose.model('Blogpost', BlogPostSchema)

// Saving data to mongo database
const data = {
    title: 'Welcome',
    body: 'Test body'
};

const newBlogPost = new BlogPost(data) // instance of the model (above)

// newBlogPost.save((error)=> {
//     if (error) {
//         console.log('Oops, error');
//     } else {
//         console.log('Data has been saved!')
//     }
// })

// .save();


// HTTP request logger

app.use(morgan('tiny'));

app.get('/api', (req, res) => {
 
    BlogPost.find({})
        .then((data)=> {
            console.log(data);
            res.json(data);
        })
        .catch((error)=> {
            console.log(error)
        });

    res.json (data);
})

app.get('/api/name', (req, res) => {
    const data = {
        username: 'SHTSTX',
        age: 57
    }
    res.json (data);
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`))