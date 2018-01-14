import React from 'react';
import {Switch,Route} from 'react-router-dom';
// import axios from 'axios';

const WalkingDead = ({click, noun, verb,adj, name}) =>(
  <div>
    <h1>Walking Dead Madlib</h1>
    <p>Rick and the group was {verb} away from these {noun} and they came across some {verb} that would help {verb} the walkers.</p><br/>
    <p>When {name} saw the piece of {adj}{" "}{verb} they swung the {noun} with {verb} and the walkers started to {verb}</p>
    <button onClick={click}>Generate</button>
  </div>
)

class WBNP2 extends React.Component{
  constructor(){
    super()
    this.noun=['idoit', 'toaster', 'kitty', 'friendly grandma', 'dog poop', 'dragon', 'zombies']
    this.verb=['fire', 'tire','lie','oil','sprout','jabber','wrestle','hear']
    this.adj=['eager','idolized','nutritious','splendid','feline','infantile','mild']
    this.name=['Takisha','Rosalina','Lyman','Jackie','Shad','Sandi','Clarissa']
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