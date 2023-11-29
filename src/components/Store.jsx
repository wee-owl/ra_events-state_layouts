import React from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import products from '../products';
import '../App.css';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = { icon: "view_list" };
  }

  handleSwitch(icon) {
    this.setState({ icon: this.state.icon === "view_list" ? icon = "view_module" : icon = "view_list" });
  }

  render() {
    return (
      <div className='container'>
        <IconSwitch icon={this.state.icon} onSwitch={(e) => this.handleSwitch(e.target.value)}/>
        {
          this.state.icon === "view_list" ? <CardsView cards={products} /> : <ListView cards={products} />
        }
      </div>
    )
  }
}

export default Store;
