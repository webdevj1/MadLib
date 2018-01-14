import React from 'react';

const myWay = {
  backgroundColor: 'blue',
  color:'white',
  width: 100+'vw',
  height: 100+'vh',
}
const WBNP = () => (
  <div style={myWay}>
    <h1>Build MadLib</h1>
    
    Noun:{" "}<input type='text'/>
    <br />
    Noun:{" "}<input type='text' />
    <br />
    Noun:{" "}<input type='text' />
    <br />
    Verb: {" "}<input type='text' />
    <br />
    Noun:{" "}<input type='text' />
    <br />
    
    <button>Build Madlib</button>
  </div>
)

export default WBNP;