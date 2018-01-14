import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const divStyles = {
  backgroundColor: 'magenta',
  color: 'goldenrod',
}

const styleS = {
  
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
  <div style= {styleS}>
  <h3>Welcome</h3>
  <p>
 Mad Libs was invented in 1953 by Leonard Stern and Roger Price. Stern and Price co-created the game, but couldn't agree on a name for their invention. No name was chosen until five years later (1958), when Stern and Price were eating Eggs Benedict at a restaurant in New York City.
  </p>
  
  </div>
)

//style={divStylesOFF}

  // < Link style= { black } to= "/penny/nickle" > Nickle</Link>{ " "}
  //   < Link style= { green } to= "/penny/dime" > Dime</Link>{ " "}
  //     < Link style= { silver } to= "/penny/quarter" hi= "AJ" > Quarter</Link>
  //       <Switch>
  //         <Route path="/penny/nickle">
  //           <Nickle hi="JOHN" />
  //         </Route>
  //         <Route path="/penny/dime" render={Dime} />
  //         <Route path="/penny/quarter" render={Quarter} />
  //       </Switch>
export default Penny;