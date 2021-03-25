const ENDPOINTS = (() => {
  const CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const FOOD_ITEM_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const CATEGORY_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

  const categoryUrl = (category) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  const categoriesUrl = () => 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const foodItemUrl = (foodId) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;

  return {
    categoryUrl,
    categoriesUrl,
    foodItemUrl,
    CATEGORIES_URL,
    FOOD_ITEM_URL,
    CATEGORY_URL,
  };
})();

export default ENDPOINTS;
