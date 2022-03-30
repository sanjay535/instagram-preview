import React from "react";

class ImageCard extends React.Component {

  render(){
      const {image, onImageCardClick}=this.props;
      const {Image:url, likes, timestamp}=image;
    return (
      <div className="image-container"
        onClick={()=>onImageCardClick(image)}
      >
          <div>
              <img className="image" src={url} alt="insta"/>
              <div className="ld">
                <p><span>Likes:</span>{likes}</p>
                <p><span>Date:</span>{timestamp}</p>
              </div>
          </div>
      </div>
    );
  }
}

export default ImageCard;