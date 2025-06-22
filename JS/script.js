// Footer date fetch 
$(document).ready(function() {
  $("#current-year").text(new Date().getFullYear());
});

// Recipie Finder logic
$(document).ready(function () {
// Recipes
  const recipes = [
  {
    name: "Anda Biryani",
    ingredients: ["rice", "egg", "onion"],
  },
  {
    name: "Daal Tarka",
    ingredients: ["daal", "onion", "tomato"],
  },
  {
    name: "Aloo Bhujia",
    ingredients: ["potato", "oil", "salt"],
  },
  {
    name: "Egg Toast",
    ingredients: ["bread", "egg", "salt"],
  },
];
// Recipes end

$("#ingredient-form").submit(function(e){
  // Prevent page from reloading when button is clicked
  e.preventDefault();

  // .val() gets input, .toLowerCase() turns input to lower case, trim() removes spaces
  const ing1= $("#ing1").val().toLowerCase().trim();
  const ing2= $("#ing2").val().toLowerCase().trim();
  const ing3= $("#ing3").val().toLowerCase().trim();

  // Filter Empty inputs 
  const userIngredients = [ing1, ing2, ing3].filter(Boolean);
  // Result Div 
  const resultDiv = $('#recipe-result');

  // Make sure user enters 1 ing 
  if (userIngredients.length === 0) {
      $('#recipe-result').html("⚠️ Please enter at least one ingredient.");
      return;
    }

  // Clear previous results
        resultDiv.empty();
  // Find matching recipes
        const matchingRecipes = recipes.filter(recipe => {
            return userIngredients.every(ingredient => recipe.ingredients.includes(ingredient));
        });
        // Display results
        if (matchingRecipes.length > 0) {
            matchingRecipes.forEach(recipe => {
                resultDiv.append(`<p>${recipe.name}</p>`);
            });
        } else {
            resultDiv.html("❌ No recipes found with the given ingredients.");
        }



})

});



