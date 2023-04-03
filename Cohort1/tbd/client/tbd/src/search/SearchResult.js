export default function SearchResult(recipe) {
	const recipeUrl = 'recipe/' + recipe._id;
	return (
		<div class="search_result">
			<a href={recipeUrl}>{recipe.title}</a>
		</div>
	);
}
