import React from "react";

export default class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="image-ul">
        {this.props.imgUrls.map(url => {
          return (
            <li className="image-li">
              <img className="image-li-images" src={url} />
            </li>
          );
        })}
      </ul>
    );
  }
}
