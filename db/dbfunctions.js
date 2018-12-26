var db = require ('../db/index.js');

let findAllListings = (callback) => {
    db.Listing.find({}, callback);
};

let findAllImages = (callback) => {
    db.Image.find({}, callback)
};


let findImagebyID = (id, callback) => {
    db.Image.findOne({
        id: id
    }, callback);
};

module.exports = {findAllListings, findAllImages, findImagebyID}