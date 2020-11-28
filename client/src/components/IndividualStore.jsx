import React from 'react';
import ReactDOM from 'react-dom';
class IndividualStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={'stock list box'}>
        <div className={'stock individual box'}>
        <div className={'stock individual title'}>Low stock at {this.props.store.name}</div>
        <div className={'stock individual description'}>{this.props.store.stock} {this.props.product.name} is in stock at {this.props.store.name}</div>
        <button className={'stock individual return'}onClick={this.props.callback}>Check Another Ikea Store</button>
        </div>
        <div className={'stock individual box'}>
        <div className={'stock individual info title'}>Find it at {this.props.store.name}</div>
        <div className={'stock individual info title'}>{this.props.store.stock} x {this.props.product.name}</div>
        <div className={'stock individual info description'}>{this.props.product.description}</div>
        </div>
      </div>
    );
  }
}
//stock list item
export default IndividualStore;