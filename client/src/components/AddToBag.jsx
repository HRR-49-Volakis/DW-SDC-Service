import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
class AddToBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className ={"addToBag box"}>
      <div className= {'addToBag button'}>Add To Bag</div>
      <div className= {'addToBag heart'}>heart</div>
      </div>
    );
  }
}
export default AddToBag;