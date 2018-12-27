import React from 'react';
import ReactDOM from 'react-dom';
import Grid from 'react-css-grid'
import axios from 'axios';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            photos: [],
            clickedImage: ''
        };
        // Bind methods here
    }
    // Write methods here   
    // Retrieve photos


    
    render () {
        return (
            <div className="wrapper">
            <img className="a"src="https://a0.muscache.com/im/pictures/8a542c1f-b897-4127-8426-6c8e1a4903b7.jpg?aki_policy=x_large"></img> 
            <img className="b"src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"></img> 
            <img className="c"src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"></img> 
            <img className="d"src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"></img> 
            <img className="e"src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"></img> 
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));

