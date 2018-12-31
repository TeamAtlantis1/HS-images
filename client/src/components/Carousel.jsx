import React from "react";
import ImageSlide from "./ImageSlide.jsx";
import Arrow from "./Arrow.jsx";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      imgUrls: [
        "https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/8a542c1f-b897-4127-8426-6c8e1a4903b7.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/8a542c1f-b897-4127-8426-6c8e1a4903b7.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/14d7ab26-5373-4039-9c42-aa0d0874ad6b.jpg?aki_policy=x_large"
      ]
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount (props) {
      console.log('IM THE CLICKED IMAGEEEEEEEEEE', this.props.clickedImage);
      this.setState({
          currentImageIndex: this.props.clickedImage
      })
  }

  previousSlide () {
    console.log('I clicked the left button>>>>>>>>>');
    const lastIndex = this.state.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex--;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    console.log('I clicked the right button>>>>>>>>>');
    const lastIndex = this.state.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex++;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div>
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />

        <ImageSlide url={this.state.imgUrls[this.state.currentImageIndex]} />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}
