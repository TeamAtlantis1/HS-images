var db = require ('../db/index.js');

let findAllListings = (callback) => {
    db.Listing.find({}, callback);
};

let findAllImages = (callback) => {
    db.Image.find({}, callback)
};

module.exports = {findAllListings, findAllImages}