const express = require('express');
const Recipe = require('../models/recipes');
const { URLSearchParams } = require('url');

const router = express.Router();

//Index (GET all)
router.get("/", async (req, res) => {
    let url = new URL(req.protocol + '://' + req.hostname + req.originalUrl);
    let params = new URLSearchParams(url.search)
    let searchIngredients = params.getAll('ingredient');

    if (searchIngredients.length === 0) {
        try {
            const recipes = await Recipe.find({});
            res.json(recipes);

        } catch (err) {
            res.json({ err });
        }
    }
    else {
        // for multiple ingredients, iterate through array of searchIngredients
        // after try/catch, if there are recipes, compare to saved recipes and only save the ones in both
        // for partial matching, a more complex data structure would be needed
        try {
            const recipes = await Recipe.find({
                "ingredientsList.ingredientName": searchIngredients[0]
            });
            res.json(recipes);

        } catch (err) {
            res.json({ err });
        }
    }
    })


module.exports = router;