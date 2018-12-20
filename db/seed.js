import mockData from '../../Airbnb/mockdata';
import db from '../db/index';
// arr of static urls
// loop over mockData and replace image URL's with new URL's
// loop over mockData ???
// change listing ID # ???


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

// This function will create 100 listings with 8-10 image URLS
const createListings = () => {
    // This will create 100 listings
    for (var i = 0; i < 100; i++) {
        let imagesArr = [];
        // Generates num btwn 8 - 10
        let randomNum = Math.floor(Math.random() * 3) + 8;
        let listing = {
            id: i,
            images: {
                // for (var i = 0; i < randomNum; i++) {
                //     url: [], 
                //     caption: // 
                // };
            }
        }
    }
};


// Run this function once to load the mockData into mongoDB.
const loadDB = (mockData) => {
    for (var i = 0; i < mockData.length; i++) {
        let data = new db.Image({
            id: mockData.id,
            listingID: mockData.listingID,
            listingUrl: mockData.listingUrl,
            imageUrl: mockData.imageUrl,
            caption: mockData.caption
        })

        data.save((err, data) => {
            if (err) {
                console.log('Could not save data', err);
            } else {
                console.log('Data has been saved.')
            }
        })
    }
};