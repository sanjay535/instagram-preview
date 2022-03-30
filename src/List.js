import React from "react";
import ImageCard from "./ImageCard";

class List extends React.Component {

  render(){
      const {images, onImageCardClick}=this.props;
      console.log("this.props=",this.props.images);
    return (
      <div className="List">
          {
              images.map((image, i)=>{
                  return  <ImageCard
                            onImageCardClick={onImageCardClick} 
                            image={image}
                            key={i}
                          />
              })
          }
      </div>
    );
  }
}

export default List;