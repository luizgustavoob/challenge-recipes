const axios = require('axios');
const { getRecipeGiphy } = require('./GiphyService');

const BASE_URL = 'http://www.recipepuppy.com/api/';
const PAGE_NUMBER = 1;

module.exports = { 

  async getRecipesByIngredients(ingredients) {
    try {
      const recipes = await axios(BASE_URL, {
        params: {
          i: ingredients, 
          p: PAGE_NUMBER
        }
      });
      
      let response = [];

      for (const recipe of recipes.data.results) {
        const title = recipe.title.trim();
        const ingredients = recipe.ingredients.split(',').map(i => i.trim()).sort();
        const link = recipe.href;
        const gif = await getRecipeGiphy(title);

        response.push({ title, ingredients, link, gif });
      }
  
      return response;
    } catch(err) {
      throw new Error(err);
    }
  }
}