import React from "react";
import Arrow from "./Arrow.jsx";

export default class ImageSlide extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

// const ImageSlide = ({ url }) => {
// const styles = {
//   backgroundImage: `url(${url})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center"
// };

  render () {
    return (
      <div className="image-slide">
        <Arrow
          direction="left"
          clickFunction={() => this.props.previousSlide()}
          glyph="&#9664;"
        />
        <img className="current-pic" src={this.props.url} />
        <Arrow
          direction="right"
          clickFunction={() => this.props.nextSlide()}
          glyph="&#9654;"
        />  
      </div>
    );
  }
};
