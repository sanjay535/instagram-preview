import React from "react";
import List from "./List";
import Preview from "./Preview";

class App extends React.Component {

  constructor(){
    super();
    this.state={
        listImages:[],
        loading:true,
        preview:{}
    }
  }

  async componentDidMount(){
    const listImages=await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json')
    .then(res=>res.json())
    .then(data=>data)
    .then(image=>image)
    .catch(err=>console.log(err));
    this.setState({
      listImages
    });

    console.log('this.state=',this.state);
  }

  onImageCardClick=(preview)=>{
    console.log(preview);
    this.setState({
      preview
    });
  }

  onClickLikes=(image)=>{
    console.log('Likes= ',image)
    const {listImages}=this.state;
    const index=listImages.indexOf(image);
    console.log('Likes= ',index);
    listImages[index].likes++;
    this.setState({
      listImages
    });

  }

  render(){
    const {listImages, preview}=this.state;
    return (
      <div className="container">
          <List images={listImages}
            onImageCardClick={this.onImageCardClick}
          />
          <Preview preview={preview}
           onClickLikes={this.onClickLikes}
          />
      </div>
    );
  }
}

export default App;
