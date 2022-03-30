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
                <p className="likes-para"><img className="like-icon" src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="likes"/><span className="value-likes">{likes}</span></p>
                <p className="time-para">{timestamp}</p>
              </div>
          </div>
      </div>
    );
  }
}

export default ImageCard;