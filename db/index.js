var mongoose = require('mongoose');
mongoose.connection('mongodb://localhost/images');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
    console.log('Now connected to mongoDB...');
}); 

var imageSchema = new mongoose.Schema({
    id: Number,
    images: [Object]
    // imageUrl: String,
    // caption: String
});

var Image = mongoose.model('Image', imageSchema);

module.exports = {Image}

// var imageSchema = new mongoose.Schema({
//     id: Number,
//     images: [Object],
//     listingID: Number,
//     listingUrl: String,
//     imageUrl: String,
//     caption: String
// });