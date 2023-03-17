const mongoose = require('./connection');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  ingredientsList:
    { type: [{ quantity: String, ingredientName: String }], required: true },
  stepsList: { type: [String], required: true },
  cuisineType: String,
  category: String,
  rating: Number,
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
