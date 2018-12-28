import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Styles from './components/styles.css'
// import Grid from 'react-css-grid';
import axios from 'axios';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            pictures: [],
            imageA: false,
            imageB: false,
            imageC: false,
            imageD: false,
            imageE: false
        };
        // Bind methods here
        this.onMouseEnter = this.onMouseEnter.bind(this);
    }
    // Write methods here   
    // Retrieve photos?

    componentDidMount() {
        // Axios request to get all images by listing ID #
    }

    onMouseEnter(clickedImage) {
        console.log('onHover has run on >>>>>>>', clickedImage);

        if (clickedImage === 'a') {
            $(`.${clickedImage}`).hover(() => { // on over
                $(`.b, .c, .d, .e`).animate({
                    opacity: 0.25,
                    transform: scale(1.5)
                })
            },
            () => { // on out
                $(`.b, .c, .d, .e`).animate({
                    opacity: 1
                })
            })
        }


        if (clickedImage === 'b') {
            $(`.${clickedImage}`).hover(() => { // on over
                $(`.a, .c, .d, .e`).addClass('img.zoom')
            },
            () => { // on out
                $(`.a, .c, .d, .e`).animate({
                    opacity: 1
                })
            })
        }

        if (clickedImage === 'c') {
            $(`.${clickedImage}`).hover(() => { // on over
                $(`.a, .b, .d, .e`).animate({
                    opacity: 0.25
                })
            },
            () => { // on out
                $(`.a, .b, .d, .e`).animate({
                    opacity: 1
                })
            })
        }

        if (clickedImage === 'd') {
            $(`.${clickedImage}`).hover(() => { // on over
                $(`.a, .b, .c, .e`).animate({
                    opacity: 0.25
                })
            },
            () => { // on out
                $(`.a, .b, .c, .e`).animate({
                    opacity: 1
                })
            })
        }

        if (clickedImage === 'e') {
            $(`.${clickedImage}`).hover(() => { // on over
                $(`.a, .b, .c, .d`).animate({
                    opacity: 0.25
                })
            },
            () => { // on out
                $(`.a, .b, .c, .d`).animate({
                    opacity: 1
                })
            })
        }
    };
    
    render() {
        return (
            <div className="wrapper">
            <img onMouseEnter={() => {this.onMouseEnter("a")}} className="a"src="https://a0.muscache.com/im/pictures/8a542c1f-b897-4127-8426-6c8e1a4903b7.jpg?aki_policy=x_large"></img> 
            <img onMouseEnter={() => {this.onMouseEnter("b")}} className="b"src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"></img> 
            <img onMouseEnter={() => {this.onMouseEnter("c")}} className="c"src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"></img> 
            <img onMouseEnter={() => {this.onMouseEnter("d")}} className="d"src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"></img> 
            <img onMouseEnter={() => {this.onMouseEnter("e")}} className="e"src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"></img> 
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));

