import React, { Component } from 'react';

class ToyForm extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      imageUrl: "",
    }
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleUrl = (event) => {
    this.setState({
      imageUrl: event.target.value
    })
  }

  onToySubmit = (e) => {
    e.preventDefault()

    const newToy = {
      name: this.state.name,
      image: this.state.imageUrl,
      likes: 0
    }
    // console.log(JSON.stringify(newToy))

    const reqObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newToy)
    }

    fetch('http://localhost:3000/toys', reqObj)
    .then(resp => resp.json())
    .then(toy => {
      this.props.addToy(toy)
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onToySubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.handleName} value={this.state.name} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.handleUrl} value={this.state.imageUrl} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
