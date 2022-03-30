import React from "react";

class Preview extends React.Component {
  render(){
      const {preview, onClickLikes}=this.props;
      console.log('preview=',preview);
    if(!preview.Image)
    return (
        <div className="no-preview">
           
            <p>No Preview Available.</p>
            <p>Click on any image to see preview</p>
            
        </div>
    )  
    return (
      <div className="preview-container">
          <img className="preview-image" src={preview.Image} alt="preview"/>
          <div>
            <button className="btn"
            onClick={()=>onClickLikes(preview)}
            >Likes</button>
          </div>
      </div>
    );
  }
}

export default Preview;