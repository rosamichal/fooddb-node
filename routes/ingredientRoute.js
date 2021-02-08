const express = require('express');
const router = express.Router();

const ingredientActions = require('../actions/ingredientActions');

router.get('/ingredients/', ingredientActions.getAllIngredients);

router.get('/ingredients/:id', ingredientActions.getIngredient);

router.post('/ingredients/', ingredientActions.saveIngredient);

router.put('/ingredients/:id', ingredientActions.updateIngredient);

router.delete('/ingredients/:id', ingredientActions.deleteIngredient);

module.exports = router;