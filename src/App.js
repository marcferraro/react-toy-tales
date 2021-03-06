import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addToy = (toy) => {
    const newArray = [toy, ...this.state.toys]
    this.setState({
      toys: newArray
    })
  }

  donateToy = (id) => {
    const newArray = this.state.toys.filter(toy => toy.id !== id)

    this.setState({
      toys: newArray
    })
  }

  likeToy = (id) => {
    const newArray = this.state.toys.map(toy => {
      if (toy.id === id){
        toy.likes += 1
        return toy
      } else {
        return toy
      }
    })

    this.setState({
      toys: newArray
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} donateToy={this.donateToy} likeToy={this.likeToy}/>
      </>
    );
  }

  componentDidMount(){
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toys => {
      this.setState({
        toys: toys
      })
    })
  }

}

export default App;
