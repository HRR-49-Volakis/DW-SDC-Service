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
const port = '/api/Bag/';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product:{},
      stores:[],
    };
    this.getProduct();
    this.getStores();
  }
  getProduct() {
    var id = 8;
    var self = this;
    axios.get(port + 'product', {
      headers: {
        id: id
      }
    }).then(function(data) {
      console.log(data.data[0]);
      self.setState({product: data.data[0]});
    }).catch(function(err) {
      console.log(err);
    });
    this.setState({product: self});
  }
  getStore() {
    var zip = '11211';
    axios.get(port + 'store', {
      headers: {
        zip: zip
      }
    }).then(function(data) {
      console.log(data);
    }).catch(function(err) {
      console.log(err);
    });
  }
  getStores() {
    self=this;
    axios.get(port + 'stores')
    .then(function(data) {
      console.log(data);
      self.setState({stores: data.data});
    }).catch(function(err) {
      console.log(err);
    });
  }
  render() {
    return (
        <div className={'menu'}>
          <Product data={this.state.product}/>
          <AddToBag product={this.state.product}/>
          <Stock stores={this.state.stores} product={this.state.product}/>
        </div>
    );
}
}
// <div className={"backdrop"}></div>
//<div className = {'drawer open'}>Hello</div>
export default App;