import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = () => {
    const id = this.props.toy.id
    fetch(`http://localhost:3000/toys/${id}`, {method: "DELETE"})
    .then(resp => resp.json())
    .then(toy => this.props.donateToy(id))
  }

  handleLike = (toy) => {
    const likeObj = {
      likes: toy.likes + 1
    }

    const reqObj = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(likeObj)
    }

    fetch(`http://localhost:3000/toys/${toy.id}`, reqObj)
    .then(resp => resp.json())
    .then(toy => this.props.likeToy(toy.id))
  }


  render() {
    const { toy } = this.props
    return (
      <div className="card">
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button onClick={() => this.handleLike(toy)} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
