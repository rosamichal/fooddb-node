const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema
const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
	carbohydrates: {
        type: Number,
        required: true,
        min: 0
    },
	protein: {
        type: Number,
        required: true,
        min: 0
    },
	fat: {
        type: Number,
        required: true,
        min: 0
    }
});

// model
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;