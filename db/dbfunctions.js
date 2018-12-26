var db = require ('../db/index.js');

let findAllListings = (callback) => {
    db.Listing.find({}, callback);
};

let findAllImages = (callback) => {
    db.Image.find({}, callback)
};


let findImagebyID = (listingID, callback) => {
    return db.Image.find({
        id: listingID
    }).exec();
};

module.exports = {findAllListings, findAllImages, findImagebyID}    