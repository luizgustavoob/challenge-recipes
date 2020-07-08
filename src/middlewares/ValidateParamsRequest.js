const MAX_INGREDIENTS = 3;

module.exports = {

  checkRequiredIngredients(req, res, next) {
    if (!req.query || !req.query.i) {
      return res.status(400).json({ error: 'Query param "i" is required' })
    }

    next();
  },

  checkLengthIngredients(req, res, next) {
    const { i } = req.query;
    const ingredients = i.split(',');
    
    if (ingredients.length > MAX_INGREDIENTS) {
      return res.status(400).json({ error: `Limit of ingredients is ${MAX_INGREDIENTS}` })
    }

    next();
  }
}