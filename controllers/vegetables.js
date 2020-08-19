const express = require('express')
const router = express.Router()
const Vegetable = require("../models/vegetables.js")

//Index
router.get("/", (req, res)=>{
    Vegetable.find({}, (error, allVegetables)=>{
        res.render("vegetables/Index", {
            vegetables: allVegetables
        })
    })
})
module.exports = router

//New
//GET '/vegetables/new
router.get('/new', (req, res) => {
    res.render('vegetables/New');
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Vegetable.findByIdAndRemove(req.params.id, (err, vegetable) => {
        res.redirect('/vegetables');
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.isGreen = req.body.isGreen === "on" ? true : false;

    // Update the fruit document using our model
    Vegetable.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        console.log(updatedModel)
        res.redirect('/vegetables');
    });
});

//Create
// POST '/vegetables/'
//CREATE--- POST /vegetables/
router.post('/', (req, res) => {
    if (req.body.isGreen === "on") {
        req.body.isGreen = true;
    } else {
        req.body.isGreen = false;
    }
    // Use Model to create vegetable Document
    Vegetable.create(req.body, (error, createdVegetable) => {
        // Once created - respond to client
        res.redirect('/vegetables');
    });
  });

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        // render the edit view and pass it the found fruit
        res.render('vegetables/Edit', {
            vegetable: foundVegetable
        })
    });
});

  // Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Vegetable.findById(req.params.id, (error, foundVegetable) => {
        // render the Show route and pass it the foundVegetable
        res.render('vegetables/Show', {
            vegetable: foundVegetable
        });
    });
});