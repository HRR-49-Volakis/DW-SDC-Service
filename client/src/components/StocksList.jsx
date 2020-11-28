import React from 'react';
import ReactDOM from 'react-dom';
class StocksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.select = this.select.bind(this);
  }
  select () {
    console.log(this.props.store);
    this.props.clicked(this.props.store);
  }
  render() {
    return (
      <div onClick={this.select} className={'stock list item'}>
        <div className={'stock individual info title'}>{this.props.store.name}</div>
        <div className={'stock individual description'}>{this.props.store.address}, {this.props.store.zipcode}</div>
        <div className={'stock individual description'}>Available Stock, {this.props.store.stock}</div>
      </div>
    );
  }
}
export default StocksList;