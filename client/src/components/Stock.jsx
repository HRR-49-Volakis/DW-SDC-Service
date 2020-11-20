import React from 'react';
import ReactDOM from 'react-dom';
import StocksList from './StocksList.jsx';
class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: 'drawer open'
    };
    this.closeTab = this.closeTab.bind(this);
    this.openTab = this.openTab.bind(this);
  }
  closeTab () {
    this.setState({drawer: 'drawer'});
  }
  openTab () {
    this.setState({drawer: 'drawer open'});
  }
  render() {
    return (
      <div className ={"stock_zip box"}>
        <div className={"stock_zip box zip"}>Put Box Here</div>
        <div className={"stock_zip box stock"} onClick={this.openTab}>Create on Click function</div>
        <div className={this.state.drawer}>
          <div className={'exit'}>
            <div className={'exit button'} onClick={this.closeTab}>X</div>
          </div>
          <div className={'search'}>
          Find and pick up at your local IKEA store
          <form className={'search form'}>
          <input type='text'/>
          </form>
          </div>
          {console.log(this.props.stores)}
          <div>
          {this.props.stores.map (store =>
          <StocksList store={store}/>)}
          </div>
        </div>
      </div>
    );
  }
}
export default Stock;