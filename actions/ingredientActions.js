const Ingredient = require('../db/models/ingredient');

module.exports = {

	async getAllIngredients(req, res) {
		try {
			const ingredients = await Ingredient.find().exec();
			res.send(ingredients);
		}
		catch (err) {
			console.error(err);
		}
	},

	async getIngredient(req, res) {
		try{
			const id = req.params.id;
			const ingredient = await Ingredient.findById(id).exec();
			res.send(ingredient);
		}
		catch (err) {
			console.error(err);
		}
	},

	async addIngredient(req, res) {
		try {
			const data = req.body;
			const newIngredient = new Ingredient(data);
			await newIngredient.save();
			res.send(newIngredient);
		}
		catch (err) {
			console.error(err);
		}
	},

	async addManyIngredients(req, res) {
		try {
			const ingredients = req.body;
			console.log('ingredients :>> ', ingredients);
			Ingredient.insertMany(ingredients);
			res.send('OK');
		}
		catch (err) {
			console.error(err);
		}
	},

	async updateIngredient(req, res) {
		try {
			const data = req.body;
			const id = req.params.id;

			const updatedIngredient = await Ingredient.findByIdAndUpdate(id, data, { new: true }).exec();
			res.send(updatedIngredient);
		}
		catch (err) {
			console.error(err);
		}
	},

	async deleteIngredient(req, res) {
		try{
			const id = req.params.id;
			const ingredient = await Ingredient.findByIdAndRemove(id).exec();
			res.send(ingredient);
		}
		catch (err) {
			console.error(err);
		}
	}
}