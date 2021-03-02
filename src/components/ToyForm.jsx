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
    console.log(this.state.name)
  }

  handleUrl = (event) => {
    this.setState({
      imageUrl: event.target.value
    })
    console.log(this.state.imageUrl)

  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form">
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
