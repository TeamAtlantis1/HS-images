var db = require('../db/index.js')
var faker = require('faker');

// These are 20 static images files to use for each of the 100 Airbnb listings
const sampleStaticData = ['file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/1.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/2.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/3.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/4.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/5.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/6.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/7.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/8.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/9.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/10.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/11.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/11.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/12.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/13.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/14.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/15.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/16.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/17.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/18.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/19.jpeg',
'file:///Users/helenjsoh/Desktop/HS-images/CarouselPics/20.jpeg']

const listingData = [];
const imageData = [];

// This fn will create 100 listing objs with an arr of 8-10 image objs
const createMockData = () => {
    // This loop will create 100 listing objs
    for (let i = 0; i < 100; i++) {
        let id = i;

        // This loop will generate 8-10 images objs for ea listing
        let randomNum = Math.floor(Math.random() * 3) + 8;

        let listing = {
            id: id,
            count: randomNum
        }
        listingData.push(listing);

        for (let j = 0; j < randomNum; j++) {
            let url = sampleStaticData[Math.floor(Math.random() * Math.floor(20))];
            let caption = faker.lorem.sentence();
            let imageObj = {
                // Listing_id points to the listing it belongs to
                listing_id: id,
                image_url: url,
                image_caption: caption,
            }
            imageData.push(imageObj);
        };
    }
};

createMockData();

// Run this function once to load the mockData into mongoDB.
const loadListingCollection = () => {
    for (let i = 0; i < listingData.length; i++) {
        let data = new db.Listing({
            id: listingData[i].id,
            count: listingData[i].count
        })
        data.save((err, data) => {
            if (err) {
                console.log('Could not save listing data', err);
            } else {
                console.log('Listing data has been saved.')
            }
        })
    }
};

const loadImageCollection = () => {
    for (let i = 0; i < imageData.length; i++) {
        let data = new db.Image({
            id: imageData[i].listing_id,
            image_url: imageData[i].image_url,
            image_caption: imageData[i].image_caption
        })
        data.save((err, data) => {
            if (err) {
                console.log('Could not save image data', err);
            } else {
                console.log('Image data has been saved.')
            }
        })
    }
};

loadListingCollection();
loadImageCollection();