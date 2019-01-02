import React from "react";

export default class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="image-ul">
        {this.props.imgUrls.map((url, index) => {
          return (
            <li className="image-li">
              <img onClick={(e) => this.props.updateCurrentImage(index)} id={index} className="image-li-images" src={url} />
            </li>
          );
        })}
      </ul>
    );
  }
}
