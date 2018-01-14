import React from 'react';

import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Penny from './Penny';
import WBNP from './WBNP';

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
      sdfghjhgfdfghjkjhgfdfghjkljhgfd
      <Link to="/penny">Penny</Link>{" "}
      
      <Link to="/wbnp">Whole Brand New Page</Link>
      <Route path="/penny" component={Penny} />
      <Route path="/wbnp" component={WBNP} />
      </div>
    )
  }
}



render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
