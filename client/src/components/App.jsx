import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Product from './Product.jsx';
import AddToBag from './AddToBag.jsx';
import Stock from './Stock.jsx';
import Reviews from './Reviews.jsx';
import '../styles/App.css';
//import '../App.css';
//const styles = require('../App.css').toString();
const port = 'http://localhost:3000/';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getProduct() {
    var name = 'Fish';
    axios.get(port + 'product', {
      headers: {
        name: name
      }
    }).then(function(data) {
      console.log(data);
    }).catch(function(err) {
      console.log(err);
    });
  }
  getStore() {
    var name = 'Avon';
    axios.get(port + 'stores', {
      headers: {
        name: name
      }
    }).then(function(data) {
      console.log(data);
    }).catch(function(err) {
      console.log(err);
    });
  }
  render() {
    return (
      <div className={'menu'}>
        <AddToBag/>
        hello
      </div>
    );
  }
}
export default App;