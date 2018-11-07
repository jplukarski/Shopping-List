const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route   Post api/items
// @desc    Create a post
// @access  Public
router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

module.exports = router;