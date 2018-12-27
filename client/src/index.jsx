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
            <div>
            <div>Hi</div>   
            <Images/>
            <LeftArrow/>
            <RightArrow/>
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));

