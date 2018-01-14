import React from 'react';
import {Switch,Route} from 'react-router-dom';
// import axios from 'axios';

const WalkingDead = ({click, noun, verb,adj, name}) =>(
  <div>
    <h1>Walking Dead Madlib</h1>
    <p>Rick and the group was running away from these {noun}s and they came across some {verb} that would help kill the walkers.</p><br/>
    <p>When {name} saw the piece of {adj}{" "}{noun} they swung the {noun} with {verb} and the walkers started to {verb}.</p>

    <h1>Game of Thrones Madlib</h1>
    <p>The mother of {noun} was on her way to Westeros when she saw {adj}{" "}{name}. They discussed ways of ending {name}'s reign</p>
    <button onClick={click}>Generate</button>
const myWay = {
  backgroundColor: 'blue',
  width: 100 + 'vw',
  height: 100 + 'vh',
}
const WBNP2 = () => (
  <div style={myWay}>
    <h1>TV Shows MadLib</h1>
  </div>
)

class WBNP2 extends React.Component{
  constructor(){
    super()
    this.noun=['crowbar', 'bat', 'kitty', 'friendly grandma', 'dog poop', 'chiwawa', 'zombies']
    this.verb=['fire', 'tire','ran','crossbows','sprout','jabber','wrestle','hid']
    this.adj=['eager','idolized','nutritious','splendid','feline','infantile','mild']
    this.name=['I.P. Freely','Joe Shmoe','Amanda Hugnkiss','Frodo','Santa Paws','Waldo','Jabba']
    this.state={
      randomNoun: "___",
      randomVerb: "___",
      randomAdj: "___",
      randomName: "___"
    }
  }
  // componentDidMount(){
  //   this.getWord()
  // }
  // getWord = () =>{
  //   axios
  //   .get('http://15.codyhess.com:9998/noun')
  //   .then(res =>{
  //     this.setState({
  //       inputNoun:res.data.word
  //     })
  //   })
  // }
  handleClick = (e) =>{
    this.setState({
      randomNoun: this.noun[Math.floor(Math.random() * this.noun.length)],
      randomVerb: this.verb[Math.floor(Math.random() * this.verb.length)],
      randomAdj: this.adj[Math.floor(Math.random() * this.adj.length)],
      randomName: this.name[Math.floor(Math.random() * this.name.length)]
    })
  }
  renderWBNP2 = () =>{
    return(
      <WalkingDead click={this.handleClick} 
      noun={this.state.randomNoun}
      verb={this.state.randomVerb}
      adj={this.state.randomAdj}
      name={this.state.randomName}/>
    )
  }

  render(){
    return(
      <Switch>
        <Route exact path="/wbnp2" render={this.renderWBNP2}/>
      </Switch>
    )
  }
}

export default WBNP2;