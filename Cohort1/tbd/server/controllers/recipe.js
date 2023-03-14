const express = require('express');
const Recipe = require('../models/recipes');
const { URLSearchParams } = require('url');

const router = express.Router();

//Index (GET all)
router.get("/", async (req, res) => {
    // console.log(`path: ${req.protocol}://${req.hostname}${req.originalUrl}`);
    let url = new URL(req.protocol + '://' + req.hostname + req.originalUrl);
    // console.log(url)
    // console.log('url searchparams')
    let params = new URLSearchParams(url.search)
    // console.log(params)
    // console.log('ingredients')
    let searchIngredients = params.getAll('ingredient');
    // console.log(searchIngredients)

    if (searchIngredients.length === 0) {
        try {
            const recipes = await Recipe.find({});
            res.json(recipes);

        } catch (err) {
            res.json({ err });
        }
    }
    else {
        // console.log('in search')

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

///api/recipes?q=ingredients[ingredient 1, ingredient 2]

module.exports = router;