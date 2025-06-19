// Footer date fetch 
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
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

