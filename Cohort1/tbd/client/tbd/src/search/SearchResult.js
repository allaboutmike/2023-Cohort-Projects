export default function SearchResult(props) {
	const recipe = props.recipe;
	const recipeUrl = 'recipe/' + recipe._id;
	console.log(recipe);
	return (
		<div className="search-result" key={recipe._id}>
			<a href={recipeUrl}>{recipe.title}</a>
		</div>
	);
}
