import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Carousel from "./components/Carousel.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      clicked: false,
      clickedImage: ''
    };
    // Bind methods here
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // Write methods here
  // Retrieve photos?

  componentDidMount() {
    // Axios request to get all images by listing ID #
  }

  handleClick(e) {
    console.log('What was clicked? >>>>>>>>>>>', e.target.id);
    let image = e.target.id;
    this.setState({
      clicked: true,
      clickedImage: image
    })
  }

  onMouseEnter(hoveredImage) {
    // console.log("onHover has run on >>>>>>>", clickedImage);

    if (hoveredImage === "a") {
      $(`.${hoveredImage}`).hover(
        () => {
          // on over
          $(`.b, .c, .d, .e`).animate({
            opacity: 0.25,
          });
        },
        () => {
          // on out
          $(`.b, .c, .d, .e`).animate({
            opacity: 1
          });
        }
      );
    }

    if (hoveredImage === "b") {
      $(`.${hoveredImage}`).hover(
        () => {
          // on over
          $(`.a, .c, .d, .e`).addClass("img.zoom");
        },
        () => {
          // on out
          $(`.a, .c, .d, .e`).animate({
            opacity: 1
          });
        }
      );
    }

    if (hoveredImage === "c") {
      $(`.${hoveredImage}`).hover(
        () => {
          // on over
          $(`.a, .b, .d, .e`).animate({
            opacity: 0.25
          });
        },
        () => {
          // on out
          $(`.a, .b, .d, .e`).animate({
            opacity: 1
          });
        }
      );
    }

    if (hoveredImage === "d") {
      $(`.${hoveredImage}`).hover(
        () => {
          // on over
          $(`.a, .b, .c, .e`).animate({
            opacity: 0.25
          });
        },
        () => {
          // on out
          $(`.a, .b, .c, .e`).animate({
            opacity: 1
          });
        }
      );
    }

    if (hoveredImage === "e") {
      $(`.${hoveredImage}`).hover(
        () => {
          // on over
          $(`.a, .b, .c, .d`).animate({
            opacity: 0.25
          });
        },
        () => {
          // on out
          $(`.a, .b, .c, .d`).animate({
            opacity: 1
          });
        }
      );
    }
  }

  render() {
    if (this.state.clicked === false) {
      return (
        <main>
          <div className="wrapper">
            <img
              onMouseEnter={() => {
                this.onMouseEnter("a");
              }}
              onClick ={(e) => this.handleClick(e)}
              clickedImage = {this.state.clickedImage}
              className="a"
              id="0"
              src="https://a0.muscache.com/im/pictures/8a542c1f-b897-4127-8426-6c8e1a4903b7.jpg?aki_policy=x_large"
            />
            <img
              onMouseEnter={() => {
                this.onMouseEnter("b");
              }}
              onClick ={this.handleClick}
              className="b"
              id="1"
              src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"
            />
            <img
              onMouseEnter={() => {
                this.onMouseEnter("c");
              }}
              onClick ={this.handleClick}
              className="c"
              id="2"
              src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"
            />
            <img
              onMouseEnter={() => {
                this.onMouseEnter("d");
              }}
              onClick ={this.handleClick}
              className="d"
              id="3"
              src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"
            />
            <img
              onMouseEnter={() => {
                this.onMouseEnter("e");
              }}
              onClick ={this.handleClick}
              className="e"
              id="4"
              src="https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"
            />
          </div>
        </main>
      );
    }

  if (this.state.clicked === true) {
    return <Carousel clickedImage = {this.state.clickedImage}></Carousel>
  }

;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
