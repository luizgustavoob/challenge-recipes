const { getRecipesByIngredients } = require('../services/RecipePuppyService');

module.exports = {  

  async findRecipes(req, res) { 
    const { i } = req.query;
    const ingredients = i.split(',');

    try {
      const keywords = [...ingredients];
      const recipes = await getRecipesByIngredients(i);

      return res.json({ keywords, recipes });
    } catch(err) {
      return res.status(500).send({ error: err.message });
    }
  }
}