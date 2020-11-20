import React from 'react';
import ReactDOM from 'react-dom';
class StocksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        {this.props.store.name}
        {this.props.store.zipcode}
        {this.props.store.address}
        {this.props.store.stock}
      </div>
    );
  }
}
export default StocksList;