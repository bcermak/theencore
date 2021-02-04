const express = require('express');
const router = express.Router();

const BlogPost = require('../models/blogPost')

// Routes
router.get('/', (req, res) => {
 
    BlogPost.find({})
        .then((data)=> {
            console.log(data);
            res.json(data);
        })
        .catch((error)=> {
            console.log(error)
        });
})

router.get('/name', (req, res) => {
    const data = {
        username: 'SHTSTX',
        age: 57
    }
    res.json (data);
})

module.exports = router;