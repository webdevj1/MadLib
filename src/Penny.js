import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const divStyles = {
  backgroundColor: 'magenta',
  color: 'goldenrod',
}
const green = { color: 'green' };
const black = { color: 'black' };
const silver = { color: 'silver' };

const quarterIsSpecial = { backgroundColor: 'black', color: 'white', };

const Nickle = ({ hi }) => (
  <div>
  <h1>NICKLE</h1>
  <h3>{hi}</h3>
  <p>A nickle is worth five pennies.</p>
  </div>
)
const Dime = () => (
  <div>
    <h1>DIME</h1>
    <p>A dime is worth ten pennies.</p>
  </div>
)
const Quarter = props => (
  <div style={quarterIsSpecial}>
    <h1>QUARTER</h1>
    <h3>{props.hi}</h3>
    <p>A quarter is worth twenty five pennies.</p>
  </div>
)
const Penny = () => (
  <div style={divStyles}>
  <h3>Penny Thing</h3>
  <p>Penny is a kind of coin but there are other kinds of coins.</p>
  <Link style={black} to="/penny/nickle">Nickle</Link>{" "}
  <Link style={green} to="/penny/dime">Dime</Link>{" "}
  <Link style={silver} to="/penny/quarter" hi="AJ">Quarter</Link>
  <Switch>
  <Route path="/penny/nickle">
  <Nickle hi="JOHN" />
  </Route>
  <Route path="/penny/dime" render={Dime} />
  <Route path="/penny/quarter" render={Quarter} />
  </Switch>
  </div>
)

export default Penny;