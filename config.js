module.exports = {
    port: process.env.PORT || 3000,
    database: process.env.DATABASE || 'mongodb://127.0.0.1:27017/foodDb',
    apiKey: process.env.API_KEY || 'test'
}