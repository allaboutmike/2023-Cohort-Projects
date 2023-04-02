const mongoose = require("../server/models/connection");
// require("./connection");
const Recipe = require("../server/models/recipes");
// require("./recipes");

const db = mongoose.connection;

db.on("open", () => {
    const startRecipes = [
        {
            title: "Peanut Butter and Jelly Sandwich",
            description: "pretty self-explanatory",
            ingredientsList: [
                {quantity: "2 slices", ingredientName: "bread"}, 
                {quantity: "2 Tbsp", ingredientName: "peanut butter"},
                {quantity: "2 Tbsp", ingredientName: "jelly"}
            ],
            stepsList: [
                "place 2 slices bread on plate", 
                "spread peanut butter on on slice",
                "spread jelly on the other slice",
                "put the slices together with the peanute butter and jelly facing each other"
            ],
            cuisineType: "American",
            category: "snack",
            rating: 5
        }, 
        {
            title: "Peanut Butter and Grape Jelly Sandwich",
            description: "pretty self-explanatory",
            ingredientsList: [
                {quantity: "2 slices", ingredientName: "bread"}, 
                {quantity: "2 Tbsp", ingredientName: "peanut butter"},
                {quantity: "2 Tbsp", ingredientName: "grape jelly"}
            ],
            stepsList: [
                "place 2 slices bread on plate", 
                "spread peanut butter on on slice",
                "spread grape jelly on the other slice",
                "put the slices together with the peanute butter and grape jelly facing each other"
            ],
            cuisineType: "American",
            category: "snack",
            rating: 5
        },
        {
            title: "Peanut Butter and Nutella Sandwich",
            description: "pretty self-explanatory",
            ingredientsList: [
                {quantity: "2 slices", ingredientName: "bread"}, 
                {quantity: "2 Tbsp", ingredientName: "peanut butter"},
                {quantity: "2 Tbsp", ingredientName: "nutella"}
            ],
            stepsList: [
                "place 2 slices bread on plate", 
                "spread peanut butter on on slice",
                "spread nutella on the other slice",
                "put the slices together with the peanute butter and nutella facing each other"
            ],
            cuisineType: "American",
            category: "snack",
            rating: 5
        },        
        {
            title: "Ham Sandwich",
            description: "pretty self-explanatory",
            ingredientsList: [
                {quantity: "2 slices", ingredientName: "bread"}, 
                {quantity: "3 slices", ingredientName: "ham"},
                {quantity: "2 Tbsp", ingredientName: "mustard"}
            ],
            stepsList: [
                "place 2 slices bread on plate", 
                "spread mustard on both slices of bread",
                "put ham on mustard side of one slice of bread",
                "put the slices together with the ham and mustard facing in"
            ],
            cuisineType: "American",
            category: "snack",
            rating: 5
        },        
        {
            title: "Ham and Cheese Sandwich",
            description: "pretty self-explanatory",
            ingredientsList: [
                {quantity: "2 slices", ingredientName: "bread"}, 
                {quantity: "3 slices", ingredientName: "ham"},
                {quantity: "2 slices", ingredientName: "cheese"},
                {quantity: "2 Tbsp", ingredientName: "mustard"}
            ],
            stepsList: [
                "place 2 slices bread on plate", 
                "spread mustard on both slices of bread",
                "put ham on mustard side of one slice of bread",
                "put cheese on mustard side of the other slice of bread",
                "put the slices together with the ham and cheese and mustard facing in"
            ],
            cuisineType: "American",
            category: "snack",
            rating: 5
        }
    ]

    Recipe.deleteMany({}).then((data) => {
        // seed starter receipes
        Recipe.create(startRecipes).then((data) => {
            // log the recipes
            console.log('data', data);
            db.close();
        })
        .catch((error) => {
            console.log(error);
            db.close();
        })
    })

})