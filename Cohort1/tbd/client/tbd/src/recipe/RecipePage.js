import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./recipe.css";

// api call to get the recipe with the given id
const getRecipe = async (requesturl, setRecipe) => {
	const recipes = await axios.get(requesturl);
	setRecipe(recipes.data);
}


export default function RecipePage() {
	const { id } = useParams();
	const baseurl = 'https://2023-cohort-projects-production.up.railway.app/';
	const apiurl = 'api/recipes/';
	const requesturl = baseurl + apiurl + id;
	const [recipe, setRecipe] = useState({});


	useEffect(() => {
		getRecipe(requesturl, setRecipe);
	}, [requesturl]);

	// if there is a recipe then loaded()
	const loaded = () => {
		return (
			<div>
				<img id="sample-image" src="https://thumbs.dreamstime.com/b/colourful-various-herbs-spices-cooking-dark-background-herbs-spices-cooking-dark-background-113655482.jpg" alt="spoons with spices"></img>
				<h2>Title: {recipe.title}</h2>
				<h3>Decscription: {recipe.description}</h3>

				<div id="ingredients-container">
					<div className="list-container">
						<h3>Ingredient List</h3>
						<ul>
							{
								recipe.ingredientsList &&
								recipe.ingredientsList.map((ingredient) => {
									return (<li>{ingredient.quantity} {ingredient.ingredientName}</li>)
								})
							}
						</ul>
					</div>
					<div className="list-container">
						<h3>Steps List</h3>
						<ol>
							{
								recipe.stepsList &&
								recipe.stepsList.map((step) => {
									return (<li>{step}</li>)
								})
							}
						</ol>
					</div>
				</div>
				<div id="other">
					<h4>Cuisine Type: {recipe.cuisineType}</h4>
					<h4>Category: {recipe.category}</h4>
					<h4>Rating: {recipe.rating}</h4>
				</div>
			</div>

		)
	}

	const loading = () => {
		return (
			<>
				<h1>Loading...</h1>
				<h2> Sample Recipe</h2>

				<h2>Title: Ham Sandwich</h2>
				<h3>Decscription: Pretty self-explanatory</h3>

				<h3>Ingredient List</h3>
				<ul>
					<li>2 slices bread</li>
					<li>3 slices ham</li>
					<li>2 Tbsp mustard</li>
				</ul>

				<h3>Steps List</h3>
				<ol>
					<li>place 2 slices bread on plate</li>
					<li>spread mustard on both slices of bread</li>
					<li>put ham on mustard side of one slice of bread</li>
					<li>put the slices together with the ham and mustard facing in</li>
				</ol>

				<h4>Cuisine Type: American</h4>
				<h4>Category: Snack</h4>
				<h4>Rating: 5</h4>

			</>
		)
	}

	return (
		recipe ? loaded() : loading()
	)
};
