import React from 'react';
import ReactDOM from 'react-dom';
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
                <Images/>
                <LeftArrow/>
                <RightArrow/>
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));

