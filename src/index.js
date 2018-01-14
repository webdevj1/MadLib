import React from 'react';

import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Penny from './Penny';
import WBNP from './WBNP';
import WBNP2 from './tvshows';

const styles = {
  textDecoration: 'underline',
  textAlign: 'center',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateVarSoCool: 55
    };
  }
  render() {
    return (
      <div>
      
        <Link to="/penny">Home</Link>{" "}{" "}
        <Link to="/wbnp"> Random MadLib</Link>{" "}
      <Link to="/wbnp2"> Tv Show MadLib</Link>{" "}
      <Route path="/penny" component={Penny} />
      <Route path="/wbnp" component={WBNP} />
      <Route path="/wbnp2" component={WBNP2} />
      </div>
    )
  }
  
}
//test


render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
