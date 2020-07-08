const express = require('express');
const routes = express.Router();
const { checkRequiredIngredients, checkLengthIngredients } = require('./middlewares/ValidateParamsRequest');
const { findRecipes } = require('./controllers/RecipesController');

routes.get('/recipes', checkRequiredIngredients, checkLengthIngredients, findRecipes);

module.exports = routes;